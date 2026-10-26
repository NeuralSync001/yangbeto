import type { Metadata } from "next";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { PageHeader, Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { ContactForm } from "@/components/contact/ContactForm";
import { addressText, siteConfig } from "@/config/site";
import { generalMessage, isWhatsAppConfigured, whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato e localização",
  description: "Veja como chegar à YANG BENTO em Bento Gonçalves, abra a rota no Google Maps e fale com a loja.",
  alternates: { canonical: "/contato" },
};

function Row({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4 border-t border-line py-5">
      <Icon className="mt-1 size-5 shrink-0 text-cacau" aria-hidden />
      <div>
        <h2 className="eyebrow mb-1.5 !font-sans">{title}</h2>
        <div className="text-[0.95rem] leading-relaxed text-grafite/80">{children}</div>
      </div>
    </li>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contato" title="Fale com a loja ou venha nos visitar." text="Escolha o canal que for mais confortável para você." />
      <Container className="grid gap-14 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div>
          <ul>
            <Row icon={MapPin} title="Endereço">
              <p>{addressText}</p>
              {!siteConfig.address.confirmed && <p className="mt-1 text-xs text-grafite/60">Endereço a confirmar com a loja. A rota abaixo usa a localização do Google Maps.</p>}
            </Row>
            <Row icon={MessageCircle} title="WhatsApp">
              {isWhatsAppConfigured ? (
                <a href={whatsappUrl(generalMessage)} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                  Conversar pelo WhatsApp
                </a>
              ) : (
                <p>Número em confirmação. Enquanto isso, fale com a loja pelo Instagram.</p>
              )}
            </Row>
            <Row icon={Phone} title="Telefone">
              <p>{siteConfig.phone.display ?? "A confirmar."}</p>
            </Row>
            <Row icon={InstagramIcon} title="Instagram">
              <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                {siteConfig.instagram.handle}
              </a>
            </Row>
            <Row icon={Clock} title="Horário de funcionamento">
              <p>{siteConfig.hours.text ?? "Horário a confirmar com a loja."}</p>
            </Row>
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={siteConfig.maps.routeUrl} external>
              Abrir rota no Google Maps
            </ButtonLink>
            <ButtonLink href={siteConfig.maps.placeUrl} external variant="outline">
              Ver no Google Maps
            </ButtonLink>
          </div>
        </div>

        <div>
          <h2 className="text-4xl">Envie uma mensagem</h2>
          <p className="mb-8 mt-3 text-sm text-grafite/70">Conte o que você procura e continue a conversa pelo WhatsApp.</p>
          <ContactForm />
        </div>

        <div className="lg:col-span-2">
          <div className="aspect-[16/10] w-full overflow-hidden border border-line sm:aspect-[16/7]">
            <iframe
              title="Mapa com a localização da YANG BENTO em Bento Gonçalves"
              src={siteConfig.maps.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
