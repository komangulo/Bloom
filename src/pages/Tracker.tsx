
import React, { useState } from 'react';
import { CalendarView } from '@/components/ui/calendar/CalendarView';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Droplets, HeartPulse, Thermometer } from 'lucide-react';
import { addDays, subDays } from 'date-fns';

const Tracker = () => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  
  // Sample data - in a real app, this would come from user input/database
  const today = new Date();
  const periodStartDate = subDays(today, 3);
  const periodDays = Array.from({ length: 5 }, (_, i) => addDays(periodStartDate, i));
  
  const ovulationDay = subDays(today, 14);
  const fertileDays = Array.from({ length: 5 }, (_, i) => subDays(ovulationDay, i - 2));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-8">Cycle Tracker</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card className="bg-bloom-50 dark:bg-bloom-900/10 border border-bloom-100 dark:border-bloom-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-bloom-700 dark:text-bloom-300 flex items-center">
                  <Droplets className="h-4 w-4 mr-2" />
                  Next Period
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-bloom-600 dark:text-bloom-400">In 25 days</p>
                <p className="text-sm text-bloom-600/70 dark:text-bloom-400/70">May 12, 2024</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-purple-700 dark:text-purple-300 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Fertile Window
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">In 12 days</p>
                <p className="text-sm text-purple-600/70 dark:text-purple-400/70">April 29 - May 3</p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300 flex items-center">
                  <HeartPulse className="h-4 w-4 mr-2" />
                  Cycle Length
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">28 days</p>
                <p className="text-sm text-blue-600/70 dark:text-blue-400/70">Average from past 6 cycles</p>
              </CardContent>
            </Card>
          </div>
          
          <CalendarView 
            selectedDay={selectedDay} 
            setSelectedDay={setSelectedDay}
            periodDays={periodDays}
            ovulationDay={ovulationDay}
            fertileDays={fertileDays}
          />
        </div>
        
        <div className="md:col-span-1">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">
                {selectedDay.toDateString() === new Date().toDateString() ? 'Today' : selectedDay.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="symptoms" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="symptoms">Symptoms</TabsTrigger>
                  <TabsTrigger value="mood">Mood</TabsTrigger>
                  <TabsTrigger value="notes">Notes</TabsTrigger>
                </TabsList>
                
                <TabsContent value="symptoms" className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="justify-start h-auto py-2 px-3">
                      <Droplets className="h-4 w-4 mr-2 text-bloom-500" />
                      <span className="text-sm">Flow</span>
                    </Button>
                    
                    <Button variant="outline" className="justify-start h-auto py-2 px-3">
                      <Thermometer className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm">Temperature</span>
                    </Button>
                    
                    {['Cramps', 'Headache', 'Bloating', 'Tender Breasts', 'Acne', 'Fatigue'].map((symptom, i) => (
                      <Button key={i} variant="outline" className="justify-start h-auto py-2 px-3">
                        <span className="text-sm">{symptom}</span>
                      </Button>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-bloom-500 to-purple-500">
                    Log Symptoms
                  </Button>
                </TabsContent>
                
                <TabsContent value="mood" className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {['Happy', 'Calm', 'Energetic', 'Sad', 'Irritable', 'Anxious', 'Tired', 'Sensitive'].map((mood, i) => (
                      <Button key={i} variant="outline" className="justify-start h-auto py-2 px-3">
                        <span className="text-sm">{mood}</span>
                      </Button>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-bloom-500 to-purple-500">
                    Log Mood
                  </Button>
                </TabsContent>
                
                <TabsContent value="notes" className="space-y-4">
                  <textarea 
                    className="w-full h-32 rounded-md border border-gray-300 dark:border-gray-600 bg-transparent p-3 text-sm"
                    placeholder="Add personal notes for this day..."
                  ></textarea>
                  
                  <Button className="w-full bg-gradient-to-r from-bloom-500 to-purple-500">
                    Save Notes
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <div className="mt-6">
            <Card className="border border-gray-200 dark:border-gray-700 shadow-sm bg-purple-50 dark:bg-purple-900/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-purple-700 dark:text-purple-300">Bloom Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Based on your recent cycles, you may experience PMS symptoms in approximately 3 days. Prepare with self-care and rest.
                </p>
                <Button variant="link" className="p-0 h-auto mt-2 text-purple-600 dark:text-purple-400">
                  Get more personalized insights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
