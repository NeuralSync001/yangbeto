import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

/** Identidade da unidade de Bento Gonçalves a partir da marca enviada pela loja. */
export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="YANG BENTO — página inicial"
      className={cn("group inline-flex items-center gap-2.5", light ? "text-offwhite" : "text-cacau", className)}
    >
      <Image
        src="/images/yang-bento-mark.svg"
        alt=""
        width={240}
        height={240}
        priority
        className="size-12 shrink-0 sm:size-[3.4rem]"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[1.2rem] font-bold tracking-[-0.055em] sm:text-[1.35rem]">YANG BENTO</span>
        <span className="mt-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.17em] opacity-75">Lingerie funcional</span>
      </span>
    </Link>
  );
}
