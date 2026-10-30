import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { PageHeader, Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { faqGroups } from "@/data/faq";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description: "Informações sobre o catálogo demonstrativo NÓRIA.",
  alternates: { canonical: "/duvidas" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((g) =>
      g.items.map((i) => ({ "@type": "Question", name: i.question, acceptedAnswer: { "@type": "Answer", text: i.answer } })),
    ),
  };

  return (
    <>
      <PageHeader eyebrow="Dúvidas" title="Perguntas frequentes" text="Saiba como funciona esta experiência conceitual." />
      <Container className="grid gap-14 py-16 lg:grid-cols-[1fr_2fr] lg:py-24">
        <aside>
          <p className="font-serif text-3xl text-cacau">Quer testar outra interação?</p>
          <p className="mb-6 mt-3 text-sm text-grafite/70">A página de contato demonstra um formulário local.</p>
          <ButtonLink href="/contato">
            Abrir contato
          </ButtonLink>
        </aside>

        <div className="space-y-14">
          {faqGroups.map((group) => (
            <section key={group.title} aria-labelledby={`faq-${group.title}`}>
              <h2 id={`faq-${group.title}`} className="eyebrow mb-4 !font-sans">
                {group.title}
              </h2>
              <div className="divide-y divide-line border-y border-line">
                {group.items.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 font-serif text-2xl text-cacau sm:text-[1.7rem]">
                      {item.question}
                      <Plus className="mt-1.5 size-5 shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                    </summary>
                    <p className="mt-4 max-w-2xl leading-relaxed text-grafite/75">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
