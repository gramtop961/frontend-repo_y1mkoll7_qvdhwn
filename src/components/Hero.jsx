import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden bg-[#0B1426]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1426]/60 via-[#0B1426]/70 to-[#0B1426]/85 pointer-events-none" />

      {/* Content anchored bottom-left */}
      <div className="relative z-10 mx-auto max-w-7xl h-[100vh] grid grid-cols-12 items-end">
        <div className="col-span-12 md:col-span-8 px-6 pb-20">
          <h1 className="text-[34px] md:text-[42px] leading-tight tracking-wide text-[#F8F9FA] font-semibold drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
            Elevate Your Journey
          </h1>
          <p className="mt-3 text-[18px] md:text-[20px] text-[#8B9DC3] max-w-2xl">
            Discover your next destination with seamless travel experiences, crafted by intelligent design.
          </p>
          <div className="mt-6">
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-transparent px-5 py-2 text-sm font-medium text-[#F8F9FA] transition-all duration-300 hover:shadow-[0_0_25px_rgba(248,249,250,0.35)] hover:border-white/80"
            >
              Start Booking
            </a>
          </div>
        </div>
      </div>

      {/* Ambient gradient accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
    </section>
  )
}
