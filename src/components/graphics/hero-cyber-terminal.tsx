"use client";

import { profile, certifications } from "@/data/profile";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChromeBlob,
  HolographicSticker,
  InteractiveDecor,
  NeonArrowBlock,
  Y2KSparkle,
} from "@/components/graphics/y2k-vectors";
import { cn } from "@/lib/utils";

function GradientGlobe({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="globe-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-cyprus-glow)" />
          <stop offset="50%" stopColor="var(--color-cyprus)" />
          <stop offset="100%" stopColor="var(--color-cyprus-mid)" />
        </linearGradient>
        <radialGradient id="globe-shine" cx="35%" cy="30%" r="50%">
          <stop offset="0%" stopColor="var(--color-sand)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--color-sand)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="34" fill="url(#globe-grad)" fillOpacity="0.2" stroke="url(#globe-grad)" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="34" fill="url(#globe-shine)" />
      <ellipse cx="40" cy="40" rx="34" ry="12" stroke="url(#globe-grad)" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="40" cy="40" rx="12" ry="34" stroke="url(#globe-grad)" strokeWidth="0.6" opacity="0.35" />
      <path d="M6 40 H74 M40 6 V74" stroke="url(#globe-grad)" strokeWidth="0.4" opacity="0.25" />
    </svg>
  );
}

function JsonLine({
  indent,
  keyName,
  value,
  valueClass = "text-cyprus",
  isArray,
  arrayItems,
}: {
  indent: number;
  keyName: string;
  value?: string;
  valueClass?: string;
  isArray?: boolean;
  arrayItems?: { text: string; className?: string }[];
}) {
  const pad = "  ".repeat(indent);
  return (
    <div className="font-display text-[10px] leading-relaxed tracking-[0.01em] sm:text-[11px] md:text-xs">
      <span className="text-cyprus/40">{pad}</span>
      <span className="text-cyprus-glow">&quot;{keyName}&quot;</span>
      <span className="text-cyprus/40">: </span>
      {isArray && arrayItems ? (
        <>
          <span className="text-cyprus/40">[</span>
          {arrayItems.map((item, i) => (
            <span key={item.text}>
              {i > 0 ? <span className="text-cyprus/40">, </span> : null}
              <span className={item.className ?? "text-cyprus/70"}>&quot;{item.text}&quot;</span>
            </span>
          ))}
          <span className="text-cyprus/40">]</span>
        </>
      ) : (
        <span className={valueClass}>&quot;{value}&quot;</span>
      )}
      <span className="text-cyprus/40">,</span>
    </div>
  );
}

const certShort = certifications.map((c) => {
  const m = c.name.match(/\(([^)]+)\)/);
  return m ? m[1] : c.id.toUpperCase();
});

