import type { Product, SelectionItem } from "@/types";

export function productMessage(product: Product, color?: string, size?: string): string {
  const details = [color && `Cor: ${color}`, size && `Tamanho: ${size}`].filter(Boolean).join("\n");
  return `Demonstração de consulta\n${product.name}${details ? `\n${details}` : ""}`;
}

export function selectionMessage(lines: { item: SelectionItem; product: Product }[]): string {
  const rows = lines.map(({ item, product }) => {
    const extras = [item.color && `cor ${item.color}`, item.size && `tamanho ${item.size}`].filter(Boolean);
    return `- ${item.quantity}x ${product.name}${extras.length ? ` (${extras.join(", ")})` : ""}`;
  });
  return `Demonstração de seleção NÓRIA\n\n${rows.join("\n")}`;
}
