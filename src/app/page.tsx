import dynamic from "next/dynamic";
import { Navigation } from "@/components/layout/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WorkspaceDock } from "@/components/sections/workspace-dock";

const ContactSection = dynamic(() =>
  import("@/components/sections/contact").then((m) => m.ContactSection),
);
const Footer = dynamic(() => import("@/components/layout/footer").then((m) => m.Footer));
const GrainOverlay = dynamic(() =>
  import("@/components/graphics/grain-overlay").then((m) => m.GrainOverlay),
);

export default function HomePage() {
  return (
    <>
      <GrainOverlay />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkspaceDock />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
