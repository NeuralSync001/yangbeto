import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticRoutes = ["", "/colecao", "/sobre", "/guia-de-tamanhos", "/contato", "/duvidas", "/privacidade", "/termos"];
  return [
    ...staticRoutes.map((path) => ({ url: `${base}${path}` })),
    ...categories.map((c) => ({ url: `${base}/categoria/${c.slug}` })),
    ...products.map((p) => ({ url: `${base}/produto/${p.slug}` })),
  ];
}
