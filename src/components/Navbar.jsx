import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Book Flight', href: '#book' },
    { label: 'Manage Flight', href: '#manage' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' },
    { label: 'Sign In/Sign Up', href: '#signin' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-xl px-5 py-3 shadow-[0_0_30px_rgba(0,212,255,0.1)]">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_25px_rgba(0,212,255,0.35)]" />
            <span className="text-sm font-semibold tracking-wide text-cyan-100">AeroFlow</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-200/80 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-100">
            <Menu size={22} />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-4">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-slate-200/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
