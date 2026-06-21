import { profile, timeline } from "@/data/profile";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading, SectionShell } from "@/components/ui/section";
import { DataFlowLines } from "@/components/graphics/vectors";
import { Y2KInteractiveField } from "@/components/graphics/y2k-interactive-field";

export function AboutSection() {
  return (
    <SectionShell id="about" tinted backdrop="about" scatter="about">
      <Y2KInteractiveField placement="about" />
      <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div>
          <SectionHeading
            index="01"
            eyebrow="About"
            title="Security-minded engineer with a builder's mindset"
            description="Combining offensive security knowledge with backend development and automation."
            className="!mb-5"
          />
          <Reveal>
            <div className="space-y-3 text-sm text-sand-muted md:text-base">
              {profile.about.slice(0, 4).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <DataFlowLines className="pointer-events-none absolute -right-8 -top-4 h-24 w-40 text-cyprus-glow/20" aria-hidden />
          <Stagger className="space-y-0">
            {timeline.map((item, index) => (
              <StaggerItem key={item.title}>
                <div className="relative border-l border-border pl-5 pb-6 last:pb-0">
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent-lime shadow-[0_0_12px_var(--color-accent-lime)]" />
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyprus-glow">
                    {item.year}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg text-sand md:text-xl">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-sand-muted">{item.description}</p>
                  {index < timeline.length - 1 ? (
                    <div className="mt-3 h-px w-full bg-border" />
                  ) : null}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </SectionShell>
  );
}
