
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { addDays, format, isAfter, isBefore } from 'date-fns';

const ImplantationCalculator = () => {
  const [ovulationDate, setOvulationDate] = useState<Date | undefined>(undefined);
  const [result, setResult] = useState<{
    implantationWindow: { start: Date; end: Date };
    implantationSymptoms: { start: Date; end: Date };
    implantationBleeding: { start: Date; end: Date };
    hcgDetection: Date;
    missedPeriod: Date;
  } | null>(null);

  const calculateImplantation = () => {
    if (!ovulationDate) return;
    
    // Implantation typically occurs 6-12 days after ovulation
    const implantationStart = addDays(ovulationDate, 6);
    const implantationEnd = addDays(ovulationDate, 12);
    
    // Implantation symptoms can appear shortly after implantation
    const symptomsStart = addDays(implantationStart, 1);
    const symptomsEnd = addDays(implantationEnd, 3);
    
    // Implantation bleeding may occur when the embryo implants
    const bleedingStart = implantationStart;
    const bleedingEnd = addDays(implantationEnd, 2);
    
    // hCG can usually be detected 2-3 days after implantation (using average implantation day 9)
    const hcgDetection = addDays(ovulationDate, 12); // 9 (avg implantation) + 3 days
    
    // Missed period typically occurs ~14 days after ovulation
    const missedPeriod = addDays(ovulationDate, 14);
    
    setResult({
      implantationWindow: { start: implantationStart, end: implantationEnd },
      implantationSymptoms: { start: symptomsStart, end: symptomsEnd },
      implantationBleeding: { start: bleedingStart, end: bleedingEnd },
      hcgDetection,
      missedPeriod
    });
  };

  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);
  const sixMonthsFromNow = new Date();
  sixMonthsFromNow.setMonth(today.getMonth() + 6);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Implantation Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Calculate when implantation might occur after ovulation.
        </p>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="ovulation-date">Ovulation Date</Label>
                <div className="border rounded-md p-2">
                  <Calendar
                    mode="single"
                    selected={ovulationDate}
                    onSelect={setOvulationDate}
                    disabled={(date) => isAfter(date, sixMonthsFromNow) || isBefore(date, sixMonthsAgo)}
                    className="mx-auto"
                  />
                </div>
              </div>

              <Button 
                className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 w-full mt-2"
                onClick={calculateImplantation}
                disabled={!ovulationDate}
              >
                Calculate Implantation Window
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-medium mb-3">Implantation Timeline</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-bloom-600">Implantation Window:</span>{' '}
                    {format(result.implantationWindow.start, 'MMMM d')} - {format(result.implantationWindow.end, 'MMMM d, yyyy')}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      This is when a fertilized egg may implant in your uterine lining.
                    </p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-amber-600">Possible Implantation Symptoms:</span>{' '}
                    {format(result.implantationSymptoms.start, 'MMMM d')} - {format(result.implantationSymptoms.end, 'MMMM d, yyyy')}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      You might experience mild cramping, spotting, or other subtle symptoms during this time.
                    </p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-red-600">Possible Implantation Bleeding:</span>{' '}
                    {format(result.implantationBleeding.start, 'MMMM d')} - {format(result.implantationBleeding.end, 'MMMM d, yyyy')}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Light spotting may occur when the embryo attaches to the uterine lining.
                    </p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-green-600">Earliest hCG Detection:</span>{' '}
                    {format(result.hcgDetection, 'MMMM d, yyyy')}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      A sensitive pregnancy test might detect hCG around this date.
                    </p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-purple-600">Expected Missed Period:</span>{' '}
                    {format(result.missedPeriod, 'MMMM d, yyyy')}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      The day your period would typically be due based on your ovulation date.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">About Implantation</h2>
          <p className="mb-4">
            Implantation is the process where a fertilized egg (blastocyst) attaches to the uterine lining. 
            This typically occurs 6-12 days after ovulation, with the average being around 9 days.
          </p>
          <p className="mb-4">
            Not everyone experiences noticeable implantation symptoms, and many early pregnancy symptoms 
            don't begin until after implantation has occurred.
          </p>
          <p>
            <strong>Important:</strong> This calculator provides estimates based on average data. 
            Individual experiences can vary significantly.
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

export default ImplantationCalculator;
