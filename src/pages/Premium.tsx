
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Check, ArrowLeft } from 'lucide-react';
import { useUser, SignInButton, SignUpButton } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const Premium = () => {
  const { isSignedIn, user } = useUser();
  const [selectedSubscription] = useState<'yearly'>('yearly');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (!isSignedIn) {
      navigate('/signup');
      return;
    }
    
    toast({
      title: "Subscription process started",
      description: "You'll be redirected to complete your subscription.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Bloom Premium</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Get unlimited access to all features and premium content
          </p>
        </div>
        
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 mb-8">
          <div className="grid gap-6">
            <Card className="border-2 border-bloom-500">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Annual Plan</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-2">$9.99 <span className="text-lg font-normal text-gray-500">/year</span></div>
                <p className="text-gray-500 mb-6">All premium features included</p>
                
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Full access to all features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium content and resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ad-free experience</span>
                  </li>
                </ul>
                
                {isSignedIn ? (
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600"
                    onClick={handleSubscribe}
                  >
                    Subscribe Now
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <SignInButton mode="modal">
                      <Button variant="outline" size="lg" className="w-full">
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button size="lg" className="w-full bg-gradient-to-r from-bloom-500 to-purple-500">
                        Get Started
                      </Button>
                    </SignUpButton>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
