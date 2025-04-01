
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { addDays, addWeeks, format, isAfter, isBefore } from 'date-fns';

const IvfFetDueDateCalculator = () => {
  const [transferType, setTransferType] = useState<'fresh' | 'frozen'>('fresh');
  const [transferDate, setTransferDate] = useState<Date | undefined>(undefined);
  const [embryoAge, setEmbryoAge] = useState<'3' | '5' | '6'>('5');
  const [result, setResult] = useState<{
    dueDate: Date;
    currentWeek: number;
    trimesterDates: { first: Date; second: Date; third: Date };
  } | null>(null);

  const calculateDueDate = () => {
    if (!transferDate) return;
    
    let dueDate: Date;

    // Calculate due date based on transfer type and embryo age
    if (transferType === 'fresh') {
      if (embryoAge === '3') {
        // For 3-day embryos: 280 - 3 - 14 = 263 days from transfer
        dueDate = addDays(transferDate, 263);
      } else if (embryoAge === '5') {
        // For 5-day embryos: 280 - 5 - 14 = 261 days from transfer
        dueDate = addDays(transferDate, 261);
      } else {
        // For 6-day embryos: 280 - 6 - 14 = 260 days from transfer
        dueDate = addDays(transferDate, 260);
      }
    } else {
      // Frozen embryo transfers
      if (embryoAge === '3') {
        // For 3-day embryos: 280 - 3 = 277 days from transfer
        dueDate = addDays(transferDate, 277);
      } else if (embryoAge === '5') {
        // For 5-day embryos: 280 - 5 = 275 days from transfer
        dueDate = addDays(transferDate, 275);
      } else {
        // For 6-day embryos: 280 - 6 = 274 days from transfer
        dueDate = addDays(transferDate, 274);
      }
    }
    
    // Calculate gestational age (LMP equivalent)
    let lmpEquivalent: Date;
    if (transferType === 'fresh') {
      // For fresh transfers, LMP is roughly embryo age + 14 days before transfer
      lmpEquivalent = addDays(transferDate, -14 - parseInt(embryoAge));
    } else {
      // For frozen transfers, use embryo age before transfer
      lmpEquivalent = addDays(transferDate, -parseInt(embryoAge));
    }
    
    // Calculate current week based on LMP equivalent
    const today = new Date();
    const daysFromLmp = Math.floor((today.getTime() - lmpEquivalent.getTime()) / (1000 * 60 * 60 * 24));
    const currentWeek = Math.floor(daysFromLmp / 7) + 1;
    
    // Calculate trimester dates
    const firstTrimester = addWeeks(lmpEquivalent, 13); // End of first trimester
    const secondTrimester = addWeeks(lmpEquivalent, 26); // End of second trimester
    const thirdTrimester = dueDate; // End of third trimester
    
    setResult({
      dueDate,
      currentWeek,
      trimesterDates: { first: firstTrimester, second: secondTrimester, third: thirdTrimester }
    });
  };

  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(today.getFullYear() + 1);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-bloom-500 to-purple-500">
          IVF and FET Due Date Calculator
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Calculate your due date after IVF or frozen embryo transfer.
        </p>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="grid gap-6">
              <div>
                <Label className="mb-2 block">Transfer Type</Label>
                <RadioGroup 
                  defaultValue={transferType} 
                  onValueChange={(value) => setTransferType(value as 'fresh' | 'frozen')}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fresh" id="fresh" />
                    <Label htmlFor="fresh">Fresh Embryo Transfer</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="frozen" id="frozen" />
                    <Label htmlFor="frozen">Frozen Embryo Transfer (FET)</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="transfer-date">Embryo Transfer Date</Label>
                <div className="border rounded-md p-2">
                  <Calendar
                    mode="single"
                    selected={transferDate}
                    onSelect={setTransferDate}
                    disabled={(date) => isAfter(date, today) || isBefore(date, oneYearAgo)}
                    className="mx-auto"
                  />
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="embryo-age">Embryo Age at Transfer</Label>
                <Select value={embryoAge} onValueChange={(value) => setEmbryoAge(value as '3' | '5' | '6')}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select embryo age" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3-Day Embryo</SelectItem>
                    <SelectItem value="5">5-Day Embryo (Blastocyst)</SelectItem>
                    <SelectItem value="6">6-Day Embryo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="bg-gradient-to-r from-bloom-500 to-purple-500 hover:from-bloom-600 hover:to-purple-600 w-full mt-2"
                onClick={calculateDueDate}
                disabled={!transferDate}
              >
                Calculate Due Date
              </Button>
            </div>

            {result && (
              <div className="mt-6 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-medium mb-3">Your IVF Pregnancy</h3>
                <div className="text-center mb-4">
                  <p className="text-3xl font-bold">{format(result.dueDate, 'MMMM d, yyyy')}</p>
                  <p className="text-lg text-gray-600 dark:text-gray-400">Estimated Due Date</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="font-medium">Current Gestational Age:</span>{' '}
                    {result.currentWeek > 0 ? `${result.currentWeek} weeks` : 'Not yet calculable'}
                  </div>
                  
                  <div>
                    <span className="font-medium">First Trimester:</span>{' '}
                    Until {format(result.trimesterDates.first, 'MMMM d, yyyy')}
                  </div>
                  
                  <div>
                    <span className="font-medium">Second Trimester:</span>{' '}
                    Until {format(result.trimesterDates.second, 'MMMM d, yyyy')}
                  </div>
                  
                  <div>
                    <span className="font-medium">Third Trimester:</span>{' '}
                    Until {format(result.trimesterDates.third, 'MMMM d, yyyy')}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">About IVF Due Date Calculations</h2>
          <p className="mb-4">
            Due date calculations for IVF and FET pregnancies differ from traditional methods because the exact age 
            of the embryo at transfer is known, removing some of the estimation involved in natural conception.
          </p>
          <p className="mb-4">
            For fresh embryo transfers, the calculation accounts for both the age of the embryo and the typical 14 days 
            from the start of the last menstrual period to ovulation in a natural cycle.
          </p>
          <p>
            <strong>Important:</strong> This calculator provides an estimate. Your healthcare provider might adjust 
            your due date based on ultrasound measurements and other clinical factors.
          </p>
        </div>

        <div className="text-center">
          <Link to="/signup">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Track Your IVF Journey with Bloom
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IvfFetDueDateCalculator;
