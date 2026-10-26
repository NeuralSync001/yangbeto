import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "light";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 px-6 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 disabled:opacity-50";

const variants: Record<Variant, string> = {
  solid: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-brand text-brand hover:bg-brand hover:text-white",
  ghost: "text-brand underline-offset-4 hover:underline px-0",
  light: "bg-offwhite text-cacau hover:bg-nude",
};

interface Common {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function ButtonLink({
  variant = "solid",
  className,
  href,
  external,
  children,
  ...rest
}: Common & { href: string; external?: boolean } & Omit<ComponentProps<"a">, "href" | "className" | "children">) {
  const classes = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "solid",
  className,
  children,
  ...rest
}: Common & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}
