import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://rvoepdulbarascqpwpbh.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2b2VwZHVsYmFyYXNjcXB3cGJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTQzMjExMywiZXhwIjoyMDYxMDA4MTEzfQ.2mye99XjnVbiuGWsaedS3Ho1bULkD_yJ5KpFUU6vNbs";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function syncSubscriptions() {
  try {
    console.log('Starting subscription sync...');

    // Get all subscribers
    const { data: subscribers, error: fetchError } = await supabase
      .from('subscribers')
      .select('*');

    if (fetchError) {
      throw fetchError;
    }

    console.log(`Found ${subscribers.length} subscribers to process`);

    let successCount = 0;
    let errorCount = 0;

    for (const subscriber of subscribers) {
      try {
        // Aquí puedes añadir tu lógica personalizada para determinar si un usuario debe ser premium
        // Por ejemplo, basado en pagos, tiempo de uso, etc.
        const shouldBePremium = checkIfShouldBePremium(subscriber);

        if (subscriber.subscription_tier !== shouldBePremium ? 'premium' : 'free') {
          const { error: updateError } = await supabase
            .from('subscribers')
            .update({ 
              subscription_tier: shouldBePremium ? 'premium' : 'free',
              updated_at: new Date().toISOString()
            })
            .eq('id', subscriber.id);

          if (updateError) {
            throw updateError;
          }

          console.log(`Updated subscription for ${subscriber.email} to ${shouldBePremium ? 'premium' : 'free'}`);
          successCount++;
        }
      } catch (error) {
        console.error(`Error processing subscriber ${subscriber.email}:`, error);
        errorCount++;
      }
    }

    console.log('\nSync completed:');
    console.log(`Successfully processed: ${successCount} subscribers`);
    console.log(`Errors encountered: ${errorCount} subscribers`);

  } catch (error) {
    console.error('Fatal error during sync:', error);
  }
}

// Esta función determina si un usuario debe ser premium
// Aquí puedes implementar tu lógica personalizada
function checkIfShouldBePremium(subscriber) {
  // Por ejemplo, podrías verificar:
  // - Si el usuario ha pagado
  // - Si está en período de prueba
  // - Si cumple ciertos criterios
  
  // Por ahora, mantenemos el estado actual
  return subscriber.subscription_tier === 'premium';
}

// Ejecutar la sincronización
syncSubscriptions(); 