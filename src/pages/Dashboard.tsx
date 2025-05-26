import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, HeartPulse, LineChart as LineChartIcon, Clock, Bell, Settings } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { LogSymptomsModal } from '@/components/LogSymptomsModal';
import { HealthAnalysis } from '@/components/HealthAnalysis';
import { NotificationsModal } from '@/components/NotificationsModal';
import { SettingsModal } from '@/components/SettingsModal';
import { getUserPeriods, supabase } from '@/lib/supabase';
import { addDays, format, differenceInDays } from 'date-fns';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, YAxis, LineChart, Line, CartesianGrid, Legend } from 'recharts';

const Dashboard = () => {
  const { user } = useUser();
  const [currentCycle, setCurrentCycle] = useState({
    day: 1,
    length: 28,
    nextPeriod: '',
    fertile: ''
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

  // Lista de síntomas y categorías (ejemplo simplificado, puedes expandirlo)
  const SYMPTOM_CATEGORIES = [
    {
      title: 'Sex and Sexual Desire',
      color: 'bg-pink-100',
      items: [
        'No sex', 'Protected sex', 'Unprotected sex', 'Oral sex', 'Anal sex',
        'Masturbation', 'Caresses and sensual contact', 'Sex toys', 'Orgasm',
        'High sex drive', 'Neutral sex drive', 'Low sex drive'
      ]
    },
    {
      title: 'Mood',
      color: 'bg-orange-100',
      items: [
        'Calm', 'Happy', 'Energetic', 'Active', 'Mood swings', 'Irritated', 'Sad', 'Anxious',
        'Depressed', 'Guilty', 'Obsessive thoughts', 'Low energy', 'Apathetic', 'Confused', 'Overly self-critical'
      ]
    },
    {
      title: 'Symptoms',
      color: 'bg-purple-100',
      items: [
        'All good', 'Cramps', 'Tender breasts', 'Headache', 'Acne', 'Back pain', 'Fatigue',
        'Hot flashes', 'Night sweats', 'Brain fog', 'Joint pain', 'Mouth burning', 'Cravings',
        'Insomnia', 'Abdominal pain', 'Vaginal itching', 'Vaginal dryness'
      ]
    },
    {
      title: 'Vaginal Discharge',
      color: 'bg-indigo-100',
      items: [
        'No discharge', 'Creamy', 'Watery', 'Sticky', 'Egg white', 'Intermenstrual spotting', 'Unusual', 'White and lumpy', 'Gray'
      ]
    },
    {
      title: 'Digestion and Stool',
      color: 'bg-pink-200',
      items: ['Nausea', 'Bloating', 'Constipation', 'Diarrhea']
    },
    {
      title: 'Pregnancy Test',
      color: 'bg-orange-200',
      items: ['No test', 'Positive', 'Negative', 'Faint line']
    },
    {
      title: 'Ovulation Test',
      color: 'bg-cyan-100',
      items: ['No test', 'Test: positive', 'Test: negative', 'Ovulation: my method']
    },
    {
      title: 'Other',
      color: 'bg-orange-100',
      items: ['Travel', 'Stress', 'Meditation', 'Journaling', 'Kegel exercises', 'Breathing exercises', 'Illness or injury', 'Alcohol', 'Hormone therapy']
    },
    {
      title: 'Physical Activity',
      color: 'bg-green-100',
      items: ['No exercise', 'Yoga', 'Gym', 'Aerobics and dance', 'Swimming', 'Team sports', 'Running', 'Cycling', 'Walking']
    },
    {
      title: 'Oral Contraceptives (OC)',
      color: 'bg-blue-100',
      items: ['Taken on time', 'Yesterday pill']
    },
    {
      title: 'Other Pills (not OC)',
      color: 'bg-blue-200',
      items: ['Add pill']
    },
  ];

  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showSymptomForm, setShowSymptomForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Mapeo de síntomas/categorías a emojis (basado en las imágenes)
  const SYMPTOM_EMOJIS: Record<string, string> = {
    // Sex and Sexual Desire
    'No sex': '🚫',
    'Protected sex': '🛡️',
    'Unprotected sex': '❌',
    'Oral sex': '👄',
    'Anal sex': '🍑',
    'Masturbation': '✋',
    'Caresses and sensual contact': '🤲',
    'Sex toys': '🧸',
    'Orgasm': '💥',
    'High sex drive': '🔥',
    'Neutral sex drive': '😐',
    'Low sex drive': '⬇️',
    // Mood
    'Calm': '😌',
    'Happy': '😁',
    'Energetic': '⚡',
    'Active': '🏃',
    'Mood swings': '🔄',
    'Irritated': '😠',
    'Sad': '��',
    'Anxious': '😰',
    'Depressed': '😞',
    'Guilty': '😔',
    'Obsessive thoughts': '🔁',
    'Low energy': '🥱',
    'Apathetic': '😶',
    'Confused': '😕',
    'Overly self-critical': '🤦',
    // Symptoms
    'All good': '✅',
    'Cramps': '😣',
    'Tender breasts': '🤱',
    'Headache': '🤕',
    'Acne': '🧖',
    'Back pain': '💢',
    'Fatigue': '😴',
    'Hot flashes': '🥵',
    'Night sweats': '💦',
    'Brain fog': '🌫️',
    'Joint pain': '🦵',
    'Mouth burning': '🔥👄',
    'Cravings': '🍫',
    'Insomnia': '🌙',
    'Abdominal pain': '🤢',
    'Vaginal itching': '😬',
    'Vaginal dryness': '🏜️',
    // Vaginal Discharge
    'No discharge': '🚫💧',
    'Creamy': '🥛',
    'Watery': '💧',
    'Sticky': '🕸️',
    'Egg white': '🥚',
    'Intermenstrual spotting': '🩸',
    'Unusual': '❓',
    'White and lumpy': '🧀',
    'Gray': '⚪',
    // Digestion and Stool
    'Nausea': '🤢',
    'Bloating': '🎈',
    'Constipation': '🚽',
    'Diarrhea': '💩',
    // Pregnancy Test
    'No test': '❔',
    'Positive': '➕',
    'Negative': '➖',
    'Faint line': '〰️',
    // Ovulation Test
    'Test: positive': '🟢',
    'Test: negative': '🔴',
    'Ovulation: my method': '🧬',
    // Other
    'Travel': '✈️',
    'Stress': '😫',
    'Meditation': '🧘',
    'Journaling': '📓',
    'Kegel exercises': '🏋️',
    'Breathing exercises': '🌬️',
    'Illness or injury': '🤒',
    'Alcohol': '🍷',
    'Hormone therapy': '💊',
    // Physical Activity
    'No exercise': '🚶',
    'Yoga': '🧘',
    'Gym': '🏋️',
    'Aerobics and dance': '💃',
    'Swimming': '🏊',
    'Team sports': '🏅',
    'Running': '🏃',
    'Cycling': '🚴',
    'Walking': '🚶',
    // Oral Contraceptives (OC)
    'Taken on time': '⏰',
    'Yesterday pill': '💊',
    // Other Pills (not OC)
    'Add pill': '➕💊',
  };

  const [miniSymptomData, setMiniSymptomData] = useState<any[]>([]);
  const [miniCycleData, setMiniCycleData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchCycle() {
      if (!user) return;
      const periods = await getUserPeriods(user.id, 12);
      if (periods && periods.length > 0) {
        // Ordenar por fecha de inicio ascendente
        const sorted = periods.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
        const last = sorted[sorted.length - 1];
        const prev = sorted.length > 1 ? sorted[sorted.length - 2] : null;
        const today = new Date();
        // Día del ciclo actual
        const day = differenceInDays(today, new Date(last.start_date)) + 1;
        // Longitud del ciclo (si hay dos periodos, usa la diferencia)
        const length = prev ? differenceInDays(new Date(last.start_date), new Date(prev.start_date)) : 28;
        // Próximo periodo estimado
        const nextPeriodDate = addDays(new Date(last.start_date), length);
        const nextPeriod = format(nextPeriodDate, 'MMM d, yyyy');
        // Ventana fértil: 5 días antes y 5 después de la ovulación (ovulación = ciclo - 14)
        const ovulationDay = addDays(new Date(last.start_date), length - 14);
        const fertileStart = addDays(ovulationDay, -5);
        const fertileEnd = addDays(ovulationDay, 5);
        const fertile = `${format(fertileStart, 'MMM d')} - ${format(fertileEnd, 'MMM d')}`;
        setCurrentCycle({ day, length, nextPeriod, fertile });
      }
    }
    fetchCycle();
  }, [user]);

  useEffect(() => {
    async function fetchMiniSymptomData() {
      if (!user) return;
      const { data: logs, error } = await supabase
        .from('symptom_logs')
        .select('*')
        .eq('user_id', user.id);
      if (error || !logs) return;
      const freq: Record<string, number> = {};
      logs.forEach(log => {
        (log.symptoms || []).forEach((sym: string) => {
          freq[sym] = (freq[sym] || 0) + 1;
        });
      });
      const totalLogs = logs.length || 1;
      const formatted = Object.entries(freq)
        .map(([name, count]) => ({ name, value: Math.round((count as number) * 100 / totalLogs) }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5); // top 5
      setMiniSymptomData(formatted);
    }
    fetchMiniSymptomData();
  }, [user]);

  useEffect(() => {
    async function fetchMiniCycleData() {
      if (!user) return;
      const periods = await getUserPeriods(user.id, 7); // 7 para obtener 6 diferencias
      if (periods && periods.length > 1) {
        const sorted = periods.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
        const formatted = sorted.map((period, i, arr) => {
          if (i === 0) return null;
          const prev = arr[i - 1];
          const cycleLength = (new Date(period.start_date) - new Date(prev.start_date)) / (1000 * 60 * 60 * 24);
          return {
            month: new Date(period.start_date).toLocaleString('default', { month: 'short' }),
            length: cycleLength
          };
        }).filter(Boolean).slice(-6); // últimos 6 ciclos
        setMiniCycleData(formatted);
      } else {
        setMiniCycleData([]);
      }
    }
    fetchMiniCycleData();
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, {user?.unsafeMetadata?.fullName || user?.firstName || 'User'}</h1>
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
            <CardTitle>Register Symptoms</CardTitle>
            <CardDescription>Select today's symptoms and data</CardDescription>
          </CardHeader>
          <CardContent>
            {!showSymptomForm ? (
              <>
                {miniSymptomData.length > 0 ? (
                  <ResponsiveContainer width="100%" height={120}>
                    <BarChart data={miniSymptomData} layout="vertical">
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis dataKey="name" type="category" width={200} tick={{ fontSize: 13 }} tickFormatter={name => `${SYMPTOM_EMOJIS[name] || ''} ${name}`}/>
                      <Bar dataKey="value" fill="#8884d8" radius={[0, 4, 4, 0]} />
                      <Tooltip formatter={(value, name) => [`${value}%`, `${SYMPTOM_EMOJIS[name as string] || ''} ${name}`]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <span className="text-xs text-gray-400">No symptom data</span>
                )}
                <Button className="w-full mt-4 bg-gradient-to-r from-bloom-500 to-purple-500 text-white" onClick={() => setShowSymptomForm(true)}>
                  Register Symptoms
                </Button>
              </>
            ) : (
              <>
                <div className="mb-4 flex items-center gap-2">
                  <label className="font-medium">Day:</label>
                  <input
                    type="date"
                    className="border rounded px-2 py-1"
                    value={format(selectedDate, 'yyyy-MM-dd')}
                    onChange={e => setSelectedDate(new Date(e.target.value))}
                    max={format(new Date(), 'yyyy-MM-dd')}
                  />
                </div>
                {SYMPTOM_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className={`mb-4 rounded-lg p-3 ${cat.color}`}>
                    <div className="font-semibold mb-2">{cat.title}</div>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map(item => (
                        <button
                          key={item}
                          className={`px-3 py-1 rounded-full border text-sm ${selectedSymptoms.includes(item) ? 'bg-bloom-500 text-white font-bold' : 'bg-white text-gray-700'}`}
                          onClick={() => setSelectedSymptoms(selectedSymptoms.includes(item)
                            ? selectedSymptoms.filter(s => s !== item)
                            : [...selectedSymptoms, item])}
                        >
                          <span className="mr-1">{SYMPTOM_EMOJIS[item] || ''}</span>{item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4 bg-gradient-to-r from-bloom-500 to-purple-500 text-white" onClick={async () => {
                  if (!user) return;
                  if (selectedSymptoms.length === 0) return;
                  await supabase.from('symptom_logs').insert({
                    user_id: user.id,
                    date: format(selectedDate, 'yyyy-MM-dd'),
                    symptoms: selectedSymptoms
                  });
                  setSelectedSymptoms([]);
                  setShowSymptomForm(false);
                }}>
                  Save today's symptoms
                </Button>
              </>
            )}
          </CardContent>
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
            <div className="h-[100px] bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center mb-4">
              {miniCycleData.length > 0 ? (
                <ResponsiveContainer width="100%" height={80}>
                  <LineChart data={miniCycleData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="length" stroke="#8884d8" name="Cycle Length (days)" activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <span className="text-xs text-gray-400">No cycle data</span>
              )}
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
