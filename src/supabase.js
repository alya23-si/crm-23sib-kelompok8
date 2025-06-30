import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uaqrzhdaqniaakxsrnny.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhcXJ6aGRhcW5pYWFreHNybm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzUyMTYsImV4cCI6MjA2NjQxMTIxNn0.Uxz61nWFyXg2sny7lsVawsnLbZ-FjWM4xqVC1kl8KoQ'

export const supabase = createClient(supabaseUrl, supabaseKey)