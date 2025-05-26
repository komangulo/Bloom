const express = require('express');
const Stripe = require('stripe');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const stripe = new Stripe('TU_STRIPE_SECRET_KEY', { apiVersion: '2022-11-15' });
const supabase = createClient('https://rvoepdulbarascqpwpbh.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2b2VwZHVsYmFyYXNjcXB3cGJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTQzMjExMywiZXhwIjoyMDYxMDA4MTEzfQ.2mye99XjnVbiuGWsaedS3Ho1bULkD_yJ5KpFUU6vNbs');

app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, 'TU_STRIPE_WEBHOOK_SECRET');
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed' || event.type === 'customer.subscription.updated') {
    const session = event.data.object;
    const email = session.customer_email || session.customer_details?.email;
    const stripeCustomerId = session.customer || session.customer_id;
    const subscriptionStart = session.current_period_start ? new Date(session.current_period_start * 1000).toISOString() : null;
    const subscriptionEnd = session.current_period_end ? new Date(session.current_period_end * 1000).toISOString() : null;

    await supabase
      .from('subscribers')
      .upsert({
        email,
        stripe_customer_id: stripeCustomerId,
        subscription_tier: 'premium',
        subscription_start: subscriptionStart,
        subscription_end: subscriptionEnd,
        subscribed: true,
        updated_at: new Date().toISOString()
      }, { onConflict: ['email'] });
  }

  res.json({ received: true });
});

app.listen(3000, () => console.log('Webhook server running on port 3000')); 