import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'AVISO: VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY precisam ser configuradas no arquivo .env'
  );
}

// Inicializa o cliente do Supabase
export const supabase = createClient(
  supabaseUrl || 'https://igwgbfwfiohxpkbpeyla.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlnd2diZndmaW9oeHBrYnBleWxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NjYwMDIsImV4cCI6MjA5NjU0MjAwMn0.JyfjfyReomyYCX8dMe3oykuAmf8ODDqgBgqtfVH8YyM'
);
