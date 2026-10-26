import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-[2.4rem] sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-[1.02rem] leading-relaxed text-grafite/75">{text}</p>}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line bg-mist">
      <Container className="py-14 sm:py-20">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="max-w-3xl text-5xl sm:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-grafite/75">{text}</p>}
        {children}
      </Container>
    </header>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Você está em" className="mb-6 text-xs uppercase tracking-[0.16em] text-grafite/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-cacau hover:underline underline-offset-4">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-cacau">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
