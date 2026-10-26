import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Container, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import { Reveal } from "@/components/ui/Reveal";
import { instagramTiles } from "@/data/instagram";
import { siteConfig } from "@/config/site";

export function InstagramSection() {
  const tiles = instagramTiles.filter((tile) => tile.image);

  return (
    <section aria-labelledby="ig-title" className="py-16 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading eyebrow="Novidades" title={<span id="ig-title">Acompanhe a loja no Instagram</span>} text="As novidades e os destaques da unidade são publicados no perfil oficial." />
          </Reveal>
          <ButtonLink href={siteConfig.instagram.url} external variant="outline">
            <InstagramIcon className="size-4" /> {siteConfig.instagram.handle}
          </ButtonLink>
        </div>
        {tiles.length > 0 && (
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {tiles.map((tile, i) => (
              <li key={i}>
                <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" aria-label={`${tile.alt}: abrir o Instagram da loja`} className="group relative block aspect-square overflow-hidden">
                  <ProductImage src={tile.image} alt={tile.alt} tone={tile.tone} variant={(i % 3) as 0 | 1 | 2} sizes="(min-width: 1024px) 25vw, 50vw" className="transition-transform duration-500 group-hover:scale-[1.02]" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
