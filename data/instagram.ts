import type { Tone } from "@/types";

/**
 * Imagens locais configuráveis para a seção de novidades.
 * Não há integração com o feed do Instagram: para usar fotos reais, salve-as
 * em /public/images/instagram e informe o caminho em `image`.
 */
export const instagramTiles: { image?: string; alt: string; tone: Tone }[] = [
  { alt: "Novidade da loja 1", tone: "nude" },
  { alt: "Novidade da loja 2", tone: "bege" },
  { alt: "Novidade da loja 3", tone: "rosado" },
  { alt: "Novidade da loja 4", tone: "off" },
];
