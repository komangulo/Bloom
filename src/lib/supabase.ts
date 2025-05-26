import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rvoepdulbarascqpwpbh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2b2VwZHVsYmFyYXNjcXB3cGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MzIxMTMsImV4cCI6MjA2MTAwODExM30.zz2nGfimDrMLHx152UxHQDOkFv5GrVL-obrjUqgG9s4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos para los datos
export interface CycleData {
  id: number;
  user_id: string;
  date: string;
  cycle_length: number;
  flow_intensity: number;
  symptoms: string[];
  created_at: string;
}

// Funciones de utilidad para obtener datos
export async function getUserCycleData(userId: string, months: number = 6) {
  const { data, error } = await supabase
    .from('cycle_data')
    .select('*')
    .eq('user_id', userId)
    .order('date', { ascending: false })
    .limit(months);

  if (error) {
    console.error('Error fetching cycle data:', error);
    return null;
  }

  return data;
}

export async function getUserSymptomStats(userId: string) {
  const { data, error } = await supabase
    .from('symptom_stats')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    console.error('Error fetching symptom stats:', error);
    return null;
  }

  return data;
}

// Función para registrar nuevos datos
export async function logCycleData(cycleData: Omit<CycleData, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('cycle_data')
    .insert([cycleData])
    .select();

  if (error) {
    console.error('Error logging cycle data:', error);
    return null;
  }

  return data;
}

// Función para obtener los periodos de la tabla periods
export async function getUserPeriods(userId: string, limit: number = 12) {
  const { data, error } = await supabase
    .from('periods')
    .select('*')
    .eq('user_id', userId)
    .order('start_date', { ascending: false })
    .limit(limit);
  if (error) {
    console.error('Error fetching periods:', error);
    return null;
  }
  return data;
}

// Obtener logs diarios de síntomas
export async function getUserSymptomLogs(userId: string) {
  const { data, error } = await supabase
    .from('symptom_logs')
    .select('*')
    .eq('user_id', userId);
  if (error) {
    console.error('Error fetching symptom logs:', error);
    return [];
  }
  return data;
} 