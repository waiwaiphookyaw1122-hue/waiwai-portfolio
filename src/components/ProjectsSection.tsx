import { FolderGit2, ArrowUpRight, ShieldAlert, Laptop, PackageSearch, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Skincare Shop System",
    icon: ShoppingBag,
    description: "Developed a web-based shop to manage skincare products and orders",
    features: ["product listing", "cart", "checkout", "user login"],
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
  },
  {
    title: "Smishing Simulation",
    icon: ShieldAlert,
    description: "Simulated phishing SMS attacks for security awareness",
    features: ["Phishing SMS simulation", "Security awareness"],
    tech: ["Python", "Flask", "HTML/CSS"],
  },
  {
    title: "Laptop Shop System",
    icon: Laptop,
    description: "Developed a web-based shop to manage laptop products and orders",
    features: ["product listing", "cart", "checkout", "user login"],
    tech: ["J2EE", "JavaScript", "HTML/CSS", "MySQL"],
  },
  {
    title: "Inventory Management System",
    icon: PackageSearch,
    description:
      "Developed a software application to manage inventory records and track stock levels, generate sales reports",
    features: ["stock tracking", "item categorization", "reporting", "user login"],
    tech: ["C#", ".NET", "SQL Server"],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="fade-up space-y-4">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-pink-100/80 text-pink-600 flex items-center justify-center">
            <FolderGit2 className="w-4 h-4" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Project Experiences</h2>
        </div>
        <span className="text-xs text-slate-400">{projects.length} Projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj) => {
          const ProjIcon = proj.icon;
          return (
            <div
              key={proj.title}
              className="bg-white rounded-2xl p-5 border border-pink-100 hover:border-pink-300 transition-all shadow-[0_2px_10px_rgba(244,114,182,0.04)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                      <ProjIcon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">{proj.title}</h3>
                  </div>

                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="text-[11px] font-medium text-pink-600 hover:text-pink-700 inline-flex items-center gap-0.5 shrink-0 cursor-pointer"
                  >
                    Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  {proj.description}
                </p>

                <div className="mb-4">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                    Features:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-[#fff9fb] text-slate-600 border border-pink-100"
                      >
                        • {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-pink-50 flex flex-wrap gap-1.5">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            transition-style="in:circle:center"
            className="bg-white border border-pink-200 rounded-2xl p-6 max-w-md w-full shadow-xl"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-slate-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mb-4">
              <p className="text-[11px] font-bold text-slate-400 uppercase mb-1.5">Features</p>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-2.5 py-1 rounded-lg bg-pink-50/60 text-slate-700 border border-pink-100"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-5">
              <p className="text-[11px] font-bold text-slate-400 uppercase mb-1.5">
                Technologies Used
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-100 text-pink-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="w-full py-2 rounded-xl bg-pink-500 hover:bg-pink-600 text-white font-semibold text-xs transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}