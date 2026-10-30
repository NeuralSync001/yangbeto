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
  /** Optional catalog identifier. */
  code?: string;
  summary: string;
  description: string;
  /** Demonstration color options. */
  colors: string[];
  /** Demonstration size options. */
  sizes: string[];
  /** Illustrative price in BRL; null omits a price. */
  price: number | null;
  /** Caminhos em /public/images. Vazio = usa quadro provisório. */
  images: string[];
  tone: Tone;
  featured: boolean;
  /** Marks a conceptual catalog highlight. */
  isNew: boolean;
  /** true = temporary display data. */
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
