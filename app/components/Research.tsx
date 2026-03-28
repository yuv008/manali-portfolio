"use client";

import ScrollReveal from "./ui/ScrollReveal";
import BentoCard from "./ui/BentoCard";

// ---------------------------------------------------------------------------
// Static data
// ---------------------------------------------------------------------------

interface ResearchCard {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  link?: string;
  /** Tailwind col-span class applied on the grid wrapper, not inside BentoCard */
  colSpan: string;
  /** ScrollReveal stagger delay in seconds */
  delay: number;
}

const RESEARCH_CARDS: ResearchCard[] = [
  {
    title:
      "C-reactive Protein as a Prognostic Indicator in Oral Pre-malignant and Malignant Lesions",
    description:
      "Co-authored publication in The Cureus Journal of Medical Science and PubMed Central evaluating the role of CRP as a prognostic biomarker.",
    tags: ["Publication", "PMID: 38910781"],
    featured: true,
    link: "https://doi.org/10.7759/cureus.60812",
    colSpan: "md:col-span-2",
    delay: 0.1,
  },
  {
    title: "Oral Health Knowledge Study",
    description:
      "Designed and validated a survey instrument, conducted data collection, and analyzed demographic patterns to identify epidemiologically relevant knowledge gaps.",
    tags: ["Primary Investigator", "Survey Design", "Epidemiology"],
    colSpan: "md:col-span-1",
    delay: 0.2,
  },
  {
    title: "Orthodontic Biomarkers Research",
    description:
      "Conducted ELISA-based biomarker analysis to support comparative evaluation of orthodontic treatment outcomes.",
    tags: ["Laboratory Research", "ELISA", "Biomarkers"],
    colSpan: "md:col-span-1",
    delay: 0.3,
  },
  {
    title: "Youth Suicide Risk Analysis (CDC YRBS)",
    description:
      "Used logistic regression in R to analyze associations between bullying, social determinants, and youth suicide risk using CDC YRBS data.",
    tags: ["Quantitative Epidemiology", "R", "Logistic Regression"],
    colSpan: "md:col-span-1",
    delay: 0.35,
  },
  {
    title: "Childhood Malnutrition in India",
    description:
      "Applied the Social Ecological Model to diagnose systemic drivers and design multi-level intervention strategies for childhood malnutrition.",
    tags: ["Determinants & Strategies", "Social Ecological Model"],
    colSpan: "md:col-span-1",
    delay: 0.4,
  },
];

const AWARDS = [
  "1st Runner-Up — ISP West Zone Perio UG Convention 2024",
  "2nd Runner-Up — National Dental Science Update 2024",
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function Research() {
  return (
    <section
      id="research"
      className="bg-cream text-navy py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            RESEARCH
          </p>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-navy mb-16">
            Research &amp; Publications
          </h2>
        </ScrollReveal>

        {/*
          Asymmetric bento grid
          Desktop (md+): 3 columns
            Row 1 — Card 1 spans 2 cols, Card 2 spans 1 col
            Row 2 — Cards 3, 4, 5 each span 1 col
          Mobile: single column stack
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {RESEARCH_CARDS.map((card) => (
            <ScrollReveal
              key={card.title}
              delay={card.delay}
              className={card.colSpan}
            >
              <BentoCard
                title={card.title}
                description={card.description}
                tags={card.tags}
                featured={card.featured}
                link={card.link}
                /*
                 * bg-navy overrides the glass-card base so the cards remain
                 * visually distinct against the cream section background.
                 * BentoCard's internal text classes (text-cream, text-cream/70)
                 * already target light text, which reads correctly on navy.
                 */
                className="bg-navy h-full"
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Awards row */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-wrap gap-3">
            {AWARDS.map((award) => (
              <span
                key={award}
                className="inline-block border border-gold/30 text-gold-muted font-dm-mono text-xs px-4 py-2 rounded-full"
              >
                {award}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
