"use client";

import { certifications } from "@/data/profile";
import { Award } from "lucide-react";
import { ShieldGlyph } from "@/components/graphics/vectors";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { motion, useReducedMotion } from "framer-motion";

type Cert = (typeof certifications)[number];

function CertificationSlide({ cert, isActive, index }: { cert: Cert; isActive: boolean; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce || !isActive ? false : { opacity: 0, scale: 0.98 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0.85 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col text-cyprus"
    >
      <div className="relative flex flex-col justify-center px-4 py-6 sm:px-8 sm:py-10 md:px-14 md:py-12">
        <div className="pointer-events-none absolute -right-6 top-8 text-cyprus/[0.06]" aria-hidden>
          <ShieldGlyph className="h-48 w-48 md:h-64 md:w-64" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-2xl">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-cyprus/15 bg-white/60 text-cyprus-glow shadow-sm">
              <Award size={26} aria-hidden />
            </span>
            <span className="font-display text-sm uppercase tracking-[0.24em] text-cyprus/50">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="mb-3 font-display text-[10px] uppercase tracking-[0.22em] text-cyprus-glow">
            Certification
          </p>
          <h3 className="font-display text-[clamp(1.5rem,4vw,2.5rem)] leading-tight text-cyprus">
            {cert.name}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-cyprus/70 md:text-lg">
            {cert.description}
          </p>

          <div className="mt-8 inline-flex rounded-pill border border-cyprus/20 bg-cyprus/5 px-4 py-2 font-display text-[10px] uppercase tracking-[0.16em] text-cyprus-glow">
            Industry Recognized
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function CertificationsPanel() {
  return (
    <HorizontalCarousel
      items={certifications}
      getKey={(cert) => cert.id}
      getLabel={(cert) => cert.name}
      prevLabel="Previous certification"
      nextLabel="Next certification"
      dotLabel={(cert) => `Go to ${cert.name}`}
      renderSlide={(cert, isActive, index) => (
        <CertificationSlide cert={cert} isActive={isActive} index={index} />
      )}
    />
  );
}
