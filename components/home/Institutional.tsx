import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Institutional() {
  return (
    <section aria-labelledby="inst-title" className="py-16 lg:py-28">
      <Container className="max-w-4xl">
        <Reveal>
          <p className="eyebrow mb-4">A ideia NÓRIA</p>
          <h2 id="inst-title" className="max-w-3xl text-3xl sm:text-5xl">
            Um guarda-roupa íntimo para viver sem roteiro.
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 leading-relaxed text-grafite/75">
            <p>
              NÓRIA é uma marca conceitual criada para este projeto de portfólio. A identidade combina formas orgânicas, tons naturais e uma experiência de catálogo digital.
            </p>
            <p>
              As peças, imagens, preços e interações são demonstrativos; nenhuma venda ou comunicação real acontece pelo site.
            </p>
          </div>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/sobre">Sobre o conceito</ButtonLink>
            <ButtonLink href="/colecao" variant="outline">Explorar peças</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
