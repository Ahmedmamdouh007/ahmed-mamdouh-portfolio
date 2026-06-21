"use client";

import { skillGroups } from "@/data/profile";
import { cn } from "@/lib/utils";
import {
  Code2,
  Network,
  Server,
  Shield,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { HorizontalCarousel } from "@/components/ui/horizontal-carousel";
import { motion, useReducedMotion } from "framer-motion";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  code: Code2,
  zap: Zap,
  network: Network,
  server: Server,
  users: Users,
};

type SkillGroup = (typeof skillGroups)[number];

function SkillSlide({ group, isActive, index }: { group: SkillGroup; isActive: boolean; index: number }) {
  const reduce = useReducedMotion();
  const Icon = iconMap[group.icon] ?? Shield;
  const isCyber = group.id === "cybersecurity";

  return (
    <motion.article
      initial={reduce || !isActive ? false : { opacity: 0, scale: 0.98 }}
      animate={isActive ? { opacity: 1 } : { opacity: 0.85 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col text-cyprus"
    >
      <div
        className={cn(
          "relative flex flex-col px-4 py-6 sm:px-8 sm:py-10 md:px-14 md:py-12",
          isCyber && "bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklch,var(--color-cyprus)_8%,transparent),transparent_55%)]",
        )}
      >
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col">
          <div className="mb-6 flex items-start justify-between gap-4">
            <span
              className={cn(
                "inline-flex h-14 w-14 items-center justify-center rounded-xl border border-cyprus/15 bg-white/60 text-cyprus-glow shadow-sm",
                isCyber && "text-cyprus-glow",
              )}
            >
              <Icon size={26} aria-hidden />
            </span>
            <span className="font-display text-sm uppercase tracking-[0.24em] text-cyprus/50">
              {String(index + 1).padStart(2, "0")} · {group.skills.length} skills
            </span>
          </div>

          <p className="mb-3 font-display text-[10px] uppercase tracking-[0.22em] text-cyprus-glow">
            Skill Group
          </p>
          <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight text-cyprus">
            {group.title}
          </h3>

          {"description" in group && group.description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-cyprus/70 md:text-lg">
              {group.description}
            </p>
          ) : null}

          <ul className="mt-8 flex flex-wrap content-start gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-pill border border-cyprus/15 bg-white/60 px-3 py-1.5 font-display text-[11px] text-cyprus md:text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>

          {"note" in group && group.note ? (
            <p className="mt-8 rounded-xl border border-cyprus/15 bg-cyprus/5 p-5 text-sm leading-relaxed text-cyprus/70">
              {group.note}
            </p>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function SkillsPanel() {
  return (
    <HorizontalCarousel
      items={skillGroups}
      getKey={(group) => group.id}
      getLabel={(group) => group.title}
      prevLabel="Previous skill group"
      nextLabel="Next skill group"
      dotLabel={(group) => `Go to ${group.title}`}
      renderSlide={(group, isActive, index) => (
        <SkillSlide group={group} isActive={isActive} index={index} />
      )}
    />
  );
}
