import React from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

// Declaración global para permitir el uso de <stripe-buy-button> en TypeScript
// eslint-disable-next-line @typescript-eslint/no-namespace
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
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bloom Premium</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Get unlimited access to all features and premium content
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
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