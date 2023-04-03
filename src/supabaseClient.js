import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hlcguyefwynkxworllqq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY2d1eWVmd3lua3h3b3JsbHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMTMyMzQsImV4cCI6MTk5Mzc4OTIzNH0.p2Qs1AaFut3rYnQi-5FSoNtUFOjVB5HUbH_AIwKSa_s';

export const supabase = createClient(supabaseUrl, supabaseKey)