
import React, { useState } from 'react';
import { addDays, format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth, isWithinInterval, addMonths, subMonths } from 'date-fns';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CalendarViewProps {
  selectedDay: Date;
  setSelectedDay: (date: Date) => void;
  periodDays?: Date[];
  ovulationDay?: Date;
  fertileDays?: Date[];
}

export function CalendarView({
  selectedDay,
  setSelectedDay,
  periodDays = [],
  ovulationDay,
  fertileDays = []
}: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Add padding days at beginning and end
  const firstDayOfWeek = monthStart.getDay();
  const lastDayOfWeek = monthEnd.getDay();
  
  const paddingStart = Array.from({ length: firstDayOfWeek }, (_, i) => 
    addDays(monthStart, -(i + 1))
  ).reverse();
  
  const paddingEnd = Array.from({ length: 6 - lastDayOfWeek }, (_, i) => 
    addDays(monthEnd, i + 1)
  );
  
  const allDays = [...paddingStart, ...monthDays, ...paddingEnd];

  const isPeriodDay = (date: Date) => {
    return periodDays.some(d => d.toDateString() === date.toDateString());
  };
  
  const isFertileDay = (date: Date) => {
    return fertileDays.some(d => d.toDateString() === date.toDateString());
  };
  
  const isOvulationDay = (date: Date) => {
    return ovulationDay && ovulationDay.toDateString() === date.toDateString();
  };

  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-900 rounded-xl shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="font-medium text-lg">
            {format(currentMonth, 'MMMM yyyy')}
          </h2>
          <Button variant="ghost" size="icon" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
            <div key={i} className="text-xs font-medium text-muted-foreground py-2">
              {day}
            </div>
          ))}
          
          {allDays.map((day, i) => {
            const isCurrentMonth = isSameMonth(day, currentMonth);
            let bgClass = '';
            
            if (isPeriodDay(day)) {
              bgClass = 'bg-bloom-100 dark:bg-bloom-900/30 text-bloom-700 dark:text-bloom-300 font-medium';
            } else if (isOvulationDay(day)) {
              bgClass = 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium';
            } else if (isFertileDay(day)) {
              bgClass = 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400';
            }
            
            return (
              <button
                key={i}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  "h-9 w-9 rounded-full flex items-center justify-center text-sm",
                  !isCurrentMonth && "text-muted-foreground opacity-50",
                  isToday(day) && "border border-bloom-400 dark:border-bloom-500",
                  selectedDay.toDateString() === day.toDateString() && 
                    "bg-bloom-500 text-white font-medium hover:bg-bloom-600",
                  selectedDay.toDateString() !== day.toDateString() && bgClass,
                  selectedDay.toDateString() !== day.toDateString() && "hover:bg-muted"
                )}
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
