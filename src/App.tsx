import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { User } from "lucide-react";

import Navbar from "./components/Navbar";
import HeroProfile from "./components/HeroProfile";
import AboutEducation from "./components/AboutEducation";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import WorkExperience from "./components/WorkExperience";
import ContactSection from "./components/ContactSection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".fade-up", {
        y: 18,
        opacity: 0,
        duration: 0.55,
        stagger: 0.08,
        ease: "power2.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#fff9fb] text-slate-700 selection:bg-pink-200 selection:text-pink-900"
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        <HeroProfile />
        <AboutEducation />
        <SkillsSection />
        <ProjectsSection />
        <WorkExperience />
        <ContactSection />
      </main>

      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-6 border-t border-pink-100 text-center text-xs text-slate-400">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-pink-400" /> Ma Wai Wai Phoo Kyaw
          </span>
          <span>•</span>
          <a
            href="https://github.com/waiwaiphookyaw1122-hue"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-600 transition"
          >
            github.com/waiwaiphookyaw1122-hue
          </a>
        </div>
      </footer>
    </div>
  );
}