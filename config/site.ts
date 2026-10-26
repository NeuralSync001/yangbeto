/**
 * Configuração única do site. Tudo que depende de confirmação da loja
 * fica aqui, com a flag `confirmed` indicando se o dado já foi validado.
 */

const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5554991984133").replace(/\D/g, "");
const storeAddress = "Rua 13 de Maio, 977, Bento Gonçalves, RS";
const encodedStoreAddress = encodeURIComponent(storeAddress);

export const siteConfig = {
  name: "YANG BENTO — Lingerie Funcional",
  shortName: "YANG BENTO",
  tagline: "Lingerie funcional com atendimento próximo em Bento Gonçalves.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "pt_BR",

  /** WhatsApp divulgado no perfil oficial da unidade; pode ser sobrescrito por ambiente. */
  whatsapp: {
    number: whatsappNumber,
    confirmed: Boolean(whatsappNumber),
  },

  /** Telefone fixo. Não encontrado em fonte confiável: pendente. */
  phone: { display: null as string | null, confirmed: false },

  /** Horário de funcionamento. Pendente de confirmação pela loja. */
  hours: { text: null as string | null, confirmed: false },

  instagram: {
    handle: "@yangbentogoncalves",
    url: "https://www.instagram.com/yangbentogoncalves/",
  },

  maps: {
    placeUrl: `https://www.google.com/maps/search/?api=1&query=${encodedStoreAddress}`,
    routeUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodedStoreAddress}`,
    embedUrl: `https://www.google.com/maps?q=${encodedStoreAddress}&output=embed`,
  },

  address: {
    line: "Rua 13 de Maio, 977",
    city: "Bento Gonçalves",
    state: "RS",
    confirmed: true,
  },

  manufacturer: {
    name: "YANG",
    url: "https://www.yangonline.com.br/modeladores/c",
  },

  /** Faixa superior. Defina enabled: false se não houver comunicação ativa. */
  announcement: {
    enabled: true,
    text: "YANG BENTO · Rua 13 de Maio, 977 · Bento Gonçalves/RS",
    href: "/contato",
  },
} as const;

export const addressText = `${siteConfig.address.line} — ${siteConfig.address.city}/${siteConfig.address.state}`;
