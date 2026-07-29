export const siteMetadata = {
  title: "NMW Café Galerie Boutique | Coffee, Flowers & Culture",
  description: "NMW is a destination for specialty coffee, flowers, local products and creative community experiences.",
  url: "https://www.nmwcafegalerie.com",
  image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "NMW Café Galerie Boutique",
  url: siteMetadata.url,
  telephone: "+1-514-555-0123",
  address: {
    "@type": "PostalAddress",
    streetAddress: "142 Rue Saint-Paul",
    addressLocality: "Montréal",
    addressRegion: "QC",
    postalCode: "H2Y 1G8",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
};
