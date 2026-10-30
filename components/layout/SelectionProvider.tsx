"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { SelectionItem } from "@/types";

const STORAGE_KEY = "noria:selection:v1";

interface SelectionContextValue {
  items: SelectionItem[];
  count: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (slug: string, options?: { color?: string; size?: string; quantity?: number }) => void;
  remove: (key: string) => void;
  setQuantity: (key: string, quantity: number) => void;
  clear: () => void;
}

const SelectionContext = createContext<SelectionContextValue | null>(null);

const makeKey = (slug: string, color?: string, size?: string) => [slug, color ?? "", size ?? ""].join("|");

export function SelectionProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<SelectionItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      /* armazenamento indisponível: segue sem persistência */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignora */
    }
  }, [items, hydrated]);

  const add = useCallback<SelectionContextValue["add"]>((slug, options = {}) => {
    const { color, size, quantity = 1 } = options;
    const key = makeKey(slug, color, size);
    setItems((current) => {
      const existing = current.find((i) => i.key === key);
      if (existing) return current.map((i) => (i.key === key ? { ...i, quantity: Math.min(i.quantity + quantity, 20) } : i));
      return [...current, { key, slug, color, size, quantity }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((key: string) => setItems((c) => c.filter((i) => i.key !== key)), []);

  const setQuantity = useCallback(
    (key: string, quantity: number) =>
      setItems((c) =>
        quantity <= 0 ? c.filter((i) => i.key !== key) : c.map((i) => (i.key === key ? { ...i, quantity: Math.min(quantity, 20) } : i)),
      ),
    [],
  );

  const value = useMemo<SelectionContextValue>(
    () => ({
      items,
      count: items.reduce((sum, i) => sum + i.quantity, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add,
      remove,
      setQuantity,
      clear: () => setItems([]),
    }),
    [items, isOpen, add, remove, setQuantity],
  );

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) throw new Error("useSelection deve ser usado dentro de SelectionProvider");
  return ctx;
}
