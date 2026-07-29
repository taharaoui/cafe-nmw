import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Événements",
  description: "Découvrez les ateliers, expositions, dégustations et soirées communautaires à NMW.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/events" },
  openGraph: { title: "Événements | NMW", description: "Ateliers, expositions et événements à Montréal.", url: "https://www.nmwcafegalerie.com/events" },
  twitter: { title: "Événements | NMW", description: "Ateliers, expositions et événements à Montréal." },
};

export default function EventsPage() {
  return (
    <PageShell
      title="Des événements conçus pour rassembler."
      eyebrow="Événements"
      intro="Des ateliers floraux, des vernissages, des dégustations de café et des soirées communautaires autour d'une même idée : créer ensemble."
      heroImage="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1800&q=80"
      ctaLabel="Réserver sa place"
      ctaHref="/contact"
    >
      <SectionBlock eyebrow="Programme" title="Le calendrier de la maison, pensé comme une saison." description="Chaque événement est une invitation à prolonger l'expérience NMW au-delà du café.">
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={event.title} className="flex flex-col gap-4 rounded-[1.5rem] border border-[#e8ddd2] bg-white/80 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold-dark">{event.type}</p>
                <h3 className="mt-2 text-xl text-coffee-dark">{event.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink/70">{event.description}</p>
              </div>
              <div className="rounded-full bg-[#f4eee7] px-4 py-2 text-sm font-semibold text-coffee-dark">{event.date}</div>
            </div>
          ))}
        </div>
      </SectionBlock>
    </PageShell>
  );
}
