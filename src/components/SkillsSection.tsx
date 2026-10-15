import { Code2, Heart, CheckCircle2, Globe, Database, Wrench, FileSpreadsheet, Mail } from "lucide-react";

const technicalSkills = [
  {
    category: "Web Technologies",
    icon: Globe,
    items: ["HTML", "CSS", "Bootstrap", "JavaScript", "Basic Web Understanding"],
  },
  {
    category: "Programming Language",
    icon: Code2,
    items: ["PHP", "Python", "Basic Programming Knowledge"],
  },
  {
    category: "Database",
    icon: Database,
    items: ["MySQL"],
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Visual Studio Code", "PyCharm", "Git & GitHub"],
  },
  {
    category: "Microsoft Office",
    icon: FileSpreadsheet,
    items: ["Microsoft Word", "PowerPoint", "Basic Excel"],
  },
  {
    category: "Internet & Communication",
    icon: Mail,
    items: ["Internet Research", "Email Communication"],
  },
];

const softSkills = [
  "Team work",
  "Communication skill",
  "Problem solving skill",
  "Leadership",
  "Time Management",
  "Adaptability",
  "Quick Learner",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="fade-up bg-white rounded-2xl p-6 border border-pink-100 shadow-[0_2px_12px_rgba(244,114,182,0.04)]"
    >
      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
          <Code2 className="w-4 h-4" />
        </div>
        <h2 className="text-base font-bold text-slate-900">Technical Skill</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {technicalSkills.map((group) => {
          const IconComponent = group.icon;
          return (
            <div
              key={group.category}
              className="p-4 rounded-xl bg-[#fff9fb] border border-pink-100/90"
            >
              <div className="flex items-center gap-2 mb-3">
                <IconComponent className="w-3.5 h-3.5 text-pink-500" />
                <h3 className="text-xs font-bold text-slate-800">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white text-slate-700 border border-pink-100 shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-5 border-t border-pink-100">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-3.5 h-3.5 text-pink-500" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Soft Skills
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-pink-50/80 text-pink-700 border border-pink-200/60"
            >
              <CheckCircle2 className="w-3 h-3 text-pink-500" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}