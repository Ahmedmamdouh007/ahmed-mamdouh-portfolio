"use client";

import { navLinks, profile } from "@/data/profile";
import { cn, scrollToSection } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/layout/scroll-progress";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", "about", "workspace", "contact"];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href: string) => {
    scrollToSection(href.replace("#", ""));
    setOpen(false);
  };

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "safe-top fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
          scrolled || open
            ? "border-b border-border bg-[color-mix(in_oklch,var(--color-cyprus-deep)_88%,transparent)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-between gap-3 px-4 md:h-[4.5rem] md:gap-4 md:px-8">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="font-display text-lg tracking-tight text-sand md:text-xl"
          >
            {profile.name.split(" ")[0]}
            <span className="text-cyprus-glow">.</span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "relative px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                    isActive ? "text-sand" : "text-sand-muted hover:text-sand",
                  )}
                >
                  {link.label}
                  {isActive ? (
                    <span className="absolute inset-x-3 -bottom-px h-px bg-accent-lime" aria-hidden />
                  ) : null}
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="#contact" variant="primary" className="!px-5 !py-2.5 !text-xs">
              Hire Me
            </Button>
          </div>

          <button
            type="button"
            className="touch-target inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-sand lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          className={cn(
            "safe-bottom fixed inset-0 top-14 z-40 overflow-y-auto bg-cyprus-deep/96 backdrop-blur-xl transition-[opacity,visibility] duration-300 md:top-16 lg:hidden",
            open ? "visible opacity-100" : "invisible opacity-0",
          )}
        >
          <nav className="flex flex-col gap-2 p-4 pb-8 sm:p-6" aria-label="Mobile">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="touch-target rounded-xl border border-border px-5 py-4 text-left font-display text-xl text-sand transition-colors hover:border-sand/30 hover:bg-sand/5 sm:py-5 sm:text-2xl"
              >
                {link.label}
              </button>
            ))}
            <Button href="#contact" variant="primary" className="mt-4 w-full">
              Hire Me
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
}
