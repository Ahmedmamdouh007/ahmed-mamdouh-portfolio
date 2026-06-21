import { certifications } from "@/data/profile";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading, SectionShell } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import { ShieldGlyph } from "@/components/graphics/vectors";

export function CertificationsSection() {
  return (
    <SectionShell id="certifications" tinted wave backdrop="certifications">
      <SectionHeading
        index="03"
        eyebrow="Certifications"
        title="Industry-recognized security credentials"
        description="Professional certifications across offensive security, ethical hacking, and enterprise infrastructure."
        align="center"
        className="mx-auto max-w-3xl text-center"
      />

      <Stagger className="grid gap-5 md:grid-cols-2">
        {certifications.map((cert, i) => (
          <StaggerItem key={cert.id}>
            <article
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-[color-mix(in_oklch,var(--color-cyprus)_65%,var(--color-ink))] p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-sand/20 hover:shadow-glow md:p-8",
                i % 2 === 1 && "md:translate-y-6",
              )}
            >
              <div className="pointer-events-none absolute -right-6 -top-6 text-sand/5" aria-hidden>
                <ShieldGlyph className="h-32 w-32" />
              </div>
              <div className="relative z-10">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-cyprus-deep/80 text-accent-lime transition-transform duration-300 group-hover:scale-105">
                    <Award size={20} aria-hidden />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display text-xl leading-tight text-sand md:text-2xl">
                  {cert.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-muted">{cert.description}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </SectionShell>
  );
}
