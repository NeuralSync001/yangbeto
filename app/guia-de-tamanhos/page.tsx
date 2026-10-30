import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHeader, Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Guia conceitual de tamanhos",
  description: "Entenda os rótulos fictícios de tamanho usados no catálogo de demonstração.",
  alternates: { canonical: "/guia-de-tamanhos" },
};

const steps = [
  {
    title: "Tamanhos de exemplo",
    text: "P, M, G e GG são rótulos fictícios usados para demonstrar a seleção de opções.",
  },
  {
    title: "Sem medidas reais",
    text: "Nenhuma medida corporal ou grade de modelagem foi definida para os produtos.",
  },
  {
    title: "Peças ilustrativas",
    text: "Os nomes, cores e características do catálogo foram criados para este conceito.",
  },
  {
    title: "Não use para compra",
    text: "Este guia não fornece recomendação de tamanho para peças reais.",
  },
];

export default function SizeGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Guia demonstrativo"
        title="Rótulos para explorar a interface."
        text="O catálogo é conceitual; seus tamanhos e informações não correspondem a produtos reais."
      />
      <Container className="py-16 lg:py-24">
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-cacau pt-5">
              <span className="font-serif text-4xl text-cacau/40">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="mt-2 text-3xl">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-grafite/75">{s.text}</p>
            </li>
          ))}
        </ol>

        <section className="mt-24" aria-labelledby="table-title">
          <h2 id="table-title" className="text-4xl sm:text-5xl">
            Exemplo de grade
          </h2>
          <p role="note" className="mt-5 flex max-w-2xl gap-3 border border-bege bg-paper px-4 py-3 text-sm leading-relaxed text-grafite/75">
            <Info className="mt-0.5 size-4 shrink-0 text-cacau" aria-hidden />
            <span>
              Não há medidas reais associadas às peças deste projeto. A tabela abaixo existe apenas para mostrar como esta área poderia funcionar.
            </span>
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <caption className="sr-only">Tabela ilustrativa sem medidas reais</caption>
              <thead>
                <tr className="border-b border-cacau text-xs uppercase tracking-[0.16em] text-cacau">
                  <th scope="col" className="py-3 pr-4 font-medium">Tamanho</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Medidas reais</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Disponibilidade</th>
                  <th scope="col" className="py-3 font-medium">Nota</th>
                </tr>
              </thead>
              <tbody className="text-grafite/60">
                {["P", "M", "G", "GG"].map((size) => (
                  <tr key={size} className="border-b border-line">
                    <td className="py-4 pr-4">{size}</td>
                    <td className="py-4 pr-4">Não disponíveis</td>
                    <td className="py-4 pr-4">Fictícia</td>
                    <td className="py-4">Demonstração</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-24 grid gap-10 lg:grid-cols-2" aria-labelledby="fit-title">
          <div>
            <h2 id="fit-title" className="text-4xl sm:text-5xl">
              Como ler este guia.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-grafite/75">
              As etiquetas P, M, G e GG são exemplos para demonstrar filtros e seleção. Não existe tabela de medidas nem recomendação de ajuste para os produtos ilustrativos.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 bg-nude p-8">
            <p className="font-serif text-3xl text-cacau">Quer saber mais?</p>
            <p className="text-sm text-grafite/75">Consulte as informações sobre o conceito e suas interações simuladas.</p>
            <ButtonLink href="/duvidas">
              Ver perguntas frequentes
            </ButtonLink>
          </div>
        </section>
      </Container>
    </>
  );
}
