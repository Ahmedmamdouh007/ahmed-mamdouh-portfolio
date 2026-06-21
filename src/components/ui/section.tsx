"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { HeadingReveal } from "@/components/motion/heading-reveal";
import {
  SectionBackdrop,
  type BackdropVariant,
} from "@/components/graphics/section-backdrop";
import {
  SiteVectorScatter,
  type SiteVectorVariant,
} from "@/components/graphics/site-vector-scatter";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  index,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  index?: string;
}) {
  return (
    <div
      className={cn(
        "mb-6 md:mb-8",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-3 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {index ? (
          <span className="font-mono text-sm text-accent-lime/80">{index}</span>
        ) : null}
        <span className="h-px w-12 bg-border-strong" aria-hidden />
        {eyebrow ? (
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyprus-glow">
            {eyebrow}
          </p>
        ) : null}
      </div>
      <HeadingReveal>
        <h2 className="font-display text-sand">{title}</h2>
      </HeadingReveal>
      {description ? (
        <p
          className={cn(
            "mt-3 text-base leading-relaxed text-sand-muted md:text-[1.05rem]",
            align === "center" && "mx-auto max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function SectionShell({
  id,
  children,
  className,
  tinted = false,
  wave = false,
  backdrop,
  scatter,
}: {
  id: string;
  children: ReactNode;
  className?: string;
  tinted?: boolean;
  wave?: boolean;
  backdrop?: BackdropVariant;
  scatter?: SiteVectorVariant;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-pad relative scroll-mt-20 overflow-hidden md:scroll-mt-24",
        tinted && "bg-[color-mix(in_oklch,var(--color-cyprus)_40%,var(--color-cyprus-deep))]",
        wave && "border-t border-border/50",
        className,
      )}
    >
      {backdrop ? <SectionBackdrop variant={backdrop} /> : null}
      {scatter ? <SiteVectorScatter variant={scatter} /> : null}
      <div className="container-wide relative z-10">{children}</div>
    </section>
  );
}
