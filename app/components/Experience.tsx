"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";
import TimelineCard from "./ui/TimelineCard";

interface ExperienceEntry {
  role: string;
  org: string;
  date: string;
  bullets: string[];
}

const EXPERIENCES: ExperienceEntry[] = [
  {
    role: "Graduate Research Assistant",
    org: "Boston University School of Public Health",
    date: "Starting April 2026",
    bullets: [
      "Lead biospecimen repository operations for an NIH-funded epidemiologic study, overseeing end-to-end tracking, storage, and shipment of high-volume sample inventories (1000+ specimens)",
      "Translate laboratory processes into structured research data by maintaining specimen-linked datasets and supporting analysis-ready data pipelines for epidemiologic studies on kidney disease",
    ],
  },
  {
    role: "Graduate Office Assistant",
    org: "The Albert & Jessie Danielsen Institute, Boston University",
    date: "Jan 2026 – Present",
    bullets: [
      "Manage operational workflows for 50+ weekly mental health patient visits, coordinating scheduling and care logistics",
      "Maintain structured clinical datasets using Microsoft Access, Excel, and Valant EHR, enabling accurate operational reporting",
    ],
  },
  {
    role: "Student Representative",
    org: "SPH Governing Council, Boston University",
    date: "Jan 2026 – Present",
    bullets: [
      "Elected representative for about 1,200 School of Public Health students on the institution\u2019s senior governance body",
      "Liaise between the Dean\u2019s Office and Student Senate, synthesizing student feedback and presenting priorities to senior leadership",
    ],
  },
  {
    role: "Dental Intern",
    org: "Bharati Vidyapeeth Dental College and Hospital",
    date: "Jan 2024 – Dec 2024",
    bullets: [
      "Delivered clinical care to 1,000+ patients across pediatric and geriatric populations in a high-volume multidisciplinary healthcare setting",
      "Led preventive counseling and community oral health outreach programs reaching 500+ individuals",
    ],
  },
  {
    role: "Community Health Intern",
    org: "Help Social Welfare Society",
    date: "Oct 2023",
    bullets: [
      "Supported menstrual health education programs across 5+ community outreach sessions, reaching 200+ adolescent girls",
      "Contributed to fundraising efforts for Project Udaan, helping raise $500+ and develop digital outreach materials",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-navy py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            Career
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-cream mb-6">
            Professional{" "}
            <span className="italic text-gold/80">Experience</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="font-dm-sans text-cream/40 text-lg max-w-xl mb-16">
            From clinical care in India to epidemiologic research at Boston
            University — a trajectory shaped by purpose.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/30 via-gold/15 to-transparent lg:-translate-x-px"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {EXPERIENCES.map((exp, index) => {
              const isLeft = index % 2 === 0;

              return (
                <ScrollReveal
                  key={exp.role}
                  delay={0.1 + index * 0.08}
                  direction={isLeft ? "left" : "right"}
                >
                  <div
                    className={[
                      "relative flex",
                      "pl-12 lg:pl-0",
                      isLeft
                        ? "lg:justify-start lg:pr-[calc(50%+1.5rem)]"
                        : "lg:justify-end lg:pl-[calc(50%+1.5rem)]",
                    ].join(" ")}
                  >
                    {/* Timeline node — mobile (left-aligned) */}
                    <motion.span
                      className="absolute left-4 top-7 lg:hidden -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-[3px] ring-navy"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2 + index * 0.08, type: "spring" }}
                      aria-hidden="true"
                    />

                    {/* Timeline node — desktop (centered) */}
                    <motion.span
                      className="absolute top-7 hidden lg:block left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-[3px] ring-navy"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.2 + index * 0.08, type: "spring" }}
                      aria-hidden="true"
                    />

                    {/* Connector line from dot to card — desktop only */}
                    <div
                      className={[
                        "hidden lg:block absolute top-[1.95rem] h-px w-5 bg-gold/20",
                        isLeft ? "right-[calc(50%-0.5rem)]" : "left-[calc(50%-0.5rem)]",
                      ].join(" ")}
                      aria-hidden="true"
                    />

                    {/* Card */}
                    <div className="w-full lg:max-w-[calc(50%-2rem)]">
                      <TimelineCard
                        role={exp.role}
                        org={exp.org}
                        date={exp.date}
                        bullets={exp.bullets}
                        isLeft={isLeft}
                      />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
