import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Section";
import { ProductImage } from "@/components/ui/ProductImage";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid items-center gap-8 pb-12 pt-8 sm:pb-16 sm:pt-12 lg:grid-cols-2 lg:gap-16 lg:pb-20 lg:pt-16">
        <div className="hero-rise lg:py-8">
          <p className="eyebrow mb-5">YANG BENTO · Bento Gonçalves, RS</p>
          <h1 id="hero-title" className="max-w-xl text-[2.65rem] sm:text-6xl xl:text-[4.25rem]">
            Modeladores para acompanhar a sua rotina.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-grafite/75">
            Explore as linhas YANG e consulte com a equipe da loja os modelos, tamanhos e cores disponíveis.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/colecao">Ver coleção</ButtonLink>
            <ButtonLink href="/contato" variant="outline">
              Fale com a loja
            </ButtonLink>
          </div>
        </div>

        <div className="hero-rise" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-[4/3] overflow-hidden">
            <ProductImage
              src="/images/demo/colecao-yang.svg"
              alt="Ilustração demonstrativa das linhas de cintas, bermudas e corpetes da YANG BENTO"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
