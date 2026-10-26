# YANG BENTO — Lingerie Funcional

Site institucional e catálogo de consulta (Next.js 15 · App Router · TypeScript · Tailwind CSS 4).

## Como executar

```bash
npm install
cp .env.example .env.local     # opcional: defina URL do site e WhatsApp
npm run dev                    # http://localhost:3000
npm run build && npm start     # produção
```

Use TypeScript 5.x (já fixado no `package.json`); o TypeScript 7 ainda não é compatível com o Next 15.

## Onde editar

| O que | Arquivo |
| --- | --- |
| WhatsApp, endereço, telefone, horário, faixa superior, links | `config/site.ts` e `.env.local` |
| Produtos (nomes, cores, tamanhos, preços, fotos) | `data/products.ts` |
| Categorias e imagens de capa | `data/categories.ts` |
| Perguntas frequentes | `data/faq.ts` |
| Imagens da seção do Instagram | `data/instagram.ts` |
| Logo autorizado da unidade | `public/images/yang-bento-mark.svg` |
| Fotos oficiais autorizadas | salvar em `public/images/` e informar o caminho nos arquivos acima |

As ilustrações originais em `public/images/demo/` servem apenas como referência visual; não representam fotos nem modelos comerciais oficiais. Substitua-as por fotos autorizadas quando disponíveis.

## Dados pendentes de confirmação pela loja

- Telefone fixo e horário de funcionamento.
- Catálogo real: modelos, cores, tamanhos, composição, cuidados, preços e fotos oficiais.
- Fotos reais da loja e do Instagram; tabela oficial de medidas da YANG.
- Políticas de pagamento, troca e entrega (as FAQs só orientam a consultar a loja).
- Revisão jurídica das páginas de privacidade e termos.

## Integrações

Reais: links de Instagram, Google Maps (rota e mapa incorporado) e WhatsApp (mensagens contextualizadas); persistência local da seleção (localStorage).
Não existem (sem integrações fictícias): checkout, estoque, feed do Instagram, backend de formulário, analytics.
Pontos de extensão: `data/products.ts` pode ser trocado por API/banco mantendo o tipo `Product`.
