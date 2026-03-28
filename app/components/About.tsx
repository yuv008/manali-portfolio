"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats: {
  target: number;
  suffix: string;
  label: string;
}[] = [
  { target: 1000, suffix: "+", label: "Patients Treated" },
  { target: 500, suffix: "+", label: "Community Members Reached" },
  { target: 1, suffix: "", label: "Peer-Reviewed Publication" },
  { target: 5, suffix: "+", label: "Research Projects" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream text-navy py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            About
          </p>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-navy mb-6">
            Where Medicine
            <br />
            <span className="italic text-gold-muted">Meets Data</span>
          </h2>
        </ScrollReveal>

        {/* Pull quote */}
        <ScrollReveal delay={0.15}>
          <p className="font-dm-sans text-navy/50 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed">
            Bridging clinical practice and population health through
            rigorous epidemiologic research and data-driven insight.
          </p>
        </ScrollReveal>

        {/* Main content: Portrait + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20">
          {/* Portrait with decorative elements */}
          <ScrollReveal delay={0.2} direction="left" className="lg:col-span-5">
            <div className="relative">
              {/* Background decorative block */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gold/10 rounded-2xl" />

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/manali-portrait.jpeg"
                  alt="Manali Sanghai"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>

              {/* Floating credential badge */}
              <motion.div
                className="absolute -bottom-6 -right-4 md:right-4 bg-navy text-cream rounded-xl px-5 py-4 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="font-dm-mono text-gold text-xs uppercase tracking-wider mb-1">
                  Boston University
                </p>
                <p className="font-cormorant text-lg font-semibold">
                  MPH Candidate &apos;27
                </p>
                <p className="font-dm-mono text-cream/40 text-[10px] mt-1">
                  Merit Scholar
                </p>
              </motion.div>

              {/* Gold corner accents */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
            </div>
          </ScrollReveal>

          {/* Bio text */}
          <ScrollReveal delay={0.25} className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6">
              {/* Gold left border quote */}
              <div className="border-l-2 border-gold/40 pl-6">
                <p className="font-dm-sans text-navy/80 text-lg leading-relaxed">
                  My path into public health began at the chairside. After earning
                  my dental degree and building a clinical practice in India, I
                  spent years caring for patients one appointment at a time —
                  close enough to see how deeply social circumstance shapes oral
                  and systemic health. That proximity to suffering, and to the
                  structural gaps that sustain it, made epidemiology feel less
                  like a career pivot and more like an inevitability.
                </p>
              </div>

              <p className="font-dm-sans text-navy/70 text-lg leading-relaxed">
                I am now an MPH candidate at Boston University, concentrating
                in Epidemiology, Biostatistics, and Program Management. In the
                classroom and the lab I translate that clinical intuition into
                rigorous quantitative language — designing studies, working
                through survival models and regression frameworks in R and SAS,
                and measuring the reach of community health programs. The goal
                is the same as it always was: understand why populations get
                sick, and build the evidence that changes that.
              </p>

              {/* Key highlights inline */}
              <div className="flex flex-wrap gap-3 pt-2">
                {["R & SAS", "Epidemiology", "Biostatistics", "Clinical Research", "Program Management"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-dm-mono text-xs text-gold-muted border border-gold/20 rounded-full px-4 py-1.5 bg-gold/5"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row — full width */}
        <ScrollReveal delay={0.3}>
          <div className="bg-navy rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col gap-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                >
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    duration={2}
                  />
                  <span className="font-dm-mono text-cream/40 text-xs uppercase tracking-wider">
                    {stat.label}
                  </span>
                  {/* Divider line */}
                  <div className="w-8 h-px bg-gold/20 mx-auto" />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
