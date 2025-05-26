import { createClient } from '@supabase/supabase-js';

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

async function syncClerkToSubscribers() {
  try {
    console.log('Fetching users from Clerk...');
    const users = await getClerkUsers();
    console.log(`Found ${users.length} users in Clerk.`);

    let successCount = 0;
    let errorCount = 0;

    for (const user of users) {
      const email = user.email_addresses?.[0]?.email_address;
      if (!email) {
        console.log(`Skipping user ${user.id} - no email address`);
        continue;
      }
      try {
        const { error } = await supabase
          .from('subscribers')
          .upsert({
            email: email,
            subscription_tier: 'free',
            webpage: 'bloom-empower',
            created_at: new Date(user.created_at).toISOString()
          }, { onConflict: ['email'] });
        if (error) {
          throw error;
        }
        console.log(`Synced user: ${email}`);
        successCount++;
      } catch (err) {
        console.error(`Error syncing user ${email}:`, err);
        errorCount++;
      }
    }
    console.log(`\nSync completed. Success: ${successCount}, Errors: ${errorCount}`);
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

syncClerkToSubscribers(); 