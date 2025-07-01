import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase'

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export type Participant = Database['classroom']['Tables']['participants']['Row']

export type Choice = Database['classroom']['Tables']['choices']['Row']

export type Question = Database['classroom']['Tables']['questions']['Row'] & {
  choices: Choice[]
}

export type QuizSet = Database['classroom']['Tables']['quiz_sets']['Row'] & {
  questions: Question[]
}

export type Answer = Database['classroom']['Tables']['answers']['Row']

export type Game = Database['classroom']['Tables']['games']['Row']

export type GameResult = Database['classroom']['Views']['game_results']['Row']
