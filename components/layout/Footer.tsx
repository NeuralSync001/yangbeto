import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Section";
import { categories } from "@/data/categories";
import { addressText, siteConfig } from "@/config/site";
import { generalMessage, isWhatsAppConfigured, whatsappUrl } from "@/lib/whatsapp";

const pages = [
  { href: "/", label: "Início" },
  { href: "/colecao", label: "Coleção" },
  { href: "/sobre", label: "Sobre a loja" },
  { href: "/guia-de-tamanhos", label: "Guia de tamanhos" },
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
            Site da unidade YANG BENTO em Bento Gonçalves. Este catálogo é demonstrativo e não realiza vendas online.
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
          <p className="eyebrow mb-5 !text-offwhite/60">Visite a loja</p>
          <address className="space-y-3 text-sm not-italic">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>
                {addressText}
                {!siteConfig.address.confirmed && <span className="block text-xs text-offwhite/50">Endereço a confirmar com a loja.</span>}
              </span>
            </p>
            <p>
              <a href={siteConfig.maps.routeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                Abrir rota no Google Maps
              </a>
            </p>
            <p>
              <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                <InstagramIcon className="size-4" /> {siteConfig.instagram.handle}
              </a>
            </p>
            {isWhatsAppConfigured && (
              <p>
                <a href={whatsappUrl(generalMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:underline underline-offset-4">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </p>
            )}
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-offwhite/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} YANG BENTO — Lingerie Funcional · Bento Gonçalves/RS</p>
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
