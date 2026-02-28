const features = [
  {
    icon: 'terminal',
    title: 'PRD to Production',
    desc: 'Convert a simple text prompt into a full-stack application structure in seconds.',
  },
  {
    icon: 'database',
    title: 'Supabase + Vercel',
    desc: 'Auto-provisioned backend, database, auth, and hosting. No console clicking required.',
  },
  {
    icon: 'bolt',
    title: 'Modern Stack',
    desc: 'Next.js, Tailwind CSS, TypeScript, and Node.js pre-configured with best practices.',
  },
  {
    icon: 'devices',
    title: 'Local or Cloud',
    desc: 'Run the CLI workflow locally or use the hosted web app — same powerful pipeline.',
  },
]

export default function WhatIsId8() {
  return (
    <section id="what-is-id8" className="py-20 bg-[#0a0a0a] border-b border-[#273a2c]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              &gt; Build MVPs at the
              <br />
              speed of thought.
            </h2>
            <p className="text-[#9abca2] text-lg leading-relaxed">
              The terminal is your canvas. id8 bridges the gap between natural language and
              production code.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <a
                href="https://github.com/RafeedIqbal/id8-scripts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#00ff41] text-sm font-bold hover:underline decoration-[#00ff41]/50 underline-offset-4"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  arrow_forward
                </span>
                id8-scripts (local)
              </a>
              <a
                href="https://github.com/RafeedIqbal/id8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#9abca2] text-sm font-bold hover:text-[#00ff41] transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                  arrow_forward
                </span>
                id8 web version
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-5 border border-[#1a2e1a] bg-[#0f1210] hover:border-[#00ff41]/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <span
                    className="text-[#00ff41] mt-0.5 material-symbols-outlined"
                    style={{ fontSize: '20px' }}
                  >
                    {f.icon}
                  </span>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#00ff41] transition-colors">
                      {f.title}
                    </h3>
                    <p className="text-[#9abca2] text-sm">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
