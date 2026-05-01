import { siteConfig } from "@/config/site";

export default function Achievements() {
  const { heading, subheading, stats, items, note } = siteConfig.achievements;

  return (
    <section id="logros" className="section-pad relative overflow-hidden bg-surface-darker text-white">
      <div className="container-wide relative">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow text-accent mb-5">Logros</p>
          <h2 className="display-2 text-white mb-6">
            {heading} <br />
            <span className="italic font-light text-white/70">{subheading}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-10">
            {items.map((item) => (
              <div key={item.title}>
                <div className="font-serif text-4xl md:text-5xl tracking-tight text-white">
                  {item.title}
                </div>
                <div className="mt-3 text-base md:text-lg text-white/65 leading-relaxed max-w-xl">
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                Resultados
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {(stats || []).map((s) => (
                  <div key={s.label}>
                    <div className="font-serif text-3xl md:text-4xl text-white tracking-tight">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs md:text-sm text-white/55 leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              {note ? (
                <p className="mt-8 text-xs text-white/45 leading-relaxed">{note}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

