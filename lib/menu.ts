export type MenuItem = {
  name: string;
  description: string;
  price: string;
  category: string;
};

export const menuItems: MenuItem[] = [
  { name: "Flat White", description: "Espresso, lait velouté, douceur soyeuse.", price: "5,50 $", category: "Café chaud" },
  { name: "Cappuccino", description: "Crème fine, café intense et équilibre parfait.", price: "5,25 $", category: "Café chaud" },
  { name: "Latte Maison", description: "Lait de noisette, sucre de canne, notes rondes.", price: "5,75 $", category: "Café chaud" },
  { name: "Americano", description: "Café noir, net et structuré.", price: "4,50 $", category: "Café chaud" },
  { name: "Iced Espresso", description: "Espresso glacé, lait de coco, notes florales.", price: "6,00 $", category: "Cafés glacés" },
  { name: "Nitro Cold Brew", description: "Infusion longue, texture veloutée, très lisse.", price: "6,25 $", category: "Cafés glacés" },
  { name: "Smoothie Énergie", description: "Banane, fruits rouges, graines de chia.", price: "7,50 $", category: "Smoothies" },
  { name: "Smoothie Vert", description: "Pomme, concombre, avocat, citron.", price: "7,25 $", category: "Smoothies" },
  { name: "Mocktail Citrus", description: "Orange, basilic, tonic maison.", price: "6,50 $", category: "Mocktails" },
  { name: "Mocktail Émeraude", description: "Pamplemousse, gingembre, eau pétillante.", price: "6,50 $", category: "Mocktails" },
  { name: "Brioche Vanille", description: "Pâte levée, beurre de cacahuète, fleur de sel.", price: "4,75 $", category: "Brioches" },
  { name: "Croissant Amande", description: "Feuilletage doré, crème d'amande maison.", price: "4,50 $", category: "Croissants" },
  { name: "Focaccia Olives", description: "Pain artisanal, olives noires, huile d'olive.", price: "8,50 $", category: "Focaccias" },
  { name: "Focaccia Herbes", description: "Herbes fraîches, beurre noisette, fleur de sel.", price: "8,50 $", category: "Focaccias" },
  { name: "Sandwich Jardin", description: "Légumes rôtis, fromage frais, pain de campagne.", price: "12,50 $", category: "Sandwichs" },
  { name: "Salade Saison", description: "Verdure, noisettes, vinaigrette au miel.", price: "13,50 $", category: "Salades" },
  { name: "Petite Douceur", description: "Gâteau du jour, fruits de saison.", price: "5,00 $", category: "Petites douceurs" },
];

export const menuCategories = [
  "Café chaud",
  "Cafés glacés",
  "Smoothies",
  "Mocktails",
  "Brioches",
  "Croissants",
  "Focaccias",
  "Sandwichs",
  "Salades",
  "Petites douceurs",
];
