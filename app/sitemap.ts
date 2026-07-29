import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nmwcafegalerie.com";
  const routes = ["", "/cafe", "/flower-bar", "/boutique", "/menu", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));
}
