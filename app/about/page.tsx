import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import Button from "@/components/Button";
import SectionBlock from "@/components/ui/SectionBlock";

export const metadata: Metadata = {
  title: "À propos",
  description: "Le récit de NMW, sa mission, ses valeurs et l'univers du café et des fleurs.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/about" },
  openGraph: { title: "À propos | NMW", description: "Le récit de NMW, sa mission et ses valeurs.", url: "https://www.nmwcafegalerie.com/about" },
  twitter: { title: "À propos | NMW", description: "Le récit de NMW, sa mission et ses valeurs." },
};

export default function AboutPage() {
  return (
    <PageShell
      title="Un café, des fleurs, une maison accueillante."
      eyebrow="À propos"
      intro="Le NMW réunit le café de spécialité, les bouquets sur mesure et la douceur d’un lieu pensé pour ralentir."
      heroImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80"
      ctaLabel="Nous rendre visite"
      ctaHref="/contact"
    >
      <section className="container-nmw py-20 md:py-24">
        <div className="rounded-[2rem] border border-[#e8ddd2] bg-[#f8f2ea] p-8 md:p-12">
          <div className="max-w-3xl">
            <p className="eyebrow text-coffee-dark">Bienvenue</p>
            <h2 className="mt-4 text-3xl text-coffee-dark sm:text-4xl">
              Un lieu où le café et les fleurs parlent la même langue : celle du calme et de l’attention.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/70">
              Chez NMW, chaque visite est une pause à la fois simple et singulière — un café préparé avec soin, un bouquet choisi avec sensibilité, et une maison ouverte à la rencontre.
            </p>
          </div>
        </div>
      </section>

      <SectionBlock
        eyebrow="Menu"
        title="Trois spécialités à découvrir"
        description="Des créations simples, précieuses et faites pour accompagner l’instant présent."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Latte signature",
              description: "Un café velouté, équilibré et rehaussé d’un parfum de saison.",
              image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
            },
            {
              title: "Pâtisserie du jour",
              description: "Une douceur préparée à la maison pour accompagner une pause lente.",
              image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=900&q=80",
            },
            {
              title: "Boisson froide",
              description: "Un rafraîchissement élégant pour les journées lumineuses et paisibles.",
              image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=900&q=80",
            },
          ].map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[1.5rem] border border-[#e8ddd2] bg-white shadow-soft">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl text-coffee-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/menu" variant="primary">
            Découvrir le Menu
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Flower Bar"
        title="Des bouquets composés au rythme des saisons"
        description="Chaque création est pensée pour refléter le moment, la personne et l’émotion."
      >
        <div className="grid gap-8 rounded-[2rem] border border-[#e8ddd2] bg-[#fcf8f2] p-8 md:grid-cols-[1fr_0.9fr] md:p-10">
          <div className="space-y-4">
            <div className="h-64 rounded-[1.5rem] bg-[linear-gradient(135deg,_rgba(17,17,17,0.08),_rgba(110,84,72,0.20))] bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1200&q=80)" }} />
            <p className="text-base leading-8 text-ink/70">
              Le bar à fleurs propose des bouquets sur mesure, réalisés au comptoir avec des fleurs fraîches et une vraie attention à la composition.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-[1.5rem] border border-[#e8ddd2] bg-white/80 p-8">
            <p className="text-sm uppercase tracking-[0.35em] text-gold-dark">Service à la carte</p>
            <h3 className="text-2xl text-coffee-dark">Un bouquet pensé pour la personne qui le reçoit.</h3>
            <p className="text-base leading-8 text-ink/70">
              Que ce soit pour une occasion, un cadeau ou un simple plaisir, chaque composition est proposée avec chaleur et précision.
            </p>
            <Button href="/flower-bar" variant="secondary">
              Découvrir le Flower Bar
            </Button>
          </div>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Boutique"
        title="Des objets de maison et des produits faits pour durer"
        description="Entre tasses artisanales, grains de café et pièces déco, la boutique accompagne le quotidien avec élégance."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Tasses artisanales", text: "Des pièces à la texture chaleureuse, pensées pour les pauses du matin." },
            { title: "Grains de café", text: "Une sélection de cafés de spécialité révélant des profils singuliers." },
            { title: "Objets déco", text: "Des accessoires simples et beaux pour habiter l’espace avec douceur." },
          ].map((product) => (
            <div key={product.title} className="rounded-[1.5rem] border border-[#e8ddd2] bg-[#f8f2ea] p-6">
              <div className="h-24 rounded-[1rem] bg-[radial-gradient(circle_at_top_left,_rgba(17,17,17,0.08),_transparent_60%)]" />
              <h3 className="mt-5 text-xl text-coffee-dark">{product.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/70">{product.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/boutique" variant="ghost" className="border-coffee/20 text-coffee-dark hover:bg-coffee/5">
            Explorer la boutique
          </Button>
        </div>
      </SectionBlock>

      <SectionBlock
        eyebrow="Infos pratiques"
        title="Horaires et adresse"
        description="Une adresse simple, un lieu pensé pour être trouvé facilement et accueilli chaleureusement."
      >
        <div className="rounded-[2rem] border border-[#e8ddd2] bg-white p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold-dark">Horaires</p>
              <ul className="mt-4 space-y-3 text-base leading-8 text-ink/70">
                <li>Lundi–Vendredi : 7h30 – 18h00</li>
                <li>Samedi–Dimanche : 8h30 – 18h00</li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold-dark">Adresse</p>
              <p className="mt-4 text-base leading-8 text-ink/70">
                3054A Chem. d&apos;Oka, Sainte-Marthe-sur-le-Lac, QC J0N 1P0
              </p>
            </div>
          </div>
        </div>
      </SectionBlock>
    </PageShell>
  );
}
