
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const HcgCalculator = () => {
  const [firstHcg, setFirstHcg] = useState<number | ''>('');
  const [secondHcg, setSecondHcg] = useState<number | ''>('');
  const [daysBetween, setDaysBetween] = useState<number>(2);
  const [result, setResult] = useState<{ doubling: number | null, normal: boolean } | null>(null);

  const calculateHcg = () => {
    if (firstHcg === '' || secondHcg === '' || daysBetween === 0) return;
    
    // Calculate doubling time in days
    const growthRate = Math.log(Number(secondHcg) / Number(firstHcg)) / Math.log(2);
    const doublingTime = daysBetween / growthRate;
    
    // Check if doubling time is within normal ranges (typically 48-72 hours in early pregnancy)
    const isNormal = doublingTime >= 1.5 && doublingTime <= 3.5;
    
    setResult({
      doubling: parseFloat(doublingTime.toFixed(2)),
      normal: isNormal
    });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          hCG Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Track your hCG levels during early pregnancy.
        </p>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="first-hcg">First hCG Reading (mIU/mL)</Label>
                <Input
                  id="first-hcg"
                  type="number"
                  min="1"
                  value={firstHcg}
                  onChange={(e) => setFirstHcg(e.target.value ? Number(e.target.value) : '')}
                  placeholder="Enter first hCG value"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="second-hcg">Second hCG Reading (mIU/mL)</Label>
                <Input
                  id="second-hcg"
                  type="number"
                  min="1"
                  value={secondHcg}
                  onChange={(e) => setSecondHcg(e.target.value ? Number(e.target.value) : '')}
                  placeholder="Enter second hCG value"
                />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="days-between">Days Between Readings</Label>
                <Select value={daysBetween.toString()} onValueChange={(value) => setDaysBetween(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select days" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <SelectItem key={day} value={day.toString()}>
                        {day} {day === 1 ? 'day' : 'days'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 w-full mt-2"
                onClick={calculateHcg}
              >
                Calculate Doubling Time
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-medium mb-2">Results</h3>
                <p>Your hCG doubling time is approximately <strong>{result.doubling} days</strong>.</p>
                <p className="mt-2">
                  {result.normal ? (
                    <span className="text-green-600 dark:text-green-400">
                      This is within the normal range for early pregnancy (36-72 hours).
                    </span>
                  ) : (
                    <span className="text-amber-600 dark:text-amber-400">
                      This is outside the typical range for early pregnancy. Consider consulting with your healthcare provider.
                    </span>
                  )}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">About hCG Levels in Pregnancy</h2>
          <p className="mb-4">
            Human Chorionic Gonadotropin (hCG) is a hormone produced during pregnancy. 
            In early pregnancy, hCG levels typically double every 48-72 hours.
          </p>
          <p className="mb-4">
            Tracking your hCG levels can provide information about the progression of your pregnancy.
          </p>
          <p>
            <strong>Important:</strong> This calculator is for informational purposes only. Always consult with your healthcare provider about your hCG results.
          </p>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Track Your Pregnancy Journey with Bloom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HcgCalculator;
