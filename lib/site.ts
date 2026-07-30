export type SiteLink = {
  label: string;
  href: string;
};

export const siteLinks: SiteLink[] = [
  { label: "Menu", href: "/menu" },
  { label: "Flower Bar", href: "/flower-bar" },
  { label: "Boutique", href: "/boutique" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const brand = {
  name: "NMW Café Galerie Boutique",
  slogan: "No Matter What",
  address: "3054A Chem. d'Oka, Sainte-Marthe-sur-le-Lac, QC J0N 1P0",
  hours: "Lun–Dim · horaires détaillés sur la page contact",
};
