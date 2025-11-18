import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Booking from './components/Booking'
import Destinations from './components/Destinations'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B1426]">
      <Navbar />
      <main className="[--midnight:#0B1426] [--cyan:#00D4FF] [--violet:#8B5CF6]">
        <Hero />
        <Booking />
        <Destinations />
        <WhyUs />
        <Testimonials />
        <section id="faqs" className="bg-[#0B1426] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">FAQs</h2>
              <p className="mt-2 text-slate-300/80">Answers to common questions.</p>
            </div>
            <div className="grid gap-4">
              {[
                ['Can I change my flight after booking?', 'Yes, most fares allow changes. We show fees upfront before you confirm.'],
                ['How do I get my boarding pass?', 'You can add passes to your wallet with one tap after check-in.'],
                ['Do you support multi-city trips?', 'Absolutely. Use advanced search to add up to 5 legs.'],
              ].map(([q, a]) => (
                <div key={q} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                  <div className="text-white font-medium">{q}</div>
                  <p className="mt-2 text-slate-300/80 text-sm">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="manage" className="bg-[#0B1426] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Manage your flight</h2>
              <p className="mt-2 text-slate-300/80">Retrieve bookings, change seats, add bags, and more.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input placeholder="Booking reference" className="rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400/40" />
                <input placeholder="Last name" className="rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400/40" />
                <button className="rounded-xl border border-white/30 px-6 py-3 text-slate-100 hover:border-white/70 transition-all">Find booking</button>
              </form>
            </div>
          </div>
        </section>
        <section id="signin" className="bg-[#0B1426] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">Sign in</h2>
              <p className="mt-2 text-slate-300/80">Access your trips and preferences anywhere.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <form className="space-y-3">
                <input placeholder="Email" className="w-full rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400/40" />
                <input type="password" placeholder="Password" className="w-full rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400/40" />
                <button className="rounded-full border border-white/30 px-6 py-2 text-slate-100 hover:border-white/70 transition-all">Sign in</button>
              </form>
              <div className="text-slate-400 text-sm">
                New here? Create an account to sync preferences, earn rewards, and get proactive rebooking help when things change.
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}

export default App
