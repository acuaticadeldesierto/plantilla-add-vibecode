import { siteConfig } from "@/config/site";

export default function Schedule() {
  const { heading, subheading, groups, note } = siteConfig.schedule;

  return (
    <section id="horarios" className="section-pad bg-background">
      <div className="container-wide">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow text-accent mb-5">Horarios</p>
          <h2 className="display-2 text-foreground">
            {heading} <br />
            <span className="italic font-light text-muted-foreground">{subheading}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((group) => (
            <article
              key={group.name}
              className="bg-surface-light text-foreground border border-border rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <h3 className="font-serif text-2xl tracking-tight mb-4">{group.name}</h3>
              <div className="space-y-3">
                {group.rows.map((row, idx) => (
                  <div key={idx} className="rounded-xl border border-border bg-background px-4 py-3">
                    <div className="text-sm font-medium">{row.days}</div>
                    <div className="text-sm text-muted-foreground mt-1">{row.time}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {note ? (
          <p className="mt-10 text-sm text-muted-foreground max-w-4xl">
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}

