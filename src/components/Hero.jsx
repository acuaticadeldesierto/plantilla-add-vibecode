import { siteConfig } from "@/config/site";


export default function Hero() {
  const {
    badge,
    title,
    titleHighlight,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    ctaPrimaryUrl,
    ctaSecondaryUrl,
    backgroundImage,
    stats,
  } = siteConfig.hero;

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-surface-darker text-white"
    >
      {backgroundImage ? (
        <img
          src={backgroundImage}
          alt="Nadador bajo el agua con rayos de luz atravesando la superficie"
          className="absolute inset-0 size-full object-cover"
          fetchPriority="high"
          referrerPolicy="no-referrer"
        />
      ) : null}

      <div className="absolute inset-0 bg-gradient-hero-overlay" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-surface-darker/70 via-surface-darker/20 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 container-wide flex min-h-[100svh] flex-col justify-end pb-16 pt-32 md:justify-center md:pb-24 md:pt-32">
        <div className="max-w-3xl">
          <p className="eyebrow text-accent mb-6">
            <span className="inline-block size-1.5 rounded-full bg-accent align-middle mr-2" aria-hidden="true" />
            {badge}
          </p>

          <h1 className="display-1 mb-8">
            {title} <br />
            <span className="italic font-normal text-white/90">
              {titleHighlight}
            </span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-white/75 leading-relaxed mb-10">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={ctaPrimaryUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-accent-foreground shadow-accent transition-all duration-300 hover:scale-[1.02] hover:shadow-glow"
            >
              {ctaPrimary}
              <svg className="size-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={ctaSecondaryUrl}
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-medium backdrop-blur-md transition-colors hover:bg-white/10"
            >
              {ctaSecondary}
            </a>
          </div>
        </div>

        {Array.isArray(stats) && stats.length > 0 ? (
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-10 md:mt-24 md:grid-cols-4">
            {stats.map((s) => (
              <div key={`${s.value}-${s.label}`}>
                <div className="font-serif text-3xl md:text-5xl text-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-xs md:text-sm text-white/60 max-w-[220px] leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
