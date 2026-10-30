import type { FaqGroup } from "@/types";

export const faqGroups: FaqGroup[] = [
  {
    title: "O projeto",
    items: [
      {
        question: "O que é NÓRIA?",
        answer:
          "NÓRIA é uma marca conceitual criada para apresentar um projeto de portfólio de moda íntima. Não representa uma loja ou operação comercial.",
      },
      {
        question: "Os produtos e preços são reais?",
        answer:
          "Não. Nomes, descrições, imagens, tamanhos, cores e valores são fictícios e servem apenas para demonstrar a experiência do catálogo.",
      },
    ],
  },
  {
    title: "Interações",
    items: [
      {
        question: "O botão de consulta envia uma mensagem?",
        answer:
          "Não. Ele abre uma prévia local e simula a conclusão da ação. Nenhuma mensagem sai do seu navegador.",
      },
      {
        question: "A seleção cria um pedido?",
        answer:
          "Não. A seleção serve para demonstrar a interface; não existe checkout, pagamento ou pedido.",
      },
    ],
  },
  {
    title: "Privacidade",
    items: [
      {
        question: "O formulário armazena os dados preenchidos?",
        answer:
          "Não. O formulário gera uma prévia apenas no navegador e não envia nem persiste a mensagem. Use dados fictícios ao testar.",
      },
      {
        question: "A NÓRIA é uma marca registrada?",
        answer:
          "Este projeto não verifica disponibilidade ou registro de marca. O nome é usado apenas como conceito neste portfólio.",
      },
    ],
  },
];
