export const siteConfig = {
  name: "NÓRIA — Lingerie para viver",
  shortName: "NÓRIA",
  tagline: "Peças que acompanham você, do seu jeito.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "pt_BR",
  isPortfolioDemo: true,
  announcement: {
    text: "PROJETO CONCEITUAL · MARCA, PEÇAS E VALORES FICTÍCIOS",
    href: "/sobre",
  },
} as const;
