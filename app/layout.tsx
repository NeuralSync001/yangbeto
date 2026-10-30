import type { Metadata, Viewport } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
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
    default: "NÓRIA | Lingerie para viver",
    template: "%s | NÓRIA",
  },
  description: "NÓRIA é uma marca conceitual de portfólio. Explore o catálogo fictício de bodies, cintas e bermudas.",
  icons: {
    icon: "/noria-icon.svg",
    shortcut: "/noria-icon.svg",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    title: "NÓRIA | Lingerie para viver",
    description: "Um projeto conceitual de marca com catálogo e interações demonstrativas.",
    images: [
      {
        url: "/images/og-noria.svg",
        width: 1200,
        height: 630,
        alt: "NÓRIA — Lingerie para viver. Projeto conceitual.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NÓRIA | Lingerie para viver",
    description: "Um projeto conceitual de marca com catálogo e interações demonstrativas.",
    images: ["/images/og-noria.svg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#355c4b",
  width: "device-width",
  initialScale: 1,
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
      </body>
    </html>
  );
}
