'use client'

import { useActionState } from 'react'
import { submitWaitlist } from '@/app/actions/waitlist'

export default function Waitlist() {
  const [state, action, pending] = useActionState(submitWaitlist, null)

  return (
    <section id="waitlist" className="py-24 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#00ff41]/5 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
          &gt; Join the waitlist<span className="text-[#00ff41]">_</span>
        </h2>
        <p className="text-[#9abca2] text-lg mb-10 max-w-xl mx-auto">
          Get early access to the future of development. We&apos;re rolling out invites weekly to
          developers and founders.
        </p>

        <div className="max-w-md mx-auto">
          {state?.success ? (
            <div className="p-4 border border-[#00ff41]/50 bg-[#00ff41]/5 text-[#00ff41] font-mono text-sm text-left">
              <span className="animate-pulse mr-2">▮</span>
              {state.message}
            </div>
          ) : (
            <>
              <form action={action} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="enter_email_address"
                  className="bg-[#1a2e1a] border border-[#273a2c] text-white placeholder:text-[#9abca2]/50 px-4 py-3 w-full focus:outline-none focus:border-[#00ff41] focus:ring-1 focus:ring-[#00ff41] transition-all font-mono text-sm"
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="bg-[#00ff41] text-black px-6 py-3 font-bold hover:bg-white transition-colors whitespace-nowrap text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {pending ? '...' : '[ Join -> ]'}
                </button>
              </form>

              {state?.message && !state.success && (
                <p className="mt-3 text-xs text-red-400 font-mono text-left">{state.message}</p>
              )}

              <p className="mt-4 text-xs text-[#9abca2]">
                * No spam. Only product updates and invite codes.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
