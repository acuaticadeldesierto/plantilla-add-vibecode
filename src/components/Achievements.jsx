import { siteConfig } from "@/config/site";

export default function Achievements() {
  const {
    heading,
    subheading,
    intro,
    items,
    coachImage,
    coachName,
    coachRole,
  } = siteConfig.achievements;

  return (
    <section
      id="logros"
      className="section-pad relative overflow-hidden bg-gradient-deep-radial text-white"
    >
      {/* textura sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <p className="eyebrow text-accent mb-5">El diferenciador</p>
          <h2 className="display-2 text-white mb-6">
            {heading} <br />
            <span className="italic font-light text-white/70">{subheading}</span>
          </h2>
          {intro ? (
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl">
              {intro}
            </p>
          ) : null}
        </div>

        {/* Grid: stats + retrato */}
        <div className="mt-16 md:mt-20 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Stats grandes (orden visual: izquierda en lg) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-10 md:space-y-14">
            {items.map((item) => (
              <div key={item.title}>
                <div
                  className={`stat-display ${
                    item.accent ? "text-gold" : "text-white"
                  }`}
                >
                  {item.number}
                </div>
                <div className="mt-3 font-serif text-xl md:text-2xl text-white/95">
                  {item.title}
                </div>
                {item.description ? (
                  <div className="mt-1 text-sm md:text-base text-white/55 max-w-md">
                    {item.description}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {/* Retrato del coach (orden visual: derecha en lg, arriba en mobile) */}
          {coachImage ? (
            <div className="order-1 lg:order-2 lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={coachImage}
                  alt={`Retrato de ${coachName || "Head Coach"} de ADD junto a la alberca`}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  {coachName ? (
                    <p className="font-serif text-2xl md:text-3xl text-white">
                      {coachName}
                    </p>
                  ) : null}
                  {coachRole ? (
                    <p className="text-sm text-white/70 mt-1">{coachRole}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
