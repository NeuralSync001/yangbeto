import { siteConfig } from "@/config/site";
import type { Product, SelectionItem } from "@/types";

export const isWhatsAppConfigured = siteConfig.whatsapp.confirmed;

/**
 * Monta o link do WhatsApp. Sem número oficial configurado, usa o link sem
 * destinatário (abre o seletor de contatos). NÃO inventa números.
 */
export function whatsappUrl(message: string): string {
  const text = encodeURIComponent(message);
  const number = siteConfig.whatsapp.number;
  return number ? `https://wa.me/${number}?text=${text}` : `https://api.whatsapp.com/send?text=${text}`;
}

export function productMessage(product: Product, color?: string, size?: string): string {
  let message = `Olá! Gostaria de consultar a disponibilidade do produto ${product.name}`;
  if (color && size) message += `, na cor ${color} e tamanho ${size}`;
  else if (color) message += `, na cor ${color}`;
  else if (size) message += `, no tamanho ${size}`;
  return `${message}. Poderiam me ajudar?`;
}

export function selectionMessage(lines: { item: SelectionItem; product: Product }[]): string {
  const rows = lines.map(({ item, product }) => {
    const extras = [item.color && `cor ${item.color}`, item.size && `tamanho ${item.size}`].filter(Boolean);
    return `- ${item.quantity}x ${product.name}${extras.length ? ` (${extras.join(", ")})` : ""}`;
  });
  return `Olá! Gostaria de consultar a disponibilidade destas peças:\n${rows.join("\n")}\n\nPoderiam me ajudar?`;
}

export const generalMessage = "Olá! Vim pelo site da YANG BENTO e gostaria de falar com a equipe da loja.";
