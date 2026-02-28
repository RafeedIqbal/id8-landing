const steps = [
  {
    num: '01',
    file: 'step_01.sh',
    title: 'DESCRIBE',
    desc: 'Input your idea in natural language. Describe features, data models, and user flows as if talking to a senior engineer.',
    status: '> awaiting_input...',
  },
  {
    num: '02',
    file: 'step_02.tsx',
    title: 'BUILD',
    desc: 'Watch the AI generate code in real-time. It scaffolds the repository, installs dependencies, and writes the logic.',
    status: '> compiling_assets...',
  },
  {
    num: '03',
    file: 'step_03.json',
    title: 'DEPLOY',
    desc: 'Push to production with a single command. Your app is live on a global CDN with a secure database backend.',
    status: '> status: 200 OK',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-black border-b border-[#273a2c]">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              &gt; HOW_IT_WORKS_
            </h2>
            <p className="text-[#9abca2]">Three steps to your MVP.</p>
          </div>
          <a
            href="https://github.com/RafeedIqbal/id8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ff41] text-sm font-bold hover:underline decoration-2 underline-offset-4"
          >
            [ View on GitHub ]
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border border-[#1a2e1a] bg-[#050505] p-1 flex flex-col h-full group hover:border-[#00ff41]/30 transition-colors"
            >
              {/* Terminal title bar */}
              <div className="bg-[#111] border-b border-[#1a2e1a] p-2 flex justify-between items-center">
                <span className="text-xs text-[#9abca2]">{step.file}</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col gap-4">
                <div className="w-12 h-12 bg-[#00ff41]/10 flex items-center justify-center border border-[#00ff41]/20 text-[#00ff41] font-bold text-xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-[#9abca2] text-sm leading-relaxed">{step.desc}</p>
                <div className="mt-auto pt-4 text-xs text-[#00ff41] font-mono opacity-60">
                  {step.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
