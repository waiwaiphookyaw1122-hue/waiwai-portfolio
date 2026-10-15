import { Briefcase } from "lucide-react";

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="fade-up bg-white rounded-2xl p-6 border border-pink-100 shadow-[0_2px_12px_rgba(244,114,182,0.04)]"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
          <Briefcase className="w-4 h-4" />
        </div>
        <h2 className="text-base font-bold text-slate-900">Work Experiences</h2>
      </div>

      <div className="p-4 sm:p-5 rounded-xl bg-[#fff9fb] border border-pink-100">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-sm font-bold text-slate-900">
            Unique Purified Water Factory - Cashier
          </h3>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700">
            Cashier
          </span>
        </div>

        <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside leading-relaxed">
          <li>
            Managed daily accounting tasks, maintained records, and supported Received and
            processed customer orders through phone communication[cite: 5]
          </li>
          <li>
            Handled customer inquiries and complaints professionally, providing appropriate
            solutions to ensure customer satisfaction.[cite: 5]
          </li>
          <li>
            Developed strong communication, problem-solving, and customer service skills through
            daily interactions with customers[cite: 5]
          </li>
        </ul>
      </div>
    </section>
  );
}