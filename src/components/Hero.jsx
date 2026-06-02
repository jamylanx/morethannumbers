const SECONDARY_LINKS = [
  { href: '#podcast', label: 'Listen to Podcast' },
  { href: '#contact', label: 'Get in Touch' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-navy via-[#243447] to-[#334155]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(96, 165, 250, 0.15), transparent),
            linear-gradient(180deg, transparent 0%, rgba(30, 41, 59, 0.4) 100%)
          `,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
        <p className="mb-4 font-body text-sm uppercase tracking-[0.35em] text-accent">
          Advocacy Campaign
        </p>
        <h1
          id="hero-heading"
          className="font-heading text-4xl font-bold uppercase leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          More Than Numbers
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
          An advocacy campaign exploring academic pressure in school and at
          home.
        </p>

        <a
          href="#promo-video"
          className="mt-12 inline-flex min-w-[240px] items-center justify-center rounded-full bg-accent px-10 py-4 text-base font-semibold text-navy transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          Watch Campaign Video
        </a>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          {SECONDARY_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#about"
          className="mt-20 inline-flex flex-col items-center gap-2 text-white/50 transition-colors hover:text-white/80"
          aria-label="Scroll to campaign description"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <svg
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
