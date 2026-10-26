import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-28 text-center lg:py-40">
      <p className="eyebrow mb-5">Erro 404</p>
      <h1 className="text-5xl sm:text-7xl">Página não encontrada.</h1>
      <p className="mx-auto mt-6 max-w-md text-grafite/75">O endereço que você tentou abrir não existe ou foi movido. Que tal voltar para a coleção?</p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/">Ir para o início</ButtonLink>
        <ButtonLink href="/colecao" variant="outline">
          Ver coleção
        </ButtonLink>
      </div>
    </Container>
  );
}
