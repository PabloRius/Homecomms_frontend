import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://jhjxmibtxmgsgbvzwebe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoanhtaWJ0eG1nc2didnp3ZWJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc5NzUzNzQsImV4cCI6MjA0MzU1MTM3NH0.MzbiRjcdSRTQFFzG-oXUK0FPk4n_nSnonN4IGOT5MC8"
);
