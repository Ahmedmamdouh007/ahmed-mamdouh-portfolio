"use client";

import { projects } from "@/data/profile";
import { PipelineDiagram } from "@/components/graphics/vectors";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading, SectionShell } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { ChevronDown, Layers, ShieldCheck } from "lucide-react";
import { useState } from "react";

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const [expanded, setExpanded] = useState(project.featured);

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border transition-[border-color,box-shadow] duration-300",
        project.featured
          ? "border-sand/20 bg-[color-mix(in_oklch,var(--color-cyprus)_50%,var(--color-ink))] shadow-glow"
          : "border-border surface-panel",
      )}
    >
      {project.featured ? (
        <div className="grid border-b border-border lg:grid-cols-2">
          <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="mb-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent-lime">
              <ShieldCheck size={14} aria-hidden />
              Flagship Project
            </p>
            <h3 className="font-display text-3xl text-sand md:text-4xl">{project.name}</h3>
            <p className="mt-2 font-mono text-sm text-cyprus-glow">{project.subtitle}</p>
            <p className="mt-5 text-sand-muted">{project.overview}</p>
          </div>
          <div className="flex items-center justify-center bg-cyprus-deep/40 p-6 text-cyprus-glow md:p-8">
            <PipelineDiagram className="h-auto w-full max-w-md" />
          </div>
        </div>
      ) : null}

      <div className={cn("p-6 md:p-8", project.featured && "pt-6")}>
        {!project.featured ? (
          <>
            <h3 className="font-display text-2xl text-sand md:text-3xl">{project.name}</h3>
            <p className="mt-1 font-mono text-sm text-cyprus-glow">{project.subtitle}</p>
            <p className="mt-5 max-w-3xl text-sand-muted">{project.overview}</p>
          </>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-4">
            {"role" in project && project.role ? (
              <span className="rounded-pill border border-border px-3 py-1.5 font-mono text-[11px] text-sand-muted">
                {project.role}
              </span>
            ) : null}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-pill border border-border bg-cyprus-deep/60 px-3 py-1 font-mono text-[11px] text-sand"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-sand-muted transition-colors hover:text-sand active:scale-[0.98]"
          aria-expanded={expanded}
        >
          {expanded ? "Hide details" : "View details"}
          <ChevronDown
            size={14}
            className={cn("transition-transform duration-300", expanded && "rotate-180")}
            aria-hidden
          />
        </button>
      </div>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-6 pb-6 pt-2 md:px-8 md:pb-8">
            <div className="grid gap-6 md:grid-cols-2">
              {project.features.length > 0 ? (
                <div>
                  <h4 className="mb-3 flex items-center gap-2 font-display text-lg text-sand">
                    <Layers size={16} aria-hidden />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2 text-sm text-sand-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-lime" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.responsibilities.length > 0 ? (
                <div>
                  <h4 className="mb-3 font-display text-lg text-sand">Responsibilities</h4>
                  <ul className="space-y-2">
                    {project.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-sand-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyprus-glow" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            {project.architecture.length > 0 ? (
              <div className="mt-6">
                <h4 className="mb-3 font-display text-lg text-sand">Architecture Highlights</h4>
                <ul className="grid gap-2 md:grid-cols-2">
                  {project.architecture.map((line) => (
                    <li
                      key={line}
                      className="rounded-lg border border-border bg-cyprus-deep/40 px-4 py-3 text-sm text-sand-muted"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {project.outcome ? (
              <div className="mt-6 rounded-xl border border-sand/15 bg-sand/5 p-5">
                <p className="text-sm leading-relaxed text-sand-muted">{project.outcome}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <SectionShell id="projects" tinted backdrop="projects">
      <SectionHeading
        index="04"
        eyebrow="Projects"
        title="Security platforms and automation systems"
        description="BugBuster leads as the graduation flagship — automated vulnerability assessment at production scale."
        align="center"
        className="mx-auto max-w-3xl text-center"
      />

      <Stagger className="space-y-6">
        {projects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
