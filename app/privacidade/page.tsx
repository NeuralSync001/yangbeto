import type { Metadata } from "next";
import { PageHeader, Container } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como este site trata informações de navegação e de contato.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacidade" title="Política de privacidade" text="Texto base descrevendo o funcionamento atual do site. Revise com um profissional jurídico antes da publicação." />
      <Container className="max-w-3xl space-y-10 py-16 leading-relaxed text-grafite/80 lg:py-24 [&_h2]:mb-3 [&_h2]:text-3xl">
        <section>
          <h2>O que este site faz</h2>
          <p>
            Este site é um catálogo de consulta da unidade de Bento Gonçalves. Ele não possui cadastro de clientes, login, pagamento nem envio de formulários para um servidor próprio.
          </p>
        </section>
        <section>
          <h2>Dados que ficam no seu navegador</h2>
          <p>
            A lista “Minha seleção” é guardada apenas no armazenamento local do seu navegador (localStorage), para que ela não se perca ao navegar. Esses dados não são enviados ao site nem a terceiros e podem ser apagados por você a qualquer momento, limpando a seleção ou os dados do navegador.
          </p>
        </section>
        <section>
          <h2>Contato por WhatsApp</h2>
          <p>
            Os botões de WhatsApp e o formulário de contato apenas preparam uma mensagem e abrem o aplicativo ou site do WhatsApp. O texto só é enviado quando você decide enviá-lo, e passa a ser tratado conforme os termos e a política do próprio WhatsApp.
          </p>
        </section>
        <section>
          <h2>Serviços de terceiros</h2>
          <p>
            A página de contato incorpora um mapa do Google Maps, e há links para o Instagram ({siteConfig.instagram.handle}) e para o site da fabricante YANG. Ao carregar ou acessar esses serviços, eles podem coletar informações conforme suas próprias políticas.
          </p>
        </section>
        <section>
          <h2>Análise de acessos e cookies</h2>
          <p>Este site não utiliza ferramentas de análise de acesso nem cookies de publicidade. Caso isso mude, esta página será atualizada.</p>
        </section>
        <section>
          <h2>Seus direitos</h2>
          <p>
            Nos termos da Lei Geral de Proteção de Dados (LGPD), você pode solicitar informações sobre eventuais dados pessoais tratados pela loja. Para isso, entre em contato pelos canais indicados na página de contato.
          </p>
        </section>
      </Container>
    </>
  );
}
