'use server'

import { createClient } from '@supabase/supabase-js'

export type WaitlistState = {
  success: boolean
  message: string
} | null

export async function submitWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = formData.get('email')?.toString().trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    // Dev fallback when Supabase isn't configured yet
    return { success: true, message: `> ${email} added to waitlist. Access incoming.` }
  }

  const supabase = createClient(supabaseUrl, supabaseKey)
  const { error } = await supabase.from('id8_waitlist').insert({ email })

  if (error) {
    if (error.code === '23505') {
      return { success: false, message: 'This email is already on the waitlist.' }
    }
    return { success: false, message: 'Something went wrong. Please try again.' }
  }

  return { success: true, message: `> ${email} added to waitlist. Access incoming.` }
}
