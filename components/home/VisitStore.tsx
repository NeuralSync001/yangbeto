import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export function VisitStore() {
  return (
    <section aria-labelledby="visit-title" className="pb-12 pt-4 lg:pb-20 lg:pt-8">
      <Container>
        <div className="flex flex-col justify-between gap-8 bg-mist px-7 py-10 sm:px-12 sm:py-12 lg:flex-row lg:items-end lg:px-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Projeto conceitual</p>
            <h2 id="visit-title" className="text-3xl sm:text-5xl">
              Um exercício de marca e experiência digital.
            </h2>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-grafite/80">
              A marca, o catálogo, os preços e o atendimento foram criados para demonstrar um site de moda íntima. Não representam uma loja real.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <ButtonLink href="/contato" variant="outline">
              Testar atendimento
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
