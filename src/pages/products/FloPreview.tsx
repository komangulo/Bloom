import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Crown, Sparkles, Lock, ChartBar, Bell, Shield, Zap, Download, Check, Heart, Brain, Calendar, Star, Lightbulb, Gift } from 'lucide-react';

const FloPreview = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Crown className="h-16 w-16 text-bloom-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Bloom Premium
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Elevate your health experience with exclusive features and personalized insights.
        </p>

          <div className="inline-block bg-bloom-500 text-white text-sm px-4 py-2 rounded-full mb-8">
            Special Offer: 30% off annual subscription
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Brain className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Advanced AI</h3>
            <p className="text-gray-600 dark:text-gray-400">Accurate predictions based on your personal data</p>
          </div>
          
          <div className="text-center">
            <Heart className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Comprehensive Health</h3>
            <p className="text-gray-600 dark:text-gray-400">Complete tracking of your well-being</p>
          </div>
          
          <div className="text-center">
            <Star className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">VIP Experience</h3>
            <p className="text-gray-600 dark:text-gray-400">Priority support and exclusive content</p>
          </div>
        </div>

        {/* Why Premium Section */}
        <div className="bg-gradient-to-r from-bloom-50 to-purple-50 dark:from-bloom-900/20 dark:to-purple-900/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Why choose Premium?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 bg-white/50 dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-bloom-500" />
                  Smart Predictions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-bloom-500" />
                    <span>Cycle prediction with 95% accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-bloom-500" />
                    <span>Personalized fertility alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-bloom-500" />
                    <span>Cycle pattern analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/50 dark:bg-gray-800/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-bloom-500" />
                  Advanced Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-bloom-500" />
                    <span>Unlimited symptom logging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-bloom-500" />
                    <span>Detailed charts and trends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-bloom-500" />
                    <span>Unlimited personalized notes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Premium Features */}
        <div className="bg-gradient-to-r from-bloom-100 to-purple-100 dark:from-bloom-900/30 dark:to-purple-900/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Exclusive Premium Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Lock className="h-6 w-6 text-bloom-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Advanced Predictions</h3>
                <p className="text-gray-600 dark:text-gray-400">AI algorithms with 95% accuracy for your cycle</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Bell className="h-6 w-6 text-bloom-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Personalized Notifications</h3>
                <p className="text-gray-600 dark:text-gray-400">Smart alerts tailored to your needs</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <ChartBar className="h-6 w-6 text-bloom-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Detailed Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">Deep insights about your health</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-bloom-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Priority Support</h3>
                <p className="text-gray-600 dark:text-gray-400">24/7 VIP support from our team</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Download className="h-6 w-6 text-bloom-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Data Export</h3>
                <p className="text-gray-600 dark:text-gray-400">Download your history whenever you need it</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Sparkles className="h-6 w-6 text-bloom-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Exclusive Content</h3>
                <p className="text-gray-600 dark:text-gray-400">Access to premium articles and guides</p>
              </div>
            </div>
          </div>
        </div>

        {/* Satisfaction Guarantee */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <Shield className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Satisfaction Guarantee</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Try Premium risk-free. If you are not completely satisfied, we will refund your money within the first 30 days.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-bloom-50 to-purple-50 dark:from-bloom-900/20 dark:to-purple-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to enhance your experience?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Join over 10,000 users who have already improved their health tracking with Bloom Premium.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/premium">
              <Button className="bg-gradient-to-r from-bloom-500 to-purple-500 text-lg px-8 py-6">
                Get Premium Now
              </Button>
            </Link>
            <Link to="/products/help-center">
              <Button variant="outline" className="text-lg px-8 py-6">
                Learn More
            </Button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloPreview;
