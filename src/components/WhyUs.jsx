import { ShieldCheck, Clock, Wifi, Ticket, Plane, Sparkles } from 'lucide-react'

export default function WhyUs() {
  const features = [
    { icon: Plane, title: 'Global coverage', desc: 'Search 700+ carriers and 10,000+ routes worldwide.' },
    { icon: Clock, title: 'Time-smart', desc: 'Real-time schedules and delay-aware suggestions.' },
    { icon: Ticket, title: 'Transparent pricing', desc: 'No hidden fees. Ever. See fare breakdowns clearly.' },
    { icon: ShieldCheck, title: 'Trusted & secure', desc: 'Bank-grade security with 24/7 support.' },
    { icon: Wifi, title: 'Connected journey', desc: 'Sync passes to wallet, get smart alerts en route.' },
    { icon: Sparkles, title: 'AI comfort', desc: 'Seat, meal, and quiet-zone preferences remembered.' },
  ]

  return (
    <section className="bg-[#0B1426] py-20" id="about">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Why choose AeroFlow</h2>
          <p className="mt-2 text-slate-300/80">Designed to make every trip feel effortless and inspiring.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-lg">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-500/20 p-2">
                  <f.icon className="text-cyan-300" size={20} />
                </div>
                <h3 className="text-white font-medium">{f.title}</h3>
              </div>
              <p className="mt-3 text-slate-300/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
