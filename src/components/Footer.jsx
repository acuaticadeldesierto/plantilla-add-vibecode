import { siteConfig } from "@/config/site";

export default function Footer() {
  const { name } = siteConfig;
  const { tagline, links, copyright } = siteConfig.footer;

  return (
    <footer className="bg-surface-darker text-white border-t border-white/5">
      <div className="container-wide py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="font-serif text-3xl tracking-tight inline-flex items-center gap-2"
              aria-label={`${name} — Escuela de Natación`}
            >
              <span className="inline-block size-2 rounded-full bg-accent" aria-hidden="true" />
              {name}
            </a>
            <p className="mt-5 text-sm text-white/60 max-w-xs leading-relaxed">
              {tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
              Navegación
            </p>
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/75 hover:text-white link-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] text-white/40 mb-4">
              Contacto
            </p>
            <p className="text-sm text-white/75 leading-relaxed">
              Chihuahua, Chihuahua, México
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {name}. {copyright}
          </p>
          <p>Hecho con disciplina en Chihuahua.</p>
        </div>
      </div>
    </footer>
  );
}
