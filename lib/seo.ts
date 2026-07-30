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
    streetAddress: "3054A Chem. d'Oka",
    addressLocality: "Sainte-Marthe-sur-le-Lac",
    addressRegion: "QC",
    postalCode: "J0N 1P0",
    addressCountry: "CA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "07:30",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
};
