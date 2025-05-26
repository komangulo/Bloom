
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const OvulationCalculator = () => {
  const [cycleLength, setCycleLength] = useState(28);
  const [lastPeriodDate, setLastPeriodDate] = useState<Date | null>(null);
  const [calculationComplete, setCalculationComplete] = useState(false);
  const [results, setResults] = useState({
    ovulationDate: '',
    fertileDays: '',
    nextPeriodDate: ''
  });

  const handleCalculate = () => {
    // This would be a more sophisticated calculation in a real app
    if (!lastPeriodDate) return;
    
    const ovulation = new Date(lastPeriodDate);
    ovulation.setDate(lastPeriodDate.getDate() + cycleLength - 14);
    
    const fertileStart = new Date(ovulation);
    fertileStart.setDate(ovulation.getDate() - 5);
    
    const fertileEnd = new Date(ovulation);
    fertileEnd.setDate(ovulation.getDate() + 1);
    
    const nextPeriod = new Date(lastPeriodDate);
    nextPeriod.setDate(lastPeriodDate.getDate() + cycleLength);
    
    setResults({
      ovulationDate: ovulation.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
      fertileDays: `${fertileStart.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${fertileEnd.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}`,
      nextPeriodDate: nextPeriod.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
    });
    
    setCalculationComplete(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Ovulation Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Find your most fertile days to maximize your chances of getting pregnant.
        </p>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Calculate Your Ovulation</CardTitle>
            <CardDescription>Enter your menstrual cycle details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">First day of your last period</label>
                <input 
                  type="date" 
                  className="border rounded-md p-2 w-full"
                  onChange={(e) => setLastPeriodDate(e.target.value ? new Date(e.target.value) : null)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Average cycle length (days)</label>
                <div className="flex items-center">
                  <button 
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-l-md"
                    onClick={() => setCycleLength(prev => Math.max(21, prev - 1))}
                  >
                    -
                  </button>
                  <div className="px-4 py-1 border-t border-b">{cycleLength}</div>
                  <button 
                    className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-r-md"
                    onClick={() => setCycleLength(prev => Math.min(45, prev + 1))}
                  >
                    +
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Average cycle length is 28 days</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full bg-gradient-to-r from-bloom-500 to-purple-500"
              disabled={!lastPeriodDate}
              onClick={handleCalculate}
            >
              Calculate Ovulation
            </Button>
          </CardFooter>
        </Card>
        
        {calculationComplete && (
          <div className="bg-bloom-50 dark:bg-slate-800 rounded-lg p-8 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center">Your Fertility Window</h2>
            
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-md text-center">
                <Calendar className="h-8 w-8 text-bloom-500 mx-auto mb-2" />
                <h3 className="font-medium mb-1">Ovulation Day</h3>
                <p className="text-bloom-600 dark:text-bloom-400 font-bold">{results.ovulationDate}</p>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-4 rounded-md text-center">
                <Calendar className="h-8 w-8 text-bloom-500 mx-auto mb-2" />
                <h3 className="font-medium mb-1">Fertile Window</h3>
                <p className="text-bloom-600 dark:text-bloom-400 font-bold">{results.fertileDays}</p>
              </div>
              
              <div className="bg-white dark:bg-slate-900 p-4 rounded-md text-center">
                <Calendar className="h-8 w-8 text-bloom-500 mx-auto mb-2" />
                <h3 className="font-medium mb-1">Next Period</h3>
                <p className="text-bloom-600 dark:text-bloom-400 font-bold">{results.nextPeriodDate}</p>
              </div>
            </div>
            
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              Remember: This is an estimate based on average cycle patterns. 
              For more accurate predictions, track your cycle regularly.
            </p>
          </div>
        )}
        
        <div className="bg-white dark:bg-slate-900 border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Understanding Ovulation</h2>
          <p className="mb-4">
            Ovulation typically occurs about 14 days before the start of your next period. 
            During ovulation, an egg is released from one of your ovaries and moves down the fallopian tube where it can be fertilized by sperm.
          </p>
          <p>
            Your fertile window is the 6-day interval ending on the day of ovulation. 
            To maximize your chances of conception, plan intercourse during this window, especially the 2-3 days leading up to ovulation.
          </p>
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-medium mb-4">Track your cycle for more accurate predictions</h3>
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Get Started with Bloom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OvulationCalculator;
