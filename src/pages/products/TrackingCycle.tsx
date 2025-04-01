
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrackingCycle = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Track Your Cycle, Understand Your Body
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Bloom's cycle tracking gives you personalized insights into your menstrual health, helping you understand patterns and predict future periods.
        </p>
        
        <div className="bg-bloom-50 dark:bg-slate-800 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Accurate Predictions</h3>
              <p className="text-gray-600 dark:text-gray-400">Never be surprised by your period again</p>
            </div>
            
            <div className="text-center">
              <Clock className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Fertility Window</h3>
              <p className="text-gray-600 dark:text-gray-400">Know your most fertile days</p>
            </div>
            
            <div className="text-center">
              <Heart className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Symptom Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">Record symptoms and identify patterns</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">How Bloom's Cycle Tracking Works</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Log Your Period</CardTitle>
              <CardDescription>Quick and simple tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Simply mark the days when your period starts and ends. Bloom will start learning your unique cycle patterns.</p>
              <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center mb-4">
                <span className="text-gray-400">Calendar illustration</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Track Symptoms</CardTitle>
              <CardDescription>Document changes throughout your cycle</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Record mood changes, cramps, headaches, and other symptoms to identify patterns linked to your cycle.</p>
              <div className="h-40 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center mb-4">
                <span className="text-gray-400">Symptoms illustration</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-bloom-100 to-purple-100 dark:from-bloom-900/30 dark:to-purple-900/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Privacy First, Always</h2>
          <p className="text-lg mb-6">
            Your cycle data is private and sensitive. Bloom keeps your information on your device and never sells your data to third parties.
          </p>
          <Link to="/products/anonymous-mode">
            <Button variant="outline" className="bg-white dark:bg-gray-800">
              Learn about Anonymous Mode <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Tracking?</h2>
          <p className="text-lg mb-6">
            Join thousands of women who understand their bodies better with Bloom.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Get Started Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrackingCycle;
