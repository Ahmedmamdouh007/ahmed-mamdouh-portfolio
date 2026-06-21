import { skillGroups } from "@/data/profile";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading, SectionShell } from "@/components/ui/section";
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

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  code: Code2,
  zap: Zap,
  network: Network,
  server: Server,
  users: Users,
};

const bentoSpans: Record<string, string> = {
  cybersecurity: "md:col-span-2",
  python: "md:row-span-1",
  automation: "md:col-span-2 lg:col-span-1",
  networking: "",
  os: "",
  professional: "md:col-span-2 lg:col-span-1",
};

export function SkillsSection() {
  return (
    <SectionShell id="skills" wave backdrop="skills">
      <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="Technical depth across security, backend, and automation"
          description="Grouped capabilities from penetration testing to Python automation pipelines."
        />
        <p className="hidden font-mono text-xs leading-relaxed text-sand-dim lg:block">
          {"// Development approach: security, performance, maintainability, clean architecture"}
        </p>
      </div>

      <Stagger className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon] ?? Shield;
          const span = bentoSpans[group.id] ?? "";
          return (
            <StaggerItem key={group.id} className={span}>
              <article
                className={cn(
                  "group relative h-full overflow-hidden rounded-xl border border-border bg-[color-mix(in_oklch,var(--color-cyprus)_68%,var(--color-ink))] p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-sand/20 hover:shadow-glow",
                  group.id === "cybersecurity" && "ring-glow",
                )}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyprus-glow/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-0"
                  aria-hidden
                />
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-cyprus-deep/80 text-cyprus-glow transition-[color,transform] duration-300 group-hover:scale-105 group-hover:text-accent-lime">
                        <Icon size={18} aria-hidden />
                      </span>
                      <h3 className="font-display text-lg text-sand md:text-xl">{group.title}</h3>
                    </div>
                    <span className="font-mono text-[10px] text-sand-dim">
                      {group.skills.length}
                    </span>
                  </div>
                  {"description" in group && group.description ? (
                    <p className="mb-4 text-sm leading-relaxed text-sand-muted">
                      {group.description}
                    </p>
                  ) : null}
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-pill border border-border bg-cyprus-deep/50 px-2.5 py-1 font-mono text-[10px] text-sand-muted transition-[border-color,color] duration-200 group-hover:border-sand/15 group-hover:text-sand"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  {"note" in group && group.note ? (
                    <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-sand-dim">
                      {group.note}
                    </p>
                  ) : null}
                </div>
              </article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
