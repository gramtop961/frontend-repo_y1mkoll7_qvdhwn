export default function Testimonials() {
  const quotes = [
    {
      name: 'Maya K.',
      text:
        'The whole experience feels alive. It spotted a cheaper, shorter route I would have missed.',
    },
    {
      name: 'Leo V.',
      text:
        'I love the calm design. The booking flow is fast, transparent, and kind of mesmerizing.',
    },
    {
      name: 'Anya S.',
      text:
        'The smart alerts and wallet passes made a tight connection stress-free. New favorite app.',
    },
  ]

  return (
    <section className="bg-[#0B1426] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">What travelers say</h2>
          <p className="mt-2 text-slate-300/80">Real moments from real journeys.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <p className="text-slate-200">“{q.text}”</p>
              <div className="mt-4 text-sm text-slate-400">{q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
