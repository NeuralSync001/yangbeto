import type { Metadata } from "next";
import { PageHeader, Container } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Condições de uso do catálogo demonstrativo da YANG BENTO em Bento Gonçalves.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Termos" title="Termos de uso" text="Texto base descrevendo o funcionamento atual do site. Revise com um profissional jurídico antes da publicação." />
      <Container className="max-w-3xl space-y-10 py-16 leading-relaxed text-grafite/80 lg:py-24 [&_h2]:mb-3 [&_h2]:text-3xl">
        <section>
          <h2>Finalidade</h2>
          <p>Este site apresenta produtos e informações da unidade de Bento Gonçalves para consulta. Não é uma loja virtual: não há compra, pagamento ou reserva de peças pelo site.</p>
        </section>
        <section>
          <h2>Informações sobre produtos</h2>
          <p>
            Nomes, cores, tamanhos, fotos e demais informações podem ser provisórios ou estar sujeitos a alteração. Disponibilidade, valores e condições comerciais devem ser confirmados diretamente com a loja.
          </p>
        </section>
        <section>
          <h2>Marca YANG</h2>
          <p>YANG e os nomes dos produtos pertencem à fabricante. Este site é da unidade local e não substitui o site oficial da marca.</p>
        </section>
        <section>
          <h2>Orientações de saúde</h2>
          <p>
            O conteúdo do site não substitui orientação médica. Para uso de peças em situações de saúde, como pós-operatório, siga sempre a recomendação do seu profissional de saúde.
          </p>
        </section>
        <section>
          <h2>Links externos</h2>
          <p>O site contém links para serviços de terceiros, como Google Maps, Instagram e WhatsApp, cujo conteúdo e funcionamento não são controlados pela loja.</p>
        </section>
      </Container>
    </>
  );
}
