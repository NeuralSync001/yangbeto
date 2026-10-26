import type { FaqGroup } from "@/types";

/** Respostas baseadas somente em informações confirmadas. */
export const faqGroups: FaqGroup[] = [
  {
    title: "Escolha da peça",
    items: [
      {
        question: "Como escolher o tamanho?",
        answer:
          "Comece pelo nosso guia de tamanhos para tirar suas medidas. Como o caimento varia de um modelo para outro, a tabela específica de cada peça é a referência final, e a equipe da loja pode ajudar na prova.",
      },
      {
        question: "Como conhecer as opções de modeladores?",
        answer:
          "Veja a coleção neste site, separada em cintas, bermudas e corpetes. Para conhecer os modelos com mais detalhes, chame a loja pelo WhatsApp ou faça uma visita.",
      },
    ],
  },
  {
    title: "Disponibilidade",
    items: [
      {
        question: "Como consultar a disponibilidade de um modelo?",
        answer:
          "Este site é um catálogo de consulta: não mostra estoque em tempo real. Em cada peça há um botão que abre uma mensagem no WhatsApp já com o nome do produto, a cor e o tamanho escolhidos.",
      },
      {
        question: "Como descobrir as cores disponíveis?",
        answer:
          "As cores confirmadas aparecem na página de cada peça. Quando uma cor não estiver listada, pergunte à loja pelo WhatsApp.",
      },
    ],
  },
  {
    title: "Compra, troca e entrega",
    items: [
      {
        question: "Quais são as formas de pagamento, trocas e entrega?",
        answer:
          "As políticas comerciais da unidade ainda não foram divulgadas neste site. Consulte a loja diretamente para saber como funcionam pagamento, trocas e entrega.",
      },
    ],
  },
  {
    title: "Loja",
    items: [
      {
        question: "Como entrar em contato com a loja?",
        answer:
          "Pelo WhatsApp, pelo Instagram @yangbentogoncalves ou pessoalmente. Os canais estão na página de contato.",
      },
      {
        question: "Onde fica a unidade de Bento Gonçalves?",
        answer:
          "Na página de contato há um mapa e um botão que abre a rota no Google Maps até a loja.",
      },
    ],
  },
];
