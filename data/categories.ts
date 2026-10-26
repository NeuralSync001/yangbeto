import type { Category } from "@/types";

/**
 * Categorias conforme o site oficial da YANG (yangonline.com.br/modeladores):
 * Bermudas, Cintas e Corpetes. Confirmar com a loja quais linhas ela comercializa.
 */
export const categories: Category[] = [
  {
    slug: "cintas",
    name: "Cintas",
    summary: "Cintas modeladoras para o dia a dia e ocasiões especiais.",
    intro:
      "Cintas modeladoras pensadas para acompanhar a rotina com conforto. Cada modelo tem um caimento e um nível de sustentação próprios: a equipe da loja ajuda você a comparar e escolher.",
    tone: "nude",
    cover: "/images/demo/cinta-modeladora.svg",
  },
  {
    slug: "bermudas",
    name: "Bermudas",
    summary: "Bermudas modeladoras com acabamento discreto.",
    intro:
      "Bermudas modeladoras para quem busca conforto e discrição sob a roupa. Consulte a loja para conhecer os modelos, as cores e os tamanhos disponíveis.",
    tone: "bege",
    cover: "/images/demo/bermuda-modeladora.svg",
  },
  {
    slug: "corpetes",
    name: "Corpetes",
    summary: "Corpetes e bodies para valorizar a silhueta.",
    intro:
      "Corpetes e peças inteiras com acabamento cuidadoso. Peça uma prova na loja para sentir o caimento de cada modelo.",
    tone: "rosado",
    cover: "/images/demo/corpete-modelador.svg",
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
