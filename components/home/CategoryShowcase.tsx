import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductImage } from "@/components/ui/ProductImage";
import { categories } from "@/data/categories";

export function CategoryShowcase() {
  return (
    <section aria-labelledby="cat-title" className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Nossas linhas" title={<span id="cat-title">Encontre por categoria</span>} text="Conheça as linhas da marca e consulte a unidade para confirmar os modelos disponíveis." />
        </Reveal>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 70}>
              <li className="h-full">
                <Link href={`/categoria/${category.slug}`} className="group block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ProductImage
                      src={category.cover}
                      alt={`Ilustração demonstrativa de ${category.name.toLowerCase()}`}
                      tone={category.tone}
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <span className="flex items-end justify-between gap-4 border-b border-line px-1 py-4">
                    <span>
                      <span className="block text-xl font-semibold text-cacau">{category.name}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-grafite/70">{category.summary}</span>
                    </span>
                    <ArrowUpRight className="mb-1 size-5 shrink-0 text-cacau transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
