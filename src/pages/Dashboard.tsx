
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, HeartPulse, LineChart, Clock, Bell, Settings } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { LogSymptomsModal } from '@/components/LogSymptomsModal';
import { HealthAnalysis } from '@/components/HealthAnalysis';
import { NotificationsModal } from '@/components/NotificationsModal';
import { SettingsModal } from '@/components/SettingsModal';

const Dashboard = () => {
  const { user } = useUser();
  const [currentCycle, setCurrentCycle] = useState({
    day: 14,
    length: 28,
    nextPeriod: "Jun 12",
    fertile: "May 28 - Jun 2"
  });
  
  const recentSymptoms = [
    { id: 1, name: "Cramps", date: "Yesterday" },
    { id: 2, name: "Headache", date: "2 days ago" },
    { id: 3, name: "Bloating", date: "3 days ago" }
  ];

  // Modal states
  const [logSymptomsOpen, setLogSymptomsOpen] = useState(false);
  const [healthAnalysisOpen, setHealthAnalysisOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, {user?.firstName || 'User'}</h1>
          <p className="text-gray-600 dark:text-gray-300">Here's your health dashboard</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button variant="outline" className="mr-2" onClick={() => setNotificationsOpen(true)}>
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="outline" onClick={() => setSettingsOpen(true)}>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Current Cycle</CardTitle>
            <CardDescription>Day {currentCycle.day} of {currentCycle.length}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-gradient-to-r from-bloom-400 to-bloom-600" 
                style={{ width: `${(currentCycle.day / currentCycle.length) * 100}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Next period</p>
                <p className="font-medium">{currentCycle.nextPeriod}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Fertile window</p>
                <p className="font-medium">{currentCycle.fertile}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/tracker" className="w-full">
              <Button variant="outline" className="w-full">
                <CalendarIcon className="mr-2 h-4 w-4" />
                Go to Tracker
              </Button>
            </Link>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Recent Symptoms</CardTitle>
            <CardDescription>Your logged symptoms</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {recentSymptoms.map(symptom => (
                <li key={symptom.id} className="flex justify-between items-center">
                  <span className="flex items-center">
                    <HeartPulse className="h-4 w-4 mr-2 text-bloom-500" />
                    {symptom.name}
                  </span>
                  <span className="text-xs text-gray-500">{symptom.date}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => setLogSymptomsOpen(true)}>
              <Clock className="mr-2 h-4 w-4" />
              Log New Symptoms
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Health Insights</CardTitle>
            <CardDescription>Based on your data</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Your cycle has been regular for the last 3 months. Patterns suggest you may experience cramps around day 1-2 of your period.
            </p>
            <div className="h-[100px] bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
              <LineChart className="h-10 w-10 text-gray-400" />
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" onClick={() => setHealthAnalysisOpen(true)}>
              View Detailed Analysis
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="bg-bloom-50 dark:bg-slate-800 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h2 className="text-xl font-bold mb-2">Unlock Premium Features</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">
              Get personalized insights, advanced analytics, and more.
            </p>
          </div>
          <Link to="/premium">
            <Button className="bg-gradient-to-r from-bloom-500 to-purple-500">
              Upgrade to Premium
            </Button>
          </Link>
        </div>
      </div>

      {/* Modals */}
      <LogSymptomsModal open={logSymptomsOpen} onOpenChange={setLogSymptomsOpen} />
      <HealthAnalysis open={healthAnalysisOpen} onOpenChange={setHealthAnalysisOpen} />
      <NotificationsModal open={notificationsOpen} onOpenChange={setNotificationsOpen} />
      <SettingsModal open={settingsOpen} onOpenChange={setSettingsOpen} />
    </div>
  );
};

export default Dashboard;
