"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/80 backdrop-blur-xl border-b border-plum/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="font-cormorant text-3xl font-bold text-rose-deep tracking-wide">
          MS
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-dm-mono text-sm transition-colors duration-300 tracking-wider uppercase ${
                  isActive ? "text-rose-deep" : "text-plum-muted hover:text-rose-deep"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-mono text-sm text-ivory bg-rose-deep hover:bg-rose-deep/90 px-5 py-2 rounded transition-colors duration-300 tracking-wider uppercase"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-plum/80 hover:text-rose-deep transition-colors"
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
            className="md:hidden bg-ivory/95 backdrop-blur-xl border-t border-plum/5"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-dm-mono text-sm transition-colors duration-300 tracking-wider uppercase ${
                      isActive ? "text-rose-deep" : "text-plum-muted hover:text-rose-deep"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={profile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-mono text-sm text-ivory bg-rose-deep hover:bg-rose-deep/90 px-5 py-2 rounded transition-colors duration-300 tracking-wider uppercase"
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
