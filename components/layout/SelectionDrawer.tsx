"use client";

import { useState } from "react";
import { Minus, Plus, X, MessageCircle } from "lucide-react";
import { useSelection } from "./SelectionProvider";
import { useDialog } from "@/hooks/useDialog";
import { getProduct } from "@/lib/products";
import { selectionMessage } from "@/lib/demoMessages";
import { ProductImage } from "@/components/ui/ProductImage";
import { ButtonLink, Button } from "@/components/ui/Button";
import type { Product, SelectionItem } from "@/types";
import { DemoActionDialog } from "@/components/ui/DemoActionDialog";

export function SelectionDrawer() {
  const { isOpen, close, items, remove, setQuantity, clear } = useSelection();
  const [dialogOpen, setDialogOpen] = useState(false);
  const ref = useDialog<HTMLDivElement>(isOpen, close);

  if (!isOpen) return null;

  const lines = items
    .map((item) => ({ item, product: getProduct(item.slug) }))
    .filter((l): l is { item: SelectionItem; product: Product } => Boolean(l.product));

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-grafite/45" onClick={close} aria-hidden />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="selection-title"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-offwhite shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 id="selection-title" className="text-3xl">
            Minha seleção
          </h2>
          <button onClick={close} aria-label="Fechar seleção" className="grid size-11 place-items-center hover:bg-mist">
            <X className="size-5" />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-start justify-center gap-5 px-6">
            <p className="font-serif text-2xl text-cacau">Sua seleção está vazia.</p>
            <p className="text-sm text-grafite/70">
              Adicione peças para testar a seleção demonstrativa. Nenhum pedido ou contato será criado.
            </p>
            <ButtonLink href="/colecao" onClick={close} variant="outline">
              Explorar coleção
            </ButtonLink>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {lines.map(({ item, product }) => (
                <li key={item.key} className="flex gap-4 py-5">
                  <div className="aspect-[3/4] w-20 shrink-0">
                    <ProductImage src={product.images[0]} alt={product.name} tone={product.tone} label="" sizes="80px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-serif text-xl leading-tight text-cacau">{product.name}</p>
                    <p className="mt-1 text-xs text-grafite/65">
                      {[item.color && `Cor: ${item.color}`, item.size && `Tamanho: ${item.size}`].filter(Boolean).join(" · ") ||
                        "Sem opções selecionadas"}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-line">
                        <button
                          onClick={() => setQuantity(item.key, item.quantity - 1)}
                          aria-label={`Diminuir quantidade de ${product.name}`}
                          className="grid size-9 place-items-center hover:bg-mist"
                        >
                          <Minus className="size-4" />
                        </button>
                        <span className="w-8 text-center text-sm" aria-live="polite">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(item.key, item.quantity + 1)}
                          aria-label={`Aumentar quantidade de ${product.name}`}
                          className="grid size-9 place-items-center hover:bg-mist"
                        >
                          <Plus className="size-4" />
                        </button>
                      </div>
                      <button onClick={() => remove(item.key)} className="text-xs uppercase tracking-[0.14em] text-grafite/70 underline-offset-4 hover:underline">
                        Remover
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="space-y-3 border-t border-line px-6 py-5">
              <p className="text-xs leading-relaxed text-grafite/65">
                Esta é uma seleção de demonstração. Nada será enviado e nenhum pedido será criado.
              </p>
              <Button onClick={() => setDialogOpen(true)} className="w-full">
                <MessageCircle className="size-4" /> Simular consulta
              </Button>
              <Button variant="ghost" onClick={clear} className="w-full text-xs">
                Limpar seleção
              </Button>
            </div>
          </>
        )}
      </div>
      <DemoActionDialog open={dialogOpen} onClose={() => setDialogOpen(false)} message={selectionMessage(lines)} />
    </div>
  );
}
