import { GraduationCap, Award, Languages } from "lucide-react";

export default function AboutEducation() {
  return (
    <section id="about" className="fade-up grid grid-cols-1 md:grid-cols-12 gap-6">
      <div className="md:col-span-5 bg-white rounded-2xl p-6 border border-pink-100 shadow-[0_2px_12px_rgba(244,114,182,0.04)] flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900">Education & Personal Info</h2>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between py-1.5 border-b border-pink-50">
              <span className="text-slate-400">Name</span>
              <span className="font-semibold text-slate-800">Ma Wai Wai Phoo Kyaw</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-pink-50">
              <span className="text-slate-400">Date of Birth</span>
              <span className="font-medium text-slate-700">28/02/2001</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-pink-50">
              <span className="text-slate-400">Year</span>
              <span className="font-medium text-slate-700">Final Year</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-pink-50">
              <span className="text-slate-400">Major</span>
              <span className="font-medium text-pink-600">Computer Science</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-pink-50">
              <span className="text-slate-400">University</span>
              <span className="font-medium text-slate-700 text-right">
                University of Computer Studies (Meiktila)
              </span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-slate-400">Graduction Expectations</span>
              <span className="font-semibold text-pink-600">2027</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-7 bg-white rounded-2xl p-6 border border-pink-100 shadow-[0_2px_12px_rgba(244,114,182,0.04)] flex flex-col justify-between space-y-5">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900">
              Certificates and Qualifications
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-[#fff9fb] border border-pink-100">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-bold text-pink-600">Pearson LCCI Certificate</span>
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700">
                Merit
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mb-2">
              Pearson LCCI Level 2 Certificate in Bookkeeping and Accounting (VRQ)
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
              <span>Qualification No. 601/5166/3</span>
              <span>•</span>
              <span>Exam Date: 06 JUL 2022</span>
              <span>•</span>
              <span>Issued Date: 27 SEP 2022</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-500 flex items-center justify-center">
              <Languages className="w-3.5 h-3.5" />
            </div>
            <h3 className="text-sm font-bold text-slate-900">Language Skills</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="px-3.5 py-2.5 rounded-xl bg-[#fff9fb] border border-pink-100 flex items-center justify-between">
              <span className="font-semibold text-slate-800">Burmese</span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-pink-50 text-pink-600 font-medium">
                native
              </span>
            </div>
            <div className="px-3.5 py-2.5 rounded-xl bg-[#fff9fb] border border-pink-100 flex items-center justify-between">
              <span className="font-semibold text-slate-800">English</span>
              <span className="text-[11px] px-2 py-0.5 rounded-md bg-pink-50 text-pink-600 font-medium">
                Intermediate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}