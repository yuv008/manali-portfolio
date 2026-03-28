"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="font-cormorant text-3xl font-bold text-gold tracking-wide">
          MS
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-dm-mono text-sm text-cream/60 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/SANGHAI_MANALI_PRACTICUM_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-mono text-sm text-navy bg-gold hover:bg-gold/90 px-5 py-2 rounded transition-colors duration-300 tracking-wider uppercase"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream/80 hover:text-gold transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-navy/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-dm-mono text-sm text-cream/60 hover:text-gold transition-colors duration-300 tracking-wider uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/SANGHAI_MANALI_PRACTICUM_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-mono text-sm text-navy bg-gold hover:bg-gold/90 px-5 py-2 rounded transition-colors duration-300 tracking-wider uppercase"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
