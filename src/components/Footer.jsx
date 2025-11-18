export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B1426] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-cyan-400 to-violet-500" />
            <span className="text-white font-semibold">AeroFlow</span>
          </div>
          <p className="mt-3 text-slate-400 text-sm">Seamless travel, intelligently orchestrated.</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-slate-300 font-medium mb-2">Company</div>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#faqs" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <div className="text-slate-300 font-medium mb-2">Support</div>
            <ul className="space-y-1 text-slate-400 text-sm">
              <li><a href="#manage" className="hover:text-white">Manage Flight</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#signin" className="hover:text-white">Sign In</a></li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-slate-500 md:text-right">© {new Date().getFullYear()} AeroFlow. All rights reserved.</div>
      </div>
    </footer>
  )
}
