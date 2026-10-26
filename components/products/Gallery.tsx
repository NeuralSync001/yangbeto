"use client";

import { useState } from "react";
import { Expand, X } from "lucide-react";
import { ProductImage } from "@/components/ui/ProductImage";
import { useDialog } from "@/hooks/useDialog";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

const placeholderViews = ["Frente", "Detalhe do tecido", "Costas"] as const;

function Lightbox({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  const ref = useDialog<HTMLDivElement>(open, onClose);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-grafite/85 p-4">
      <div className="absolute inset-0" onClick={onClose} aria-hidden />
      <div ref={ref} role="dialog" aria-modal="true" aria-label="Imagem ampliada" className="relative aspect-[4/5] h-[min(86vh,900px)] max-w-full bg-offwhite">
        {children}
        <button onClick={onClose} aria-label="Fechar imagem ampliada" className="absolute right-3 top-3 grid size-11 place-items-center bg-offwhite/90 hover:bg-offwhite">
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
}

export function Gallery({ product }: { product: Product }) {
  const hasPhotos = product.images.length > 0;
  const items = hasPhotos
    ? product.images.map((src, i) => ({ src, label: `Foto ${i + 1}`, variant: 0 as const }))
    : placeholderViews.map((label, i) => ({ src: undefined, label, variant: (i % 3) as 0 | 1 | 2 }));

  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const current = items[active];

  return (
    <div className="grid gap-4 sm:grid-cols-[88px_1fr]">
      <ul className="order-2 flex gap-3 sm:order-1 sm:flex-col" aria-label="Miniaturas">
        {items.map((item, i) => (
          <li key={item.label} className="w-20 sm:w-full">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Mostrar ${item.label}`}
              aria-current={i === active}
              className={cn("block aspect-[4/5] w-full overflow-hidden border transition-colors", i === active ? "border-cacau" : "border-transparent hover:border-bege")}
            >
              <ProductImage src={item.src} alt={`${product.name} — ${item.label}`} tone={product.tone} variant={item.variant} label="" sizes="88px" />
            </button>
          </li>
        ))}
      </ul>

      <div className="relative order-1 aspect-[4/5] overflow-hidden bg-mist sm:order-2">
        <ProductImage
          src={current.src}
          alt={`${product.name} — ${current.label}`}
          tone={product.tone}
          variant={current.variant}
          label={hasPhotos ? "" : `Foto oficial a inserir · ${current.label}`}
          sizes="(min-width: 1024px) 45vw, 100vw"
          priority
        />
        <button
          type="button"
          onClick={() => setZoom(true)}
          aria-label="Ampliar imagem"
          className="absolute bottom-3 right-3 grid size-11 place-items-center bg-offwhite/90 hover:bg-offwhite"
        >
          <Expand className="size-4" />
        </button>
      </div>

      <Lightbox open={zoom} onClose={() => setZoom(false)}>
        <ProductImage src={current.src} alt={`${product.name} — ${current.label}`} tone={product.tone} variant={current.variant} label="Foto oficial a inserir" sizes="90vw" />
      </Lightbox>
    </div>
  );
}
