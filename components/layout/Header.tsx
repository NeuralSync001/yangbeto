"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { Logo } from "./Logo";
import { useSelection } from "./SelectionProvider";
import { useDialog } from "@/hooks/useDialog";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Início" },
  { href: "/colecao", label: "Coleção" },
  { href: "/sobre", label: "Sobre o projeto" },
  { href: "/guia-de-tamanhos", label: "Guia conceitual" },
  { href: "/duvidas", label: "Dúvidas" },
  { href: "/contato", label: "Contato" },
];

function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const router = useRouter();
  const ref = useDialog<HTMLDivElement>(open, onClose);
  const [value, setValue] = useState("");

  if (!open) return null;

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const q = value.trim();
    onClose();
    router.push(q ? `/colecao?q=${encodeURIComponent(q)}` : "/colecao");
  };

  return createPortal(
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-grafite/45" onClick={onClose} aria-hidden />
      <div ref={ref} role="dialog" aria-modal="true" aria-label="Buscar produtos" className="relative bg-offwhite px-5 py-8 shadow-lg sm:px-12 sm:py-12">
        <form onSubmit={submit} role="search" className="mx-auto flex max-w-3xl items-end gap-3 border-b border-cacau pb-3">
          <label htmlFor="site-search" className="sr-only">
            Buscar por nome, cor ou categoria
          </label>
          <input
            id="site-search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar por nome, cor ou categoria"
            className="min-w-0 flex-1 bg-transparent font-serif text-2xl text-cacau outline-none placeholder:text-grafite/40 sm:text-4xl"
            autoComplete="off"
          />
          <button type="submit" aria-label="Buscar" className="grid size-11 place-items-center hover:bg-mist">
            <Search className="size-5" />
          </button>
          <button type="button" onClick={onClose} aria-label="Fechar busca" className="grid size-11 place-items-center hover:bg-mist">
            <X className="size-5" />
          </button>
        </form>
        <p className="mx-auto mt-4 max-w-3xl text-xs text-grafite/60">Pressione Enter para ver os resultados na coleção.</p>
      </div>
    </div>,
    document.body,
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useDialog<HTMLDivElement>(open, onClose);
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[70] lg:hidden">
      <div className="absolute inset-0 bg-grafite/45" onClick={onClose} aria-hidden />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Menu principal"
        className="absolute left-0 top-0 flex h-full w-[78vw] max-w-[300px] flex-col overflow-y-auto bg-offwhite"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <Logo />
          <button onClick={onClose} aria-label="Fechar menu" className="grid size-11 place-items-center hover:bg-mist">
            <X className="size-5" />
          </button>
        </div>
        <nav aria-label="Principal" className="flex-1 px-5 py-4">
          <ul className="space-y-0.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={onClose} className="block py-1.5 font-serif text-2xl text-cacau">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mb-2 mt-6">Categorias</p>
          <ul className="space-y-0.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/categoria/${c.slug}`} onClick={onClose} className="block py-1.5 text-base">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-line px-5 py-4">
          <Link href="/contato" onClick={onClose} className="flex min-h-11 items-center justify-center gap-2 bg-brand text-xs font-medium uppercase tracking-[0.14em] text-white">
            <MessageCircle className="size-4" /> Prévia de atendimento
          </Link>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function Header() {
  const pathname = usePathname();
  const { count, open: openSelection } = useSelection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelMegaClose = () => {
    if (megaCloseTimer.current) {
      clearTimeout(megaCloseTimer.current);
      megaCloseTimer.current = null;
    }
  };

  const openMegaMenu = () => {
    cancelMegaClose();
    setMegaOpen(true);
  };

  const scheduleMegaClose = () => {
    cancelMegaClose();
    megaCloseTimer.current = setTimeout(() => {
      setMegaOpen(false);
      megaCloseTimer.current = null;
    }, 180);
  };

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMegaOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) {
        cancelMegaClose();
        setMegaOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      cancelMegaClose();
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={cn("sticky top-0 z-50 border-b bg-offwhite/95 backdrop-blur transition-colors", scrolled ? "border-line" : "border-transparent")}>
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-2 lg:hidden">
          <button onClick={() => setMobileOpen(true)} aria-label="Abrir menu" aria-haspopup="dialog" className="-ml-3 grid size-11 place-items-center hover:bg-mist">
            <Menu className="size-6" />
          </button>
        </div>

        <Logo className="max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:items-center" />

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          <Link href="/" aria-current={isActive("/") ? "page" : undefined} className={navClass(isActive("/"))}>
            Início
          </Link>
          <Link href="/colecao" aria-current={pathname === "/colecao" ? "page" : undefined} className={navClass(pathname === "/colecao")}>
            Coleção
          </Link>

          <div ref={megaRef} onMouseEnter={openMegaMenu} onMouseLeave={scheduleMegaClose} className="static">
            <button
              aria-expanded={megaOpen}
              aria-controls="mega-categorias"
              onClick={openMegaMenu}
              className={cn(navClass(pathname.startsWith("/categoria")), "inline-flex items-center gap-1")}
            >
              Categorias <ChevronDown className={cn("size-3.5 transition-transform", megaOpen && "rotate-180")} />
            </button>
            <div
              id="mega-categorias"
              hidden={!megaOpen}
              onMouseEnter={openMegaMenu}
              onMouseLeave={scheduleMegaClose}
              className="absolute inset-x-0 top-full border-y border-line bg-offwhite shadow-[0_18px_30px_-24px_rgba(41,38,36,0.35)]"
            >
              <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_2fr] gap-12 px-12 py-10">
                <div>
                  <p className="eyebrow mb-3">Coleção</p>
                  <p className="font-serif text-3xl leading-tight text-cacau">Escolha pelo tipo de peça.</p>
                  <Link href="/colecao" className="mt-5 inline-block text-xs uppercase tracking-[0.16em] text-cacau underline underline-offset-4">
                    Ver coleção completa
                  </Link>
                </div>
                <ul className="grid grid-cols-3 gap-8">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/categoria/${c.slug}`} className="group block">
                        <span className="font-serif text-2xl text-cacau group-hover:underline underline-offset-4">{c.name}</span>
                        <span className="mt-2 block text-sm text-grafite/70">{c.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {links.slice(2).map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} className={navClass(isActive(l.href))}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button onClick={() => setSearchOpen(true)} aria-label="Buscar produtos" aria-haspopup="dialog" className="grid size-11 place-items-center hover:bg-mist">
            <Search className="size-[1.15rem]" />
          </button>
          <Link href="/contato" aria-label="Prévia de atendimento" className="hidden size-11 place-items-center hover:bg-mist sm:grid">
            <MessageCircle className="size-[1.15rem]" />
          </Link>
          <button onClick={openSelection} aria-label={`Abrir minha seleção (${count} ${count === 1 ? "item" : "itens"})`} className="relative grid size-11 place-items-center hover:bg-mist">
            <ShoppingBag className="size-[1.15rem]" />
            {count > 0 && (
              <span className="absolute right-1 top-1 grid min-w-4 place-items-center rounded-full bg-cacau px-1 text-[0.6rem] leading-4 text-offwhite">{count}</span>
            )}
          </button>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

function navClass(active: boolean) {
  return cn(
    "relative py-2 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-grafite transition-colors hover:text-cacau",
    "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-cacau after:transition-transform after:duration-300 hover:after:scale-x-100",
    active && "text-cacau after:scale-x-100",
  );
}
