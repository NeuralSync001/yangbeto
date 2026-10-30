import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHeader, Container } from "@/components/ui/Section";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contato demonstrativo",
  description: "Teste a interação de contato da demonstração NÓRIA.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contato" title="Uma conversa de demonstração." text="Teste o fluxo de contato local deste projeto conceitual." />
      <Container className="grid gap-14 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24">
        <aside className="h-fit border border-line bg-mist p-6 sm:p-8">
          <p className="eyebrow mb-4">Importante</p>
          <h2 className="font-serif text-3xl text-cacau">Não é um canal real.</h2>
          <p className="mt-4 leading-relaxed text-grafite/75">
            NÓRIA é uma marca inventada para um portfólio. O formulário gera uma prévia no navegador, sem enviar, registrar ou guardar a mensagem.
          </p>
          <p className="mt-5 flex gap-3 border-t border-line pt-5 text-sm leading-relaxed text-grafite/70">
            <Info className="mt-0.5 size-4 shrink-0 text-cacau" aria-hidden />
            <span>Use apenas informações fictícias ao testar a interação.</span>
          </p>
        </aside>

        <div>
          <h2 className="text-4xl">Prévia de contato</h2>
          <p className="mb-8 mt-3 text-sm text-grafite/70">Preencha os campos de exemplo e veja como a interação funciona.</p>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
