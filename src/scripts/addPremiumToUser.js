const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://rvoepdulbarascqpwpbh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2b2VwZHVsYmFyYXNjcXB3cGJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTQzMjExMywiZXhwIjoyMDYxMDA4MTEzfQ.2mye99XjnVbiuGWsaedS3Ho1bULkD_yJ5KpFUU6vNbs'
);

async function addPremium() {
  const email = 'th.eo.ba.l.d2.79.8@gmail.com';
  const now = new Date();
  const oneYearLater = new Date(now);
  oneYearLater.setFullYear(now.getFullYear() + 1);

  const { error } = await supabase
    .from('subscribers')
    .upsert({
      email,
      subscription_tier: 'premium',
      subscription_start: now.toISOString(),
      subscription_end: oneYearLater.toISOString(),
      subscribed: true,
      updated_at: now.toISOString()
    }, { onConflict: ['email'] });

  if (error) {
    console.error('Error updating user:', error);
  } else {
    console.log('Usuario actualizado a premium correctamente.');
  }
}

addPremium(); 