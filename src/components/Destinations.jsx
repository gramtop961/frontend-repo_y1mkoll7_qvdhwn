export default function Destinations() {
  const items = [
    { city: 'Tokyo', code: 'HND', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop' },
    { city: 'Paris', code: 'CDG', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop' },
    { city: 'Dubai', code: 'DXB', image: 'https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=1200&auto=format&fit=crop' },
    { city: 'Singapore', code: 'SIN', image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?q=80&w=1200&auto=format&fit=crop' },
    { city: 'New York', code: 'JFK', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1200&auto=format&fit=crop' },
    { city: 'Sydney', code: 'SYD', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <section className="bg-[#0B1426] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Popular destinations</h2>
          <p className="mt-2 text-slate-300/80">Curated cities travelers love right now.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((d) => (
            <a key={d.city} href="#book" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
              <img src={d.image} alt={d.city} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <div className="text-white font-medium">{d.city} <span className="text-slate-300/80 text-sm">· {d.code}</span></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
