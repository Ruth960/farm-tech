import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xkgipolkjidyishobnet.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2lwb2xramlkeWlzaG9ibmV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4Mzk2MzgsImV4cCI6MjA1OTQxNTYzOH0.X2oE3DvQvJMy2g9mlRpNSoFqA2OqYC-F1ObpKEDyL6A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
