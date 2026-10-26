import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { addressText, siteConfig } from "@/config/site";

export function VisitStore() {
  return (
    <section aria-labelledby="visit-title" className="pb-12 pt-4 lg:pb-20 lg:pt-8">
      <Container>
        <div className="flex flex-col justify-between gap-8 bg-mist px-7 py-10 sm:px-12 sm:py-12 lg:flex-row lg:items-end lg:px-16">
          <div className="max-w-2xl">
            <p className="eyebrow mb-5">Visite a loja</p>
            <h2 id="visit-title" className="text-3xl sm:text-5xl">
              Encontre a unidade em Bento Gonçalves.
            </h2>
            <p className="mt-6 flex max-w-md gap-2 text-[1.02rem] text-grafite/80">
              <MapPin className="mt-1 size-5 shrink-0 text-cacau" aria-hidden />
              <span>
                {addressText}
                {!siteConfig.address.confirmed && <span className="mt-1 block text-xs text-grafite/60">Endereço a confirmar com a loja. Use a rota do Google Maps.</span>}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <ButtonLink href={siteConfig.maps.routeUrl} external>
              Abrir rota no Google Maps
            </ButtonLink>
            <ButtonLink href="/contato" variant="outline">
              Contato
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
