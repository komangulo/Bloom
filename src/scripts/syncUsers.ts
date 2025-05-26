import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { webcrypto } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../../../.env') });

const CLERK_API_KEY = process.env.VITE_CLERK_SECRET_KEY;
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY;

if (!CLERK_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing environment variables');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function getClerkUsers() {
  const response = await fetch('https://api.clerk.com/v1/users', {
    headers: {
      'Authorization': `Bearer ${CLERK_API_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching Clerk users: ${response.statusText}`);
  }

  return response.json();
}

async function syncUserToSupabase(clerkUser: any) {
  const email = clerkUser.email_addresses?.[0]?.email_address;
  if (!email) {
    console.log(`Skipping user ${clerkUser.id} - no email address`);
    return;
  }

  try {
    // 1. Crear/Actualizar en auth.users
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email: email,
      email_verified: clerkUser.email_addresses[0].verified,
      password: webcrypto.randomUUID(), // Contraseña aleatoria ya que usamos Clerk
      user_metadata: {
        clerk_user_id: clerkUser.id,
        first_name: clerkUser.first_name,
        last_name: clerkUser.last_name
      }
    });

    if (authError) {
      if (authError.message.includes('already exists')) {
        console.log(`User ${email} already exists in Supabase Auth`);
      } else {
        console.error(`Error creating auth user for ${email}:`, authError);
        return;
      }
    }

    // 2. Crear/Actualizar en subscribers
    const { error: subscriberError } = await supabase
      .from('subscribers')
      .upsert({
        user_id: authUser?.id || clerkUser.id,
        email: email,
        subscribed: false, // Por defecto no es premium
        created_at: new Date(clerkUser.created_at).toISOString()
      });

    if (subscriberError) {
      console.error(`Error creating subscriber for ${email}:`, subscriberError);
      return;
    }

    console.log(`Successfully synced user ${email}`);
  } catch (error) {
    console.error(`Error syncing user ${email}:`, error);
  }
}

async function syncAllUsers() {
  try {
    console.log('Starting user sync...');
    const clerkUsers = await getClerkUsers();
    
    console.log(`Found ${clerkUsers.length} users in Clerk`);
    
    for (const user of clerkUsers) {
      await syncUserToSupabase(user);
    }
    
    console.log('Sync completed!');
  } catch (error) {
    console.error('Error during sync:', error);
  }
}

// Ejecutar la sincronización
syncAllUsers(); 