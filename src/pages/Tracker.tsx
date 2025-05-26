import React, { useState, useEffect } from 'react';
import { CalendarView } from '@/components/ui/calendar/CalendarView';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Droplets, HeartPulse, Thermometer } from 'lucide-react';
import { addDays, subDays } from 'date-fns';
import { HorizontalWeekCalendar } from '@/components/ui/calendar/HorizontalWeekCalendar';
import { PeriodPickerModal } from '@/components/ui/calendar/PeriodPickerModal';
import { supabase } from '@/integrations/supabase/client';
import { useUser } from '@clerk/clerk-react';
import { toast } from '@/components/ui/use-toast';
import { format } from 'date-fns';

const Tracker = () => {
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    // Siempre inicia en el mes actual del sistema
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [periodPickerOpen, setPeriodPickerOpen] = useState(false);
  const [periodDays, setPeriodDays] = useState<Date[]>([]);
  const [userPeriods, setUserPeriods] = useState<any[]>([]);
  const [cycleInfo, setCycleInfo] = useState<any>(null);
  const { user } = useUser();
  
  // Sample data - in a real app, this would come from user input/database
  const today = new Date();
  const periodStartDate = subDays(today, 3);
  const periodDaysArray = Array.from({ length: 5 }, (_, i) => addDays(periodStartDate, i));
  
  const ovulationDay = subDays(today, 14);
  const fertileDays = Array.from({ length: 5 }, (_, i) => subDays(ovulationDay, i - 2));

  // Detectar bloques consecutivos de días
  function getConsecutiveBlocks(dates: Date[]): Array<{ start: Date, end: Date }> {
    if (dates.length === 0) return [];
    const sorted = dates.slice().sort((a, b) => a.getTime() - b.getTime());
    const blocks: Array<{ start: Date, end: Date }> = [];
    let blockStart = sorted[0];
    let prev = sorted[0];
    for (let i = 1; i < sorted.length; i++) {
      const curr = sorted[i];
      const diff = (curr.getTime() - prev.getTime()) / (1000 * 60 * 60 * 24);
      if (diff > 1) {
        blocks.push({ start: blockStart, end: prev });
        blockStart = curr;
      }
      prev = curr;
    }
    blocks.push({ start: blockStart, end: prev });
    return blocks;
  }

  // Leer periodos del usuario desde Supabase
  useEffect(() => {
    async function fetchPeriods() {
      if (!user) return;
      const { data, error } = await supabase
        .from('periods')
        .select('*')
        .eq('user_id', user.id)
        .order('start_date', { ascending: false });
      if (!error && data) {
        setUserPeriods(data);
      }
    }
    fetchPeriods();
  }, [user, periodPickerOpen]);

  // Calcular estado del ciclo para el día seleccionado
  useEffect(() => {
    if (!userPeriods.length) return;
    const day = selectedDay;
    // Encontrar el periodo más reciente que terminó antes o incluye el día seleccionado
    const lastPeriod = userPeriods.find(p => new Date(p.start_date) <= day && new Date(p.end_date) >= day)
      || userPeriods.find(p => new Date(p.end_date) < day);
    let state = 'normal';
    let dayOfCycle = 0;
    let message = '';
    let color = 'bg-gradient-to-b from-white to-bloom-50';
    let buttonText = 'Log Period';
    let subtitle = '';
    let ovulationDay = null;
    let fertileWindow = null;
    let daysSinceLastPeriod = 0;
    let isPeriod = false;
    let isOvulation = false;
    let isFertile = false;
    let isLate = false;
    if (lastPeriod) {
      const lastStart = new Date(lastPeriod.start_date);
      const lastEnd = new Date(lastPeriod.end_date);
      const cycleLength = lastPeriod.cycle_length || 28;
      const periodLength = (lastEnd.getTime() - lastStart.getTime()) / (1000 * 60 * 60 * 24) + 1;
      daysSinceLastPeriod = Math.floor((day.getTime() - lastStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      dayOfCycle = daysSinceLastPeriod;
      // Día de ovulación: 14 días antes del próximo periodo
      ovulationDay = new Date(lastStart.getTime() + ((cycleLength - 14) * 24 * 60 * 60 * 1000));
      // Ventana fértil: 5 días antes y 5 después del día de ovulación (total 11 días)
      const fertileStart = new Date(ovulationDay.getTime() - 5 * 24 * 60 * 60 * 1000);
      const fertileEnd = new Date(ovulationDay.getTime() + 5 * 24 * 60 * 60 * 1000);
      if (day >= lastStart && day <= lastEnd) {
        state = 'period';
        isPeriod = true;
        color = 'bg-gradient-to-b from-white to-pink-200';
        message = `Period: Day ${dayOfCycle}`;
        buttonText = 'Edit period dates';
        subtitle = '';
      } else if (day > lastEnd) {
        const expectedNext = new Date(lastStart.getTime() + cycleLength * 24 * 60 * 60 * 1000);
        if (day > expectedNext) {
          state = 'late';
          isLate = true;
          color = 'bg-gradient-to-b from-blue-100 to-blue-300';
          message = `Delay of ${Math.floor((day.getTime() - expectedNext.getTime()) / (1000 * 60 * 60 * 24))} days`;
          subtitle = '';
        } else if (day >= fertileStart && day <= fertileEnd) {
          // Día de ovulación es el 6º de la ventana fértil
          if (day.toDateString() === ovulationDay.toDateString()) {
            state = 'ovulation';
            isOvulation = true;
            color = 'bg-gradient-to-b from-cyan-200 to-cyan-400';
            message = 'Prediction: Ovulation Day';
            subtitle = 'High probability of getting pregnant';
          } else {
            state = 'fertile';
            isFertile = true;
            color = 'bg-gradient-to-b from-cyan-100 to-cyan-300';
            message = `Current Cycle: Day ${dayOfCycle}`;
            subtitle = 'High probability of getting pregnant';
          }
        } else {
          state = 'cycle';
          color = 'bg-gradient-to-b from-white to-bloom-50';
          message = `Current Cycle: Day ${dayOfCycle}`;
          subtitle = 'Low probability of getting pregnant';
        }
      }
    } else {
      // Sin datos previos
      state = 'no-data';
      color = 'bg-gradient-to-b from-white to-bloom-50';
      message = 'Register your first period';
      subtitle = '';
    }
    setCycleInfo({ state, dayOfCycle, message, color, buttonText, subtitle, isPeriod, isLate, isFertile, isOvulation });
  }, [userPeriods, selectedDay]);

  // Calcular rangos de días para la semana visible
  function getWeekDayStates(weekStart: Date): Array<{ date: Date, state: string }> {
    const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
    return days.map(day => {
      let state = 'normal';
      if (userPeriods.length) {
        const lastPeriod = userPeriods.find(p => new Date(p.start_date) <= day && new Date(p.end_date) >= day)
          || userPeriods.find(p => new Date(p.end_date) < day);
        if (lastPeriod) {
          const lastStart = new Date(lastPeriod.start_date);
          const lastEnd = new Date(lastPeriod.end_date);
          const cycleLength = lastPeriod.cycle_length || 28;
          // Día de ovulación: 14 días antes del próximo periodo
          const ovulationDay = new Date(lastStart.getTime() + ((cycleLength - 14) * 24 * 60 * 60 * 1000));
          // Ventana fértil: 5 días antes y 5 después del día de ovulación (total 11 días)
          const fertileStart = new Date(ovulationDay.getTime() - 5 * 24 * 60 * 60 * 1000);
          const fertileEnd = new Date(ovulationDay.getTime() + 5 * 24 * 60 * 60 * 1000);
          if (day >= lastStart && day <= lastEnd) {
            state = 'period';
          } else if (day > lastEnd) {
            const expectedNext = new Date(lastStart.getTime() + cycleLength * 24 * 60 * 60 * 1000);
            if (day > expectedNext) {
              state = 'late';
            } else if (day >= fertileStart && day <= fertileEnd) {
              // Día de ovulación es el 6º de la ventana fértil
              if (day.toDateString() === ovulationDay.toDateString()) {
                state = 'ovulation';
              } else {
                state = 'fertile';
              }
            } else {
              state = 'cycle';
            }
          }
        }
      }
      return { date: day, state };
    });
  }

  // Generar días de periodo, fértil y ovulación para el mes actual considerando todos los ciclos y asegurando comparación de fechas por día
  function getMonthDayStates(month: Date) {
    if (!userPeriods.length) return { periodDays: [], fertileDays: [], ovulationDays: [] };
    const monthStart = new Date(month.getFullYear(), month.getMonth(), 1);
    const monthEnd = new Date(month.getFullYear(), month.getMonth() + 1, 0);
    const days = [];
    for (let d = new Date(monthStart); d <= monthEnd; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d));
    }
    let periodDays: Date[] = [];
    let fertileDays: Date[] = [];
    let ovulationDays: Date[] = [];
    userPeriods.forEach(period => {
      const lastStart = new Date(period.start_date);
      const lastEnd = new Date(period.end_date);
      const cycleLength = period.cycle_length || 28;
      // Día de ovulación: 14 días antes del próximo periodo
      const ovuDay = new Date(lastStart.getTime() + ((cycleLength - 14) * 24 * 60 * 60 * 1000));
      const fertileStart = new Date(ovuDay.getTime() - 5 * 24 * 60 * 60 * 1000);
      const fertileEnd = new Date(ovuDay.getTime() + 5 * 24 * 60 * 60 * 1000);
      days.forEach(day => {
        // Comparar solo año, mes y día
        const dayStr = day.toISOString().slice(0, 10);
        const startStr = lastStart.toISOString().slice(0, 10);
        const endStr = lastEnd.toISOString().slice(0, 10);
        const ovuStr = ovuDay.toISOString().slice(0, 10);
        const fertileStartStr = fertileStart.toISOString().slice(0, 10);
        const fertileEndStr = fertileEnd.toISOString().slice(0, 10);
        if (dayStr >= startStr && dayStr <= endStr) {
          periodDays.push(new Date(day));
        } else if (dayStr > endStr) {
          if (dayStr >= fertileStartStr && dayStr <= fertileEndStr) {
            if (dayStr === ovuStr) {
              ovulationDays.push(new Date(day));
            } else {
              fertileDays.push(new Date(day));
            }
          }
        }
      });
    });
    // El componente puede aceptar múltiples días de ovulación si lo adaptamos
    return { periodDays, fertileDays, ovulationDays };
  }

  async function handleSavePeriods() {
    if (!user) {
      toast({ title: 'Error', description: 'Debes iniciar sesión para guardar periodos.', variant: 'destructive' });
      return;
    }
    const blocks = getConsecutiveBlocks(periodDays);
    if (blocks.length === 0) {
      toast({ title: 'Nada que guardar', description: 'Selecciona al menos un día.', variant: 'destructive' });
      return;
    }
    const inserts = blocks.map(b => ({
      user_id: user.id,
      start_date: b.start.toISOString().slice(0, 10),
      end_date: b.end.toISOString().slice(0, 10)
    }));
    const { error } = await supabase.from('periods').insert(inserts);
    if (error) {
      toast({ title: 'Error al guardar', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Periods saved', description: 'Tus periodos han sido registrados correctamente.' });
      setPeriodPickerOpen(false);
    }
  }

  // --- Copiado de Dashboard: categorías, emojis y lógica de registro de síntomas ---
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
    'Intermenstrual spotting': '��',
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
    'Swimming': '��',
    'Team sports': '🏅',
    'Running': '🏃',
    'Cycling': '��',
    'Walking': '🚶',
    // Oral Contraceptives (OC)
    'Taken on time': '⏰',
    'Yesterday pill': '💊',
    // Other Pills (not OC)
    'Add pill': '➕💊',
  };
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showSymptomForm, setShowSymptomForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className={`w-full rounded-b-3xl pb-10 ${cycleInfo?.color || ''}`}
        style={{ minHeight: '220px', marginBottom: '2rem' }}>
        <div className="flex flex-col items-center">
          <HorizontalWeekCalendar
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            setMonth={setCurrentMonth}
            getWeekDayStates={getWeekDayStates}
          />
          <div className="text-center my-6">
            <div className="text-lg font-semibold mb-1">{cycleInfo?.message}</div>
            {cycleInfo?.subtitle && <div className="text-base mb-2">{cycleInfo.subtitle}</div>}
            <Button className="mt-2 px-6 py-2 text-lg font-semibold" onClick={() => setPeriodPickerOpen(true)}>
              {cycleInfo?.buttonText || 'Log Period'}
            </Button>
          </div>
        </div>
      </div>
      <PeriodPickerModal
        open={periodPickerOpen}
        onOpenChange={setPeriodPickerOpen}
        selectedDates={periodDays}
        setSelectedDates={setPeriodDays}
        onSave={handleSavePeriods}
      />
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
            {...getMonthDayStates(currentMonth)}
          />
        </div>
        
        <div className="md:col-span-1">
          <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">
                {selectedDate.toDateString() === new Date().toDateString() ? 'Today' : selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!showSymptomForm ? (
                <Button className="w-full mt-4 bg-gradient-to-r from-bloom-500 to-purple-500 text-white" onClick={() => setShowSymptomForm(true)}>
                  Register Symptoms
                </Button>
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
