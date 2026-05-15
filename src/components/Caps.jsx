import { siteConfig } from "@/config/site";

// Icono de flama para la gorra élite (Dragón de Fuego)
function FlameIcon({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2c1 3 3 4.5 3 7a3 3 0 0 1-6 0c0-1 .3-1.8.7-2.5C8 8 6 10.5 6 14a6 6 0 0 0 12 0c0-4-3-7-6-12z" />
    </svg>
  );
}

export default function Caps() {
  const config = siteConfig.caps;

  // Si no está habilitado, no renderiza nada
  if (!config?.enabled) return null;

  const { heading, subheading, intro, items } = config;

  return (
    <section id="gorras" className="section-pad bg-background">
      <div className="container-wide">
        {/* Encabezado */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent mb-5">El sistema ADD</p>
            <h2 className="display-2 text-foreground">
              {heading} <br />
              <span className="italic font-light text-muted-foreground">
                {subheading}
              </span>
            </h2>
          </div>
          {intro ? (
            <div className="lg:col-span-5 lg:pt-6">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {intro}
              </p>
            </div>
          ) : null}
        </div>

        {/* Fila de 7 gorras como círculos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 mb-20">
          {items.map((cap) => (
            <div
              key={cap.id}
              className="flex flex-col items-center text-center group"
            >
              <div
                className="relative size-24 md:size-28 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: cap.color,
                  boxShadow: `inset 0 -10px 20px hsl(0 0% 0% / 0.2), 0 8px 24px hsl(0 0% 0% / 0.12), inset 0 0 0 4px ${cap.ring}`,
                }}
                aria-hidden="true"
              >
                {cap.isElite ? (
                  <FlameIcon className="size-7 text-white drop-shadow" />
                ) : null}
              </div>
              <p
                className="mt-4 font-serif text-lg"
                style={{
                  color: cap.isElite ? "var(--color-accent)" : undefined,
                }}
              >
                {cap.name}
              </p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-0.5">
                {cap.level}
              </p>
            </div>
          ))}
        </div>

        {/* Tabla detallada */}
        <div className="rounded-2xl overflow-hidden border border-border">
          <table className="w-full text-left">
            <thead className="bg-surface-light">
              <tr>
                <th className="py-4 px-4 md:px-6 text-xs uppercase tracking-wider text-muted-foreground">
                  Gorra
                </th>
                <th className="py-4 px-4 md:px-6 text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">
                  Nivel
                </th>
                <th className="py-4 px-4 md:px-6 text-xs uppercase tracking-wider text-muted-foreground">
                  Qué aprendes
                </th>
                <th className="py-4 px-4 md:px-6 text-xs uppercase tracking-wider text-muted-foreground hidden lg:table-cell">
                  Requisito
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {items.map((cap) => (
                <tr key={cap.id} className="hover:bg-surface-light transition-colors">
                  <td className="py-5 px-4 md:px-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="inline-block size-5 rounded-full"
                        style={{
                          background: cap.color,
                          boxShadow: `inset 0 0 0 2px ${cap.ring}`,
                        }}
                        aria-hidden="true"
                      />
                      <span className="font-medium text-foreground">
                        {cap.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-5 px-4 md:px-6 text-sm text-muted-foreground hidden md:table-cell">
                    {cap.level}
                  </td>
                  <td className="py-5 px-4 md:px-6 text-sm text-foreground/85">
                    {cap.description}
                  </td>
                  <td className="py-5 px-4 md:px-6 text-sm text-muted-foreground hidden lg:table-cell">
                    {cap.requirements}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
