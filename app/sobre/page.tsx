import type { Metadata } from "next";
import { PageHeader, Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ProductImage } from "@/components/ui/ProductImage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Sobre a YANG BENTO",
  description: "Conheça a unidade YANG BENTO, lingerie funcional em Bento Gonçalves.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="YANG BENTO · Bento Gonçalves"
        title="Lingerie funcional com atendimento próximo."
        text="Conheça a unidade YANG BENTO e fale com a equipe em Bento Gonçalves."
      />

      <Container className="space-y-24 py-16 lg:py-24">
        <section className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20" aria-labelledby="unit-title">
          <div className="aspect-[4/5] max-w-lg overflow-hidden">
            <ProductImage
              src="/images/demo/colecao-yang.svg"
              alt="Ilustração demonstrativa das linhas de lingerie funcional da YANG BENTO"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">A loja YANG BENTO</p>
            <h2 id="unit-title" className="text-4xl sm:text-5xl">
              Uma loja para quem quer escolher bem.
            </h2>
            <div className="mt-6 max-w-xl space-y-5 leading-relaxed text-grafite/75">
              <p>
                A YANG BENTO atende o público de Bento Gonçalves e região com lingerie funcional da marca YANG. Consulte a equipe para conhecer as opções disponíveis na unidade.
              </p>
              <p>
                Modelos e informações de produto nesta prévia são demonstrativos e precisam ser confirmados diretamente com a loja.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl text-center" aria-labelledby="phil-title">
          <p className="eyebrow mb-4">Filosofia de atendimento</p>
          <h2 id="phil-title" className="text-4xl sm:text-5xl">
            Conforto vem da escolha adequada.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-grafite/75">
            Um modelador bem escolhido é aquele que se ajusta ao seu corpo, à sua rotina e à roupa que você vai usar. Por isso, tamanho, caimento e modelo são conversados na loja, e o guia de tamanhos do site ajuda a chegar mais preparada.
          </p>
        </section>

        <section className="grid gap-12 border-t border-line pt-16 lg:grid-cols-2 lg:gap-20" aria-labelledby="brand-title">
          <div>
            <p className="eyebrow mb-4">A fabricante</p>
            <h2 id="brand-title" className="text-4xl sm:text-5xl">
              Sobre a fabricante.
            </h2>
          </div>
          <div className="max-w-xl space-y-5 leading-relaxed text-grafite/75">
            <p>
              A YANG é a fabricante dos modeladores vendidos na loja. No site oficial da marca, os produtos aparecem organizados em linhas de cintas, bermudas e corpetes.
            </p>
            <p>
              As informações sobre a fabricante e sobre os produtos são de responsabilidade da própria YANG. Este site é da unidade de Bento Gonçalves e não substitui o site oficial.
            </p>
            <a href={siteConfig.manufacturer.url} target="_blank" rel="noopener noreferrer" className="inline-block text-xs font-medium uppercase tracking-[0.16em] text-cacau underline underline-offset-4">
              Visitar o site oficial da YANG
            </a>
          </div>
        </section>

        <section className="bg-nude px-7 py-14 text-center sm:px-12">
          <h2 className="text-4xl sm:text-5xl">Venha conhecer o espaço.</h2>
          <p className="mx-auto mt-4 max-w-lg text-grafite/75">Veja a localização no mapa e fale com a equipe antes da visita.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contato">Localização e contato</ButtonLink>
            <ButtonLink href="/colecao" variant="outline">
              Ver coleção
            </ButtonLink>
          </div>
        </section>
      </Container>
    </>
  );
}
