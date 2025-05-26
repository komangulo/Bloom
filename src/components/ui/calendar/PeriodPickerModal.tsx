import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { addMonths, subMonths, isSameDay, format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isToday } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PeriodPickerModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedDates: Date[];
  setSelectedDates: (dates: Date[]) => void;
  onSave: () => void;
}

const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export function PeriodPickerModal({ open, onOpenChange, selectedDates, setSelectedDates, onSave }: PeriodPickerModalProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const firstDayOfWeek = (getDay(monthStart) + 6) % 7; // Lunes=0
  const padding = Array.from({ length: firstDayOfWeek });

  const toggleDate = (date: Date) => {
    if (selectedDates.length === 0) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 1) {
      const first = selectedDates[0];
      if (isSameDay(first, date)) {
        setSelectedDates([]);
      } else {
        // Selecciona todos los días entre first y date (inclusive)
        const start = first < date ? first : date;
        const end = first > date ? first : date;
        const range = eachDayOfInterval({ start, end });
        setSelectedDates(range);
      }
    } else {
      // Si ya hay un rango, reinicia la selección con el nuevo día
      setSelectedDates([date]);
    }
  };

  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Selecciona los días de tu periodo</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between mb-2">
          <Button variant="ghost" size="icon" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="text-center font-semibold text-gray-700 dark:text-gray-200 mb-2 capitalize">
            {format(currentMonth, 'MMMM yyyy')}
          </div>
          <Button variant="ghost" size="icon" onClick={goToNextMonth}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="grid grid-cols-7 text-xs text-center mb-1 text-gray-500">
          {weekDays.map((d, i) => (
            <div key={i}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 mb-6">
          {padding.map((_, i) => (
            <div key={i}></div>
          ))}
          {days.map((day, i) => {
            const isSelected = selectedDates.some(d => isSameDay(d, day));
            const isCurrent = isToday(day);
            return (
              <button
                key={i}
                onClick={() => toggleDate(day)}
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs relative
                  ${isSelected ? 'bg-pink-500 text-white font-bold' : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-200 border'}
                  ${isCurrent ? 'border-2 border-pink-500' : 'border-gray-200 dark:border-gray-700'}
                  hover:bg-pink-100 dark:hover:bg-pink-900/30`}
                title={format(day, 'dd/MM/yyyy')}
              >
                {isSelected ? (
                  <span className="absolute left-0 right-0 flex justify-center items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="9" cy="9" r="8" stroke="white" strokeWidth="2" fill="#ec4899" />
                      <path d="M6 9l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : null}
                <span className={isSelected ? 'invisible' : ''}>{day.getDate()}</span>
                {isCurrent && !isSelected ? (
                  <span className="absolute bottom-0 left-0 right-0 text-[10px] text-pink-500 font-bold">HOY</span>
                ) : null}
              </button>
            );
          })}
        </div>
        <DialogFooter className="flex justify-between mt-2">
          <DialogClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogClose>
          <Button onClick={onSave} className="bg-pink-500 hover:bg-pink-600 text-white">Guardar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 