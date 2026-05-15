import { siteConfig } from "@/config/site";

const InstagramIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13 22v-8h3l1-4h-4V7.5c0-1 .3-1.7 1.8-1.7H17V2.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.4V10H7v4h3v8h3z" />
  </svg>
);

export default function Footer() {
  const { name } = siteConfig;
  const { tagline, links, copyright, address, social, madeWith } = siteConfig.footer;

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
              Visítanos
            </p>
            {address ? (
              <p className="text-sm text-white/75 leading-relaxed">
                {address.line}
                <br />
                {address.city}
                <br />
                {address.country}
              </p>
            ) : null}

            {social && (social.instagram || social.facebook) ? (
              <div className="mt-6 flex items-center gap-3">
                {social.instagram ? (
                  <a
                    href={social.instagram}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 hover:border-accent hover:text-accent transition-colors"
                  >
                    <InstagramIcon />
                  </a>
                ) : null}
                {social.facebook ? (
                  <a
                    href={social.facebook}
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 hover:border-accent hover:text-accent transition-colors"
                  >
                    <FacebookIcon />
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} {name}. {copyright}
          </p>
          {madeWith ? <p>{madeWith}</p> : null}
        </div>
      </div>
    </footer>
  );
}
