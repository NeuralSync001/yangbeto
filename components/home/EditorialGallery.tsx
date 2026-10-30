import { Container, SectionHeading } from "@/components/ui/Section";
import { ProductImage } from "@/components/ui/ProductImage";
import { Reveal } from "@/components/ui/Reveal";
import { editorialTiles } from "@/data/editorial";
import Link from "next/link";

export function EditorialGallery() {
  return (
    <section aria-labelledby="ig-title" className="py-16 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading eyebrow="Universo NÓRIA" title={<span id="ig-title">Texturas, tons e formas</span>} text="Uma seleção de ilustrações que traduz o clima desta coleção-conceito." />
          </Reveal>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {editorialTiles.map((tile, i) => (
            <li key={i}>
              <Link href="/colecao" aria-label={`${tile.alt}: explorar a coleção`} className="group relative block aspect-square overflow-hidden">
                <ProductImage src={tile.image} alt={tile.alt} tone={tile.tone} variant={(i % 3) as 0 | 1 | 2} sizes="(min-width: 1024px) 25vw, 50vw" className="transition-transform duration-500 group-hover:scale-[1.02]" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
