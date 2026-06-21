"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, SVGProps } from "react";
import { cn } from "@/lib/utils";

const hoverSpring = { type: "spring" as const, stiffness: 400, damping: 22 };

export function InteractiveDecor({
  children,
  className,
  glow = "lime",
  tilt = true,
}: {
  children: ReactNode;
  className?: string;
  glow?: "lime" | "pink" | "chrome";
  tilt?: boolean;
}) {
  const reduce = useReducedMotion();
  const glowClass =
    glow === "pink"
      ? "hover:shadow-[0_0_32px_color-mix(in_oklch,var(--color-accent-pink)_45%,transparent)]"
      : glow === "chrome"
        ? "hover:shadow-[0_0_28px_color-mix(in_oklch,var(--color-sand)_35%,transparent)]"
        : "hover:shadow-[0_0_32px_color-mix(in_oklch,var(--color-accent-lime)_45%,transparent)]";

  if (reduce) {
    return <div className={cn("pointer-events-auto cursor-default", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(
        "pointer-events-auto cursor-pointer rounded-lg transition-[filter] duration-300",
        glowClass,
        className,
      )}
      whileHover={{
        scale: 1.08,
        rotate: tilt ? 4 : 0,
        filter: "brightness(1.15)",
      }}
      whileTap={{ scale: 0.96 }}
      transition={hoverSpring}
    >
      {children}
    </motion.div>
  );
}

export function ChromeBlob(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="chrome-blob-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0EDE4" stopOpacity="0.95" />
          <stop offset="40%" stopColor="#00A896" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#C8F542" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="chrome-blob-b" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF4D9D" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#004741" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M60 8 C88 8 108 28 108 52 C108 78 82 94 60 92 C38 90 12 72 12 48 C12 22 32 8 60 8 Z"
        stroke="url(#chrome-blob-a)"
        strokeWidth="2.5"
        fill="url(#chrome-blob-b)"
        fillOpacity="0.15"
      />
      <ellipse cx="42" cy="38" rx="18" ry="10" stroke="url(#chrome-blob-a)" strokeWidth="1.5" transform="rotate(-30 42 38)" opacity="0.7" />
      <ellipse cx="78" cy="58" rx="22" ry="12" stroke="currentColor" strokeWidth="0.8" opacity="0.25" transform="rotate(20 78 58)" />
    </svg>
  );
}

export function HolographicSticker({
  variant,
  ...props
}: SVGProps<SVGSVGElement> & { variant: "butterfly" | "globe" | "smiley" }) {
  const id = variant;
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id={`holo-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF4D9D" />
          <stop offset="50%" stopColor="#C8F542" />
          <stop offset="100%" stopColor="#00A896" />
        </linearGradient>
        <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="12" stroke={`url(#holo-${id})`} strokeWidth="2" fill="color-mix(in oklch, currentColor 4%, transparent)" filter={`url(#glow-${id})`} />
      {variant === "butterfly" && (
        <path
          d="M32 20 C28 28 20 30 18 36 C22 34 28 34 32 38 C36 34 42 34 46 36 C44 30 36 28 32 20 Z M32 38 V48"
          stroke={`url(#holo-${id})`}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      )}
      {variant === "globe" && (
        <>
          <circle cx="32" cy="32" r="12" stroke={`url(#holo-${id})`} strokeWidth="1.2" />
          <ellipse cx="32" cy="32" rx="12" ry="5" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
          <path d="M20 32 H44 M32 20 V44" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        </>
      )}
      {variant === "smiley" && (
        <>
          <circle cx="26" cy="28" r="2" fill={`url(#holo-${id})`} />
          <circle cx="38" cy="28" r="2" fill={`url(#holo-${id})`} />
          <path d="M24 40 Q32 48 40 40" stroke={`url(#holo-${id})`} strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </>
      )}
    </svg>
  );
}

export function NeonArrowBlock({ color = "lime", ...props }: SVGProps<SVGSVGElement> & { color?: "lime" | "pink" }) {
  const fill = color === "pink" ? "#FF4D9D" : "#C8F542";
  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="4" y="4" width="48" height="48" rx="4" fill={fill} fillOpacity="0.9" />
      <path d="M18 28 H34 M28 20 L36 28 L28 36" stroke="#002f2b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Y2KSparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 4 V12 M20 28 V36 M4 20 H12 M28 20 H36 M8 8 L14 14 M26 26 L32 32 M32 8 L26 14 M14 26 L8 32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Y2KCornerFrame(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 32 V8 H32 M68 8 H92 V32 M92 68 V92 H68 M32 92 H8 V68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function NeoCircleRing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="24" r="8" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}

export function Y2KDotGrid({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <pattern id="y2k-dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#y2k-dots)" />
      <path d="M0 200 H400 M200 0 V400" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
    </svg>
  );
}
