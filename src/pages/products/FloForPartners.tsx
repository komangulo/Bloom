import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Calendar, MessageCircle, Lightbulb, Bell, ChevronRight, Gift, Coffee } from 'lucide-react';

const FloForPartners = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Bloom for Partners
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Help your partner understand your cycle and provide better support.
        </p>

        <div className="bg-bloom-50 dark:bg-slate-800 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Better Understanding</h3>
              <p className="text-gray-600 dark:text-gray-400">Learn about your partner's cycle and hormonal changes</p>
            </div>
            
            <div className="text-center">
              <Bell className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Timely Reminders</h3>
              <p className="text-gray-600 dark:text-gray-400">Get notifications for important cycle dates</p>
            </div>
            
            <div className="text-center">
              <MessageCircle className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Better Communication</h3>
              <p className="text-gray-600 dark:text-gray-400">Open dialogue about health and well-being</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-bloom-500" />
                Cycle Overview
              </CardTitle>
              <CardDescription>Understanding the menstrual cycle</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Menstrual Phase</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn how to provide comfort and support during menstruation</p>
                </li>
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Fertile Window</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Understand peak fertility times for family planning</p>
                </li>
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Hormonal Changes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Recognize mood and energy variations throughout the cycle</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-bloom-500" />
                Support Guide
              </CardTitle>
              <CardDescription>How to be there for your partner</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Emotional Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Tips for providing emotional understanding and care</p>
                </li>
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Physical Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Practical ways to help with physical symptoms</p>
                </li>
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Communication Tips</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">How to discuss cycle-related topics sensitively</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-bloom-100 to-purple-100 dark:from-bloom-900/30 dark:to-purple-900/30 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-6">
            <Gift className="h-12 w-12 text-bloom-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Thoughtful Gestures</h2>
              <p className="text-lg mb-6">
                Get personalized suggestions for supporting your partner throughout their cycle.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Coffee className="h-5 w-5" />
                  <span>Comfort food recommendations</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Heart className="h-5 w-5" />
                  <span>Self-care activity ideas</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="h-5 w-5" />
                  <span>Important date reminders</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                  <MessageCircle className="h-5 w-5" />
                  <span>Supportive message templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Start Supporting Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Join Bloom to better understand and support your partner's health journey.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/products/help-center">
                <Button variant="outline">
                  Learn More <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
                  Get Started Together
            </Button>
          </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloForPartners;
