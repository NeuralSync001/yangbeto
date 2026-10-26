export type Tone = "off" | "nude" | "bege" | "rosado" | "marrom";

export interface Category {
  slug: string;
  name: string;
  /** Texto curto para menus e cartões. */
  summary: string;
  /** Texto introdutório da página da categoria. */
  intro: string;
  tone: Tone;
  /** Imagem de capa em /public/images, quando existir. */
  cover?: string;
}

export interface Product {
  slug: string;
  name: string;
  categorySlug: string;
  /** Código do modelo na fabricante, quando conhecido. */
  code?: string;
  summary: string;
  description: string;
  /** Somente cores confirmadas. Vazio = a confirmar com a loja. */
  colors: string[];
  /** Somente tamanhos confirmados. Vazio = a confirmar com a loja. */
  sizes: string[];
  /** Preço em reais. null = não confirmado (não exibir). */
  price: number | null;
  /** Caminhos em /public/images. Vazio = usa quadro provisório. */
  images: string[];
  tone: Tone;
  featured: boolean;
  /** Somente true quando a novidade for confirmada pela loja. */
  isNew: boolean;
  /** true = dados provisórios, precisam ser conferidos pela loja. */
  provisional: boolean;
  composition?: string;
  care?: string;
  /** Anotação interna sobre a origem/pendência dos dados. */
  sourceNote?: string;
}

export interface FaqGroup {
  title: string;
  items: { question: string; answer: string }[];
}

export interface SelectionItem {
  key: string;
  slug: string;
  quantity: number;
  color?: string;
  size?: string;
}
