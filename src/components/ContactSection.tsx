import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="fade-up bg-white rounded-2xl p-6 border border-pink-100 shadow-[0_2px_12px_rgba(244,114,182,0.04)] text-center space-y-4"
    >
      <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-pink-50 text-pink-500 mb-1">
        <Mail className="w-4 h-4" />
      </div>
      <h2 className="text-base font-bold text-slate-900">Get In Touch</h2>
      <p className="text-xs text-slate-500 max-w-md mx-auto">
        Feel free to reach out for internship opportunities and collaborations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
        <a
          href="mailto:waiwaiphookyaw1122@gmail.com"
          className="p-4 rounded-xl bg-[#fff9fb] border border-pink-100 hover:border-pink-300 transition"
        >
          <p className="text-slate-400 mb-1">Email</p>
          <p className="font-semibold text-pink-600 truncate">waiwaiphookyaw1122@gmail.com</p>
        </a>

        <div className="p-4 rounded-xl bg-[#fff9fb] border border-pink-100">
          <p className="text-slate-400 mb-1">Contact Numbers</p>
          <p className="font-semibold text-slate-700">09-697202764, 09-683285228</p>
        </div>

        <a
          href="https://github.com/waiwaiphookyaw1122-hue"
          target="_blank"
          rel="noreferrer"
          className="p-4 rounded-xl bg-[#fff9fb] border border-pink-100 hover:border-pink-300 transition"
        >
          <p className="text-slate-400 mb-1">GitHub</p>
          <p className="font-semibold text-pink-600">waiwaiphookyaw1122-hue</p>
        </a>
      </div>
    </section>
  );
}