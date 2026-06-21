"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowBurst,
  ChromeRing,
  CircuitTraces,
  CrosshairTarget,
  CyberGridPattern,
  DataFlowLines,
  DataPackets,
  HexLattice,
  IsoCubes,
  LockWireframe,
  NodeConstellation,
  OrbitalRings,
  ScanRadar,
  SparkNode,
  TerminalCorners,
  WireframeGlobe,
} from "@/components/graphics/vectors";

import { Y2KInteractiveField } from "@/components/graphics/y2k-interactive-field";
import { SiteVectorScatter } from "@/components/graphics/site-vector-scatter";

function Float({
  children,
  className,
  duration = 10,
  y = 14,
  delay = 0,
}: {
  children: React.ReactNode;
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

function Spin({
  children,
  className,
  duration = 48,
  reverse = false,
}: {
  children: React.ReactNode;
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

export function HeroBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
      {/* Base atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_-20%,color-mix(in_oklch,var(--color-cyprus-glow)_34%,transparent),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_8%_85%,color-mix(in_oklch,var(--color-accent-pink)_10%,transparent),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_92%_65%,color-mix(in_oklch,var(--color-accent-lime)_8%,transparent),transparent)]" />

      {/* Large structural layers */}
      <CyberGridPattern className="absolute -right-36 top-[-8%] h-[min(110vw,920px)] w-[min(110vw,920px)] text-sand/12" />
      <HexLattice className="absolute -left-40 bottom-[-5%] h-[min(90vw,700px)] w-[min(90vw,700px)] text-cyprus-glow/10" />
      <NodeConstellation className="absolute left-[2%] top-[12%] h-40 w-64 text-sand/12 md:h-52 md:w-80" />

      {/* Mid-layer traces */}
      <DataFlowLines className="absolute -left-20 bottom-20 h-56 w-88 text-cyprus-glow/30 md:h-80 md:w-[30rem]" />
      <CircuitTraces className="absolute right-0 top-[42%] h-44 w-64 text-sand/15 md:h-56 md:w-80" />
      <DataPackets className="absolute right-[4%] bottom-[22%] hidden h-36 w-52 text-accent-lime/18 sm:block md:h-44 md:w-64" />

      {/* Accent orbitals */}
      <Spin className="absolute left-[42%] top-[8%] hidden opacity-60 lg:block" duration={120}>
        <OrbitalRings className="h-48 w-48 text-sand/10" />
      </Spin>
      <Spin className="absolute right-[2%] top-[52%]" duration={56} reverse>
        <ChromeRing className="h-40 w-40 text-accent-lime/22 md:h-56 md:w-56" />
      </Spin>
      <Spin className="absolute left-[3%] top-[55%]" duration={90}>
        <WireframeGlobe className="h-36 w-36 text-cyprus-glow/18 md:h-48 md:w-48" />
      </Spin>

      {/* Floating accents */}
      <Float className="absolute left-[14%] top-[32%]" duration={7} y={12}>
        <SparkNode className="h-9 w-9 text-accent-pink/25 md:h-11 md:w-11" />
      </Float>
      <Float className="absolute right-[22%] top-[22%]" duration={9} y={10} delay={1}>
        <CrosshairTarget className="h-14 w-14 text-sand/15 md:h-16 md:w-16" />
      </Float>
      <Float className="absolute right-[30%] bottom-[30%]" duration={11} y={16} delay={0.5}>
        <IsoCubes className="h-20 w-24 text-cyprus-glow/20 md:h-28 md:w-32" />
      </Float>
      <Float className="absolute left-[55%] bottom-[18%] hidden md:block" duration={8} y={8}>
        <LockWireframe className="h-16 w-12 text-sand/12" />
      </Float>
      <ArrowBurst className="absolute bottom-[38%] right-[12%] h-10 w-10 text-accent-lime/20 md:h-12 md:w-12" />
      <TerminalCorners className="absolute left-[6%] bottom-[28%] h-24 w-24 text-sand/10 md:h-32 md:w-32" />
      <ScanRadar className="absolute -right-12 top-[18%] h-48 w-48 text-cyprus-glow/8 md:h-64 md:w-64" />

      <SiteVectorScatter variant="hero" />

      {/* Scan line */}
      {!reduce ? (
        <div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent-lime/25 to-transparent"
          style={{ animation: "scanline 7s linear infinite" }}
        />
      ) : null}

      {/* Vignette + bottom fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,var(--color-cyprus-deep)_100%)] opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-cyprus-deep via-cyprus-deep/90 to-transparent" />
      </div>
      <Y2KInteractiveField placement="hero" />
    </div>
  );
}
