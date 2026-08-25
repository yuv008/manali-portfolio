import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ivory border-t border-plum/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:justify-between md:items-center">

        {/* Left — name */}
        <span className="font-cormorant text-xl text-plum-muted">
          Manali Sanghai
        </span>

        {/* Center — nav links */}
        <nav aria-label="Footer navigation">
          <ul className="flex gap-6 flex-wrap justify-center">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-dm-mono text-xs text-plum-muted/70 uppercase tracking-wider hover:text-rose-deep transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right — copyright */}
        <span className="font-dm-mono text-xs text-plum-muted/70">
          &copy; 2026 Manali Sanghai
        </span>

      </div>
    </footer>
  );
}
