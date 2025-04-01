
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { addDays, addWeeks, format, isAfter, isBefore } from 'date-fns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PregnancyDueDateCalculator = () => {
  const [lastPeriod, setLastPeriod] = useState<Date | undefined>(undefined);
  const [conceptionDate, setConceptionDate] = useState<Date | undefined>(undefined);
  const [calculationMethod, setCalculationMethod] = useState<'lmp' | 'conception'>('lmp');
  const [result, setResult] = useState<{
    dueDate: Date;
    gestationalAge: { weeks: number; days: number };
    trimesterDates: { first: Date; second: Date; third: Date };
    milestones: { heartbeat: Date; movement: Date; viability: Date };
  } | null>(null);

  const calculateDueDate = () => {
    let dueDate: Date;
    let conceptDate: Date;
    
    if (calculationMethod === 'lmp' && lastPeriod) {
      // Naegele's rule: 280 days (40 weeks) from LMP
      dueDate = addDays(lastPeriod, 280);
      conceptDate = addDays(lastPeriod, 14); // Estimated conception
    } else if (calculationMethod === 'conception' && conceptionDate) {
      // 266 days (38 weeks) from conception
      dueDate = addDays(conceptionDate, 266);
      conceptDate = conceptionDate;
    } else {
      return;
    }
    
    const today = new Date();
    
    // Calculate gestational age
    const conceptToNow = Math.floor((today.getTime() - conceptDate.getTime()) / (1000 * 60 * 60 * 24));
    const gestationalDays = conceptToNow + 14; // Add 14 days to get gestational age from LMP
    const gestationalAge = {
      weeks: Math.floor(gestationalDays / 7),
      days: gestationalDays % 7
    };
    
    // Calculate trimester dates
    const firstTrimester = addWeeks(conceptDate, -2 + 13); // End of first trimester (13 weeks)
    const secondTrimester = addWeeks(conceptDate, -2 + 26); // End of second trimester (26 weeks)
    const thirdTrimester = dueDate; // End of third trimester
    
    // Calculate key milestones
    const heartbeat = addWeeks(conceptDate, -2 + 6); // Heartbeat detectable ~6 weeks
    const movement = addWeeks(conceptDate, -2 + 18); // Movement felt ~18 weeks
    const viability = addWeeks(conceptDate, -2 + 24); // Viability ~24 weeks
    
    setResult({
      dueDate,
      gestationalAge,
      trimesterDates: { first: firstTrimester, second: secondTrimester, third: thirdTrimester },
      milestones: { heartbeat, movement, viability }
    });
  };

  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Pregnancy Due Date Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Calculate your estimated due date based on your last period or conception date.
        </p>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <Tabs defaultValue="lmp" onValueChange={(value) => setCalculationMethod(value as 'lmp' | 'conception')}>
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="lmp">Last Menstrual Period</TabsTrigger>
                <TabsTrigger value="conception">Conception Date</TabsTrigger>
              </TabsList>
              
              <TabsContent value="lmp" className="mt-4">
                <div className="grid gap-4">
                  <Label htmlFor="last-period">First Day of Last Period</Label>
                  <div className="border rounded-md p-2">
                    <Calendar
                      mode="single"
                      selected={lastPeriod}
                      onSelect={setLastPeriod}
                      disabled={(date) => isAfter(date, today) || isBefore(date, oneYearAgo)}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="conception" className="mt-4">
                <div className="grid gap-4">
                  <Label htmlFor="conception-date">Conception Date</Label>
                  <div className="border rounded-md p-2">
                    <Calendar
                      mode="single"
                      selected={conceptionDate}
                      onSelect={setConceptionDate}
                      disabled={(date) => isAfter(date, today) || isBefore(date, oneYearAgo)}
                      className="mx-auto"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <Button 
              className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 w-full mt-6"
              onClick={calculateDueDate}
              disabled={(calculationMethod === 'lmp' && !lastPeriod) || (calculationMethod === 'conception' && !conceptionDate)}
            >
              Calculate Due Date
            </Button>
          </CardContent>
        </Card>

        {result && (
          <Card className="mb-8 border-bloom-200">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-bloom-600 dark:text-bloom-400">Your Due Date</h2>
                <p className="text-3xl font-bold mt-2">{format(result.dueDate, 'MMMM d, yyyy')}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {result.gestationalAge.weeks > 0 ? (
                    <>
                      Currently {result.gestationalAge.weeks} weeks{result.gestationalAge.days > 0 ? ` and ${result.gestationalAge.days} days` : ''} pregnant
                    </>
                  ) : (
                    <>Pregnancy not yet detectable</>
                  )}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Trimesters</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">First Trimester:</span> Until {format(result.trimesterDates.first, 'MMMM d, yyyy')}
                    </div>
                    <div>
                      <span className="font-medium">Second Trimester:</span> Until {format(result.trimesterDates.second, 'MMMM d, yyyy')}
                    </div>
                    <div>
                      <span className="font-medium">Third Trimester:</span> Until {format(result.trimesterDates.third, 'MMMM d, yyyy')}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-medium">Key Milestones</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Heartbeat Detectable:</span> Around {format(result.milestones.heartbeat, 'MMMM d, yyyy')}
                    </div>
                    <div>
                      <span className="font-medium">First Movements:</span> Around {format(result.milestones.movement, 'MMMM d, yyyy')}
                    </div>
                    <div>
                      <span className="font-medium">Viability:</span> Around {format(result.milestones.viability, 'MMMM d, yyyy')}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">About Due Date Calculation</h2>
          <p className="mb-4">
            Your due date is an estimate of when your baby will be born. Only about 5% of babies are born exactly on their due date.
            Most babies are born within a window of about two weeks before or after the due date.
          </p>
          <p>
            <strong>Important:</strong> This calculator provides an estimate based on average pregnancy duration. 
            Your healthcare provider might adjust your due date based on ultrasound measurements or other factors.
          </p>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Track Your Pregnancy with Bloom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PregnancyDueDateCalculator;
