import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export default async function handler(req: any, res: any) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }

  // Get the headers
  const svix_id = req.headers["svix-id"];
  const svix_timestamp = req.headers["svix-timestamp"];
  const svix_signature = req.headers["svix-signature"];

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return res.status(400).json({ error: 'Missing webhook headers' });
  }

  const payload = req.body;
  const body = JSON.stringify(payload);

  // Handle the webhook
  const { type, data: user } = payload;

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
} 