import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Section";
import { categories } from "@/data/categories";
import { siteConfig } from "@/config/site";

const pages = [
  { href: "/", label: "Início" },
  { href: "/colecao", label: "Coleção" },
  { href: "/sobre", label: "Sobre o projeto" },
  { href: "/guia-de-tamanhos", label: "Guia conceitual" },
  { href: "/duvidas", label: "Dúvidas frequentes" },
  { href: "/contato", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-dark text-offwhite/85">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-offwhite/70">{siteConfig.tagline}</p>
          <p className="mt-6 max-w-xs text-xs leading-relaxed text-offwhite/50">
            Marca, catálogo, imagens e valores fictícios. Projeto conceitual sem vendas ou atendimento real.
          </p>
        </div>

        <nav aria-label="Rodapé: páginas">
          <p className="eyebrow mb-5 !text-offwhite/60">Páginas</p>
          <ul className="space-y-3 text-sm">
            {pages.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="hover:text-offwhite hover:underline underline-offset-4">
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rodapé: categorias">
          <p className="eyebrow mb-5 !text-offwhite/60">Categorias</p>
          <ul className="space-y-3 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/categoria/${c.slug}`} className="hover:text-offwhite hover:underline underline-offset-4">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-5 !text-offwhite/60">Sobre a demonstração</p>
          <p className="max-w-xs text-sm leading-relaxed text-offwhite/70">
            A NÓRIA é uma marca inventada para um projeto de portfólio. Os botões apenas simulam interações no navegador.
          </p>
          <Link href="/sobre" className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-offwhite">Conheça o conceito</Link>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-offwhite/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.shortName} · Projeto conceitual</p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacidade" className="hover:text-offwhite hover:underline underline-offset-4">
                Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos" className="hover:text-offwhite hover:underline underline-offset-4">
                Termos de uso
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
