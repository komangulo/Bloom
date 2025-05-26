
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { addDays, format, differenceInDays, isAfter, isBefore } from 'date-fns';

const PeriodCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState<Date | undefined>(undefined);
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [periodLength, setPeriodLength] = useState<number>(5);
  const [monthsToPredict, setMonthsToPredict] = useState<number>(3);
  const [result, setResult] = useState<{
    nextPeriods: { startDate: Date; endDate: Date }[];
  } | null>(null);

  const calculatePeriods = () => {
    if (!lastPeriod) return;
    
    const nextPeriods: { startDate: Date; endDate: Date }[] = [];
    let currentDate = new Date(lastPeriod);
    
    for (let i = 0; i < monthsToPredict; i++) {
      // Skip the first prediction if we're starting with the last period
      if (i > 0 || differenceInDays(new Date(), currentDate) > cycleLength) {
        currentDate = addDays(currentDate, cycleLength);
      }
      
      const periodEndDate = addDays(currentDate, periodLength - 1);
      nextPeriods.push({
        startDate: new Date(currentDate),
        endDate: new Date(periodEndDate)
      });
    }
    
    setResult({ nextPeriods });
  };

  const handleCycleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 21 && value <= 45) {
      setCycleLength(value);
    }
  };

  const handlePeriodLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 2 && value <= 10) {
      setPeriodLength(value);
    }
  };

  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Period Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Predict your next period and track your cycle.
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

              <div className="grid gap-3">
                <Label htmlFor="period-length">Average Period Length (days)</Label>
                <div className="flex items-center">
                  <input
                    id="period-length"
                    type="range"
                    min="2"
                    max="10"
                    value={periodLength}
                    onChange={handlePeriodLengthChange}
                    className="w-full"
                  />
                  <span className="ml-4 font-medium">{periodLength} days</span>
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="months">Periods to Predict</Label>
                <Input
                  id="months"
                  type="number"
                  min="1"
                  max="12"
                  value={monthsToPredict}
                  onChange={(e) => setMonthsToPredict(parseInt(e.target.value) || 3)}
                />
              </div>

              <Button 
                className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 w-full mt-2"
                onClick={calculatePeriods}
                disabled={!lastPeriod}
              >
                Predict Next Periods
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-medium mb-2">Your Next Periods</h3>
                <div className="space-y-2">
                  {result.nextPeriods.map((period, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-bloom-100 dark:bg-bloom-900 flex items-center justify-center text-bloom-600 dark:text-bloom-300 mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-medium">{format(period.startDate, 'MMMM d')} - {format(period.endDate, 'MMMM d, yyyy')}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>
                    These dates are estimates based on your average cycle length. 
                    Your actual period may start earlier or later.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">About Period Prediction</h2>
          <p className="mb-4">
            Predicting your period can help you plan ahead and be prepared. 
            The more regular your cycles are, the more accurate the predictions will be.
          </p>
          <p>
            <strong>Important:</strong> Many factors can affect your period timing, including 
            stress, illness, significant weight changes, and hormonal fluctuations.
          </p>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Track Your Periods with Bloom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PeriodCalculator;
