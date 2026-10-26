import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb, Container } from "@/components/ui/Section";
import { ProductImage } from "@/components/ui/ProductImage";
import { Catalog } from "@/components/products/Catalog";
import { categories, getCategory } from "@/data/categories";
import { products } from "@/data/products";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.intro,
    alternates: { canonical: `/categoria/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const others = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <header className="border-b border-line bg-mist">
        <Container className="grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div>
            <Breadcrumb items={[{ label: "Início", href: "/" }, { label: "Coleção", href: "/colecao" }, { label: category.name }]} />
            <h1 className="text-5xl sm:text-7xl">{category.name}</h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-grafite/75">{category.intro}</p>
          </div>
          <div className="hidden aspect-[16/10] overflow-hidden lg:block">
            <ProductImage src={category.cover} alt={`Capa da categoria ${category.name}`} tone={category.tone} variant={2} label="Foto da categoria a inserir" sizes="40vw" priority />
          </div>
        </Container>
      </header>

      <Container className="py-12 lg:py-16">
        <Catalog products={products} categories={categories} fixedCategory={category.slug} />

        <nav aria-label="Outras categorias" className="mt-20 border-t border-line pt-10">
          <p className="eyebrow mb-5">Explore também</p>
          <ul className="flex flex-wrap gap-x-10 gap-y-3">
            {others.map((c) => (
              <li key={c.slug}>
                <Link href={`/categoria/${c.slug}`} className="font-serif text-3xl text-cacau underline-offset-4 hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </>
  );
}
