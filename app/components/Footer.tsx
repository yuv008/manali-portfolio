const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-center">

        {/* Left — name */}
        <span className="font-cormorant text-xl text-cream/60">
          Manali Sanghai
        </span>

        {/* Center — nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6 flex-wrap justify-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-dm-mono text-xs text-cream/30 uppercase tracking-wider hover:text-cream/60 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — copyright */}
        <span className="font-dm-mono text-xs text-cream/30">
          &copy; 2026 Manali Sanghai
        </span>

      </div>
    </footer>
  );
}
