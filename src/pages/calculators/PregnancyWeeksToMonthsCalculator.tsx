import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Info } from 'lucide-react';

const PregnancyWeeksToMonthsCalculator = () => {
  const [weeks, setWeeks] = useState<string>('');
  
  const calculateMonths = (weeks: number) => {
    return Math.floor(weeks / 4.345);
  };

  const getTrimester = (weeks: number) => {
    if (weeks < 13) return '1st Trimester';
    if (weeks < 27) return '2nd Trimester';
    return '3rd Trimester';
  };

  const getMonthDetails = (weeks: number) => {
    const months = calculateMonths(weeks);
    const trimester = getTrimester(weeks);
    return { months, trimester };
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
            Pregnancy Weeks to Months Calculator
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Convert pregnancy weeks to months and trimesters.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="weeks">Pregnancy Weeks</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="weeks"
                    type="number"
                    min="0"
                    max="42"
                    placeholder="Enter weeks"
                    value={weeks}
                    onChange={(e) => setWeeks(e.target.value)}
                    className="mt-1"
                  />
                  <span className="text-gray-500">weeks</span>
                </div>
              </div>

              {weeks && !isNaN(Number(weeks)) && Number(weeks) >= 0 && Number(weeks) <= 42 && (
                <div className="mt-6 p-4 bg-bloom-50 dark:bg-bloom-900/20 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-bloom-500" />
                      <span className="font-medium">
                        {getMonthDetails(Number(weeks)).months} months
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Info className="w-5 h-5 text-bloom-500" />
                      <span className="font-medium">
                        {getMonthDetails(Number(weeks)).trimester}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Pregnancy Timeline Guide</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-bloom-500">First Trimester (Weeks 1-12)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Months 1-3: Early development and formation of major organs</p>
              </div>
              <div>
                <h3 className="font-medium text-bloom-500">Second Trimester (Weeks 13-26)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Months 4-6: Rapid growth and movement begins</p>
              </div>
              <div>
                <h3 className="font-medium text-bloom-500">Third Trimester (Weeks 27-40)</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Months 7-9: Final development and preparation for birth</p>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">
                  Note: A full-term pregnancy typically lasts 40 weeks (approximately 9 months)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PregnancyWeeksToMonthsCalculator;
