import { products } from "@/data/products";
import { normalize } from "@/lib/utils";
import { getCategory } from "@/data/categories";
import type { Product } from "@/types";

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const productsByCategory = (slug: string) => products.filter((p) => p.categorySlug === slug);

export const featuredProducts = () => products.filter((p) => p.featured);

export function relatedProducts(product: Product, limit = 4) {
  const same = products.filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug);
  const others = products.filter((p) => p.categorySlug !== product.categorySlug);
  return [...same, ...others].slice(0, limit);
}

/** Busca por nome, código, descrição, cores e categoria (sem acentos). */
export function matchesQuery(product: Product, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  const haystack = normalize(
    [
      product.name,
      product.code ?? "",
      product.summary,
      product.description,
      product.colors.join(" "),
      getCategory(product.categorySlug)?.name ?? "",
    ].join(" "),
  );
  return q.split(/\s+/).every((token) => haystack.includes(token));
}
