import { siteConfig } from "@/config/site";

function planHref(plan) {
  if (plan.paypalAmount) {
    const { paypalMeUsername, currency } = siteConfig.payment;
    return `https://www.paypal.me/${paypalMeUsername}/${plan.paypalAmount}${currency}`;
  }
  return "#contacto";
}

export default function Pricing() {
  const { heading, subheading, plans } = siteConfig.pricing;

  return (
    <section id="precios" className="section-pad bg-surface-light">
      <div className="container-wide">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow text-accent mb-5">Precios</p>
          <h2 className="display-2 text-[hsl(var(--foreground))]">
            {heading} <br />
            <span className="italic font-light text-black/50">{subheading}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`flex flex-col rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-surface-darker text-white shadow-lg relative"
                  : "bg-white text-[hsl(var(--foreground))] border border-black/10"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-7 inline-flex rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-accent-foreground">
                  Más elegido
                </span>
              )}

              <h3 className="font-serif text-2xl mb-1">{plan.name}</h3>
              <p className={`text-sm ${plan.highlighted ? "text-white/65" : "text-black/55"}`}>
                {plan.description}
              </p>

              <div className="mt-6 mb-6 flex items-baseline gap-1.5">
                <span className="font-serif text-5xl tracking-tight">{plan.price}</span>
                <span className={`text-xs ${plan.highlighted ? "text-white/55" : "text-black/50"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className={`space-y-3 text-sm border-t pt-6 ${plan.highlighted ? "border-white/10" : "border-black/10"}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className={`mt-2 inline-block size-1.5 rounded-full ${plan.highlighted ? "bg-accent" : "bg-black"}`} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={planHref(plan)}
                target={plan.paypalAmount ? "_blank" : undefined}
                rel={plan.paypalAmount ? "noopener noreferrer" : undefined}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 hover:scale-[1.02] ${
                  plan.highlighted ? "bg-accent text-accent-foreground" : "bg-black text-white"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
