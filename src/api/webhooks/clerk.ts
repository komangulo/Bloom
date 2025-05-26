import { createClient } from '@supabase/supabase-js';
import express from 'express';
import { Webhook } from 'svix';
import { WebhookEvent } from '@clerk/clerk-sdk-node';

const router = express.Router();

const supabaseAdmin = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

router.post('/clerk', async (req, res) => {
  const WEBHOOK_SECRET = import.meta.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET to your environment variables');
  }

  // Get the headers
  const svix_id = req.headers["svix-id"] as string;
  const svix_timestamp = req.headers["svix-timestamp"] as string;
  const svix_signature = req.headers["svix-signature"] as string;

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ error: 'Missing webhook headers' });
  }

  // Create a new Webhook instance with your secret
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent;

  try {
    // Verify the webhook payload
    evt = wh.verify(JSON.stringify(req.body), {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return res.status(400).json({ error: 'Invalid webhook payload' });
  }

  const { type, data: user } = evt;

  switch (type) {
    case 'user.created':
    case 'user.updated':
      // Crear o actualizar usuario en Supabase Auth
      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email: user.email_addresses[0].email_address,
        email_verified: user.email_addresses[0].verified,
        password: crypto.randomUUID(), // Contraseña aleatoria ya que usaremos Clerk para auth
        user_metadata: {
          clerk_user_id: user.id,
          first_name: user.first_name,
          last_name: user.last_name
        }
      });

      if (error) {
        console.error('Error syncing user to Supabase:', error);
        return res.status(400).json({ error: error.message });
      }
      break;

    case 'user.deleted':
      // Eliminar usuario de Supabase Auth
      const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
        user.id
      );

      if (deleteError) {
        console.error('Error deleting user from Supabase:', deleteError);
        return res.status(400).json({ error: deleteError.message });
      }
      break;

    default:
      console.log(`Unhandled webhook type: ${type}`);
  }

  return res.status(200).json({ message: 'Webhook processed successfully' });
});

export default router; 