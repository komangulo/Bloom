import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Book, Calendar, Search, AlertCircle, FileText, ChevronRight } from 'lucide-react';

const SymptomChecker = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Fertility Resources & Symptom Guide
        </h1>
        
        <div className="inline-block bg-bloom-500 text-white text-xs px-2 py-1 rounded mb-4">EXPERT REVIEWED</div>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Access evidence-based articles, tips, and guidance from fertility experts to support your conception journey.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-bloom-500" />
                Educational Resources
              </CardTitle>
              <CardDescription>Expert-written fertility guides</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold mb-2">Understanding Your Fertile Window</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Learn about the best time to conceive and how to identify your most fertile days.</p>
                </li>
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold mb-2">Optimizing Fertility Naturally</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Lifestyle changes and natural methods to enhance your fertility.</p>
                </li>
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold mb-2">Nutrition for Conception</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Essential nutrients and dietary guidelines for preconception health.</p>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-bloom-500" />
                Symptom Library
              </CardTitle>
              <CardDescription>Common fertility symptoms explained</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold mb-2">Ovulation Signs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Physical and hormonal indicators that help identify ovulation.</p>
                </li>
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold mb-2">Early Pregnancy Signs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Common early symptoms of pregnancy and when to test.</p>
                </li>
                <li className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="font-semibold mb-2">Fertility Challenges</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Understanding common fertility issues and when to seek help.</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-bloom-100 to-purple-100 dark:from-bloom-900/30 dark:to-purple-900/30 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-6">
            <AlertCircle className="h-12 w-12 text-bloom-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">When to Consult a Doctor</h2>
              <p className="text-lg mb-6">
                While trying to conceive is a natural process, there are times when professional medical advice is recommended. Learn about important signs and symptoms that warrant a consultation.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Irregular or absent periods</li>
                <li>Trying to conceive for over 12 months (or 6 months if over 35)</li>
                <li>Known reproductive health conditions</li>
                <li>Recurrent pregnancy loss</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-6">
            <FileText className="h-12 w-12 text-bloom-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Personalized Tracking</h2>
              <p className="text-lg mb-6">
                Track your symptoms and fertility signs with Bloom's comprehensive tools for a more personalized conception journey.
              </p>
              <div className="flex gap-4">
                <Link to="/products/tracking-cycle">
                  <Button variant="outline">
                    Try Cycle Tracking <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
