import { profile } from "@/data/profile";
import { Mail, Terminal } from "lucide-react";
import { HeroBackground } from "@/components/graphics/hero-background";
import { HeroCyberTerminal } from "@/components/graphics/hero-cyber-terminal";
import { HeadingReveal } from "@/components/motion/heading-reveal";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const highlights = [
  { label: "Certs", value: "4" },
  { label: "Focus", value: "Penetration Testing" },
  { label: "Base", value: "Cairo" },
] as const;

export function HeroSection() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <section
      id="hero"
      className="relative scroll-mt-0 overflow-hidden pt-14 md:pt-16 y2k-neon-wash"
    >
      <HeroBackground />
      <div className="section-pad-hero relative z-10 w-full">
        <div className="container-wide grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="order-2 lg:order-1">
            <Reveal>
              <div className="mb-4 flex max-w-full flex-wrap items-center gap-2 rounded-pill border border-border bg-cyprus/40 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-sand-muted backdrop-blur-sm sm:mb-5 sm:gap-3 sm:px-4 sm:text-[10px] sm:tracking-[0.2em]">
                <Terminal size={12} className="text-accent-lime" aria-hidden />
                <span>{profile.location}</span>
                <span className="text-border-strong">|</span>
                <span className="text-cyprus-glow">status: available</span>
              </div>
            </Reveal>

            <HeadingReveal>
              <h1 className="font-display text-sand">
                <span className="block">{firstName}</span>
                <span className="mt-1 block text-[color-mix(in_oklch,var(--color-sand)_55%,var(--color-cyprus-glow))]">
                  {lastName}
                </span>
              </h1>
            </HeadingReveal>

            <Reveal delay={0.12}>
              <p className="mt-4 max-w-2xl font-display text-[clamp(1.05rem,2.2vw,1.45rem)] leading-snug text-sand-muted">
                {profile.shortTitle}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-4 max-w-xl border-l-2 border-accent-lime/40 pl-5 text-base leading-relaxed text-sand-dim md:text-lg">
                {profile.intro}
              </p>
            </Reveal>

            <Reveal delay={0.24} className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center">
              <Button href="#workspace" variant="primary" className="w-full sm:w-auto">
                View Projects
              </Button>
              <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
                <Mail size={16} aria-hidden />
                Get in Touch
              </Button>
            </Reveal>

            <Reveal delay={0.3} className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-3 sm:gap-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border bg-cyprus/30 px-3 py-2.5 backdrop-blur-sm transition-colors hover:border-sand/20 sm:px-4 sm:py-3"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-sand-dim sm:text-[10px] sm:tracking-[0.18em]">
                    {item.label}
                  </p>
                  <p className="mt-1 font-display text-[clamp(0.72rem,3.2vw,1.2rem)] leading-tight text-sand">
                    {item.value}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.16} className="relative order-1 flex justify-center lg:order-2">
            <HeroCyberTerminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
