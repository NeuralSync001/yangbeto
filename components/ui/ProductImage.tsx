import Image from "next/image";
import type { Tone } from "@/types";
import { cn } from "@/lib/utils";

const tones: Record<Tone, { bg: string; arch: string; ink: string }> = {
  off: { bg: "bg-[#f5f5f5]", arch: "bg-[#f5f5f5]", ink: "text-grafite/55" },
  nude: { bg: "bg-[#f2f0ef]", arch: "bg-[#f2f0ef]", ink: "text-grafite/55" },
  bege: { bg: "bg-[#efeeed]", arch: "bg-[#efeeed]", ink: "text-grafite/55" },
  rosado: { bg: "bg-[#f1eeee]", arch: "bg-[#f1eeee]", ink: "text-grafite/55" },
  marrom: { bg: "bg-[#e8e6e5]", arch: "bg-[#e8e6e5]", ink: "text-grafite/55" },
};

interface Props {
  src?: string;
  alt: string;
  tone?: Tone;
  /** Legenda do quadro provisório. */
  label?: string;
  /** Variante visual do quadro provisório (para galerias). */
  variant?: 0 | 1 | 2;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

/**
 * Mostra a foto oficial quando `src` existe; caso contrário, um quadro
 * provisório (identificado) pronto para ser substituído.
 */
export function ProductImage({
  src,
  alt,
  tone = "nude",
  label = "Foto oficial a inserir",
  variant = 0,
  sizes = "(min-width: 1024px) 33vw, 50vw",
  priority,
  className,
}: Props) {
  if (src) {
    return (
      <div className={cn("relative h-full w-full overflow-hidden", className)}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        {src.startsWith("/images/demo/") && (
          <span className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 text-[0.55rem] font-medium uppercase tracking-[0.12em] text-grafite/75">
            Ilustração demonstrativa · não é foto oficial
          </span>
        )}
      </div>
    );
  }

  const t = tones[tone];

  return (
    <div
      role="img"
      aria-label={`${alt} (imagem provisória)`}
      className={cn("relative flex h-full w-full items-center justify-center overflow-hidden", t.bg, className)}
    >
      <span className={cn("border border-current/20 px-4 py-2 text-center text-[0.62rem] font-medium uppercase tracking-[0.16em]", t.ink)}>
        {label}
      </span>
    </div>
  );
}
