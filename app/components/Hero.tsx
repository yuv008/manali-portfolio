"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ─── Animation variants ───────────────────────────────────────────────────────

/**
 * Staggered container: each direct child inherits a 0.2 s delay between
 * entrances. `once: true` ensures the sequence only fires on the first
 * intersection — no re-plays on scroll-back.
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

/**
 * Shared fade-up variant reused by the name, subtitle, and scroll indicator.
 * Duration is kept at 0.8 s so it feels unhurried against large display text.
 */
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const underlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  return (
    <section
      id="hero"
      className="mesh-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* ── Main content stack ─────────────────────────────────────────────── */}
      <motion.div
        className="flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── Display name ─────────────────────────────────────────────────── */}
        <motion.div variants={fadeUpVariants}>
          <h1
            className={[
              "font-cormorant",
              "text-[14vw] md:text-[10vw] lg:text-[10vw]",
              "text-cream",
              "font-light",
              "leading-none",
              "tracking-tight",
            ].join(" ")}
          >
            Manali Sanghai
          </h1>

          {/* ── Animated gold underline ──────────────────────────────────── */}
          <motion.div
            className="mt-3 h-[2px] w-full bg-gold"
            variants={underlineVariants}
            // viewport is unused here because the parent uses animate,
            // but kept for consistency if you ever switch to whileInView.
          />
        </motion.div>

        {/* ── Subtitle ─────────────────────────────────────────────────────── */}
        <motion.p
          className={[
            "font-dm-mono",
            "mt-6",
            "text-sm md:text-base",
            "text-cream/50",
            "tracking-widest",
            "uppercase",
          ].join(" ")}
          variants={fadeUpVariants}
        >
          MPH Candidate&nbsp;&nbsp;·&nbsp;&nbsp;Epidemiologist&nbsp;&nbsp;·&nbsp;&nbsp;Doctor of Dental Surgery
        </motion.p>

        {/* ── Scroll indicator ─────────────────────────────────────────────── */}
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          className="mt-16 flex flex-col items-center gap-1 text-gold/40 hover:text-gold/70 transition-colors duration-300"
          variants={fadeUpVariants}
        >
          {/* Continuous bounce independent of entrance animation */}
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={28} strokeWidth={1.5} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
