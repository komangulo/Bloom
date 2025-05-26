
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { format, addDays, isAfter, isBefore } from 'date-fns';

const DueDateCalculatorByUltrasound = () => {
  const [scanDate, setScanDate] = useState<Date | undefined>(undefined);
  const [measurementType, setMeasurementType] = useState<'crl' | 'bpd' | 'fl' | 'ac'>('crl');
  const [measurementValue, setMeasurementValue] = useState<string>('');
  const [result, setResult] = useState<{
    gestationalAge: { weeks: number; days: number };
    lmpEstimate: Date;
    dueDate: Date;
    trimesterDates: { first: Date; second: Date; third: Date };
  } | null>(null);

  const calculateDueDate = () => {
    if (!scanDate || !measurementValue || isNaN(parseFloat(measurementValue))) return;
    
    const measurement = parseFloat(measurementValue);
    let gestationalAgeInDays = 0;
    
    // Calculate gestational age based on measurement type and value
    // These are simplified formulas and would need to be replaced with more accurate calculations in a real app
    switch (measurementType) {
      case 'crl':
        // Crown-Rump Length (CRL) in mm - first trimester
        if (measurement < 10) {
          gestationalAgeInDays = 42 + measurement * 1.1;
        } else {
          gestationalAgeInDays = 52 + measurement * 0.6;
        }
        break;
      case 'bpd':
        // Biparietal Diameter (BPD) in mm - second trimester+
        gestationalAgeInDays = 42 + measurement * 0.53;
        break;
      case 'fl':
        // Femur Length (FL) in mm - second trimester+
        gestationalAgeInDays = 55 + measurement * 0.81;
        break;
      case 'ac':
        // Abdominal Circumference (AC) in mm - second trimester+
        gestationalAgeInDays = 45 + measurement * 0.14;
        break;
    }
    
    // Calculate LMP based on gestational age and scan date
    const lmpEstimate = new Date(scanDate.getTime() - (gestationalAgeInDays * 24 * 60 * 60 * 1000));
    
    // Calculate due date (280 days from LMP)
    const dueDate = addDays(lmpEstimate, 280);
    
    // Calculate gestational age in weeks and days
    const gestationalAgeInWeeks = Math.floor(gestationalAgeInDays / 7);
    const gestationalAgeDays = Math.floor(gestationalAgeInDays % 7);
    
    // Calculate trimester dates
    const firstTrimester = addDays(lmpEstimate, 13 * 7); // End of first trimester (13 weeks)
    const secondTrimester = addDays(lmpEstimate, 26 * 7); // End of second trimester (26 weeks)
    const thirdTrimester = dueDate; // End of third trimester (40 weeks)
    
    setResult({
      gestationalAge: { weeks: gestationalAgeInWeeks, days: gestationalAgeDays },
      lmpEstimate,
      dueDate,
      trimesterDates: { first: firstTrimester, second: secondTrimester, third: thirdTrimester }
    });
  };

  const getMeasurementTypeLabel = () => {
    switch (measurementType) {
      case 'crl': return 'Crown-Rump Length (mm)';
      case 'bpd': return 'Biparietal Diameter (mm)';
      case 'fl': return 'Femur Length (mm)';
      case 'ac': return 'Abdominal Circumference (mm)';
      default: return 'Measurement';
    }
  };

  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          Due Date Calculator by Ultrasound
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Calculate your due date based on ultrasound measurements.
        </p>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="scan-date">Ultrasound Date</Label>
                <div className="border rounded-md p-2">
                  <Calendar
                    mode="single"
                    selected={scanDate}
                    onSelect={setScanDate}
                    disabled={(date) => isAfter(date, today) || isBefore(date, sixMonthsAgo)}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="measurement-type">Measurement Type</Label>
                <Select value={measurementType} onValueChange={(value) => setMeasurementType(value as 'crl' | 'bpd' | 'fl' | 'ac')}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select measurement type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crl">Crown-Rump Length (CRL)</SelectItem>
                    <SelectItem value="bpd">Biparietal Diameter (BPD)</SelectItem>
                    <SelectItem value="fl">Femur Length (FL)</SelectItem>
                    <SelectItem value="ac">Abdominal Circumference (AC)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="measurement-value">{getMeasurementTypeLabel()}</Label>
                <Input
                  id="measurement-value"
                  type="number"
                  step="0.1"
                  min="0"
                  value={measurementValue}
                  onChange={(e) => setMeasurementValue(e.target.value)}
                  placeholder="Enter measurement in mm"
                />
              </div>

              <Button 
                className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 w-full mt-2"
                onClick={calculateDueDate}
                disabled={!scanDate || !measurementValue || isNaN(parseFloat(measurementValue))}
              >
                Calculate Due Date
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-medium mb-3">Ultrasound Results</h3>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold">{format(result.dueDate, 'MMMM d, yyyy')}</p>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Estimated Due Date</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Gestational Age at Scan:</span>{' '}
                    {result.gestationalAge.weeks} weeks{result.gestationalAge.days > 0 ? ` and ${result.gestationalAge.days} days` : ''}
                  </div>
                  
                  <div>
                    <span className="font-medium">Estimated LMP:</span>{' '}
                    {format(result.lmpEstimate, 'MMMM d, yyyy')}
                  </div>
                  
                  <div>
                    <span className="font-medium">First Trimester End:</span>{' '}
                    {format(result.trimesterDates.first, 'MMMM d, yyyy')}
                  </div>
                  
                  <div>
                    <span className="font-medium">Second Trimester End:</span>{' '}
                    {format(result.trimesterDates.second, 'MMMM d, yyyy')}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">About Ultrasound Dating</h2>
          <p className="mb-4">
            Ultrasound measurements provide a more accurate way to date a pregnancy, especially when the last menstrual period 
            date is uncertain or when periods are irregular.
          </p>
          <p className="mb-4">
            First trimester ultrasounds (using Crown-Rump Length) are the most accurate for dating a pregnancy. 
            Later measurements like BPD, FL, and AC can still be useful but have wider error margins.
          </p>
          <p>
            <strong>Important:</strong> This calculator provides an estimate based on standard growth formulas. 
            Your healthcare provider might use different formulas or consider additional factors when establishing your due date.
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

export default DueDateCalculatorByUltrasound;
