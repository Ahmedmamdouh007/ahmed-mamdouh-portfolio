"use client";

import { certifications } from "@/data/profile";
import { useReducedMotion } from "framer-motion";

const items = certifications.map((c) => c.name.split("(")[1]?.replace(")", "") ?? c.id.toUpperCase());

export function CredentialMarquee() {
  const reduce = useReducedMotion();
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-[color-mix(in_oklch,var(--color-cyprus)_50%,var(--color-ink))] py-3">
      <div
        className={reduce ? "flex flex-wrap justify-center gap-6 px-4" : "flex w-max animate-marquee gap-10 px-4"}
      >
        {doubled.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-sand-dim"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" aria-hidden />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
