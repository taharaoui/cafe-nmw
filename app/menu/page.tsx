import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";
import { menu } from "@/lib/data";

export const metadata: Metadata = {
  title: "Menu",
  description: "Consultez le menu de NMW, du café de spécialité aux plats frais et aux desserts maison.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/menu" },
  openGraph: { title: "Menu | NMW", description: "Le menu de la maison à Montréal.", url: "https://www.nmwcafegalerie.com/menu" },
  twitter: { title: "Menu | NMW", description: "Le menu de la maison à Montréal." },
};

export default function MenuPage() {
  return (
    <PageShell
      title="A menu shaped like an editorial season."
      eyebrow="Menu"
      intro="Thoughtfully prepared dishes and beverages, served in a space that values calm, beauty and the pleasure of lingering."
      heroImage="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=80"
      ctaLabel="Voir les boissons"
      ctaHref="/cafe"
    >
      <SectionBlock eyebrow="Cuisine & beverages" title="Fresh, generous and quietly luxurious." description="The menu reflects the same spirit as the house: quality ingredients, thoughtful preparation and a feeling of ease.">
        <div className="space-y-12">
          {menu.map((section) => (
            <div key={section.category}>
              <h3 className="text-2xl text-coffee-dark">{section.category}</h3>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {section.items.map((item, index) => (
                  <div key={item.name} className="rounded-[1.5rem] border border-[#e8ddd2] bg-white/80 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-lg text-coffee-dark">{item.name}</h4>
                      <span className="text-sm font-semibold text-gold-dark">{item.price}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-ink/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionBlock>
    </PageShell>
  );
}
