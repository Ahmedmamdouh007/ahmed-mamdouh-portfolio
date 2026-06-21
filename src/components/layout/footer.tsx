"use client";

import { profile } from "@/data/profile";
import { navLinks } from "@/data/profile";
import { SiteVectorScatter } from "@/components/graphics/site-vector-scatter";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="safe-bottom relative overflow-hidden border-t border-border bg-cyprus-deep px-4 py-8 sm:px-5 md:px-8">
      <SiteVectorScatter variant="footer" />
      <div className="container-wide relative z-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl text-sand">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm text-sand-dim">{profile.shortTitle}</p>
        </div>
        <nav className="flex flex-wrap gap-4" aria-label="Footer">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => scrollToSection(link.href.replace("#", ""))}
              className="font-mono text-xs uppercase tracking-[0.14em] text-sand-muted transition-colors hover:text-sand"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="container-wide relative z-10 mt-6 border-t border-border pt-5">
        <p className="font-mono text-xs text-sand-dim">
          © {year} {profile.name}. {profile.location}.
        </p>
      </div>
    </footer>
  );
}
