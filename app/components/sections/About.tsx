"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import PageShell from "../ui/PageShell";
import PageHeader from "../ui/PageHeader";
import ScrollReveal from "../ui/ScrollReveal";
import { profile } from "../../data/profile";
import { education, leadership, awards, certifications } from "../../data/education";

export default function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About"
        title="Where Medicine"
        titleAccent="Meets Data"
        lede="Bridging clinical practice and population health through rigorous epidemiologic research and data-driven strategy."
      />

      {/* Portrait + bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
        <ScrollReveal delay={0.15} direction="left" className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-rose/10 rounded-2xl" />
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/manali-portrait.jpeg"
                alt="Manali Sanghai"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum/20 via-transparent to-transparent" />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-4 md:right-4 bg-plum text-ivory rounded-xl px-5 py-4 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="font-dm-mono text-rose text-xs uppercase tracking-wider mb-1">
                Boston University
              </p>
              <p className="font-cormorant text-lg font-semibold">
                MPH Candidate &apos;27
              </p>
            </motion.div>

            <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-rose/40 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-rose/40 rounded-br-lg" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="lg:col-span-7 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="border-l-2 border-rose/40 pl-6">
              <p className="font-dm-sans text-plum/90 text-lg leading-relaxed">
                My path into public health began at the chairside. After earning
                my dental degree and building a clinical practice in India, I
                spent years caring for patients one appointment at a time —
                close enough to see how deeply social circumstance shapes oral
                and systemic health. That proximity to suffering, and to the
                structural gaps that sustain it, made epidemiology feel less
                like a career pivot and more like an inevitability.
              </p>
            </div>

            <p className="font-dm-sans text-plum-muted text-lg leading-relaxed">
              {profile.summary}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Lean Six Sigma", "Epidemiology", "R & SAS", "Program Management", "Healthcare Operations"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-dm-mono text-xs text-rose-deep border border-rose/25 rounded-full px-4 py-1.5 bg-rose/5"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Education */}
      <ScrollReveal delay={0}>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-plum mb-8">
          Academic Background
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {education.map((entry, index) => (
          <ScrollReveal key={entry.school} delay={index === 0 ? 0.05 : 0.15}>
            <div className="soft-card rounded-2xl p-8 h-full">
              <GraduationCap size={32} className="text-rose-deep" />
              <h3 className="font-cormorant text-2xl text-plum mt-4 leading-snug">
                {entry.school}
              </h3>
              <p className="font-dm-mono text-plum-muted text-sm mt-1">
                {entry.location}
              </p>
              <p className="text-plum/80 mt-3">{entry.degree}</p>
              {entry.specialization && (
                <p className="text-plum-muted text-sm mt-1">{entry.specialization}</p>
              )}
              <p className="font-dm-mono text-rose-deep text-sm mt-4">{entry.date}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-rose"
                      aria-hidden="true"
                    />
                    <span className="text-plum-muted text-sm leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Leadership */}
      <ScrollReveal delay={0}>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-plum mb-8">
          Leadership
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {leadership.map((entry, index) => (
          <ScrollReveal key={entry.role} delay={0.05 + index * 0.08}>
            <div className="soft-card rounded-2xl p-7 h-full">
              <h3 className="font-cormorant text-xl text-plum leading-snug">
                {entry.role}
              </h3>
              <p className="font-dm-mono text-rose-deep text-xs uppercase tracking-wider mt-1.5">
                {entry.org}
              </p>
              {entry.date && (
                <p className="font-dm-mono text-plum-muted text-xs mt-1">{entry.date}</p>
              )}
              <p className="text-plum-muted text-sm leading-relaxed mt-4">
                {entry.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Awards & certifications */}
      <ScrollReveal delay={0}>
        <div className="flex flex-wrap gap-3 mb-6">
          {awards.map((award) => (
            <span
              key={award}
              className="inline-block border border-rose/30 text-rose-deep font-dm-mono text-xs px-4 py-2 rounded-full"
            >
              {award}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="flex flex-wrap gap-3 items-center">
          <Award size={16} className="text-rose/60 shrink-0" />
          {certifications.map((cert) => (
            <span
              key={cert}
              className="border border-plum/10 rounded-full px-4 py-2 font-dm-mono text-xs text-plum-muted"
            >
              {cert}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </PageShell>
  );
}
