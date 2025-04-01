
import { useState } from 'react';
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

interface HealthAnalysisProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Sample data for charts
const cycleData = [
  { month: 'Jan', length: 28, avgFlow: 3 },
  { month: 'Feb', length: 29, avgFlow: 4 },
  { month: 'Mar', length: 26, avgFlow: 3 },
  { month: 'Apr', length: 28, avgFlow: 2 },
  { month: 'May', length: 27, avgFlow: 3 },
  { month: 'Jun', length: 30, avgFlow: 4 },
];

const symptomData = [
  { name: 'Cramps', value: 60 },
  { name: 'Headache', value: 45 },
  { name: 'Bloating', value: 80 },
  { name: 'Back Pain', value: 30 },
  { name: 'Fatigue', value: 70 },
  { name: 'Mood Swings', value: 55 },
];

export function HealthAnalysis({ open, onOpenChange }: HealthAnalysisProps) {
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
                Your cycle has been relatively stable over the past 6 months, averaging 28 days.
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
                <li>Your cycle length has remained consistent between 26-30 days</li>
                <li>Your flow intensity averages at 3/5</li>
                <li>Prediction accuracy is improving with each logged cycle</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="symptoms" className="space-y-4">
            <div className="rounded-md bg-slate-50 p-4 dark:bg-slate-800">
              <h3 className="text-lg font-medium mb-2">Symptom Frequency</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on your logs, these are your most common symptoms.
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
                <li>Bloating is your most common symptom (80% of cycles)</li>
                <li>Symptoms typically start 2 days before your period</li>
                <li>Cramps tend to be most severe on day 1 of your period</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end">
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
