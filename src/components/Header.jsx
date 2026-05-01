"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { name } = siteConfig;
  const { links } = siteConfig.nav;
  const cta = siteConfig.nav?.cta;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "bg-surface-darker/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex h-16 md:h-20 items-center justify-between text-white">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-serif text-2xl tracking-tight"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
          {name}
        </a>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-8 text-sm text-white/80">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        {cta?.label && cta?.href ? (
          <a
            href={cta.href}
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground shadow-accent transition-transform duration-300 hover:scale-[1.03]"
          >
            {cta.label}
          </a>
        ) : null}

        {/* Mobile toggle */}
        <button
          className="lg:hidden inline-flex size-10 items-center justify-center rounded-full text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden overflow-hidden border-b border-white/5 bg-surface-darker/85 backdrop-blur-xl">
          <div className="container-wide pb-8 pt-2">
            <ul className="flex flex-col divide-y divide-white/10">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 font-serif text-2xl text-white/90 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {cta?.label && cta?.href ? (
              <a
                href={cta.href}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-base font-medium text-accent-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {cta.label}
              </a>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
}
