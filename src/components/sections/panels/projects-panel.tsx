"use client";

import { projects } from "@/data/profile";
import { PipelineDiagram } from "@/components/graphics/vectors";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { Layers, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

type Project = (typeof projects)[number];

function ProjectSlide({ project, isActive }: { project: Project; isActive: boolean }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce || !isActive ? false : { opacity: 0, scale: 0.98 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0.85 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col text-cyprus"
    >
      {project.featured ? (
        <div className="grid shrink-0 border-b border-cyprus/15 lg:grid-cols-2">
          <div className="flex flex-col justify-center border-b border-cyprus/15 p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-pill border border-cyprus/20 bg-cyprus/5 px-3 py-1 font-display text-[10px] uppercase tracking-[0.18em] text-cyprus-glow">
              <ShieldCheck size={12} aria-hidden />
              Flagship
            </p>
            <h3 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-none text-cyprus">
              {project.name}
            </h3>
            <p className="mt-2 font-display text-xs text-cyprus-glow md:text-sm">{project.subtitle}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cyprus/70 md:text-base">
              {project.overview}
            </p>
          </div>
          <div className="flex items-center justify-center bg-white/60 p-6 md:p-8">
            <PipelineDiagram className="h-auto w-full max-w-md text-cyprus-glow" />
          </div>
        </div>
      ) : (
        <div className="shrink-0 border-b border-cyprus/15 p-6 md:p-8">
          <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] text-cyprus">{project.name}</h3>
          <p className="mt-2 font-display text-xs text-cyprus-glow md:text-sm">{project.subtitle}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cyprus/70 md:text-base">
            {project.overview}
          </p>
        </div>
      )}

      <div className="px-4 pb-6 pt-4 sm:px-6 sm:pb-8 sm:pt-5 md:px-8 md:pb-10 md:pt-6">
        {"role" in project && project.role ? (
          <span className="inline-flex rounded-pill border border-cyprus/15 bg-white/60 px-3 py-1 font-display text-[10px] text-cyprus/70">
            {project.role}
          </span>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-pill border border-cyprus/15 bg-white/60 px-3 py-1 font-display text-[10px] text-cyprus"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.features.length > 0 ? (
            <div>
              <h4 className="mb-3 flex items-center gap-2 font-display text-lg text-cyprus">
                <Layers size={16} aria-hidden />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-sm text-cyprus/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyprus-glow" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.responsibilities.length > 0 ? (
            <div>
              <h4 className="mb-3 font-display text-lg text-cyprus">Responsibilities</h4>
              <ul className="space-y-2">
                {project.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-cyprus/70">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyprus" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {project.architecture.length > 0 ? (
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {project.architecture.map((line) => (
              <li
                key={line}
                className="rounded-lg border border-cyprus/15 bg-white/60 px-4 py-3 text-sm text-cyprus/70"
              >
                {line}
              </li>
            ))}
          </ul>
        ) : null}

        {project.outcome ? (
          <p className="mt-6 rounded-xl border border-cyprus/15 bg-cyprus/5 p-5 text-sm leading-relaxed text-cyprus/70">
            {project.outcome}
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}

export function ProjectsPanel() {
  return (
    <HorizontalCarousel
      items={projects}
      getKey={(project) => project.id}
      getLabel={(project) => project.name}
      prevLabel="Previous project"
      nextLabel="Next project"
      dotLabel={(project) => `Go to ${project.name}`}
      renderSlide={(project, isActive) => (
        <ProjectSlide project={project} isActive={isActive} />
      )}
    />
  );
}
