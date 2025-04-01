
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Lock, Heart, MessageSquare, Share2, Activity } from 'lucide-react';

export function Features() {
  return (
    <div className="bg-white dark:bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Bloom</span> is Different
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Many period-tracking apps claim to support women's health, but often lock critical insights behind paywalls or compromise your data privacy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-full bg-bloom-100 dark:bg-bloom-900/30 flex items-center justify-center mb-2">
                <Lock className="h-5 w-5 text-bloom-500" />
              </div>
              <CardTitle>Complete Data Privacy</CardTitle>
              <CardDescription>
                Your data never leaves your device without your explicit permission.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All calculations are done on your device. The only time your data leaves your device is if you explicitly choose to share it with a partner through Bloom's encrypted system.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                <Calendar className="h-5 w-5 text-purple-500" />
              </div>
              <CardTitle>Track Your Cycle</CardTitle>
              <CardDescription>
                Always be prepared—know when your period is about to start.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our intuitive calendar interface helps you predict your period and ovulation with ease. Color-coded days make it simple to understand your cycle at a glance.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-full bg-bloom-100 dark:bg-bloom-900/30 flex items-center justify-center mb-2">
                <Heart className="h-5 w-5 text-bloom-500" />
              </div>
              <CardTitle>Understand Your Fertility</CardTitle>
              <CardDescription>
                Track ovulation and maximize your chances of conception.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Bloom helps you identify your fertile window, so you can either maximize your chances of conception or practice informed family planning.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                <MessageSquare className="h-5 w-5 text-purple-500" />
              </div>
              <CardTitle>Ask BloomAI</CardTitle>
              <CardDescription>
                Get personalized, AI-driven insights on reproductive health.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                BloomAI integrates advanced AI to deliver accurate, context-aware answers tailored to your logs and patterns, trained specifically on menstruation-related topics.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-full bg-bloom-100 dark:bg-bloom-900/30 flex items-center justify-center mb-2">
                <Activity className="h-5 w-5 text-bloom-500" />
              </div>
              <CardTitle>Log Symptoms & Mood</CardTitle>
              <CardDescription>
                Visualize your patterns and understand your body better.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Track symptoms, moods, and other indicators to gain insights into how your body changes throughout your cycle.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-2">
                <Share2 className="h-5 w-5 text-purple-500" />
              </div>
              <CardTitle>Share with a Partner</CardTitle>
              <CardDescription>
                Help your partner understand your cycle and provide better support.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Share insights with your partner through Bloom's encrypted system, helping them understand your cycle and provide better support when needed.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 min-w-[200px]">
            Get Started for Free
          </Button>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            No credit card required. No hidden fees.
          </p>
        </div>
      </div>
    </div>
  );
}
