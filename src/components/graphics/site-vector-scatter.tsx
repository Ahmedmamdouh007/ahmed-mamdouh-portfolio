"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowBurst,
  CrosshairTarget,
  HexBadge,
  IsoCubes,
  LockWireframe,
  MiniBraces,
  MiniCodeTag,
  MiniDiamond,
  MiniDots,
  MiniPulse,
  ShieldGlyph,
  SparkNode,
  TerminalCorners,
} from "@/components/graphics/vectors";
import { cn } from "@/lib/utils";

type VectorComponent = ComponentType<{ className?: string; label?: string }>;

type ScatterSpec = {
  id: string;
  Component: VectorComponent;
  wrapperClass: string;
  colorClass: string;
  sizeClass: string;
  float?: { duration?: number; y?: number; delay?: number };
  spin?: { duration?: number; reverse?: boolean };
  props?: Record<string, string>;
};

function FloatWrap({
  children,
  className,
  duration = 9,
  y = 10,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  y?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -y, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function SpinWrap({
  children,
  className,
  duration = 50,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

const SCATTER: Record<string, ScatterSpec[]> = {
  about: [
    { id: "a1", Component: MiniBraces, wrapperClass: "absolute left-[4%] top-[18%]", colorClass: "text-cyprus-glow/35", sizeClass: "h-8 w-8" },
    { id: "a2", Component: ShieldGlyph, wrapperClass: "absolute right-[6%] top-[12%]", colorClass: "text-accent-lime/25", sizeClass: "h-10 w-9", float: { duration: 8, y: 8 } },
    { id: "a3", Component: SparkNode, wrapperClass: "absolute left-[12%] bottom-[22%]", colorClass: "text-accent-pink/30", sizeClass: "h-7 w-7", float: { duration: 7, y: 6, delay: 0.5 } },
    { id: "a4", Component: MiniPulse, wrapperClass: "absolute right-[14%] top-[42%]", colorClass: "text-cyprus-glow/30", sizeClass: "h-5 w-10" },
    { id: "a5", Component: HexBadge, wrapperClass: "absolute left-[2%] bottom-[12%] hidden sm:block", colorClass: "text-sand/12", sizeClass: "h-14 w-12", props: { label: "CS" }, spin: { duration: 80 } },
    { id: "a6", Component: CrosshairTarget, wrapperClass: "absolute right-[3%] bottom-[18%]", colorClass: "text-sand/10", sizeClass: "h-12 w-12", float: { duration: 10, y: 9 } },
    { id: "a7", Component: MiniDots, wrapperClass: "absolute left-[48%] top-[8%] hidden md:block", colorClass: "text-cyprus-glow/25", sizeClass: "h-8 w-8" },
    { id: "a8", Component: TerminalCorners, wrapperClass: "absolute right-[22%] bottom-[8%] hidden lg:block", colorClass: "text-accent-lime/18", sizeClass: "h-16 w-16" },
  ],
  workspace: [
    { id: "w1", Component: MiniCodeTag, wrapperClass: "absolute left-[3%] top-[14%]", colorClass: "text-cyprus-glow/30", sizeClass: "h-6 w-9" },
    { id: "w2", Component: ArrowBurst, wrapperClass: "absolute right-[5%] top-[20%]", colorClass: "text-accent-lime/28", sizeClass: "h-8 w-8", float: { duration: 6, y: 7 } },
    { id: "w3", Component: LockWireframe, wrapperClass: "absolute left-[8%] bottom-[24%]", colorClass: "text-sand/12", sizeClass: "h-12 w-9", float: { duration: 9, y: 8, delay: 0.3 } },
    { id: "w4", Component: MiniDiamond, wrapperClass: "absolute right-[10%] top-[48%]", colorClass: "text-accent-pink/25", sizeClass: "h-7 w-7" },
    { id: "w5", Component: IsoCubes, wrapperClass: "absolute left-[4%] top-[55%] hidden sm:block", colorClass: "text-cyprus-glow/22", sizeClass: "h-14 w-16", float: { duration: 11, y: 10 } },
    { id: "w6", Component: SparkNode, wrapperClass: "absolute right-[3%] bottom-[14%]", colorClass: "text-accent-lime/22", sizeClass: "h-8 w-8", spin: { duration: 70, reverse: true } },
    { id: "w7", Component: MiniBraces, wrapperClass: "absolute left-[45%] bottom-[6%] hidden md:block", colorClass: "text-sand/10", sizeClass: "h-7 w-7" },
    { id: "w8", Component: HexBadge, wrapperClass: "absolute right-[18%] top-[8%] hidden lg:block", colorClass: "text-cyprus-glow/20", sizeClass: "h-12 w-10", props: { label: "API" } },
  ],
  contact: [
    { id: "c1", Component: MiniPulse, wrapperClass: "absolute left-[5%] top-[16%]", colorClass: "text-cyprus-glow/28", sizeClass: "h-5 w-11" },
    { id: "c2", Component: ShieldGlyph, wrapperClass: "absolute right-[4%] top-[10%]", colorClass: "text-accent-lime/22", sizeClass: "h-11 w-10", float: { duration: 8, y: 7 } },
    { id: "c3", Component: MiniCodeTag, wrapperClass: "absolute left-[3%] bottom-[20%]", colorClass: "text-sand/12", sizeClass: "h-6 w-9" },
    { id: "c4", Component: CrosshairTarget, wrapperClass: "absolute right-[8%] top-[38%]", colorClass: "text-accent-pink/20", sizeClass: "h-10 w-10", float: { duration: 9, y: 8, delay: 0.4 } },
    { id: "c5", Component: MiniDots, wrapperClass: "absolute left-[10%] top-[45%] hidden sm:block", colorClass: "text-cyprus-glow/22", sizeClass: "h-7 w-7" },
    { id: "c6", Component: LockWireframe, wrapperClass: "absolute right-[3%] bottom-[12%]", colorClass: "text-sand/10", sizeClass: "h-14 w-11", float: { duration: 10, y: 9 } },
    { id: "c7", Component: ArrowBurst, wrapperClass: "absolute left-[42%] top-[6%] hidden md:block", colorClass: "text-accent-lime/18", sizeClass: "h-7 w-7" },
    { id: "c8", Component: MiniDiamond, wrapperClass: "absolute right-[20%] bottom-[8%] hidden lg:block", colorClass: "text-cyprus-glow/25", sizeClass: "h-8 w-8", spin: { duration: 90 } },
  ],
  footer: [
    { id: "f1", Component: MiniBraces, wrapperClass: "absolute left-[6%] top-[20%]", colorClass: "text-cyprus-glow/25", sizeClass: "h-7 w-7" },
    { id: "f2", Component: SparkNode, wrapperClass: "absolute right-[8%] top-[15%]", colorClass: "text-accent-lime/20", sizeClass: "h-7 w-7", float: { duration: 7, y: 6 } },
    { id: "f3", Component: MiniPulse, wrapperClass: "absolute left-[15%] bottom-[25%] hidden sm:block", colorClass: "text-sand/10", sizeClass: "h-4 w-9" },
    { id: "f4", Component: HexBadge, wrapperClass: "absolute right-[4%] bottom-[20%]", colorClass: "text-accent-pink/15", sizeClass: "h-12 w-10", props: { label: "PT" } },
    { id: "f5", Component: MiniDots, wrapperClass: "absolute left-[40%] top-[10%] hidden md:block", colorClass: "text-cyprus-glow/18", sizeClass: "h-6 w-6" },
  ],
  hero: [
    { id: "h1", Component: MiniBraces, wrapperClass: "absolute left-[8%] top-[18%]", colorClass: "text-cyprus-glow/28", sizeClass: "h-7 w-7", float: { duration: 8, y: 7 } },
    { id: "h2", Component: MiniCodeTag, wrapperClass: "absolute right-[10%] top-[28%]", colorClass: "text-accent-lime/22", sizeClass: "h-6 w-9" },
    { id: "h3", Component: MiniDiamond, wrapperClass: "absolute left-[20%] bottom-[35%]", colorClass: "text-accent-pink/20", sizeClass: "h-6 w-6", float: { duration: 9, y: 8, delay: 0.6 } },
    { id: "h4", Component: MiniPulse, wrapperClass: "absolute right-[18%] bottom-[40%] hidden sm:block", colorClass: "text-sand/12", sizeClass: "h-5 w-10" },
    { id: "h5", Component: MiniDots, wrapperClass: "absolute left-[4%] top-[48%]", colorClass: "text-cyprus-glow/22", sizeClass: "h-8 w-8" },
    { id: "h6", Component: ShieldGlyph, wrapperClass: "absolute right-[6%] top-[62%] hidden md:block", colorClass: "text-accent-lime/18", sizeClass: "h-9 w-8", float: { duration: 10, y: 9 } },
  ],
};

export type SiteVectorVariant = keyof typeof SCATTER;

export function SiteVectorScatter({
  variant,
  className,
}: {
  variant: SiteVectorVariant;
  className?: string;
}) {
  const items = SCATTER[variant] ?? [];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 z-[1] overflow-hidden", className)}
      aria-hidden
    >
      {items.map((item) => {
        const { Component } = item;
        const graphic = (
          <Component className={cn(item.sizeClass, item.colorClass)} {...item.props} />
        );

        if (item.spin) {
          return (
            <SpinWrap
              key={item.id}
              className={item.wrapperClass}
              duration={item.spin.duration}
              reverse={item.spin.reverse}
            >
              {graphic}
            </SpinWrap>
          );
        }

        if (item.float) {
          return (
            <FloatWrap
              key={item.id}
              className={item.wrapperClass}
              duration={item.float.duration}
              y={item.float.y}
              delay={item.float.delay}
            >
              {graphic}
            </FloatWrap>
          );
        }

        return (
          <div key={item.id} className={item.wrapperClass}>
            {graphic}
          </div>
        );
      })}
    </div>
  );
}
