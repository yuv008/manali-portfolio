"use client";

import ScrollReveal from "./ui/ScrollReveal";
import TimelineCard from "./ui/TimelineCard";

interface Experience {
  role: string;
  org: string;
  date: string;
  bullets: string[];
}

const EXPERIENCES: Experience[] = [
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
      "Elected representative for about 1,200 School of Public Health students on the institution's senior governance body",
      "Liaise between the Dean's Office and Student Senate, synthesizing student feedback and presenting priorities to senior leadership",
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
    <section
      id="experience"
      className="bg-navy py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            CAREER
          </p>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-cream mb-16">
            Experience
          </h2>
        </ScrollReveal>

        {/* Timeline container */}
        <div className="relative">
          {/* Center vertical line — visible on lg+ only */}
          <div
            className="absolute left-1/2 top-0 bottom-0 hidden lg:block w-px bg-gold/20 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map((exp, index) => {
              // Odd indices (0-based) sit on the left, even on the right at lg+
              const isLeft = index % 2 === 0;

              return (
                <ScrollReveal
                  key={exp.role}
                  delay={0.1 + index * 0.08}
                  direction={isLeft ? "left" : "right"}
                >
                  {/* Row: on mobile full-width; on lg+ half-width pushed to the correct side */}
                  <div
                    className={[
                      "relative flex",
                      isLeft
                        ? "lg:justify-start lg:pr-[calc(50%+0.5rem)]"
                        : "lg:justify-end lg:pl-[calc(50%+0.5rem)]",
                    ].join(" ")}
                  >
                    {/* Gold node dot on the center line — lg+ only */}
                    <span
                      className={[
                        "absolute top-6 hidden lg:block",
                        "h-3 w-3 rounded-full bg-gold ring-4 ring-navy",
                        "left-1/2 -translate-x-1/2",
                      ].join(" ")}
                      aria-hidden="true"
                    />

                    {/* Card */}
                    <div className="w-full lg:max-w-[calc(50%-0.75rem)]">
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
