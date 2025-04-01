
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { addDays, format, differenceInDays, isAfter, isBefore } from 'date-fns';

const MenstrualCycleCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState<Date | undefined>(undefined);
  const [cycleLength, setCycleLength] = useState<number>(28);
  const [periodLength, setPeriodLength] = useState<number>(5);
  const [cycles, setCycles] = useState<number>(3);
  const [result, setResult] = useState<{
    nextPeriods: Date[];
    ovulationDates: Date[];
    fertileDays: { start: Date; end: Date }[];
  } | null>(null);

  const calculateCycle = () => {
    if (!lastPeriod) return;
    
    const nextPeriods: Date[] = [];
    const ovulationDates: Date[] = [];
    const fertileDays: { start: Date; end: Date }[] = [];
    
    let currentDate = lastPeriod;
    
    for (let i = 0; i < cycles; i++) {
      // Calculate next period start
      currentDate = i === 0 ? currentDate : addDays(currentDate, cycleLength);
      nextPeriods.push(new Date(currentDate));
      
      // Calculate ovulation date (approximately 14 days before next period)
      const nextPeriodDate = addDays(currentDate, cycleLength);
      const ovulationDate = addDays(nextPeriodDate, -14);
      ovulationDates.push(new Date(ovulationDate));
      
      // Calculate fertile window (typically 5 days before and 1 day after ovulation)
      const fertileStart = addDays(ovulationDate, -5);
      const fertileEnd = addDays(ovulationDate, 1);
      fertileDays.push({ start: new Date(fertileStart), end: new Date(fertileEnd) });
    }
    
    setResult({
      nextPeriods,
      ovulationDates,
      fertileDays
    });
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
          Menstrual Cycle Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Track and predict your menstrual cycle.
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
                <Label htmlFor="cycles">Number of Cycles to Predict</Label>
                <Input
                  id="cycles"
                  type="number"
                  min="1"
                  max="12"
                  value={cycles}
                  onChange={(e) => setCycles(parseInt(e.target.value) || 3)}
                />
              </div>

              <Button 
                className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 w-full mt-2"
                onClick={calculateCycle}
                disabled={!lastPeriod}
              >
                Calculate Cycle
              </Button>
            </div>

            {result && (
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Your Cycle Predictions</h3>
                <div className="space-y-8">
                  {result.nextPeriods.map((period, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <h4 className="font-medium text-bloom-500">Cycle {index + 1}</h4>
                      <div className="mt-2 space-y-2">
                        <div>
                          <span className="font-medium">Period:</span>{' '}
                          {format(period, 'MMM d, yyyy')} - {format(addDays(period, periodLength - 1), 'MMM d, yyyy')}
                        </div>
                        <div>
                          <span className="font-medium">Fertile Window:</span>{' '}
                          {format(result.fertileDays[index].start, 'MMM d')} - {format(result.fertileDays[index].end, 'MMM d, yyyy')}
                        </div>
                        <div>
                          <span className="font-medium">Ovulation:</span>{' '}
                          {format(result.ovulationDates[index], 'MMMM d, yyyy')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">Understanding Your Menstrual Cycle</h2>
          <p className="mb-4">
            A typical menstrual cycle lasts between 21-35 days, with the average being 28 days. 
            The cycle is counted from the first day of your period to the first day of your next period.
          </p>
          <p>
            <strong>Important:</strong> This calculator provides estimates based on average data. 
            Individual cycles can vary due to stress, health conditions, and lifestyle factors.
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

export default MenstrualCycleCalculator;
