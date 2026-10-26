import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Info } from "lucide-react";
import { Breadcrumb, Container } from "@/components/ui/Section";
import { Gallery } from "@/components/products/Gallery";
import { ProductPurchase } from "@/components/products/ProductPurchase";
import { ProductCard } from "@/components/products/ProductCard";
import { products } from "@/data/products";
import { getCategory } from "@/data/categories";
import { getProduct, relatedProducts } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/produto/${product.slug}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);
  const related = relatedProducts(product);

  return (
    <Container className="py-10 lg:py-14">
      <Breadcrumb
        items={[
          { label: "Início", href: "/" },
          { label: "Coleção", href: "/colecao" },
          ...(category ? [{ label: category.name, href: `/categoria/${category.slug}` }] : []),
          { label: product.name },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Gallery product={product} />

        <div className="lg:sticky lg:top-28 lg:self-start">
          {category && <p className="eyebrow mb-3">{category.name}{product.code && ` · Cód. ${product.code}`}</p>}
          <h1 className="text-4xl sm:text-5xl">{product.name}</h1>
          <p className="mt-5 max-w-lg leading-relaxed text-grafite/75">{product.description}</p>

          {product.provisional && (
            <p role="note" className="mt-6 flex gap-3 border border-bege bg-paper px-4 py-3 text-xs leading-relaxed text-grafite/75">
              <Info className="mt-0.5 size-4 shrink-0 text-cacau" aria-hidden />
              <span>Informações provisórias: nome, cores, tamanhos e fotos ainda serão confirmados pela loja.</span>
            </p>
          )}

          <div className="mt-8">
            <ProductPurchase product={product} />
          </div>

          <div className="mt-10 divide-y divide-line border-y border-line">
            <Detail title="Composição e cuidados">
              {product.composition || product.care ? (
                <>
                  {product.composition && <p>Composição: {product.composition}</p>}
                  {product.care && <p>Cuidados: {product.care}</p>}
                </>
              ) : (
                <p>Informações de composição e cuidados a confirmar. Consulte a etiqueta da peça ou a equipe da loja.</p>
              )}
            </Detail>
            <Detail title="Como escolher o tamanho">
              <p>
                O caimento varia de um modelo para outro. Tire suas medidas e confira a tabela específica desta peça; na dúvida, a loja ajuda na prova.{" "}
                <Link href="/guia-de-tamanhos" className="underline underline-offset-4">
                  Ver guia de tamanhos
                </Link>
                .
              </p>
            </Detail>
          </div>
        </div>
      </div>

      <section aria-labelledby="related-title" className="mt-24">
        <h2 id="related-title" className="text-4xl sm:text-5xl">
          Você também pode gostar
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {related.map((p) => (
            <li key={p.slug}>
              <ProductCard product={p} />
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}

function Detail({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group py-4">
      <summary className="flex cursor-pointer items-center justify-between text-xs font-medium uppercase tracking-[0.16em]">
        {title}
        <span aria-hidden className="text-lg leading-none transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-grafite/75">{children}</div>
    </details>
  );
}
