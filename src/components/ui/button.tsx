import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  href?: string;
  external?: boolean;
};

export function Button({
  variant = "primary",
  className,
  children,
  href,
  external,
  type,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-pill px-5 py-3 text-sm font-medium transition-[transform,box-shadow,background-color,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime active:scale-[0.97] disabled:opacity-50 disabled:active:scale-100 touch-manipulation sm:px-6";

  const variants = {
    primary:
      "border border-sand/20 bg-sand text-cyprus hover:-translate-y-0.5 hover:shadow-[0_0_32px_color-mix(in_oklch,var(--color-accent-lime)_35%,transparent)]",
    secondary:
      "border border-border-strong bg-transparent text-sand hover:border-sand/50 hover:bg-sand/5",
    ghost: "border border-transparent text-sand-muted hover:text-sand",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes} {...props}>
      {children}
    </button>
  );
}
