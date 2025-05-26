import React, { useState } from 'react';
import { addDays, subDays, startOfWeek, endOfWeek, isToday, format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HorizontalWeekCalendarProps {
  selectedDay: Date;
  setSelectedDay: (date: Date) => void;
  setMonth?: (date: Date) => void; // opcional, para sincronizar mes externo
  getWeekDayStates?: (weekStart: Date) => Array<{ date: Date, state: string }>;
}

export function HorizontalWeekCalendar({ selectedDay, setSelectedDay, setMonth, getWeekDayStates }: HorizontalWeekCalendarProps) {
  const [currentDate, setCurrentDate] = useState(selectedDay);

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Monday
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });
  const days = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  // Get states for each day
  const dayStates = getWeekDayStates ? getWeekDayStates(weekStart) : days.map(date => ({ date, state: 'normal' }));

  const goToPreviousWeek = () => {
    const newDate = subDays(currentDate, 7);
    setCurrentDate(newDate);
    setMonth?.(newDate);
  };
  const goToNextWeek = () => {
    const newDate = addDays(currentDate, 7);
    setCurrentDate(newDate);
    setMonth?.(newDate);
  };

  // Mes y año centrado
  const monthLabel = format(weekStart, 'MMMM yyyy');

  // Color classes by state
  const stateClasses: Record<string, string> = {
    period: 'bg-pink-500 text-white font-bold',
    fertile: 'bg-cyan-200 text-cyan-900 font-semibold',
    ovulation: 'bg-purple-300 text-purple-900 font-semibold',
    late: 'bg-blue-300 text-blue-900 font-semibold',
    cycle: 'bg-bloom-100 text-bloom-700 font-semibold',
    normal: 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200',
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-lg font-semibold mb-2 capitalize">{monthLabel}</div>
      <div className="flex items-center justify-center gap-2 w-full overflow-x-auto py-2">
        <Button variant="ghost" size="icon" onClick={goToPreviousWeek}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2 flex-1 justify-center">
          {dayStates.map(({ date: day, state }, i) => {
            const isSelected = selectedDay.toDateString() === day.toDateString();
            return (
              <button
                key={i}
                onClick={() => setSelectedDay(day)}
                className={`flex flex-col items-center px-2 py-1 rounded-lg transition-all
                  ${isSelected ? 'bg-bloom-500 text-white font-bold' : stateClasses[state] || stateClasses['normal']}
                  ${isToday(day) ? 'border border-bloom-400' : ''}
                  hover:bg-bloom-100 dark:hover:bg-bloom-900/30`}
              >
                <span className="text-xs font-medium">{format(day, 'EEE')}</span>
                <span className="text-lg">{day.getDate()}</span>
              </button>
            );
          })}
        </div>
        <Button variant="ghost" size="icon" onClick={goToNextWeek}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
} 