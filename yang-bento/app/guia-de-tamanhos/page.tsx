import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHeader, Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Guia de tamanhos",
  description: "Aprenda a tirar suas medidas e a conferir a tabela de cada modelador antes de escolher o tamanho.",
  alternates: { canonical: "/guia-de-tamanhos" },
};

const steps = [
  {
    title: "Prepare-se",
    text: "Use uma fita métrica flexível, de preferência com roupas leves ou sem roupa, em pé e com o corpo relaxado.",
  },
  {
    title: "Meça a cintura",
    text: "Passe a fita na parte mais estreita do tronco, sem apertar. Mantenha a fita paralela ao chão.",
  },
  {
    title: "Meça o quadril",
    text: "Contorne a parte mais larga do quadril, com os pés juntos e a fita nivelada.",
  },
  {
    title: "Anote e compare",
    text: "Compare suas medidas com a tabela específica do modelo escolhido. Se estiver entre dois tamanhos, converse com a loja.",
  },
];

export default function SizeGuidePage() {
  return (
    <>
      <PageHeader
        eyebrow="Guia de tamanhos"
        title="Como chegar ao tamanho certo."
        text="Um passo a passo simples para tirar suas medidas. A tabela de cada peça é a referência final."
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
            Tabela de medidas
          </h2>
          <p role="note" className="mt-5 flex max-w-2xl gap-3 border border-bege bg-paper px-4 py-3 text-sm leading-relaxed text-grafite/75">
            <Info className="mt-0.5 size-4 shrink-0 text-cacau" aria-hidden />
            <span>
              A tabela oficial da YANG ainda não foi confirmada para este site. A estrutura abaixo será preenchida com as medidas de cada modelo; até lá, confirme tamanhos com a loja.
            </span>
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <caption className="sr-only">Estrutura da tabela de medidas, a preencher com dados oficiais</caption>
              <thead>
                <tr className="border-b border-cacau text-xs uppercase tracking-[0.16em] text-cacau">
                  <th scope="col" className="py-3 pr-4 font-medium">Tamanho</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Cintura (cm)</th>
                  <th scope="col" className="py-3 pr-4 font-medium">Quadril (cm)</th>
                  <th scope="col" className="py-3 font-medium">Observação</th>
                </tr>
              </thead>
              <tbody className="text-grafite/60">
                {[0, 1, 2].map((row) => (
                  <tr key={row} className="border-b border-line">
                    <td className="py-4 pr-4">—</td>
                    <td className="py-4 pr-4">—</td>
                    <td className="py-4 pr-4">—</td>
                    <td className="py-4">A confirmar</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-24 grid gap-10 lg:grid-cols-2" aria-labelledby="fit-title">
          <div>
            <h2 id="fit-title" className="text-4xl sm:text-5xl">
              O caimento varia por modelo.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-grafite/75">
              Cintas, bermudas e corpetes têm cortes e tecidos diferentes. Duas peças do mesmo tamanho podem se ajustar de maneiras distintas, e por isso vale conferir a tabela da peça e, sempre que possível, provar na loja.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 bg-nude p-8">
            <p className="font-serif text-3xl text-cacau">Ficou em dúvida?</p>
            <p className="text-sm text-grafite/75">Envie suas medidas e o modelo que procura; a equipe ajuda a conferir.</p>
            <ButtonLink href={whatsappUrl("Olá! Gostaria de ajuda para escolher o tamanho de um modelador.")} external>
              Falar com a loja
            </ButtonLink>
          </div>
        </section>
      </Container>
    </>
  );
}
