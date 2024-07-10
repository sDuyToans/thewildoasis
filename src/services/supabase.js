import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ioxjkfsdixlfmdbzgozh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlveGprZnNkaXhsZm1kYnpnb3poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2MDUzOTgsImV4cCI6MjAzNDE4MTM5OH0.lycBxjnVZU8SVGGLzWhZPFCpEp9xUtmwClwWZ35pGNk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
