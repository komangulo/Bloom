import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Target, LineChart, ChevronRight, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';

const GettingPregnant = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Getting Pregnant with Bloom
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Tools and information to help you maximize your chances of conception.
        </p>
        
        <div className="bg-bloom-50 dark:bg-slate-800 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Fertility Window</h3>
              <p className="text-gray-600 dark:text-gray-400">Identify your most fertile days with precision</p>
            </div>
            
            <div className="text-center">
              <LineChart className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Ovulation Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">Monitor ovulation signs and patterns</p>
            </div>
            
            <div className="text-center">
              <Baby className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Conception Tips</h3>
              <p className="text-gray-600 dark:text-gray-400">Expert advice to boost conception chances</p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6">Your Journey to Pregnancy</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Smart Fertility Predictions</CardTitle>
              <CardDescription>Know your best conception days</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Our advanced algorithm learns your unique cycle patterns to predict your most fertile days with high accuracy.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Precise ovulation predictions</li>
                <li>Fertility window notifications</li>
                <li>Cycle length analysis</li>
                <li>Basal body temperature tracking</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Tracking</CardTitle>
              <CardDescription>Monitor all fertility indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Track important fertility signs and symptoms to optimize your conception chances.</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                <li>Cervical mucus changes</li>
                <li>Ovulation test results</li>
                <li>Intimate moments timing</li>
                <li>Pregnancy test tracking</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-bloom-100 to-purple-100 dark:from-bloom-900/30 dark:to-purple-900/30 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Expert-Backed Resources</h2>
          <p className="text-lg mb-6">
            Access evidence-based articles, tips, and guidance from fertility experts to support your conception journey.
          </p>
          <Link to="/products/symptom-checker">
            <Button variant="outline" className="bg-white dark:bg-gray-800">
              Explore Fertility Resources <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Community Support</h2>
          <p className="text-lg mb-6">
            Connect with others on the same journey, share experiences, and get support from our caring community.
          </p>
          <Link to="/products/help-center">
            <Button variant="outline">
              Visit Help Center <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-lg mb-6">
            Get personalized fertility insights and expert guidance with Bloom.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/signup">
              <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
                Start Tracking Now
              </Button>
            </Link>
            <Link to="/products/help-center">
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

export default GettingPregnant;
