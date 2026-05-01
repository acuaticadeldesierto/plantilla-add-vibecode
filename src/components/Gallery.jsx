import { siteConfig } from "@/config/site";

export default function Gallery() {
  const { heading, subheading, items } = siteConfig.gallery;

  return (
    <section id="galeria" className="section-pad bg-background">
      <div className="container-wide">
        <div className="max-w-3xl mb-16 md:mb-20">
          <p className="eyebrow text-accent mb-5">Galería</p>
          <h2 className="display-2 text-[hsl(var(--foreground))]">
            {heading} <br />
            <span className="italic font-light text-black/50">{subheading}</span>
          </h2>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((photo) => (
            <div
              key={photo.src}
              className="relative overflow-hidden rounded-2xl border border-black/10 bg-surface-light"
            >
              <div className="relative w-full aspect-[4/3]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-sm text-black/60">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

