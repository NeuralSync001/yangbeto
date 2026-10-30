"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/Button";
import { matchesQuery } from "@/lib/products";
import { formatPrice, cn } from "@/lib/utils";
import type { Category, Product } from "@/types";

type Sort = "relevancia" | "nome-asc" | "nome-desc" | "preco-asc" | "preco-desc";

const PAGE_SIZE = 12;

interface Props {
  products: Product[];
  categories: Category[];
  /** Quando definido (página de categoria), oculta o filtro de categoria. */
  fixedCategory?: string;
  initialQuery?: string;
  initialCategory?: string;
}

export function Catalog({ products, categories, fixedCategory, initialQuery = "", initialCategory = "" }: Props) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(fixedCategory ?? initialCategory);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [sort, setSort] = useState<Sort>("relevancia");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filtros só existem quando há dados reais para filtrar.
  const scope = useMemo(() => (fixedCategory ? products.filter((p) => p.categorySlug === fixedCategory) : products), [products, fixedCategory]);
  const allColors = useMemo(() => Array.from(new Set(scope.flatMap((p) => p.colors))).sort(), [scope]);
  const allSizes = useMemo(() => Array.from(new Set(scope.flatMap((p) => p.sizes))), [scope]);
  const prices = useMemo(() => scope.map((p) => p.price).filter((p): p is number => p !== null), [scope]);
  const hasPrices = prices.length > 0;
  const priceCeiling = hasPrices ? Math.ceil(Math.max(...prices)) : 0;
  const priceFloor = hasPrices ? Math.floor(Math.min(...prices)) : 0;

  const results = useMemo(() => {
    const filtered = scope.filter((p) => {
      if (category && p.categorySlug !== category) return false;
      if (!matchesQuery(p, query)) return false;
      if (colors.length && !p.colors.some((c) => colors.includes(c))) return false;
      if (sizes.length && !p.sizes.some((s) => sizes.includes(s))) return false;
      if (maxPrice !== null && (p.price === null || p.price > maxPrice)) return false;
      return true;
    });
    const sorted = [...filtered];
    const byName = (a: Product, b: Product) => a.name.localeCompare(b.name, "pt-BR");
    if (sort === "nome-asc") sorted.sort(byName);
    if (sort === "nome-desc") sorted.sort((a, b) => byName(b, a));
    if (sort === "preco-asc") sorted.sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    if (sort === "preco-desc") sorted.sort((a, b) => (b.price ?? -Infinity) - (a.price ?? -Infinity));
    return sorted;
  }, [scope, category, query, colors, sizes, maxPrice, sort]);

  const activeCount = (category && !fixedCategory ? 1 : 0) + colors.length + sizes.length + (maxPrice !== null ? 1 : 0) + (query ? 1 : 0);

  const reset = () => {
    setQuery("");
    if (!fixedCategory) setCategory("");
    setColors([]);
    setSizes([]);
    setMaxPrice(null);
    setSort("relevancia");
    setVisible(PAGE_SIZE);
  };

  const toggle = (list: string[], value: string, set: (v: string[]) => void) => {
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
    setVisible(PAGE_SIZE);
  };

  const sortOptions: { value: Sort; label: string }[] = [
    { value: "relevancia", label: "Relevância" },
    { value: "nome-asc", label: "Nome (A–Z)" },
    { value: "nome-desc", label: "Nome (Z–A)" },
    ...(hasPrices
      ? ([
          { value: "preco-asc", label: "Menor preço" },
          { value: "preco-desc", label: "Maior preço" },
        ] as { value: Sort; label: string }[])
      : []),
  ];

  const filtersPanel = (
    <div className="space-y-8">
      <div>
        <label htmlFor="catalog-q" className="eyebrow mb-3 block">
          Buscar
        </label>
        <input
          id="catalog-q"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVisible(PAGE_SIZE);
          }}
          placeholder="Nome, cor ou categoria"
          className="min-h-11 w-full border border-line bg-paper px-4 text-sm outline-none focus:border-cacau"
        />
      </div>

      {!fixedCategory && (
        <fieldset>
          <legend className="eyebrow mb-3">Categoria</legend>
          <div className="space-y-1">
            {[{ slug: "", name: "Todas" }, ...categories].map((c) => (
              <label key={c.slug} className="flex min-h-10 cursor-pointer items-center gap-3 text-sm">
                <input
                  type="radio"
                  name="categoria"
                  checked={category === c.slug}
                  onChange={() => {
                    setCategory(c.slug);
                    setVisible(PAGE_SIZE);
                  }}
                  className="size-4 accent-cacau"
                />
                {c.name}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {allColors.length > 0 && (
        <fieldset>
          <legend className="eyebrow mb-3">Cor</legend>
          <div className="space-y-1">
            {allColors.map((c) => (
              <label key={c} className="flex min-h-10 cursor-pointer items-center gap-3 text-sm">
                <input type="checkbox" checked={colors.includes(c)} onChange={() => toggle(colors, c, setColors)} className="size-4 accent-cacau" />
                {c}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {allSizes.length > 0 && (
        <fieldset>
          <legend className="eyebrow mb-3">Tamanho</legend>
          <div className="flex flex-wrap gap-2">
            {allSizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={sizes.includes(s)}
                onClick={() => toggle(sizes, s, setSizes)}
                className={cn("min-h-10 min-w-10 border px-3 text-sm", sizes.includes(s) ? "border-cacau bg-cacau text-offwhite" : "border-line hover:border-cacau")}
              >
                {s}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {hasPrices && priceCeiling > priceFloor && (
        <div>
          <label htmlFor="catalog-price" className="eyebrow mb-3 block">
            Preço até {formatPrice(maxPrice ?? priceCeiling)}
          </label>
          <input
            id="catalog-price"
            type="range"
            min={priceFloor}
            max={priceCeiling}
            value={maxPrice ?? priceCeiling}
            onChange={(e) => setMaxPrice(Number(e.target.value) >= priceCeiling ? null : Number(e.target.value))}
            className="w-full accent-cacau"
          />
        </div>
      )}

      <Button variant="outline" onClick={reset} disabled={activeCount === 0} className="w-full">
        Limpar filtros
      </Button>
    </div>
  );

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
      {/* Filtros: painel fixo no desktop, gaveta recolhível no celular */}
      <aside aria-label="Filtros" className="hidden lg:block">
        <div className="sticky top-28">{filtersPanel}</div>
      </aside>

      <div>
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
          <p className="text-sm text-grafite/70" role="status" aria-live="polite">
            {results.length} {results.length === 1 ? "peça encontrada" : "peças encontradas"}
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFiltersOpen(true)}
              className="inline-flex min-h-11 items-center gap-2 border border-line px-4 text-xs uppercase tracking-[0.14em] lg:hidden"
            >
              <SlidersHorizontal className="size-4" /> Filtros{activeCount > 0 && ` (${activeCount})`}
            </button>
            <label className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-grafite/70">
              Ordenar
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="min-h-11 border border-line bg-paper px-3 text-sm normal-case tracking-normal text-grafite outline-none focus:border-cacau"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {results.length === 0 ? (
          <div className="border border-dashed border-line px-6 py-16 text-center">
            <p className="font-serif text-3xl text-cacau">Nenhuma peça encontrada.</p>
            <p className="mx-auto mt-3 max-w-md text-sm text-grafite/70">Tente outro termo ou remova alguns filtros para explorar a coleção demonstrativa.</p>
            <Button onClick={reset} className="mt-6">
              Limpar filtros
            </Button>
          </div>
        ) : (
          <>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 xl:grid-cols-3">
              {results.slice(0, visible).map((p, i) => (
                <li key={p.slug}>
                  <ProductCard product={p} priority={i < 3} />
                </li>
              ))}
            </ul>
            {results.length > visible && (
              <div className="mt-12 text-center">
                <Button variant="outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                  Carregar mais peças
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-[65] lg:hidden" role="dialog" aria-modal="true" aria-label="Filtros">
          <div className="absolute inset-0 bg-grafite/45" onClick={() => setFiltersOpen(false)} aria-hidden />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto bg-offwhite px-5 pb-8 pt-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-3xl">Filtros</h2>
              <button onClick={() => setFiltersOpen(false)} aria-label="Fechar filtros" className="grid size-11 place-items-center hover:bg-mist">
                <X className="size-5" />
              </button>
            </div>
            {filtersPanel}
            <Button onClick={() => setFiltersOpen(false)} className="mt-4 w-full">
              Ver {results.length} {results.length === 1 ? "peça" : "peças"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
