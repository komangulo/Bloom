import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Baby, Calendar, Heart, Apple, Activity, ChevronRight } from 'lucide-react';

const Pregnancy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Pregnancy Journey Guide
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          A week-by-week guide through your pregnancy journey.
        </p>

        <div className="bg-bloom-50 dark:bg-slate-800 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Baby className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Baby Development</h3>
              <p className="text-gray-600 dark:text-gray-400">Track your baby's growth and milestones</p>
            </div>
            
            <div className="text-center">
              <Heart className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Health Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400">Monitor symptoms and vital signs</p>
            </div>
            
            <div className="text-center">
              <Calendar className="h-12 w-12 text-bloom-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Important Dates</h3>
              <p className="text-gray-600 dark:text-gray-400">Never miss key appointments</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Pregnancy Timeline</h2>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>First Trimester (Weeks 1-12)</CardTitle>
                <CardDescription>Early pregnancy development and changes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Weeks 1-4</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Conception and early development</p>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>Implantation occurs</li>
                      <li>Hormone levels begin to change</li>
                      <li>Early pregnancy symptoms may start</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Weeks 5-8</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Critical organ development begins</p>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>Heart starts beating</li>
                      <li>Brain and spinal cord formation</li>
                      <li>Morning sickness may peak</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Weeks 9-12</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Baby's features become more defined</p>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>First ultrasound typically scheduled</li>
                      <li>End of embryonic period</li>
                      <li>Risk of miscarriage decreases</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Second Trimester (Weeks 13-27)</CardTitle>
                <CardDescription>The "golden period" of pregnancy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Weeks 13-18</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Baby's growth accelerates</p>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>Gender can often be determined</li>
                      <li>First movements may be felt</li>
                      <li>Energy levels typically improve</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Weeks 19-27</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Rapid development continues</p>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>Regular movement patterns</li>
                      <li>Baby responds to sounds</li>
                      <li>Important anatomy scans</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third Trimester (Weeks 28-40)</CardTitle>
                <CardDescription>Final preparation for birth</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Weeks 28-34</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Baby gains weight rapidly</p>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>Lung development accelerates</li>
                      <li>Regular growth monitoring</li>
                      <li>Birth preparation classes recommended</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h4 className="font-semibold mb-2">Weeks 35-40</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Final preparations for birth</p>
                    <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>Baby moves into birth position</li>
                      <li>Weekly doctor visits begin</li>
                      <li>Signs of labor to watch for</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-bloom-100 to-purple-100 dark:from-bloom-900/30 dark:to-purple-900/30 rounded-lg p-8 mb-12">
          <div className="flex items-start gap-6">
            <Activity className="h-12 w-12 text-bloom-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Personalized Tracking</h2>
              <p className="text-lg mb-6">
                Keep track of your pregnancy journey with our comprehensive tools:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                <li>Weight and bump size tracking</li>
                <li>Kick counter and movement patterns</li>
                <li>Contraction timer</li>
                <li>Appointment scheduler</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-12 border border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-6">
            <Apple className="h-12 w-12 text-bloom-500 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Healthy Pregnancy Tips</h2>
              <p className="text-lg mb-6">
                Get weekly updates on nutrition, exercise, and wellness tips tailored to your stage of pregnancy.
              </p>
              <div className="flex gap-4">
                <Link to="/products/symptom-checker">
                  <Button variant="outline">
                    View Health Resources <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
                    Start Tracking Now
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

export default Pregnancy;
