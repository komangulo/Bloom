import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Shield, Lock, Eye, Key, RefreshCw, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow">
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-bloom-100 dark:bg-bloom-900 rounded-lg">
        <Icon className="w-6 h-6 text-bloom-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  </Card>
);

const AnonymousMode = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
            Anonymous Mode
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Enhanced privacy protection for your most sensitive health data.
          </p>

          <div className="inline-flex items-center space-x-2 bg-bloom-50 dark:bg-bloom-900/50 px-4 py-2 rounded-full">
            <Lock className="w-5 h-5 text-bloom-500" />
            <span className="text-sm font-medium">Military-grade encryption</span>
          </div>
        </div>

        <div className="grid gap-8 mb-12">
          <FeatureCard
            icon={Shield}
            title="Complete Privacy"
            description="Your sensitive health data is encrypted and anonymized. Even we can't access your personal information."
          />
          <FeatureCard
            icon={Eye}
            title="Invisible Mode"
            description="Hide your activity status, last seen, and profile information from other users while maintaining full app functionality."
          />
          <FeatureCard
            icon={Key}
            title="Secure Access"
            description="Set up a separate password or biometric authentication for accessing sensitive data within the app."
          />
        </div>

        <div className="bg-gradient-to-r from-bloom-50 to-purple-50 dark:from-bloom-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">How Anonymous Mode Works</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-bloom-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-200">Your data is encrypted locally on your device before being stored</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-bloom-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-200">Personal identifiers are removed from all data transmissions</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-bloom-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-200">Separate secure storage for sensitive information</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Protect Your Privacy?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Enable Anonymous Mode now and take control of your privacy.
          </p>
          
          <div>
            <Link to="/help-center/privacy">
              <Button variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnonymousMode;
