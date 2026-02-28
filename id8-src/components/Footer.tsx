export default function Footer() {
  return (
    <footer className="border-t border-[#273a2c] bg-black py-8">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span
            className="text-[#00ff41] material-symbols-outlined"
            style={{ fontSize: '16px' }}
          >
            terminal
          </span>
          <span className="text-white text-sm font-bold font-mono">
            id<span className="text-[#00ff41]">8</span> © 2025
          </span>
        </div>

        <div className="flex gap-8 text-sm">
          <a
            href="https://github.com/RafeedIqbal/id8-scripts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9abca2] hover:text-[#00ff41] transition-colors font-mono"
          >
            id8-scripts →
          </a>
          <a
            href="https://github.com/RafeedIqbal/id8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9abca2] hover:text-[#00ff41] transition-colors font-mono"
          >
            id8-web →
          </a>
          <a
            href="https://github.com/RafeedIqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9abca2] hover:text-[#00ff41] transition-colors font-mono"
          >
            github →
          </a>
        </div>

        <div className="text-xs text-[#273a2c] font-mono">Built with id8.</div>
      </div>
    </footer>
  )
}
