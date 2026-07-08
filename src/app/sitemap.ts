import type { MetadataRoute } from "next";
import { catalogSlugs } from "@/alchyx/registry/catalog";

const BASE = "https://alchyx.d-alabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/foundations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/components`, changeFrequency: "weekly", priority: 0.9 },
  ];
  const componentRoutes: MetadataRoute.Sitemap = catalogSlugs.map((slug) => ({
    url: `${BASE}/components/${slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));
  return [...staticRoutes, ...componentRoutes];
}
