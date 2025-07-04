import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

// Declaración global para permitir el uso de <stripe-buy-button> en TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}

const Premium = () => {
  const [freeTrial, setFreeTrial] = useState(false);
  useEffect(() => {
    // Cargar el script de Stripe solo si no está presente
    if (!document.querySelector('script[src="https://js.stripe.com/v3/buy-button.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Banner deslizable para activar prueba gratis */}
      <div className="flex items-center justify-center mb-8 gap-4 bg-bloom-50 dark:bg-bloom-900/10 rounded-lg p-4">
        <span className="font-semibold text-lg">Try 14 days free</span>
        <Switch checked={freeTrial} onCheckedChange={setFreeTrial} />
        <span className="text-gray-500 text-sm">Requires credit card</span>
      </div>
      {freeTrial && (
        <div className="flex flex-col items-center mb-8">
          <p className="mb-2 text-green-700 font-medium">Activate your 14-day free trial. You will not be charged until the trial ends.</p>
          <div className="w-full flex justify-center">
            <script async src="https://js.stripe.com/v3/buy-button.js"></script>
            <stripe-buy-button
              buy-button-id="buy_btn_1RJdSsG00wk3P9SCuOqQm1iF"
              publishable-key="pk_live_51R8Ra8G00wk3P9SC1w03cKVss1csqUGbp2i51uh6KBYRSEjUslwMtrNEI749D8CF0eGETxsdTLPCic7iPaeuWnIs00kAHDDva5"
            ></stripe-buy-button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">You can cancel anytime before the trial ends to avoid charges.</div>
          <div className="text-xs text-blue-500 mt-2 text-center">
            Powered by <a href="https://buy.stripe.com/3cscOweCqgnNdKE7sD" target="_blank" rel="noopener noreferrer" className="underline">Stripe</a>
          </div>
        </div>
      )}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bloom Premium</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Get unlimited access to all features and premium content
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 justify-center max-w-2xl mx-auto">
        {/* Annual Plan */}
        <Card className="p-8 border-2 border-pink-500">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold mb-2">Annual Plan</h2>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-4xl font-bold">$39.99</span>
              <span className="text-gray-600 dark:text-gray-400">/year</span>
            </div>
            <div className="text-green-500 font-medium">Save 71% vs monthly</div>
            <div className="text-gray-600 dark:text-gray-400 mb-4">All premium features included</div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" />Full access to all features</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" />Premium content and resources</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" />Priority support</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" />Ad-free experience</li>
          </ul>
          <div className="w-full flex justify-center">
            <stripe-buy-button
              buy-button-id="buy_btn_1RJILoG00wk3P9SCj1e492zV"
              publishable-key="pk_live_51R8Ra8G00wk3P9SC1w03cKVss1csqUGbp2i51uh6KBYRSEjUslwMtrNEI749D8CF0eGETxsdTLPCic7iPaeuWnIs00kAHDDva5"
            ></stripe-buy-button>
          </div>
        </Card>
        {/* Monthly Plan */}
        <Card className="p-8">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold mb-2">Monthly Plan</h2>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="text-4xl font-bold">$11.49</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <div className="text-gray-600 dark:text-gray-400 mb-4">All premium features included</div>
          </div>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" />Full access to all features</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" />Premium content and resources</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" />Priority support</li>
            <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-500" />Ad-free experience</li>
          </ul>
          <div className="w-full flex justify-center">
            <stripe-buy-button
              buy-button-id="buy_btn_1RJIKQG00wk3P9SCbTn7Dk6F"
              publishable-key="pk_live_51R8Ra8G00wk3P9SC1w03cKVss1csqUGbp2i51uh6KBYRSEjUslwMtrNEI749D8CF0eGETxsdTLPCic7iPaeuWnIs00kAHDDva5"
            ></stripe-buy-button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Premium;