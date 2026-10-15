export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-2xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
          Ma Wai Wai Phoo Kyaw
        </span>

        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#about" className="hover:text-pink-600 transition">Personal Info</a>
          <a href="#skills" className="hover:text-pink-600 transition">Skills</a>
          <a href="#projects" className="hover:text-pink-600 transition">Projects</a>
          <a href="#experience" className="hover:text-pink-600 transition">Work Experience</a>
        </nav>

        <a
          href="#contact"
          className="text-xs font-semibold px-4 py-1.5 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition shadow-xs"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}