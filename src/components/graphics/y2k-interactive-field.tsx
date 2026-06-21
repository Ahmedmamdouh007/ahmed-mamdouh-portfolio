"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ChromeBlob,
  HolographicSticker,
  InteractiveDecor,
  NeonArrowBlock,
  Y2KCornerFrame,
  Y2KDotGrid,
  Y2KSparkle,
} from "@/components/graphics/y2k-vectors";

type Placement = "hero" | "workspace" | "about";

function AmbientFloat({
  children,
  className,
  duration = 8,
  y = 10,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Y2KInteractiveField({ placement }: { placement: Placement }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden={placement !== "hero"}
    >
      {/* Y2K dot grid atmosphere */}
      <Y2KDotGrid className="absolute inset-0 h-full w-full text-accent-lime/[0.07]" />

      {/* Neon bloom washes */}
      <div className="absolute -left-[10%] top-[15%] h-64 w-64 rounded-full bg-accent-pink/[0.06] blur-3xl" />
      <div className="absolute -right-[5%] bottom-[20%] h-72 w-72 rounded-full bg-accent-lime/[0.05] blur-3xl" />

      {placement === "hero" && (
        <>
          {/* Hero column uses HeroCyberTerminal decor — keep only ambient bg accents here */}
          <AmbientFloat className="absolute left-[2%] top-[8%] opacity-40 md:left-[4%]" duration={11} y={8}>
            <Y2KSparkle className="h-7 w-7 text-accent-lime/50" />
          </AmbientFloat>
          <InteractiveDecor glow="chrome" className="absolute bottom-[12%] right-[3%] hidden opacity-50 md:block">
            <Y2KCornerFrame className="h-20 w-20 text-sand/15" />
          </InteractiveDecor>
        </>
      )}

      {placement === "workspace" && (
        <>
          <InteractiveDecor glow="lime" className="absolute -left-2 top-8 opacity-70">
            <NeonArrowBlock color="lime" className="h-9 w-9" />
          </InteractiveDecor>
          <InteractiveDecor glow="pink" className="absolute -right-1 top-16 opacity-70">
            <HolographicSticker variant="globe" className="h-10 w-10" />
          </InteractiveDecor>
          <InteractiveDecor glow="chrome" className="absolute bottom-12 right-[8%] opacity-60">
            <ChromeBlob className="h-16 w-20" />
          </InteractiveDecor>
          <Y2KCornerFrame className="pointer-events-none absolute bottom-4 left-4 h-16 w-16 text-accent-lime/25" />
        </>
      )}

      {placement === "about" && (
        <>
          <InteractiveDecor glow="pink" className="absolute right-4 top-6 opacity-75">
            <HolographicSticker variant="smiley" className="h-10 w-10" />
          </InteractiveDecor>
          <InteractiveDecor glow="lime" className="absolute left-2 bottom-10 opacity-70">
            <Y2KSparkle className="h-9 w-9 text-accent-lime/60" />
          </InteractiveDecor>
        </>
      )}
    </div>
  );
}
