import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://urizgmwqcvcexcxndzvw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVyaXpnbXdxY3ZjZXhjeG5kenZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2ODA2ODcsImV4cCI6MjA2NTI1NjY4N30.7FsA-YQxjnF-IZlaYnF8D9Q8ChA197TCdDwlR5wwy5c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
