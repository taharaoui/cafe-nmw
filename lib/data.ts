export type Experience = {
  title: string;
  description: string;
  icon: "coffee" | "flower" | "palette" | "shopping-bag" | "salad" | "cake";
};

export const experiences: Experience[] = [
  {
    title: "Café de spécialité",
    description:
      "Grains torréfiés en petits lots, extraction soignée, rituel du matin repensé.",
    icon: "coffee",
  },
  {
    title: "Bar à fleurs",
    description:
      "Fleurs fraîches, composez votre bouquet au comptoir avec nos fleuristes.",
    icon: "flower",
  },
  {
    title: "Galerie d'art",
    description:
      "Une exposition vivante d'artistes émergents, renouvelée chaque saison.",
    icon: "palette",
  },
  {
    title: "Boutique locale",
    description:
      "Céramique, bougies, papeterie — des objets choisis avec soin, faits ici.",
    icon: "shopping-bag",
  },
  {
    title: "Cuisine fraîche",
    description:
      "Sandwichs grillés, salades généreuses, préparés chaque jour sur place.",
    icon: "salad",
  },
  {
    title: "Desserts maison",
    description:
      "Pâtisseries faites main, recettes de saison, gourmandes et sincères.",
    icon: "cake",
  },
];

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
};

export type MenuCategory = {
  category: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    category: "Café",
    items: [
      {
        name: "Espresso",
        description: "Simple ou double, extraction courte et intense.",
        price: "3,75 $",
        image:
          "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80",
      },
      {
        name: "Latte",
        description: "Lait mousseux, art latte, douceur veloutée.",
        price: "5,25 $",
        image:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80",
      },
      {
        name: "Cappuccino",
        description: "Équilibre parfait entre crème et café.",
        price: "5,00 $",
        image:
          "https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80",
      },
      {
        name: "Flat White",
        description: "Ristretto double, microfoam soyeuse.",
        price: "5,50 $",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      },
    ],
  },
  {
    category: "Matcha & Boissons glacées",
    items: [
      {
        name: "Matcha Latte",
        description: "Matcha cérémonial, lait d'avoine, léger et vert.",
        price: "6,00 $",
        image:
          "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80",
      },
      {
        name: "Iced Coffee Fleuri",
        description: "Café glacé infusé à froid, sirop floral maison.",
        price: "6,25 $",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
      },
      {
        name: "Smoothie Boutique",
        description: "Fruits de saison, yogourt, miel local.",
        price: "7,00 $",
        image:
          "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
      },
    ],
  },
  {
    category: "Cuisine fraîche",
    items: [
      {
        name: "Sandwich Grillé Jardin",
        description: "Légumes rôtis, fromage fondant, pain artisanal.",
        price: "12,50 $",
        image:
          "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=800&q=80",
      },
      {
        name: "Salade Boutique",
        description: "Verdures fraîches, noix, vinaigrette au miel.",
        price: "13,00 $",
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      },
    ],
  },
  {
    category: "Pâtisserie & Desserts",
    items: [
      {
        name: "Croissant Amande",
        description: "Feuilletage doré, crème d'amande maison.",
        price: "4,75 $",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
      },
      {
        name: "Tarte du Jour",
        description: "Fruits de saison, pâte sablée, faite le matin même.",
        price: "6,50 $",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      },
    ],
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1531913764164-f85c52e6e654?w=1200&q=80",
    caption: "Sofia Bélanger — Encre & lumière",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200&q=80",
    caption: "Marc-Antoine Doyon — Céramique brute",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1577083552792-a0d461cb1670?w=1200&q=80",
    caption: "Exposition collective — Printemps",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&q=80",
    caption: "Léa Fontaine — Nature morte",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1200&q=80",
    caption: "Studio ouvert — dimanche",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=1200&q=80",
    caption: "Détails — bar à fleurs",
    tall: false,
  },
];

export type Product = {
  name: string;
  category: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  {
    name: "Bougie Ambre & Bois",
    category: "Bougies",
    price: "28 $",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=800&q=80",
  },
  {
    name: "Vase en grès",
    category: "Céramique",
    price: "46 $",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800&q=80",
  },
  {
    name: "Grains torréfiés maison",
    category: "Café en grains",
    price: "19 $",
    image:
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80",
  },
  {
    name: "Coffret cadeau boutique",
    category: "Coffrets",
    price: "65 $",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80",
  },
  {
    name: "Carnet relié à la main",
    category: "Artisanat local",
    price: "24 $",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=800&q=80",
  },
  {
    name: "Thé en vrac, mélange maison",
    category: "Thé",
    price: "16 $",
    image:
      "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=800&q=80",
  },
];

export const events = [
  {
    date: "3 fév.",
    title: "Atelier bouquet d'hiver",
    description: "Composez votre bouquet avec notre fleuriste résidente.",
    type: "Atelier fleurs",
  },
  {
    date: "14 fév.",
    title: "Vernissage — Sofia Bélanger",
    description: "Ouverture de l'exposition « Encre & lumière ».",
    type: "Exposition",
  },
  {
    date: "22 fév.",
    title: "Dégustation café & terroir",
    description: "Trois origines, une conversation avec notre torréfacteur.",
    type: "Dégustation",
  },
  {
    date: "8 mars",
    title: "Soirée communautaire",
    description: "Musique douce, artisans locaux, verre offert à l'arrivée.",
    type: "Communauté",
  },
];

export const testimonials = [
  {
    name: "Camille R.",
    quote:
      "Un endroit rare à Montréal — le café est excellent et je repars toujours avec des fleurs ou une trouvaille de la boutique.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    name: "Julien T.",
    quote:
      "L'atmosphère est chaleureuse et inspirante. J'y travaille chaque semaine, entouré d'œuvres locales.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Aïcha M.",
    quote:
      "L'atelier bouquet était magique. Une équipe attentionnée et un lieu magnifiquement pensé.",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80",
  },
];

export const instagramImages = [
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  "https://images.unsplash.com/photo-1524350876685-274059332603?w=600&q=80",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80",
];
