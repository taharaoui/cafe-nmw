import { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import SectionBlock from "@/components/ui/SectionBlock";

const cafeMenu = [
  {
    category: "CAFÉ CHAUD",
    items: [
      { name: "Espresso", description: "", price: "2.85 $" },
      { name: "Double Espresso", description: "", price: "3.95 $" },
      { name: "Café filtre", description: "", price: "2.75 $ - 2.95 $" },
      { name: "Américano", description: "", price: "4.00 $ - 4.95 $" },
      { name: "Cappuccino", description: "", price: "4.75 $ - 5.35 $" },
      { name: "Latte", description: "", price: "4.95 $ - 5.35 $" },
      { name: "Latte vanille", description: "", price: "5.25 $ - 6.95 $" },
      { name: "Latte chocolat", description: "", price: "4.75 $ - 6.95 $" },
      { name: "Caramel Macchiato", description: "", price: "5.50 $ - 7.25 $" },
    ],
  },
  {
    category: "CAFÉS GLACÉS",
    items: [
      { name: "Café glacé", description: "", price: "4.75 $" },
      { name: "Latte glacé", description: "", price: "5.25 $" },
      { name: "Latte glacé vanille", description: "Mousse froide à la vanille", price: "6.95 $" },
      { name: "Caramel Macchiato", description: "Mousse froide à la vanille", price: "7.25 $" },
      { name: "Latte glacé brioché", description: "Shaker cassonade, crème vanillée", price: "7.35 $" },
    ],
  },
  {
    category: "SMOOTHIES",
    items: [
      { name: "Fraise banane", description: "", price: "7.25 $" },
      { name: "Mangue-pêche tropical", description: "", price: "7.25 $" },
      { name: "Énergie", description: "Avocat, banane, mangue", price: "7.95 $" },
    ],
  },
  {
    category: "MOCKTAILS",
    items: [
      { name: "Mojito pêche", description: "Coulis de pêche maison, lime, menthe fraîche, soda", price: "7.25 $" },
      { name: "Fraise basilic spritz", description: "Coulis de fraise maison, citron basilic frais, soda", price: "7.25 $" },
      { name: "Mangue sunrise", description: "Coulis de mangue maison, jus d’orange, soda", price: "7.25 $" },
    ],
  },
  {
    category: "BRIOCHES",
    items: [
      { name: "Brioche classique", description: "", price: "5.25 $" },
      { name: "Brioche cheesecake", description: "Glacage cheesecake, coulis de fraises maison, fraises fraîches", price: "7.95 $" },
      { name: "Brioche biscoff caramel", description: "Glacage cheesecake, coulis caramel, crumble biscoff", price: "7.95 $" },
    ],
  },
  {
    category: "CROISSANTS",
    items: [
      { name: "Croissant classique", description: "", price: "3.50 $" },
      { name: "Choco banane", description: "Crème légère, coulis choco-banane", price: "7.95 $" },
      { name: "Fraise shortcake", description: "Crème légère, fraises fraîches, coulis de fraise maison", price: "7.95 $" },
      { name: "Pêche mangué", description: "Crème légère, pêche grillée, coulis mangue maison, noix de coco grillée, lime", price: "7.95 $" },
    ],
  },
  {
    category: "CROISSANTS SALÉS",
    items: [
      { name: "Caprese", description: "Crème salée maison, mélange tomates, basilic", price: "8.95 $" },
      { name: "Saumon fumé", description: "Crème salée maison, saumon fumé, avocat, huile citronnée, aneth", price: "9.95 $" },
      { name: "Mortadelle", description: "Crème salée maison, mortadelle, miel", price: "8.95 $" },
      { name: "Jambon-provolone", description: "", price: "9.95 $" },
    ],
  },
  {
    category: "P’TITE DOUCEUR",
    items: [
      { name: "Dolce affogato", description: "Gelato 3 saveurs, coulis de chocolat, espresso, crème vanillée et doigt de dame", price: "10.95 $" },
    ],
  },
  {
    category: "FOCCACIAS",
    items: [
      { name: "Saumon fumé", description: "", price: "15.95 $" },
      { name: "Prosciutto & pêche", description: "Stracciatella, prosciutto, pêches grillées, miel", price: "14.95 $" },
      { name: "Légumes grillés", description: "Ricotta, légumes grillés, mélange tomates et basilic, huile d’olive", price: "13.95 $" },
    ],
  },
  {
    category: "SANDWICHS",
    items: [
      { name: "L’italien", description: "Mortadelle, prosciutto, salami de Genève, ricotta, roquette, piment grillé, mélange tomate-basilic, huile d’olive, citron, glaze balsamique", price: "16.95 $" },
      { name: "La Bologna", description: "Mortadelle, stracciatella, roquette, miel, huile d’olive, poivre noir", price: "15.95 $" },
      { name: "La Burrata", description: "Burrata, prosciutto, pesto, mélange tomates, glaze balsamique", price: "18.95 $" },
      { name: "Poulet Toscan", description: "Poulet, pesto basilic, roquette, citron, stracciatella, mélange tomates-basilic", price: "14.95 $" },
    ],
  },
  {
    category: "SALADE",
    items: [
      { name: "Panzanella à la burrata", description: "Salade & roquette, mélange de tomate NMW, concombre, burrata, croûtons NMW", price: "15.95 $" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Le café",
  description: "Découvrez l'expérience café de spécialité de NMW, du grain à la tasse.",
  alternates: { canonical: "https://www.nmwcafegalerie.com/cafe" },
  openGraph: { title: "Le café | NMW", description: "Une expérience café raffinée à Montréal.", url: "https://www.nmwcafegalerie.com/cafe" },
  twitter: { title: "Le café | NMW", description: "Une expérience café raffinée à Montréal." },
};

export default function CafePage() {
  return (
    <PageShell
      title="Le café, servi avec précision."
      eyebrow="Café"
      intro="Une carte pensée pour le matin, l’après-midi et les moments entre deux rendez-vous."
      heroImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=80"
      ctaLabel="Réserver une visite"
      ctaHref="/contact"
    >
      <SectionBlock eyebrow="Menu" title="Des boissons de précision et des douceurs de saison." description="La carte suit l’esprit de la maison : simplicité, goût, élégance et plaisir de rester." >
        <div className="space-y-12">
          {cafeMenu.map((section) => (
            <div key={section.category}>
              <h3 className="text-xl uppercase tracking-[0.3em] text-coffee-dark">{section.category}</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {section.items.map((item) => (
                  <div key={item.name} className="rounded-[1.25rem] border border-[#e8ddd2] bg-white/80 p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg text-coffee-dark">{item.name}</h4>
                        {item.description ? <p className="mt-2 text-sm leading-7 text-ink/70">{item.description}</p> : null}
                      </div>
                      <span className="shrink-0 text-sm font-semibold text-gold-dark">{item.price}</span>
                    </div>
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
