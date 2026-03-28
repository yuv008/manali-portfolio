"use client";

import { motion } from "framer-motion";
import { HandHeart } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function Volunteer() {
  return (
    <section className="bg-cream text-navy py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            Giving Back
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-navy mb-16">
            Volunteer{" "}
            <span className="italic text-gold-muted">Experience</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <motion.div
            className="relative border border-gold/20 rounded-2xl p-8 md:p-10 bg-white/50 overflow-hidden group"
            whileHover={{ borderColor: "rgba(201, 168, 76, 0.4)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Top gold accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="rounded-xl bg-gold/10 p-4 shrink-0 self-start">
                <HandHeart className="text-gold" size={28} />
              </div>

              <div className="flex-1">
                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-navy">
                      Rotaract Club of Medicrew
                    </h3>
                    <p className="text-navy/60 text-sm font-dm-sans mt-1">
                      General Body Member · ID: MEDI-24-0526
                    </p>
                  </div>
                  <span className="font-dm-mono text-gold-muted text-sm shrink-0">
                    June 2023 – June 2025
                  </span>
                </div>

                {/* Divider */}
                <div className="h-px bg-gold/15 mb-4" />

                {/* Description */}
                <p className="text-navy/70 text-sm font-dm-sans leading-relaxed">
                  Organized dental screening camps to improve oral health access
                  and awareness among underserved communities.
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
