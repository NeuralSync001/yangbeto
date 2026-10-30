import type { Metadata } from "next";
import { PageHeader, Container } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como o projeto conceitual NÓRIA trata informações no navegador.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacidade" title="Política de privacidade" text="Resumo do comportamento desta demonstração." />
      <Container className="max-w-3xl space-y-10 py-16 leading-relaxed text-grafite/80 lg:py-24 [&_h2]:mb-3 [&_h2]:text-3xl">
        <section>
          <h2>O que este site faz</h2>
          <p>
            Este projeto conceitual não possui cadastro, login, pagamento, analytics ou backend para receber mensagens.
          </p>
        </section>
        <section>
          <h2>Dados que ficam no seu navegador</h2>
          <p>
            A lista “Minha seleção” fica no armazenamento local do navegador (localStorage) para persistir entre visitas. Ela não é enviada a um servidor. Você pode removê-la pelo botão “Limpar seleção” ou apagar os dados do site no navegador.
          </p>
        </section>
        <section>
          <h2>Formulário demonstrativo</h2>
          <p>
            Os campos de contato e a prévia da mensagem existem apenas no estado temporário da página. O texto não é enviado, não é armazenado e desaparece ao fechar ou recarregar a página. Use apenas dados fictícios.
          </p>
        </section>
        <section>
          <h2>Serviços de terceiros</h2>
          <p>
            O site não incorpora mapas, redes sociais nem canais de contato externos. Os recursos de fonte e interface são servidos pelos arquivos e dependências do próprio projeto.
          </p>
        </section>
        <section>
          <h2>Análise de acessos e cookies</h2>
          <p>Esta demonstração não utiliza ferramentas de análise de acesso nem cookies de publicidade.</p>
        </section>
        <section>
          <h2>Seus direitos</h2>
          <p>
            Como não há canal de contato real nem coleta pelo servidor neste projeto, não há solicitação de dados pessoais a ser encaminhada por esta página.
          </p>
        </section>
      </Container>
    </>
  );
}
