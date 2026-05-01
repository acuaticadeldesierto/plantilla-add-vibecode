import { siteConfig } from "@/config/site";

export default function Programs() {
  const { heading, subheading, items } = siteConfig.programs;

  return (
    <section id="programas" className="section-pad bg-surface-light">
      <div className="container-wide">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow text-accent mb-5">Programas</p>
          <h2 className="display-2 text-[hsl(var(--foreground))]">
            {heading} <br />
            <span className="italic font-light text-black/50">{subheading}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((program, i) => (
            <article
              key={program.title}
              className={`group relative flex flex-col rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 ${
                i === 1
                  ? "bg-surface-darker text-white shadow-lg lg:scale-[1.02]"
                  : "bg-white text-[hsl(var(--foreground))] border border-black/10 hover:shadow-md"
              }`}
            >
              <p className={`text-xs uppercase tracking-[0.2em] ${i === 1 ? "text-accent" : "text-black/50"}`}>
                {program.title}
              </p>
              <h3 className="mt-3 mb-5 font-serif text-3xl tracking-tight">
                {program.title}
              </h3>
              <p className={`text-base leading-relaxed mb-8 ${i === 1 ? "text-white/75" : "text-black/55"}`}>
                {program.description}
              </p>
              <ul className={`mt-auto space-y-3 text-sm border-t pt-6 ${i === 1 ? "border-white/15" : "border-black/10"}`}>
                {program.highlights.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className={`mt-2 inline-block size-1 rounded-full ${i === 1 ? "bg-accent" : "bg-black"}`} aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`mt-8 inline-flex items-center gap-1.5 text-sm font-medium ${
                  i === 1 ? "text-accent" : "text-black"
                } link-underline`}
              >
                Ver detalles{" "}
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

