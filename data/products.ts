import type { Product } from "@/types";

/**
 * CATÁLOGO DEMONSTRATIVO — DADOS PROVISÓRIOS.
 *
 * Não há API oficial nem lista de produtos da unidade. Os dois modelos com
 * código foram vistos em anúncios de varejistas (não na loja local) e estão
 * marcados como "a confirmar". Os demais são espaços reservados, sem nome
 * de modelo inventado. Preços não foram confirmados e por isso ficam null.
 *
 * Para atualizar: edite este arquivo (ou troque por API/banco) mantendo o tipo Product.
 */

const pendingNote =
  "Dados provisórios: nome, cores, tamanhos, composição e disponibilidade precisam ser confirmados pela loja.";

export const products: Product[] = [
  {
    slug: "bermuda-modeladora-cos-alto-2026",
    name: "Bermuda Modeladora Cós Alto",
    code: "2026",
    categorySlug: "bermudas",
    summary: "Cós alto com abertura de colchetes frontal.",
    description:
      "Bermuda modeladora de cós alto com abertura de colchetes na frente, que facilita vestir e ajustar a peça. Consulte a loja para provar e conhecer o caimento.",
    colors: ["Nude"],
    sizes: [],
    price: null,
    images: ["/images/demo/bermuda-modeladora.svg"],
    tone: "bege",
    featured: true,
    isNew: false,
    provisional: true,
    sourceNote:
      "Modelo visto em anúncio de varejista (cód. 2026, cor Nude). Confirmar se a loja trabalha com ele, cores e tamanhos.",
  },
  {
    slug: "bermuda-modeladora-modelo-a-confirmar-1",
    name: "Bermuda modeladora — modelo a confirmar",
    categorySlug: "bermudas",
    summary: "Espaço reservado para um modelo da loja.",
    description: "Espaço reservado para um modelo de bermuda da loja. Consulte a equipe para saber o que está disponível.",
    colors: [],
    sizes: [],
    price: null,
    images: ["/images/demo/bermuda-modeladora-2.svg"],
    tone: "marrom",
    featured: false,
    isNew: false,
    provisional: true,
    sourceNote: pendingNote,
  },
  {
    slug: "bermuda-modeladora-modelo-a-confirmar-2",
    name: "Bermuda modeladora — segundo modelo a confirmar",
    categorySlug: "bermudas",
    summary: "Espaço reservado para um modelo da loja.",
    description: "Espaço reservado para um modelo de bermuda da loja. Consulte a equipe para saber o que está disponível.",
    colors: [],
    sizes: [],
    price: null,
    images: ["/images/demo/colecao-yang.svg"],
    tone: "off",
    featured: false,
    isNew: false,
    provisional: true,
    sourceNote: pendingNote,
  },
  {
    slug: "cinta-modeladora-pos-cirurgica-abdominoplastia-2019",
    name: "Cinta Modeladora Pós-Cirúrgica Abdominoplastia",
    code: "2019",
    categorySlug: "cintas",
    summary: "Cinta indicada no nome do modelo para uso pós-cirúrgico.",
    description:
      "Modelo identificado pela fabricante como cinta pós-cirúrgica para abdominoplastia. O uso após cirurgias deve seguir sempre a orientação do seu médico; a loja pode ajudar com tamanho e caimento.",
    colors: ["Chocolate"],
    sizes: [],
    price: null,
    images: ["/images/demo/cinta-modeladora.svg"],
    tone: "marrom",
    featured: true,
    isNew: false,
    provisional: true,
    sourceNote:
      "Modelo visto em anúncio de varejista (cód. 2019, cor Chocolate). Confirmar com a loja e com a fabricante antes de publicar descrições de uso.",
  },
  {
    slug: "cinta-modeladora-modelo-a-confirmar-1",
    name: "Cinta modeladora — modelo a confirmar",
    categorySlug: "cintas",
    summary: "Espaço reservado para um modelo da loja.",
    description: "Espaço reservado para um modelo de cinta da loja. Consulte a equipe para saber o que está disponível.",
    colors: [],
    sizes: [],
    price: null,
    images: ["/images/demo/cinta-modeladora-2.svg"],
    tone: "nude",
    featured: true,
    isNew: false,
    provisional: true,
    sourceNote: pendingNote,
  },
  {
    slug: "cinta-modeladora-modelo-a-confirmar-2",
    name: "Cinta modeladora — segundo modelo a confirmar",
    categorySlug: "cintas",
    summary: "Espaço reservado para um modelo da loja.",
    description: "Espaço reservado para um modelo de cinta da loja. Consulte a equipe para saber o que está disponível.",
    colors: [],
    sizes: [],
    price: null,
    images: ["/images/demo/colecao-yang.svg"],
    tone: "rosado",
    featured: false,
    isNew: false,
    provisional: true,
    sourceNote: pendingNote,
  },
  {
    slug: "corpete-modelador-modelo-a-confirmar-1",
    name: "Corpete modelador — modelo a confirmar",
    categorySlug: "corpetes",
    summary: "Espaço reservado para um modelo da loja.",
    description: "Espaço reservado para um modelo de corpete da loja. Consulte a equipe para saber o que está disponível.",
    colors: [],
    sizes: [],
    price: null,
    images: ["/images/demo/corpete-modelador.svg"],
    tone: "rosado",
    featured: true,
    isNew: false,
    provisional: true,
    sourceNote: pendingNote,
  },
  {
    slug: "corpete-modelador-modelo-a-confirmar-2",
    name: "Corpete modelador — segundo modelo a confirmar",
    categorySlug: "corpetes",
    summary: "Espaço reservado para um modelo da loja.",
    description: "Espaço reservado para um modelo de corpete da loja. Consulte a equipe para saber o que está disponível.",
    colors: [],
    sizes: [],
    price: null,
    images: ["/images/demo/corpete-modelador-2.svg"],
    tone: "off",
    featured: false,
    isNew: false,
    provisional: true,
    sourceNote: pendingNote,
  },
];
