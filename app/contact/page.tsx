import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import ContactFormCard from "@/components/contact/ContactFormCard";

export const metadata: Metadata = {
  title: "Contact",
  description: "Planifiez votre visite à NMW, retrouvez nos horaires et contactez-nous pour réserver un atelier ou une visite.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/contact" },
  openGraph: { title: "Contact | NMW", description: "Planifiez votre visite à NMW.", url: "https://www.nmwcafegalerie.com/contact" },
  twitter: { title: "Contact | NMW", description: "Planifiez votre visite à NMW." },
};

export default function ContactPage() {
  return (
    <PageShell
      title="Nous sommes là pour vous accueillir."
      eyebrow="Contact & visite"
      intro="Venez découvrir le lieu, réserver un atelier ou prendre rendez-vous pour une visite plus intime."
      heroImage="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1800&q=80"
      ctaLabel="Écrire à NMW"
      ctaHref="mailto:bonjour@nmwcafegalerie.com"
    >
      <SectionBlock eyebrow="Informations" title="Le lieu, les horaires et les détails pratiques." description="Nous vous accueillons à Montréal, dans un espace de café, d'art, de fleurs et de rencontres.">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactInfoCard />
          <ContactFormCard />
        </div>
      </SectionBlock>
    </PageShell>
  );
}
