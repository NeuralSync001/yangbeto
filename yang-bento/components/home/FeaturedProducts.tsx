import { Container, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProducts } from "@/lib/products";

export function FeaturedProducts() {
  const items = featuredProducts().slice(0, 4);

  return (
    <section aria-labelledby="feat-title" className="bg-mist py-16 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading eyebrow="Ilustrações demonstrativas" title={<span id="feat-title">Conheça as linhas</span>} text="As imagens são apenas ilustrativas. Modelos, cores, tamanhos e disponibilidade devem ser confirmados com a unidade." />
          </Reveal>
          <ButtonLink href="/colecao" variant="outline">
            Consultar catálogo
          </ButtonLink>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4">
          {items.map((p, i) => (
            <li key={p.slug}>
              <Reveal delay={i * 70}>
                <ProductCard product={p} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
