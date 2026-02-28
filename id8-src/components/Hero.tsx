export default function Hero() {
  return (
    <section className="relative border-b border-[#273a2c] scanlines overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#00ff41 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10 flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#00ff41]/30 bg-[#00ff41]/5 text-[#00ff41] text-xs font-bold uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff41] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff41]" />
          </span>
          v2.0 Now Available
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight max-w-4xl leading-tight">
          &gt; id8: Idea to deploy
          <br className="hidden md:block" />
          in minutes
          <span className="cursor-blink" />
        </h1>

        <p className="text-[#9abca2] text-lg md:text-xl max-w-2xl leading-relaxed">
          AI-assisted full-stack building. Generate production-ready code with a single prompt.
          Stop configuring. Start shipping.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
          <a
            href="https://github.com/RafeedIqbal/id8-scripts"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-transparent text-[#00ff41] border border-[#00ff41] font-bold hover:bg-[#00ff41] hover:text-black transition-all duration-300 text-sm"
            style={{ boxShadow: '0 0 16px rgba(0, 255, 65, 0.25)' }}
          >
            <span className="absolute inset-0 bg-[#00ff41]/20 blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="relative">[ Local Workflow -&gt; ]</span>
          </a>
          <a
            href="https://github.com/RafeedIqbal/id8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#1a2e1a] text-white border border-[#273a2c] font-bold hover:border-white hover:bg-[#2a452a] transition-all text-sm"
          >
            [ Web Version -&gt; ]
          </a>
        </div>

        {/* Terminal window demo */}
        <div
          className="mt-12 p-4 border border-[#273a2c] bg-black w-full max-w-3xl"
          style={{ boxShadow: '0 0 40px rgba(0, 255, 65, 0.05)' }}
        >
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <div className="text-xs text-[#9abca2] ml-2 font-mono">bash — 80x24</div>
          </div>
          <div className="text-left font-mono text-sm md:text-base space-y-2 p-2 overflow-x-auto">
            <div className="flex gap-2">
              <span className="text-[#00ff41]">$</span>
              <span className="text-white">id8 new &quot;SaaS for dog walkers with Stripe&quot;</span>
            </div>
            <div className="text-[#9abca2] pl-4 space-y-1">
              <div>&gt; Analyzing requirements... <span className="text-[#00ff41]">Done</span></div>
              <div>&gt; Generating schema... <span className="text-[#00ff41]">Done</span></div>
              <div>
                &gt; Scaffold frontend (Next.js)... <span className="text-[#00ff41]">Done</span>
              </div>
              <div>&gt; Setting up Supabase... <span className="text-[#00ff41]">Done</span></div>
              <div>&gt; Deploying to Vercel... <span className="text-[#00ff41]">Done</span></div>
            </div>
            <div className="flex gap-2 pt-2">
              <span className="text-[#00ff41]">➜</span>
              <span className="text-white">
                Live at:{' '}
                <span className="text-blue-400 underline">
                  https://dog-walkers-app.vercel.app
                </span>
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#00ff41]">$</span>
              <span className="w-2 h-5 bg-[#00ff41] animate-pulse inline-block align-middle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
