import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Legend 
} from 'recharts';
import { getUserPeriods, getUserSymptomStats, getUserSymptomLogs } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

interface HealthAnalysisProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function HealthAnalysis({ open, onOpenChange }: HealthAnalysisProps) {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [cycleData, setCycleData] = useState<any[]>([]);
  const [symptomData, setSymptomData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!user) return;
      
      setLoading(true);
      setError(null);
      
      try {
        // Obtener periodos reales (ciclo)
        const periods = await getUserPeriods(user.id, 12);
        if (periods && periods.length > 1) {
          const sorted = periods.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
          const formattedCycleData = sorted.map((period, i, arr) => {
            if (i === 0) return null;
            const prev = arr[i - 1];
            const cycleLength = (new Date(period.start_date) - new Date(prev.start_date)) / (1000 * 60 * 60 * 24);
            return {
              month: new Date(period.start_date).toLocaleString('default', { month: 'short' }),
              length: cycleLength,
              avgFlow: period.flow_intensity || null
            };
          }).filter(Boolean);
          setCycleData(formattedCycleData);
        } else {
          setCycleData([]);
        }
        // Obtener logs diarios de síntomas y calcular frecuencia
        const logs = await getUserSymptomLogs(user.id);
        const freq: Record<string, number> = {};
        logs.forEach(log => {
          (log.symptoms || []).forEach((sym: string) => {
            freq[sym] = (freq[sym] || 0) + 1;
          });
        });
        const totalLogs = logs.length || 1;
        const formattedSymptomData = Object.entries(freq)
          .map(([name, count]) => ({
            name,
            value: Math.round((count as number) * 100 / totalLogs)
          }))
          .sort((a, b) => b.value - a.value);
        setSymptomData(formattedSymptomData);
      } catch (err) {
        setError('Error loading health data. Please try again later.');
        console.error('Error fetching health data:', err);
      } finally {
        setLoading(false);
      }
    }

    if (open) {
      fetchData();
    }
  }, [open, user]);

  if (loading) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px]">
          <div className="flex flex-col items-center justify-center h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-bloom-500" />
            <p className="mt-4 text-muted-foreground">Loading your health analysis...</p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (error) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[800px]">
          <div className="flex flex-col items-center justify-center h-[400px]">
            <p className="text-red-500">{error}</p>
            <Button onClick={() => onOpenChange(false)} className="mt-4">Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Health Analysis</DialogTitle>
          <DialogDescription>
            Detailed analysis of your cycle and symptoms over time.
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="cycle" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cycle">Cycle Analysis</TabsTrigger>
            <TabsTrigger value="symptoms">Symptom Frequency</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cycle" className="space-y-4">
            <div className="rounded-md bg-slate-50 p-4 dark:bg-slate-800">
              <h3 className="text-lg font-medium mb-2">Cycle Length Trend</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Analysis of your cycle patterns over the last {cycleData.length} months.
              </p>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cycleData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="length" 
                      stroke="#8884d8" 
                      name="Cycle Length (days)"
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="avgFlow" 
                      stroke="#82ca9d" 
                      name="Average Flow (1-5)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Key Insights:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Average cycle length: {Math.round(cycleData.reduce((acc, curr) => acc + curr.length, 0) / cycleData.length)} days</li>
                <li>Average flow intensity: {(cycleData.reduce((acc, curr) => acc + curr.avgFlow, 0) / cycleData.length).toFixed(1)}/5</li>
                <li>Cycle regularity: {Math.abs(cycleData[0]?.length - cycleData[cycleData.length-1]?.length) <= 3 ? 'Regular' : 'Irregular'}</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="symptoms" className="space-y-4">
            <div className="rounded-md bg-slate-50 p-4 dark:bg-slate-800">
              <h3 className="text-lg font-medium mb-2">Symptom Frequency</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Analysis of your most common symptoms based on your logs.
              </p>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={symptomData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" domain={[0, 100]} />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip formatter={(value) => [`${value}%`, 'Frequency']} />
                    <Bar 
                      dataKey="value" 
                      fill="#8884d8" 
                      name="Frequency (%)" 
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">
                <strong>Key Insights:</strong>
              </p>
              <ul className="list-disc pl-5 space-y-1">
                {symptomData.length > 0 && (
                  <>
                    <li>{symptomData[0].name} is your most common symptom ({symptomData[0].value}% of cycles)</li>
                    <li>You typically experience {symptomData.filter(s => s.value > 50).length} main symptoms</li>
                    <li>Pattern: {symptomData.some(s => s.value > 75) ? 'Consistent symptoms' : 'Variable symptoms'}</li>
                  </>
                )}
              </ul>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between">
          <p className="text-xs text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
