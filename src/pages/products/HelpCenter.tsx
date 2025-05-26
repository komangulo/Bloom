import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, BookOpen, MessageCircle, Video, FileQuestion, ChevronRight, LifeBuoy, Settings } from 'lucide-react';

const HelpCenter = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Help Center
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Find answers to common questions and learn how to use Bloom.
        </p>

        {/* Search Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="flex-1 bg-transparent border-none focus:outline-none text-gray-600 dark:text-gray-300 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-bloom-500" />
                Getting Started
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-400">• First steps with Bloom</li>
                <li className="text-gray-600 dark:text-gray-400">• Setting up your profile</li>
                <li className="text-gray-600 dark:text-gray-400">• Basic features guide</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-bloom-500" />
                Video Tutorials
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-400">• Feature walkthroughs</li>
                <li className="text-gray-600 dark:text-gray-400">• Tips and tricks</li>
                <li className="text-gray-600 dark:text-gray-400">• Best practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-bloom-500" />
                Community Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="text-gray-600 dark:text-gray-400">• User forums</li>
                <li className="text-gray-600 dark:text-gray-400">• Feature requests</li>
                <li className="text-gray-600 dark:text-gray-400">• Community guidelines</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Popular Topics */}
        <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Account & Settings</CardTitle>
              <CardDescription>Manage your Bloom account</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Settings className="h-4 w-4" />
                  Account settings and preferences
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <LifeBuoy className="h-4 w-4" />
                  Privacy and security
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FileQuestion className="h-4 w-4" />
                  Subscription management
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Features & Tools</CardTitle>
              <CardDescription>Learn about Bloom's features</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FileQuestion className="h-4 w-4" />
                  Tracking and monitoring
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FileQuestion className="h-4 w-4" />
                  Health insights
                </li>
                <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <FileQuestion className="h-4 w-4" />
                  Reports and analytics
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div className="bg-gradient-to-r from-bloom-100 to-purple-100 dark:from-bloom-900/30 dark:to-purple-900/30 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-6">
            <FileQuestion className="h-12 w-12 text-bloom-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">How do I track my cycle?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Learn how to use Bloom's cycle tracking features to monitor your menstrual health.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How can I export my data?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Find out how to download and export your health data from Bloom.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Is my data secure?</h3>
                  <p className="text-gray-600 dark:text-gray-400">Learn about our security measures and data protection policies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Our support team is here to help you with any questions or concerns.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/products/symptom-checker">
                <Card className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <CardHeader>
                    <CardTitle>Symptom Checker</CardTitle>
                    <CardDescription>Learn how to track and analyze your symptoms</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
              
              <Link to="/products/getting-pregnant">
                <Card className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <CardHeader>
                    <CardTitle>Getting Pregnant</CardTitle>
                    <CardDescription>Understanding fertility and conception</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
                Contact Support
            </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
