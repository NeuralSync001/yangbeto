import type { Metadata } from "next";
import { PageHeader, Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";

export const metadata: Metadata = {
  title: "Sobre NÓRIA",
  description: "Conheça NÓRIA, uma marca conceitual criada para um projeto de portfólio.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre o projeto"
        title="Uma identidade inventada, feita para explorar."
        text="NÓRIA é um exercício de marca e experiência digital para uma loja de moda íntima."
      />

      <Container className="space-y-24 py-16 lg:py-24">
        <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20" aria-labelledby="unit-title">
          <div className="aspect-[4/5] max-w-lg overflow-hidden">
            <ProductImage
              src="/images/demo/colecao-conceito.svg"
              alt="Ilustração abstrata da coleção conceitual NÓRIA"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">A marca</p>
            <h2 id="unit-title" className="text-4xl sm:text-5xl">
              Uma presença digital com calma e personalidade.
            </h2>
            <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-grafite/75">
              <p>
                A identidade combina tons naturais, formas orgânicas e uma navegação editorial para apresentar uma coleção imaginada.
              </p>
              <p>
                NÓRIA, produtos, imagens, preços, medidas e textos comerciais são fictícios. Este site não representa uma loja nem uma operação comercial.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl text-center" aria-labelledby="phil-title">
          <p className="eyebrow mb-4">Direção criativa</p>
          <h2 id="phil-title" className="text-4xl sm:text-5xl">
            Menos ruído. Mais intenção.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-grafite/75">
            O projeto explora como fotografia ilustrativa, tipografia e conteúdo claro podem compor a experiência de uma marca independente. As interações são simuladas localmente para demonstrar os fluxos de navegação.
          </p>
        </section>

        <section className="grid gap-12 border-t border-line pt-16 lg:grid-cols-2 lg:gap-20" aria-labelledby="brand-title">
          <div>
            <p className="eyebrow mb-4">Aviso de demonstração</p>
            <h2 id="brand-title" className="text-4xl sm:text-5xl">
              Uma marca de portfólio.
            </h2>
          </div>
          <div className="max-w-xl space-y-5 leading-relaxed text-grafite/75">
            <p>
              O nome NÓRIA e todos os elementos comerciais foram criados como conceito visual. Não há relação com empresas, marcas ou produtos existentes.
            </p>
            <p>
              Valores, tamanhos e mensagens servem apenas para apresentar estados e componentes de uma loja online fictícia. Não são uma oferta de venda.
            </p>
          </div>
        </section>

        <section className="bg-nude px-7 py-14 text-center sm:px-12">
          <h2 className="text-4xl sm:text-5xl">Explore a experiência.</h2>
          <p className="mx-auto mt-4 max-w-lg text-grafite/75">Conheça a coleção ilustrativa e teste as interações locais.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contato">Testar contato</ButtonLink>
            <ButtonLink href="/colecao" variant="outline">
              Ver coleção
            </ButtonLink>
          </div>
        </section>
      </Container>
    </>
  );
}
