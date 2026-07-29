import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";
import AboutValues from "@/components/about/AboutValues";

export const metadata: Metadata = {
  title: "À propos",
  description: "Le récit de NMW, sa mission, ses valeurs et l'équipe derrière la maison.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/about" },
  openGraph: { title: "À propos | NMW", description: "Le récit de NMW, sa mission et ses valeurs.", url: "https://www.nmwcafegalerie.com/about" },
  twitter: { title: "À propos | NMW", description: "Le récit de NMW, sa mission et ses valeurs." },
};

export default function AboutPage() {
  return (
    <PageShell
      title="A family story, shaped into a place of welcome."
      eyebrow="Our Story"
      intro="Three generations of women have turned coffee, conversation, beauty and care into a home for the people who need a moment of quiet or connection."
      heroImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80"
      ctaLabel="Nous rendre visite"
      ctaHref="/contact"
    >
      <SectionBlock eyebrow="The Story" title="A grandmother. A mother. A granddaughter." description="The name No Matter What carries a promise: no matter what life brings, there will always be a place where people feel welcomed, find comfort and slow down.">
        <div className="rounded-[2rem] border border-[#e8ddd2] bg-white/80 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold-dark">Family legacy</p>
              <h3 className="mt-4 text-3xl text-coffee-dark sm:text-4xl">For generations, coffee has been prepared with love, patience and generosity.</h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70">At NMW, that generosity becomes a shared ritual: a cup of coffee, a bouquet, a conversation, a pause, an encounter, and a sense of belonging.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[#e6ddd1] bg-[#f6f1ea] p-8 text-sm leading-8 text-ink/70">
              “No Matter What” is not only a slogan. It is the promise of a place that stays open in spirit, in welcome and in warmth.
            </div>
          </div>
        </div>
        <AboutValues />
      </SectionBlock>
    </PageShell>
  );
}
