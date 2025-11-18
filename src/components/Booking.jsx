import { useState } from 'react'

export default function Booking() {
  const [from, setFrom] = useState('SFO')
  const [to, setTo] = useState('JFK')
  const [date, setDate] = useState('')
  const [passengers, setPassengers] = useState(1)

  return (
    <section id="book" className="relative bg-[#0B1426] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Book your flight</h2>
          <p className="mt-2 text-slate-300/80">Find the best routes, fares, and times in seconds.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-slate-300/80 mb-2">From</label>
                <input value={from} onChange={(e)=>setFrom(e.target.value)} className="w-full rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400/40" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/80 mb-2">To</label>
                <input value={to} onChange={(e)=>setTo(e.target.value)} className="w-full rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400/40" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/80 mb-2">Date</label>
                <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} className="w-full rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400/40" />
              </div>
              <div>
                <label className="block text-sm text-slate-300/80 mb-2">Passengers</label>
                <input type="number" min={1} value={passengers} onChange={(e)=>setPassengers(Number(e.target.value))} className="w-full rounded-xl bg-slate-800/60 border border-white/10 px-4 py-3 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-400/40" />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button className="rounded-full border border-white/30 px-6 py-2 text-slate-100 hover:border-white/70 transition-all">
                Search Flights
              </button>
            </div>
          </div>

          <div className="md:col-span-4 rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-xl">
            <p className="text-slate-300/90">Intelligent suggestions appear here as you search. We'll surface flexible dates, nearby airports, and fare trends.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
