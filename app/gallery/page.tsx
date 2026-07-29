import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";
import { gallery } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galerie d'art",
  description: "Découvrez les artistes de NMW, les expositions et l'esprit éditorial de la galerie.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/gallery" },
  openGraph: { title: "Galerie d'art | NMW", description: "Des expositions et artistes locaux en résidence.", url: "https://www.nmwcafegalerie.com/gallery" },
  twitter: { title: "Galerie d'art | NMW", description: "Des expositions et artistes locaux en résidence." },
};

export default function GalleryPage() {
  return (
    <PageShell
      title="Une galerie qui fait respirer l'espace."
      eyebrow="Galerie d'art"
      intro="L'art y est pensé comme une présence tactile et lumineuse, entre exposition, rencontre et contemplation."
      heroImage="https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1800&q=80"
      ctaLabel="Voir l'exposition"
      ctaHref="/events"
    >
      <SectionBlock eyebrow="Éditorial" title="Des œuvres pour ralentir le regard." description="Les expositions changent au fil des saisons, avec une écriture visuelle empreinte de calme et de précision.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <figure key={item.caption} className={`overflow-hidden rounded-[1.5rem] border border-[#e8ddd0] bg-white/80 ${item.tall ? "md:col-span-2" : ""}`}>
              <div className={`h-72 bg-cover bg-center ${item.tall ? "md:h-96" : ""}`} style={{ backgroundImage: `url(${item.src})` }} />
              <figcaption className="p-5 text-sm text-ink/70">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </SectionBlock>
    </PageShell>
  );
}
