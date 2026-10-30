import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, light }: { className?: string; light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="NÓRIA — página inicial"
      className={cn("group inline-flex items-center gap-2.5", light ? "text-offwhite" : "text-cacau", className)}
    >
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.8rem] font-semibold tracking-[0.05em] sm:text-[2rem]">NÓRIA</span>
        <span className="mt-1 text-[0.52rem] font-medium uppercase tracking-[0.2em] opacity-75">Lingerie para viver</span>
      </span>
    </Link>
  );
}
