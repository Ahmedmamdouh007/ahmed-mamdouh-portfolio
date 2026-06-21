"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  ArrowBurst,
  CircuitTraces,
  CrosshairTarget,
  DataPackets,
  HexLattice,
  MiniBraces,
  MiniDiamond,
  MiniPulse,
  NodeConstellation,
  OrbitalRings,
  ScanRadar,
  SparkNode,
  TerminalCorners,
  WireframeGlobe,
} from "@/components/graphics/vectors";

export type BackdropVariant =
  | "hero"
  | "about"
  | "skills"
  | "certifications"
  | "projects"
  | "contact"
  | "minimal";

function Float({
  children,
  className,
  duration = 10,
  y = 12,
}: {
  children: ReactNode;
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

function Spin({
  children,
  className,
  duration = 40,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionBackdrop({ variant }: { variant: BackdropVariant }) {
  if (variant === "minimal") return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {variant === "about" && (
        <>
          <WireframeGlobe className="absolute -left-[12%] top-[8%] h-64 w-64 text-cyprus-glow/20 md:h-80 md:w-80" />
          <NodeConstellation className="absolute -right-8 top-1/4 h-48 w-72 text-sand/10 md:h-64 md:w-96" />
          <TerminalCorners className="absolute bottom-8 right-4 h-32 w-32 text-accent-lime/15 md:h-40 md:w-40" />
          <Float className="absolute left-[8%] top-[35%]" duration={7}>
            <MiniBraces className="h-8 w-8 text-cyprus-glow/25" />
          </Float>
          <SparkNode className="absolute right-[15%] bottom-[15%] h-8 w-8 text-accent-pink/20" />
          <MiniPulse className="absolute left-[35%] top-[12%] hidden h-5 w-10 text-sand/10 md:block" />
        </>
      )}

      {variant === "skills" && (
        <>
          <HexLattice className="absolute -right-24 top-0 h-[420px] w-[420px] text-sand/8" />
          <CircuitTraces className="absolute -left-12 bottom-0 h-56 w-80 text-cyprus-glow/25 md:h-72 md:w-96" />
          <Float className="absolute right-[10%] top-[20%]" duration={8}>
            <CrosshairTarget className="h-16 w-16 text-accent-pink/20 md:h-20 md:w-20" />
          </Float>
          <DataPackets className="absolute left-[5%] top-[15%] h-40 w-56 text-accent-lime/15" />
          <MiniDiamond className="absolute left-[12%] bottom-[18%] h-7 w-7 text-cyprus-glow/22" />
          <ArrowBurst className="absolute right-[6%] bottom-[22%] h-8 w-8 text-sand/10" />
        </>
      )}

      {variant === "certifications" && (
        <>
          <Spin className="absolute -left-20 top-1/2 -translate-y-1/2" duration={90}>
            <OrbitalRings className="h-72 w-72 text-cyprus-glow/12 md:h-96 md:w-96" />
          </Spin>
          <ScanRadar className="absolute -right-16 bottom-0 h-64 w-64 text-sand/10 md:h-80 md:w-80" />
          <ArrowBurst className="absolute right-[12%] top-[12%] h-14 w-14 text-accent-lime/25" />
          <Float className="absolute left-[10%] top-[20%]" duration={9}>
            <MiniBraces className="h-7 w-7 text-accent-pink/18" />
          </Float>
          <SparkNode className="absolute left-[6%] bottom-[16%] h-7 w-7 text-cyprus-glow/20" />
        </>
      )}

      {variant === "projects" && (
        <>
          <CircuitTraces className="absolute -right-8 top-8 h-48 w-72 text-cyprus-glow/20 md:h-64 md:w-96" flip />
          <DataPackets className="absolute -left-8 bottom-12 h-52 w-72 text-accent-lime/12" />
          <HexLattice className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 text-sand/5" />
          <Float className="absolute right-[18%] bottom-[20%]" duration={12} y={16}>
            <TerminalCorners className="h-28 w-28 text-sand/12" />
          </Float>
          <MiniPulse className="absolute left-[10%] top-[22%] h-5 w-10 text-cyprus-glow/22" />
          <MiniDiamond className="absolute right-[8%] top-[30%] h-6 w-6 text-accent-lime/18" />
        </>
      )}

      {variant === "contact" && (
        <>
          <NodeConstellation className="absolute -left-16 top-0 h-56 w-80 text-cyprus-glow/15" />
          <Spin className="absolute -right-24 bottom-[-10%]" duration={70}>
            <WireframeGlobe className="h-80 w-80 text-sand/8 md:h-[28rem] md:w-[28rem]" />
          </Spin>
          <CrosshairTarget className="absolute right-[8%] top-[18%] h-24 w-24 text-accent-pink/15" />
          <Float className="absolute left-[6%] bottom-[20%]" duration={8}>
            <MiniBraces className="h-7 w-7 text-sand/10" />
          </Float>
          <SparkNode className="absolute right-[20%] bottom-[12%] hidden h-8 w-8 text-accent-lime/15 sm:block" />
        </>
      )}
    </div>
  );
}
