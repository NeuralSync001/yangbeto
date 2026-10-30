import type { Category } from "@/types";

export const categories: Category[] = [
  {
    slug: "bodies",
    name: "Bodies",
    summary: "Peças versáteis para compor diferentes momentos.",
    intro: "Bodies de inspiração minimalista, com recortes e acabamentos variados. Os modelos e valores deste catálogo são fictícios.",
    tone: "nude",
    cover: "/images/demo/body-alba.svg",
  },
  {
    slug: "cintas",
    name: "Cintas",
    summary: "Silhuetas confortáveis para acompanhar a rotina.",
    intro: "Cintas com diferentes propostas de cobertura e acabamento. As peças e especificações são ilustrações de um projeto conceitual.",
    tone: "off",
    cover: "/images/demo/cinta-forma.svg",
  },
  {
    slug: "bermudas",
    name: "Bermudas",
    summary: "Camadas leves com linhas suaves.",
    intro: "Bermudas de inspiração leve, em diferentes comprimentos e tons. Catálogo, descrições e preços são demonstrativos.",
    tone: "bege",
    cover: "/images/demo/bermuda-brisa.svg",
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
