import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { SelectionProvider } from "@/components/layout/SelectionProvider";
import { SelectionDrawer } from "@/components/layout/SelectionDrawer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DevNotice } from "@/components/layout/DevNotice";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "YANG BENTO | Lingerie Funcional em Bento Gonçalves",
    template: "%s | YANG BENTO",
  },
  description:
    "Conheça a YANG BENTO, lingerie funcional em Bento Gonçalves, RS. Explore cintas, bermudas e corpetes e fale com a loja pelo WhatsApp.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "YANG BENTO | Lingerie Funcional em Bento Gonçalves",
    description:
      "Cintas, bermudas e corpetes em Bento Gonçalves. Conheça a loja YANG BENTO.",
    images: [
      {
        url: "/images/og-yang-bento.png",
        width: 1200,
        height: 630,
        alt: "YANG BENTO — Lingerie funcional em Bento Gonçalves. Imagem ilustrativa.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YANG BENTO | Lingerie Funcional em Bento Gonçalves",
    description: "Cintas, bermudas e corpetes em Bento Gonçalves.",
    images: ["/images/og-yang-bento.png"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#e83e82",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [siteConfig.instagram.url],
  hasMap: siteConfig.maps.placeUrl,
  ...(siteConfig.address.confirmed
    ? {
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.line,
          addressLocality: siteConfig.address.city,
          addressRegion: siteConfig.address.state,
          addressCountry: "BR",
        },
      }
    : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cacau focus:px-4 focus:py-3 focus:text-offwhite"
        >
          Pular para o conteúdo
        </a>
        <SelectionProvider>
          <DevNotice />
          <AnnouncementBar />
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
          <SelectionDrawer />
        </SelectionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
