import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Heart, Lock, Shield, MessageSquare, Award } from 'lucide-react';

const Index = () => {
  return (
    <div>
      <Hero />
      
      <Features />
      
      <div className="bg-gray-50 dark:bg-slate-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Data, <span className="gradient-text">Your Control</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Many period-tracking apps sell your sensitive data to third parties. Bloom is different.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-bloom-100 dark:bg-bloom-900/30 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-bloom-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-2">On-Device Calculations</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        All cycle predictions and fertility calculations happen directly on your device, not on our servers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Lock className="h-5 w-5 text-purple-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-2">End-to-End Encryption</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        If you choose to share data with a partner, it's protected with end-to-end encryption that even we can't access.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-bloom-100 dark:bg-bloom-900/30 flex items-center justify-center">
                        <Award className="h-5 w-5 text-bloom-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium mb-2">No Data Selling</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        We never sell your data to advertisers, insurance companies, or other third parties. Your data is yours alone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="mb-8 text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Your reproductive health data should be private.</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  In an era where your most intimate data is treated as a commodity, Bloom stands firm on the principle that your reproductive health information belongs to you and only you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/signup">
                    <Button size="lg" className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600">
                      Create Free Account
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/tracker">
                      Try the Tracker
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Got questions about Bloom? We've got answers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-medium text-xl mb-2">Is Bloom really free?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Bloom's core features are completely free. We offer premium features for those who want additional insights, but we believe everyone deserves access to basic reproductive health tracking.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2">How accurate are the predictions?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Bloom's predictions become more accurate over time as you log more cycles. We use advanced algorithms that learn from your personal patterns.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2">Can I use Bloom when trying to conceive?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! Bloom helps you track your fertile window and ovulation to maximize your chances of conception. Our fertility insights can be a valuable tool in your journey.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-xl mb-2">How does BloomAI work?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                BloomAI is our AI assistant that answers questions about reproductive health. It's trained on medically accurate information and can provide personalized insights based on your cycle data.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-bloom-600 dark:text-bloom-400">
              <Link to="/faq">
                View all FAQs
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-bloom-50 dark:bg-bloom-900/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to take control of your reproductive health?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of women who are using Bloom to better understand their bodies, all while keeping their data private.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 min-w-[200px]">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
