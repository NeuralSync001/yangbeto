"use client";

import { Plus } from "lucide-react";
import { useSelection } from "@/components/layout/SelectionProvider";

export function AddToSelectionButton({ slug, name }: { slug: string; name: string }) {
  const { add } = useSelection();
  return (
    <button
      type="button"
      onClick={() => add(slug)}
      aria-label={`Adicionar ${name} à minha seleção`}
      title="Adicionar à seleção"
      className="grid size-11 shrink-0 place-items-center border border-cacau/30 text-cacau transition-colors hover:bg-cacau hover:text-offwhite"
    >
      <Plus className="size-4" />
    </button>
  );
}
