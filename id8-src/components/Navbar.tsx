export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#273a2c] bg-black/95 backdrop-blur">
      <div className="w-full max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-[#00ff41] material-symbols-outlined" style={{ fontSize: '20px' }}>
            terminal
          </span>
          <span className="text-white text-lg font-bold tracking-tighter font-mono">
            id<span className="text-[#00ff41]">8</span>_
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#what-is-id8"
            className="text-sm text-[#9abca2] hover:text-[#00ff41] transition-colors font-mono"
          >
            Docs
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-[#9abca2] hover:text-[#00ff41] transition-colors font-mono"
          >
            How_It_Works
          </a>
          <a
            href="#waitlist"
            className="text-sm text-[#9abca2] hover:text-[#00ff41] transition-colors font-mono"
          >
            Waitlist
          </a>
        </nav>
        <a
          href="#waitlist"
          className="bg-[#00ff41] text-black px-4 py-1.5 text-sm font-bold hover:bg-white transition-all font-mono"
        >
          Join_Waitlist
        </a>
      </div>
    </header>
  )
}
