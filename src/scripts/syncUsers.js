import { createClient } from '@supabase/supabase-js';
import { webcrypto } from 'crypto';

const CLERK_API_KEY = "sk_test_VS3rlqW6G4pXUwdIwLzhdKIUbtvrydPdB2HEk4ld9W";
const SUPABASE_URL = "https://rvoepdulbarascqpwpbh.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2b2VwZHVsYmFyYXNjcXB3cGJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTQzMjExMywiZXhwIjoyMDYxMDA4MTEzfQ.2mye99XjnVbiuGWsaedS3Ho1bULkD_yJ5KpFUU6vNbs";

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

async function findOrCreateSupabaseUser(email, password) {
  try {
    // First try to get the user by email
    const { data: existingUsers, error: searchError } = await supabase
      .from('users')
      .select('id, email')
      .eq('email', email)
      .single();

    if (searchError) {
      console.error('Error searching for user:', searchError);
      return null;
    }

    if (existingUsers) {
      // User exists, try to update their metadata
      const { error: updateError } = await supabase.auth.admin.updateUserById(
        existingUsers.id,
        {
          user_metadata: {
            webpage: 'bloom-empower',
            subscription: false
          }
        }
      );

      if (updateError) {
        console.error('Error updating user metadata:', updateError);
      }
      
      return existingUsers.id;
    }

    // User doesn't exist, create new one with metadata
    const { data: { user }, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        webpage: 'bloom-empower',
        subscription: false
      }
    });

    if (error) throw error;
    return user.id;

  } catch (error) {
    console.error('Error in findOrCreateSupabaseUser:', error);
    return null;
  }
}

async function syncUserToSupabase(clerkUser) {
  const email = clerkUser.email_addresses?.[0]?.email_address;
  if (!email) {
    console.log(`Skipping user ${clerkUser.id} - no email address`);
    return;
  }

  try {
    // Obtener o crear el usuario en Supabase
    const supabaseUserId = await findOrCreateSupabaseUser(email, webcrypto.randomUUID());

    // Actualizar en subscribers
    const { error: subscriberError } = await supabase
      .from('subscribers')
      .upsert({
        user_id: supabaseUserId,
        email: email,
        subscribed: false,
        created_at: new Date(clerkUser.created_at).toISOString(),
        stripe_customer_id: null,
        webpage: 'bloom-empower',
        subscription: false
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
    console.log('Starting user synchronization...');
    
    // Get all users from Clerk
    const users = await getClerkUsers();
    console.log(`Found ${users.length} users in Clerk`);
    
    let successCount = 0;
    let errorCount = 0;
    
    for (const user of users) {
      try {
        const email = user.email_addresses?.[0]?.email_address;
        if (!email) {
          console.log(`Skipping user ${user.id} - no email address found`);
          continue;
        }

        console.log(`Processing user: ${email}`);
        
        // Generate a random password for new users
        const password = webcrypto.randomUUID();
        
        // Get or create Supabase user
        const supabaseUserId = await findOrCreateSupabaseUser(email, password);
        
        if (!supabaseUserId) {
          console.error(`Failed to process user ${email}`);
          errorCount++;
          continue;
        }

        // Update subscribers table
        const { error: updateError } = await supabase
          .from('subscribers')
          .upsert({
            id: supabaseUserId,
            email: email,
            clerk_user_id: user.id,
            webpage: 'bloom-empower', // Default webpage value
            subscription: false // Default subscription status
          });

        if (updateError) {
          console.error(`Error updating subscribers for ${email}:`, updateError);
          errorCount++;
          continue;
        }

        console.log(`Successfully processed user: ${email}`);
        successCount++;

      } catch (error) {
        console.error(`Error processing user:`, error);
        errorCount++;
      }
    }

    console.log('\nSync completed:');
    console.log(`Successfully processed: ${successCount} users`);
    console.log(`Errors encountered: ${errorCount} users`);

  } catch (error) {
    console.error('Fatal error:', error);
  } finally {
    process.exit(0);
  }
}

async function syncExistingUsersToSubscribers() {
  try {
    console.log('Starting sync of existing users to subscribers table...');
    
    // Get users from Clerk
    const users = await getClerkUsers();
    console.log(`Found ${users.length} users to sync`);
    
    let successCount = 0;
    let errorCount = 0;

    for (const user of users) {
      try {
        const email = user.email_addresses?.[0]?.email_address;
        if (!email) {
          console.log(`Skipping user ${user.id} - no email address`);
          continue;
        }

        // Insert into subscribers table
        const { error: subscriberError } = await supabase
          .from('subscribers')
          .upsert({
            email: email,
            webpage: 'bloom-empower',
            subscription_tier: 'free',
            created_at: new Date().toISOString()
          });

        if (subscriberError) {
          console.error(`Error creating subscriber for ${email}:`, subscriberError);
          errorCount++;
          continue;
        }

        console.log(`Successfully synced user ${email} to subscribers`);
        successCount++;

      } catch (error) {
        console.error(`Error processing user:`, error);
        errorCount++;
      }
    }

    console.log('\nExisting users sync completed:');
    console.log(`Successfully processed: ${successCount} users`);
    console.log(`Errors encountered: ${errorCount} users`);

  } catch (error) {
    console.error('Fatal error during existing users sync:', error);
  }
}

// Modificar la función principal para solo sincronizar desde Clerk
async function main() {
  try {
    // Sincronizar usuarios de Clerk a subscribers
    await syncExistingUsersToSubscribers();
  } catch (error) {
    console.error('Fatal error:', error);
  } finally {
    process.exit(0);
  }
}

// Ejecutar el script
main(); 