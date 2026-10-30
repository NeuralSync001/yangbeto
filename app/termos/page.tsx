import type { Metadata } from "next";
import { PageHeader, Container } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Condições de uso do projeto conceitual NÓRIA.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Termos" title="Termos de uso" text="Informações sobre esta experiência de portfólio." />
      <Container className="max-w-3xl space-y-10 py-16 leading-relaxed text-grafite/80 lg:py-24 [&_h2]:mb-3 [&_h2]:text-3xl">
        <section>
          <h2>Finalidade</h2>
          <p>Este site é um projeto conceitual de portfólio. NÓRIA, catálogo, imagens, preços, tamanhos e informações comerciais são fictícios. Não há venda, pagamento, reserva ou atendimento real.</p>
        </section>
        <section>
          <h2>Informações sobre produtos</h2>
          <p>
            Conteúdos e valores são demonstrativos, não constituem oferta e não devem ser usados para orientar uma compra ou escolha de tamanho de produto real.
          </p>
        </section>
        <section>
          <h2>Identidade conceitual</h2>
          <p>NÓRIA é o nome utilizado neste exercício de marca. O projeto não verifica disponibilidade ou registro da marca; não há alegação de titularidade ou vínculo comercial.</p>
        </section>
        <section>
          <h2>Orientações de saúde</h2>
          <p>
            O conteúdo não fornece orientação de saúde, ajuste ou modelagem. Procure um profissional habilitado para dúvidas relacionadas à saúde.
          </p>
        </section>
        <section>
          <h2>Interações</h2>
          <p>Os botões demonstrativos apenas simulam ações no navegador. Nenhuma mensagem é enviada e nenhum pedido é criado.</p>
        </section>
      </Container>
    </>
  );
}
