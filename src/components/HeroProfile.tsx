import { Sparkles, FolderGit2, Mail, Phone, MapPin, Calendar } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function HeroProfile() {
  return (
    <section className="fade-up bg-white rounded-2xl p-6 sm:p-8 border border-pink-100 shadow-[0_2px_12px_rgba(244,114,182,0.06)]">
      <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        
        {}
        <div className="shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-pink-50/80 border-2 border-pink-200 shadow-sm">
            <img
              src="/profile.jpg"
              alt="Ma Wai Wai Phoo Kyaw"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </div>

        
        <div className="space-y-2.5 text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-pink-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            CV For Internship
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Ma Wai Wai Phoo Kyaw
          </h1>
          <p className="text-sm text-slate-600 flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
            <span className="font-medium text-pink-600">Final Year Computer Science</span>
            <span>•</span>
            <span>University of Computer Studies (Meiktila)</span>
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-pink-500 hover:bg-pink-600 active:translate-y-0.5 transition shadow-[0_4px_12px_rgba(236,72,153,0.25)]"
            >
              <FolderGit2 className="w-4 h-4" />
              Project Experiences
            </a>
            <a
              href="https://github.com/waiwaiphookyaw1122-hue"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-pink-50/60 hover:bg-pink-100/70 border border-pink-200 transition"
            >
              <GithubIcon className="w-4 h-4 text-pink-600" />
              GitHub
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-6 pt-5 border-t border-pink-100/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
        <div className="flex items-center gap-2.5 text-slate-600">
          <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
            <Mail className="w-3.5 h-3.5" />
          </div>
          <span className="truncate">waiwaiphookyaw1122@gmail.com</span>
        </div>

        <div className="flex items-center gap-2.5 text-slate-600">
          <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
            <Phone className="w-3.5 h-3.5" />
          </div>
          <span>09-697202764, 09-683285228</span>
        </div>

        <div className="flex items-center gap-2.5 text-slate-600">
          <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
            <MapPin className="w-3.5 h-3.5" />
          </div>
          <span>Meiktila Township, Mandalay Devision</span>
        </div>

        <div className="flex items-center gap-2.5 text-slate-600">
          <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
            <Calendar className="w-3.5 h-3.5" />
          </div>
          <span>DOB: 28/02/2001</span>
        </div>
      </div>
    </section>
  );
}
