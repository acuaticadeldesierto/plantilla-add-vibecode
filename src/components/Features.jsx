import { siteConfig } from "@/config/site";

const iconMap = {
  lightning: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  mobile: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  settings: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
};

export default function Features() {
  const { heading, subheading, items } = siteConfig.features;

  return (
    <section id="features" className="section-pad bg-background">
      <div className="container-wide">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow text-accent mb-5">El método</p>
          <h2 className="display-2 text-foreground">
            {heading} <br />
            <span className="italic font-light text-muted-foreground">{subheading}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((feature, index) => (
            <article
              key={index}
              className="rounded-2xl border border-border bg-background p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-2xl bg-surface-light text-foreground">
                {iconMap[feature.icon] ?? iconMap.settings}
              </div>
              <h3 className="font-serif text-2xl tracking-tight text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
