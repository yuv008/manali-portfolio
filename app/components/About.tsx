"use client";

import ScrollReveal from "./ui/ScrollReveal";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats: {
  target: number;
  suffix: string;
  label: string;
}[] = [
  { target: 1000, suffix: "+", label: "Patients Treated" },
  { target: 500, suffix: "+", label: "Community Members Reached" },
  { target: 2, suffix: "", label: "Peer-Reviewed Publications" },
  { target: 5, suffix: "+", label: "Research Projects" },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream text-navy py-24 md:py-32 px-6 md:px-12"
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
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-navy mb-16">
            Where Medicine Meets Data
          </h2>
        </ScrollReveal>

        {/* Two-column body */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — editorial bio */}
          <ScrollReveal delay={0.2} direction="left">
            <div className="space-y-6 font-dm-sans text-navy/80 text-lg leading-relaxed">
              <p>
                My path into public health began at the chairside. After earning
                my dental degree and building a clinical practice in India, I
                spent years caring for patients one appointment at a time —
                close enough to see how deeply social circumstance shapes oral
                and systemic health. That proximity to suffering, and to the
                structural gaps that sustain it, made epidemiology feel less
                like a career pivot and more like an inevitability.
              </p>
              <p>
                I am now an MPH candidate at Boston University, concentrating
                in Epidemiology, Biostatistics, and Program Management. In the
                classroom and the lab I translate that clinical intuition into
                rigorous quantitative language — designing studies, working
                through survival models and regression frameworks in R and SAS,
                and measuring the reach of community health programs. The goal
                is the same as it always was: understand why populations get
                sick, and build the evidence that changes that.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — stats card */}
          <ScrollReveal delay={0.3} direction="right">
            <div className="bg-navy rounded-2xl p-8 md:p-10">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-2">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                      duration={2}
                    />
                    <span className="font-dm-mono text-cream/50 text-xs uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
