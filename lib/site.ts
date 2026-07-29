export type SiteLink = {
  label: string;
  href: string;
};

export const siteLinks: SiteLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Café", href: "/cafe" },
  { label: "Flower Bar", href: "/flower-bar" },
  { label: "Boutique", href: "/boutique" },
  { label: "Menu", href: "/menu" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const brand = {
  name: "NMW Café Galerie Boutique",
  slogan: "No Matter What",
  address: "142 Rue Saint-Paul, Montréal, QC",
  hours: "Tous les jours · 7h30–18h00",
};
