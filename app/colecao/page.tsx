import type { Metadata } from "next";
import { PageHeader, Container } from "@/components/ui/Section";
import { Catalog } from "@/components/products/Catalog";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Coleção NÓRIA",
  description: "Explore a coleção fictícia de bodies, cintas e bermudas NÓRIA.",
  alternates: { canonical: "/colecao" },
};

export default async function CollectionPage({ searchParams }: { searchParams: Promise<{ q?: string; categoria?: string }> }) {
  const { q, categoria } = await searchParams;
  const validCategory = categories.some((c) => c.slug === categoria) ? categoria : "";
  return (
    <>
      <PageHeader
        eyebrow="Coleção"
        title="Todas as peças"
        text="Explore peças e variações criadas para demonstrar este projeto de portfólio."
      />
      <Container className="py-12 lg:py-16">
        {/* key força o reinício dos filtros quando a URL de busca muda */}
        <Catalog key={`${q ?? ""}|${validCategory}`} products={products} categories={categories} initialQuery={q ?? ""} initialCategory={validCategory} />
      </Container>
    </>
  );
}
