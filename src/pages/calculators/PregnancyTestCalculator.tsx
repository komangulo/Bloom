
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { addDays, format, differenceInDays, isAfter, isBefore } from 'date-fns';

const PregnancyTestCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState<Date | undefined>(undefined);
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [result, setResult] = useState<{ 
    ovulationDate: Date | null,
    earliestTestDate: Date | null,
    accurateTestDate: Date | null,
    missedPeriodDate: Date | null
  } | null>(null);

  const calculateTestDates = () => {
    if (!lastPeriod) return;
    
    // Calculate ovulation date (approximately 14 days before next period)
    const ovulationDay = addDays(lastPeriod, cycleLength - 14);
    
    // Implantation usually occurs 6-12 days after ovulation, we'll use 9 days as an average
    const implantationDate = addDays(ovulationDay, 9);
    
    // Earliest test date (4 days after implantation)
    const earliestTestDate = addDays(implantationDate, 4);
    
    // Most accurate test date (around missed period)
    const missedPeriodDate = addDays(lastPeriod, cycleLength);
    
    // Most accurate test date is a couple of days after missed period
    const accurateTestDate = addDays(missedPeriodDate, 2);
    
    setResult({
      ovulationDate: ovulationDay,
      earliestTestDate,
      accurateTestDate,
      missedPeriodDate
    });
  };

  const handleCycleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 21 && value <= 45) {
      setCycleLength(value);
    }
  };

  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Pregnancy Test Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Find the best time to take a pregnancy test.
        </p>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="last-period">First Day of Your Last Period</Label>
                <div className="border rounded-md p-2">
                  <Calendar
                    mode="single"
                    selected={lastPeriod}
                    onSelect={setLastPeriod}
                    disabled={(date) => isAfter(date, today) || isBefore(date, sixMonthsAgo)}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="cycle-length">Average Cycle Length (days)</Label>
                <div className="flex items-center">
                  <input
                    id="cycle-length"
                    type="range"
                    min="21"
                    max="45"
                    value={cycleLength}
                    onChange={handleCycleLengthChange}
                    className="w-full"
                  />
                  <span className="ml-4 font-medium">{cycleLength} days</span>
                </div>
              </div>

              <Button 
                className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 w-full mt-2"
                onClick={calculateTestDates}
                disabled={!lastPeriod}
              >
                Calculate Best Test Dates
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-medium mb-2">Your Pregnancy Test Timeline</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Estimated Ovulation Date:</span>{' '}
                    {format(result.ovulationDate!, 'MMMM d, yyyy')}
                  </div>
                  <div>
                    <span className="font-medium">Earliest Possible Test Date:</span>{' '}
                    {format(result.earliestTestDate!, 'MMMM d, yyyy')}{' '}
                    <span className="text-amber-600 dark:text-amber-400 text-sm">(may be less accurate)</span>
                  </div>
                  <div>
                    <span className="font-medium">Expected Period Date:</span>{' '}
                    {format(result.missedPeriodDate!, 'MMMM d, yyyy')}
                  </div>
                  <div>
                    <span className="font-medium">Most Accurate Test Date:</span>{' '}
                    {format(result.accurateTestDate!, 'MMMM d, yyyy')}{' '}
                    <span className="text-green-600 dark:text-green-400 text-sm">(recommended)</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">About Pregnancy Tests</h2>
          <p className="mb-4">
            Home pregnancy tests detect the presence of hCG (human Chorionic Gonadotropin) in your urine, 
            which is produced after a fertilized egg implants in your uterus.
          </p>
          <p className="mb-4">
            For the most accurate results, it's best to wait until the day of your missed period or a few days after.
            Testing too early may lead to a false negative result.
          </p>
          <p>
            <strong>Important:</strong> This calculator provides estimates based on average cycle data. 
            Individual cycles can vary. For the most accurate results, test after your missed period.
          </p>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Track Your Cycle with Bloom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PregnancyTestCalculator;