export function HeroCyberTerminal() {
  const reduce = useReducedMotion();
  const username = profile.name.split(" ")[0].toLowerCase();

  return (
    <div className="relative mx-auto w-full max-w-full px-1 sm:max-w-md sm:px-0 lg:max-w-lg">
      <div
        className="absolute -inset-8 rounded-3xl bg-[radial-gradient(ellipse_at_center,color-mix(in_oklch,var(--color-cyprus)_12%,transparent),transparent)] blur-2xl"
        aria-hidden
      />

      <InteractiveDecor glow="lime" className="absolute -left-3 top-8 z-20 hidden sm:block sm:-left-6 md:-left-10">
        <GradientGlobe className="h-14 w-14 sm:h-16 sm:w-16" />
      </InteractiveDecor>

      <InteractiveDecor glow="pink" className="absolute -right-2 top-4 z-20 hidden sm:block sm:-right-4 md:-right-8">
        <GradientGlobe className="h-12 w-12 opacity-90 sm:h-14 sm:w-14" />
      </InteractiveDecor>

      <InteractiveDecor glow="lime" className="absolute -left-2 bottom-16 z-20 hidden sm:block sm:-left-4 md:-left-8">
        <NeonArrowBlock color="pink" className="h-9 w-9 sm:h-10 sm:w-10" />
      </InteractiveDecor>

      <InteractiveDecor glow="pink" className="absolute -right-1 bottom-20 z-20 hidden sm:block sm:-right-2 md:-right-6">
        <NeonArrowBlock color="lime" className="h-9 w-9 sm:h-10 sm:w-10" />
      </InteractiveDecor>

      <InteractiveDecor glow="pink" className="absolute -left-8 bottom-4 z-20 hidden sm:block">
        <HolographicSticker variant="butterfly" className="h-11 w-11" />
      </InteractiveDecor>

      <InteractiveDecor glow="lime" className="absolute -right-6 top-1/2 z-20 hidden -translate-y-1/2 md:block">
        <Y2KSparkle className="h-9 w-9 text-cyprus-glow" />
      </InteractiveDecor>

      <InteractiveDecor glow="chrome" className="absolute right-4 -top-6 z-20 hidden lg:block">
        <ChromeBlob className="h-16 w-20 opacity-80" />
      </InteractiveDecor>

      <motion.div
        className="absolute -right-1 top-[36%] z-30 hidden max-w-[42%] truncate rounded-lg border border-cyprus/15 bg-white/80 px-2 py-1 font-display text-[8px] text-cyprus-glow shadow-md backdrop-blur-md sm:top-[38%] sm:block sm:max-w-none sm:px-2.5 sm:py-1.5 sm:text-[10px]"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {certShort.join(" · ")}
      </motion.div>

      <div className="absolute -left-1 top-[20%] z-30 rounded-pill border border-cyprus/15 bg-white/90 px-2.5 py-1 font-display text-[8px] font-semibold text-cyprus shadow-md sm:-left-2 sm:top-[22%] sm:px-3 sm:py-1.5 sm:text-[10px]">
        CS Graduate
      </div>

      <div className="absolute -bottom-2 left-4 z-30 rounded-pill border border-cyprus/15 bg-cyprus/5 px-3 py-1.5 font-display text-[9px] text-cyprus/70 shadow-md backdrop-blur-md sm:text-[10px]">
        Red Team Trainee
      </div>

      <motion.div
        className={cn(
          "relative z-10 overflow-hidden rounded-xl border border-cyprus/15 sm:rounded-2xl",
          "drench-sand shadow-[0_32px_80px_color-mix(in_oklch,var(--color-ink)_25%,transparent)]",
        )}
        whileHover={reduce ? undefined : { scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        <div className="flex items-center gap-3 border-b border-cyprus/15 bg-white/50 px-4 py-2.5">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-accent-pink/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyprus-glow/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyprus/80" />
          </div>
          <p className="truncate font-display text-[10px] text-cyprus/70 sm:text-[11px]">
            {username}@cyberlab: ~/profile
          </p>
        </div>

        <div className="space-y-3 p-4 sm:p-5">
          <p className="font-display text-[10px] sm:text-[11px] md:text-xs">
            <span className="text-cyprus-glow">$</span>{" "}
            <span className="text-cyprus">cat profile.json</span>
          </p>

          <div className="rounded-lg border border-cyprus/15 bg-white/60 p-3 sm:p-4">
            <p className="font-display text-[10px] text-cyprus/40 sm:text-[11px]">{"{"}</p>
            <JsonLine indent={1} keyName="name" value={profile.name} />
            <JsonLine indent={1} keyName="role" value="Pentester + Backend Dev" />
            <JsonLine
              indent={1}
              keyName="focus"
              isArray
              arrayItems={[
                { text: "penetration-testing", className: "text-cyprus" },
                { text: "automation", className: "text-cyprus" },
                { text: "red-team", className: "text-cyprus" },
              ]}
            />
            <JsonLine
              indent={1}
              keyName="stack"
              isArray
              arrayItems={[
                { text: "Python", className: "text-cyprus-glow" },
                { text: "FastAPI", className: "text-cyprus-glow" },
                { text: "Docker", className: "text-cyprus-glow" },
                { text: "PostgreSQL", className: "text-cyprus-glow" },
              ]}
            />
            <JsonLine
              indent={1}
              keyName="certs"
              isArray
              arrayItems={certShort.map((c) => ({ text: c, className: "text-cyprus-mid" }))}
            />
            <JsonLine indent={1} keyName="location" value="Cairo, EG" valueClass="text-cyprus/70" />
            <JsonLine indent={1} keyName="education" value="Computer Science" valueClass="text-cyprus/70" />
            <div className="font-display text-[10px] leading-relaxed sm:text-[11px] md:text-xs">
              <span className="text-cyprus/40">{"  "}</span>
              <span className="text-cyprus-glow">&quot;status&quot;</span>
              <span className="text-cyprus/40">: </span>
              <span className="text-cyprus-glow">&quot;available&quot;</span>
            </div>
            <p className="font-display text-[10px] text-cyprus/40 sm:text-[11px]">{"}"}</p>
          </div>

          <p className="font-display text-[10px] sm:text-[11px] md:text-xs">
            <span className="text-cyprus-glow">$</span>{" "}
            <span className="text-cyprus">run pentest --target self</span>
            {!reduce ? (
              <span className="ml-0.5 inline-block h-3.5 w-2 animate-pulse bg-cyprus-glow align-middle" />
            ) : (
              <span className="text-cyprus-glow">_</span>
            )}
          </p>
        </div>
      </motion.div>

      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-56 -translate-x-1/2 -translate-y-1/2 font-display text-cyprus/[0.06]"
        viewBox="0 0 80 92"
        fill="none"
        aria-hidden
      >
        <path
          d="M40 4 72 22v28L40 88 8 50V22L40 4Z"
          stroke="currentColor"
          strokeWidth="1"
        />
        <text x="40" y="54" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="700">
          PT
        </text>
      </svg>
    </div>
  );
}
