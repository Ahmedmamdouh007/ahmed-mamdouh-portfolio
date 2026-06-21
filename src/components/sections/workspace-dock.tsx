"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Award, FolderKanban, Wrench } from "lucide-react";
import { SectionBackdrop, type BackdropVariant } from "@/components/graphics/section-backdrop";
import { Y2KInteractiveField } from "@/components/graphics/y2k-interactive-field";
import { SiteVectorScatter } from "@/components/graphics/site-vector-scatter";
import { CertificationsPanel } from "@/components/sections/panels/certifications-panel";
import { ProjectsPanel } from "@/components/sections/panels/projects-panel";
import { SkillsPanel } from "@/components/sections/panels/skills-panel";
import { cn } from "@/lib/utils";

export type WorkspaceTab = "projects" | "certifications" | "skills";

const tabs: {
  id: WorkspaceTab;
  label: string;
  short: string;
  icon: typeof FolderKanban;
  backdrop: BackdropVariant;
  blurb: string;
}[] = [
  {
    id: "projects",
    label: "Projects",
    short: "Projects",
    icon: FolderKanban,
    backdrop: "projects",
    blurb: "Swipe or use arrows — panel grows to show the full project.",
  },
  {
    id: "certifications",
    label: "Certifications",
    short: "Certs",
    icon: Award,
    backdrop: "certifications",
    blurb: "Each credential slide expands to fit all details.",
  },
  {
    id: "skills",
    label: "Skills",
    short: "Skills",
    icon: Wrench,
    backdrop: "skills",
    blurb: "Skill groups resize automatically — no clipped content.",
  },
];

export function WorkspaceDock() {
  const [active, setActive] = useState<WorkspaceTab>("projects");
  const reduce = useReducedMotion();
  const current = tabs.find((t) => t.id === active)!;

  const selectTab = useCallback((id: WorkspaceTab) => {
    setActive(id);
  }, []);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "projects" || hash === "certifications" || hash === "skills") {
        setActive(hash);
        requestAnimationFrame(() => {
          document.getElementById("workspace")?.scrollIntoView({ behavior: "smooth" });
        });
      }
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section
      id="workspace"
      className="section-pad relative scroll-mt-20 overflow-hidden border-t border-border/60 md:scroll-mt-24"
    >
      <SectionBackdrop variant={current.backdrop} />
      <SiteVectorScatter variant="workspace" />
      <Y2KInteractiveField placement="workspace" />

      <div className="container-wide relative z-10">
        <div className="mb-5 max-w-2xl">
          <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyprus-glow">
            Portfolio
          </p>
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-sand">
            One dock. Everything that matters.
          </h2>
          <p className="mt-2 text-sm text-sand-muted md:text-base">
            Select a category — the panel expands to fit everything inside.
          </p>
        </div>

        {/* Sticky tab bar */}
        <div className="sticky top-14 z-30 mb-3 md:top-[4.75rem] md:mb-4">
          <div
            className="rounded-xl border border-border bg-[color-mix(in_oklch,var(--color-cyprus-deep)_92%,transparent)] p-1 shadow-[0_16px_48px_color-mix(in_oklch,var(--color-ink)_35%,transparent)] backdrop-blur-xl sm:rounded-2xl sm:p-1.5"
            role="tablist"
            aria-label="Portfolio categories"
          >
            <div className="grid grid-cols-3 gap-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    aria-label={tab.label}
                    onClick={() => selectTab(tab.id)}
                    className={cn(
                      "relative flex flex-col items-center gap-0.5 rounded-lg px-1.5 py-2.5 transition-[color,background-color,box-shadow] duration-300 sm:flex-row sm:justify-center sm:gap-2 sm:rounded-xl sm:px-4 sm:py-3.5",
                      isActive
                        ? "bg-sand text-cyprus shadow-[0_0_24px_color-mix(in_oklch,var(--color-accent-lime)_20%,transparent)]"
                        : "text-sand-muted hover:bg-sand/5 hover:text-sand",
                    )}
                  >
                    <Icon size={16} aria-hidden className={isActive ? "text-cyprus" : undefined} />
                    <span className="font-display text-xs sm:text-sm">{tab.short}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content stage — height hugs active tab + slide */}
        <motion.div
          layout={!reduce}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="drench-sand overflow-hidden rounded-xl shadow-[0_32px_80px_color-mix(in_oklch,var(--color-ink)_25%,transparent)] sm:rounded-2xl"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          <div className="flex flex-col">
            <div className="shrink-0 border-b border-cyprus/15 px-4 py-2.5 md:px-6 md:py-3">
              <p className="font-display text-[10px] uppercase tracking-[0.2em] text-cyprus-glow">
                {current.label}
              </p>
              <p className="mt-1 text-xs text-cyprus/70 sm:text-sm">{current.blurb}</p>
            </div>

            <div className="relative">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={active}
                  layout={!reduce}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {active === "projects" && <ProjectsPanel />}
                  {active === "certifications" && <CertificationsPanel />}
                  {active === "skills" && <SkillsPanel />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
