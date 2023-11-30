import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://jgkaivyorxtcmtzwazrb.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impna2Fpdnlvcnh0Y210endhenJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzMTg4OTEsImV4cCI6MjAxNjg5NDg5MX0.PVUcJB_XQy-ZqFTkK8JIheASxbfBkM8Q7Wi0SmeZR4A"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
