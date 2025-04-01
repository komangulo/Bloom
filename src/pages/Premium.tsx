
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, Lock, ArrowLeft } from 'lucide-react';
import { useUser, SignInButton, SignUpButton } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const Premium = () => {
  const { isSignedIn, user } = useUser();
  const [selectedSubscription, setSelectedSubscription] = useState<'yearly' | 'trial'>('yearly');
  const { toast } = useToast();
  const navigate = useNavigate();

  const subscriptionBenefits = [
    'Full access to the Bloom app',
    'Cycle tracking and predictions',
    'Personalized recommendations',
    'Educational content',
    'All premium features',
  ];

  useEffect(() => {
    // Load Stripe Buy Button script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubscribe = () => {
    if (selectedSubscription === 'yearly') {
      // For yearly subscription, show the Stripe Buy Button
      const buyButtonContainer = document.getElementById('stripe-buy-button-container');
      if (buyButtonContainer) {
        buyButtonContainer.style.display = 'block';
        
        // This will trigger a click on the Stripe Buy Button
        const stripeBuyButton = document.querySelector('stripe-buy-button');
        if (stripeBuyButton) {
          const shadowRoot = stripeBuyButton.shadowRoot;
          if (shadowRoot) {
            const buyButton = shadowRoot.querySelector('button');
            if (buyButton) {
              buyButton.click();
            }
          }
        }
      }
    } else {
      // Start free trial
      toast({
        title: "Free trial activated",
        description: "You now have access to Bloom for 1 day",
      });
      navigate('/dashboard');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)} 
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </div>
      
      {isSignedIn ? (
        <div className="max-w-4xl mx-auto">
          <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
            <h1 className="text-2xl font-bold">Welcome back, {user?.firstName || 'User'}!</h1>
            <p className="text-gray-600 dark:text-gray-300">A subscription is required to use the Bloom app</p>
          </div>
          
          <div className="text-center mb-12">
            <Lock className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Subscription Required</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
              A subscription is required to access the Bloom app and all its features. 
              Please subscribe to continue.
            </p>
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
            <h3 className="text-xl font-bold text-center mb-2">Subscription</h3>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Subscribe to unlock all features</p>
            
            <h4 className="font-medium mb-4">Subscription Benefits:</h4>
            <ul className="space-y-2 mb-8">
              {subscriptionBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className={`border-2 ${selectedSubscription === 'yearly' ? 'border-bloom-500' : 'border-gray-200'}`}>
                <CardHeader>
                  <CardTitle className="text-center">Bloom Subscription</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold mb-1">$9.99 <span className="text-lg font-normal text-gray-500">/year</span></div>
                  <p className="text-sm text-gray-500 mb-4">All app features</p>
                  <Button 
                    className={`w-full ${selectedSubscription === 'yearly' ? 'bg-bloom-500 hover:bg-bloom-600' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                    onClick={() => setSelectedSubscription('yearly')}
                  >
                    {selectedSubscription === 'yearly' ? 'Selected' : 'Select'}
                  </Button>
                </CardContent>
              </Card>
              
              <Card className={`border-2 ${selectedSubscription === 'trial' ? 'border-bloom-500' : 'border-gray-200'}`}>
                <CardHeader>
                  <CardTitle className="text-center">Try Bloom</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold mb-1">Free <span className="text-lg font-normal text-gray-500">1 day</span></div>
                  <p className="text-sm text-gray-500 mb-4">Limited features</p>
                  <Button 
                    className={`w-full ${selectedSubscription === 'trial' ? 'bg-bloom-500 hover:bg-bloom-600' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                    onClick={() => setSelectedSubscription('trial')}
                  >
                    {selectedSubscription === 'trial' ? 'Selected' : 'Select'}
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600"
                onClick={handleSubscribe}
              >
                Subscribe Now
              </Button>
            </div>

            {/* Hidden Stripe Buy Button */}
            <div id="stripe-buy-button-container" style={{ display: 'none' }}>
              <stripe-buy-button
                buy-button-id="buy_btn_1R8zRrG00wk3P9SCCcDfxUmZ"
                publishable-key="pk_live_51R8Ra8G00wk3P9SC1w03cKVss1csqUGbp2i51uh6KBYRSEjUslwMtrNEI749D8CF0eGETxsdTLPCic7iPaeuWnIs00kAHDDva5"
              >
              </stripe-buy-button>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Join Bloom Premium</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Sign in or create an account to access premium features and subscription options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SignInButton mode="modal">
              <Button variant="outline" size="lg">Sign In</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="lg" className="bg-gradient-to-r from-bloom-500 to-purple-500">
                Create Account
              </Button>
            </SignUpButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default Premium;
