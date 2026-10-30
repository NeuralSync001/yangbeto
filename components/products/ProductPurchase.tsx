"use client";

import { useState } from "react";
import { MessageCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useSelection } from "@/components/layout/SelectionProvider";
import { productMessage } from "@/lib/demoMessages";
import { cn, formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { DemoActionButton } from "@/components/ui/DemoActionDialog";

export function ProductPurchase({ product }: { product: Product }) {
  const { add } = useSelection();
  const [color, setColor] = useState<string | undefined>(product.colors.length === 1 ? product.colors[0] : undefined);
  const [size, setSize] = useState<string | undefined>(product.sizes.length === 1 ? product.sizes[0] : undefined);

  return (
    <div className="space-y-8">
      <p className="text-lg text-cacau">
        {product.price !== null ? formatPrice(product.price) : <span className="text-sm uppercase tracking-[0.14em] text-grafite/70">Valor ilustrativo</span>}
      </p>

      <fieldset>
        <legend className="eyebrow mb-3">Cor {color && <span className="ml-2 normal-case tracking-normal text-grafite">{color}</span>}</legend>
        {product.colors.length ? (
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={color === c}
                onClick={() => setColor(color === c ? undefined : c)}
                className={cn("min-h-11 border px-5 text-sm transition-colors", color === c ? "border-cacau bg-cacau text-offwhite" : "border-line hover:border-cacau")}
              >
                {c}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-grafite/65">Cores demonstrativas.</p>
        )}
      </fieldset>

      <fieldset>
        <legend className="eyebrow mb-3">Tamanho {size && <span className="ml-2 normal-case tracking-normal text-grafite">{size}</span>}</legend>
        {product.sizes.length ? (
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                aria-pressed={size === s}
                onClick={() => setSize(size === s ? undefined : s)}
                className={cn("min-h-11 min-w-11 border px-4 text-sm transition-colors", size === s ? "border-cacau bg-cacau text-offwhite" : "border-line hover:border-cacau")}
              >
                {s}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-grafite/65">Tamanhos demonstrativos. Consulte o guia conceitual.</p>
        )}
      </fieldset>

      <div className="flex flex-col gap-3 sm:flex-row">
        <DemoActionButton message={productMessage(product, color, size)} className="flex-1">
          <MessageCircle className="size-4" /> Simular consulta
        </DemoActionButton>
        <Button variant="outline" onClick={() => add(product.slug, { color, size })} className="flex-1">
          <Plus className="size-4" /> Adicionar à seleção
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-grafite/60">
        Marca, produto, preço e estoque são fictícios. Esta demonstração não realiza compras nem consultas externas.
      </p>
    </div>
  );
}
