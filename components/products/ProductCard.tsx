import Link from "next/link";
import { ProductImage } from "@/components/ui/ProductImage";
import { AddToSelectionButton } from "./AddToSelectionButton";
import { getCategory } from "@/data/categories";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const category = getCategory(product.categorySlug);
  return (
    <article className="group flex flex-col">
      <Link href={`/produto/${product.slug}`} className="block" aria-label={`Ver ${product.name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-mist">
          <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-soft)] group-hover:scale-[1.03]">
            <ProductImage src={product.images[0]} alt={product.name} tone={product.tone} priority={priority} />
          </div>
          {product.isNew && (
            <span className="absolute left-3 top-3 bg-offwhite px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-cacau">Conceito</span>
          )}
          {product.provisional && (
            <span className="absolute right-3 top-3 border border-cacau/30 bg-offwhite/90 px-2 py-1 text-[0.58rem] uppercase tracking-[0.16em] text-cacau/80">
              Ilustrativo
            </span>
          )}
        </div>
      </Link>
      <div className="mt-4 flex flex-1 items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-grafite/55">{category?.name}</p>
          <h3 className="mt-1 font-serif text-[1.5rem] leading-[1.1]">
            <Link href={`/produto/${product.slug}`} className="hover:underline underline-offset-4">
              {product.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-grafite/65">
            {product.colors.length ? product.colors.join(" · ") : "Cores ilustrativas"}
            {product.price !== null && <span className="ml-2 text-cacau">{formatPrice(product.price)}</span>}
          </p>
        </div>
        <AddToSelectionButton slug={product.slug} name={product.name} />
      </div>
    </article>
  );
}
