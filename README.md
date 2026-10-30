# NÓRIA — projeto conceitual

Site de portfólio para uma marca fictícia de moda íntima, construído com Next.js 15, App Router, TypeScript e Tailwind CSS 4.

## Executar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para validar a versão de produção, rode `npm run build` e depois `npm start`.

## Sobre a demonstração

NÓRIA, os produtos, descrições, imagens, preços, tamanhos e informações comerciais são fictícios. Este projeto não representa uma loja real e não realiza vendas, pedidos ou atendimento.

Os botões de consulta e contato exibem uma prévia e simulam a conclusão localmente. O formulário não envia nem persiste mensagens; ao testá-lo, use dados fictícios. A seleção de produtos fica apenas no `localStorage` do navegador.

O nome da marca é usado como conceito de portfólio; este projeto não verifica registro ou disponibilidade jurídica.

## Onde editar

| Conteúdo | Arquivo |
| --- | --- |
| Identidade e aviso do projeto | `config/site.ts` |
| Produtos e dados demonstrativos | `data/products.ts` |
| Categorias do catálogo | `data/categories.ts` |
| Perguntas frequentes | `data/faq.ts` |
| Ilustrações originais | `public/images/demo/` |

`NEXT_PUBLIC_SITE_URL` pode ser definido em `.env.local` para os metadados e o sitemap. Não há integrações com WhatsApp, Instagram, mapas, pagamentos ou estoque.
