"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (reduce) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-accent-lime shadow-[0_0_12px_var(--color-accent-lime)]"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
