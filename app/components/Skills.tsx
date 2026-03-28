"use client";

import ScrollReveal from "./ui/ScrollReveal";
import Tag from "./ui/Tag";

interface SkillCategory {
  label: string;
  skills: string[];
  delay: number;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Data Analysis & Statistics",
    skills: [
      "R",
      "tidyverse",
      "ggplot2",
      "SAS",
      "SQL",
      "Excel",
      "PivotTables",
      "Logistic Regression",
      "Statistical Modeling",
    ],
    delay: 0,
  },
  {
    label: "Research Methods",
    skills: [
      "Survey Design",
      "Quantitative Research",
      "Program Evaluation",
      "Literature Review",
      "Biospecimen Management",
      "Research Protocol Compliance",
    ],
    delay: 0.1,
  },
  {
    label: "Data Visualization & Systems",
    skills: [
      "Tableau",
      "Microsoft Access",
      "Valant EHR",
      "Laboratory Data Management",
    ],
    delay: 0.2,
  },
  {
    label: "Public Health & Health Systems",
    skills: [
      "Healthcare Operations",
      "Lean Management",
      "Social Determinants of Health (SDoH)",
      "Health Disparities Analysis",
    ],
    delay: 0.3,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-navy py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            EXPERTISE
          </p>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-cream mb-16">
            Skills &amp; Proficiencies
          </h2>
        </ScrollReveal>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILL_CATEGORIES.map((category) => (
            <ScrollReveal key={category.label} delay={category.delay}>
              <div>
                <h3 className="font-dm-mono text-gold text-sm tracking-wider uppercase mb-4">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
