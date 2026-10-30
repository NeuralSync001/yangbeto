import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const paths = [
  {
    title: "Para o dia a dia",
    text: "Descubra bodies, cintas e bermudas no catálogo conceitual.",
    href: "/colecao",
  },
  {
    title: "Encontre seu estilo",
    text: "Compare cores e formas para imaginar diferentes combinações.",
    href: "/contato",
  },
  {
    title: "Explore as linhas",
    text: "Navegue pelas categorias e veja os detalhes de cada peça ilustrativa.",
    href: "/colecao",
  },
  {
    title: "Tamanhos e caimento",
    text: "Consulte o guia demonstrativo e explore os tamanhos disponíveis no protótipo.",
    href: "/guia-de-tamanhos",
  },
];

export function ChoiceGuide() {
  return (
    <section aria-labelledby="choice-title" className="bg-cacau py-16 text-offwhite lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="max-w-sm [&_h2]:!text-offwhite [&_.eyebrow]:!text-offwhite/60 [&_p]:!text-offwhite/75">
            <SectionHeading eyebrow="Um jeito fácil de explorar" title={<span id="choice-title">Sua próxima combinação começa aqui</span>} text="Uma navegação simples para experimentar a experiência NÓRIA." />
          </div>
        </Reveal>
        <ol className="divide-y divide-white/15 border-y border-white/15 lg:col-span-8">
          {paths.map((p, i) => (
            <li key={p.title}>
              <Link href={p.href} className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-6 transition-colors hover:bg-white/[0.04] sm:gap-8 sm:px-4">
                <span className="font-serif text-3xl text-offwhite/50">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-serif text-2xl text-offwhite sm:text-3xl">{p.title}</span>
                  <span className="mt-1 block text-sm text-offwhite/65">{p.text}</span>
                </span>
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
