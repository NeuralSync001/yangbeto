import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Institutional() {
  return (
    <section aria-labelledby="inst-title" className="py-16 lg:py-28">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-4">A loja</p>
          <h2 id="inst-title" className="max-w-3xl text-3xl sm:text-5xl">
            Conheça as linhas de lingerie funcional YANG.
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 leading-relaxed text-grafite/75">
            <p>
              A YANG BENTO atende quem procura lingerie funcional da marca YANG. Consulte a unidade para confirmar os modelos, cores e tamanhos disponíveis.
            </p>
            <p>
              Este catálogo é informativo e não exibe estoque em tempo real.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/sobre">Conheça a Yang</ButtonLink>
            <ButtonLink href="/colecao" variant="outline">Ver coleção</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
