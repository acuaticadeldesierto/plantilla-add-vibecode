import { siteConfig } from "@/config/site";

export default function Events() {
  const { heading, subheading, items } = siteConfig.events;

  return (
    <section id="eventos" className="section-pad bg-background">
      <div className="container-wide">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow text-accent mb-5">Eventos</p>
          <h2 className="display-2 text-foreground">
            {heading} <br />
            <span className="italic font-light text-muted-foreground">{subheading}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((event) => (
            <div
              key={`${event.date}-${event.title}`}
              className="bg-background border border-border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-light border border-border text-muted-foreground">
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                  Próximo
                </span>
              </div>

              <h3 className="font-serif text-2xl tracking-tight text-foreground mb-3">
                {event.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground mb-6">
                {event.description}
              </p>

              {event.href && event.cta && (
                <a
                  href={event.href}
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-accent transition-transform duration-300 hover:scale-[1.02]"
                >
                  {event.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

