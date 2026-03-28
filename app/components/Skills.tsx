"use client";

import { motion } from "framer-motion";
import { BarChart3, FlaskConical, Monitor, Heart } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import Tag from "./ui/Tag";

const SKILL_CATEGORIES = [
  {
    label: "Data Analysis & Statistics",
    icon: BarChart3,
    skills: [
      "R (tidyverse, ggplot2)",
      "SAS",
      "SQL",
      "Excel & PivotTables",
      "Logistic Regression",
      "Statistical Modeling",
    ],
    delay: 0.1,
  },
  {
    label: "Research Methods",
    icon: FlaskConical,
    skills: [
      "Survey Design",
      "Quantitative Research",
      "Program Management",
      "Literature Review",
      "Biospecimen Management",
      "Research Protocol Compliance",
    ],
    delay: 0.2,
  },
  {
    label: "Data Visualization & Systems",
    icon: Monitor,
    skills: [
      "Tableau",
      "Microsoft Access",
      "Valant EHR",
      "Laboratory Data Management",
    ],
    delay: 0.3,
  },
  {
    label: "Public Health & Health Systems",
    icon: Heart,
    skills: [
      "Healthcare Operations",
      "Lean Management",
      "Social Determinants of Health",
      "Health Disparities Analysis",
    ],
    delay: 0.4,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-navy py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            Expertise
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="font-cormorant text-4xl md:text-6xl lg:text-7xl font-light text-cream mb-6">
            Skills &amp;{" "}
            <span className="italic text-gold/80">Proficiencies</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p className="font-dm-sans text-cream/40 text-lg max-w-xl mb-16">
            A multidisciplinary toolkit spanning clinical research,
            statistical computing, and public health systems.
          </p>
        </ScrollReveal>

        {/* Category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((category, i) => (
            <ScrollReveal key={category.label} delay={category.delay}>
              <motion.div
                className="glass-card rounded-2xl p-8 h-full border border-transparent hover:border-gold/15 transition-colors duration-500 group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="rounded-xl bg-gold/10 p-3 group-hover:bg-gold/15 transition-colors duration-300">
                    <category.icon className="text-gold" size={22} />
                  </div>
                  <div>
                    <h3 className="font-dm-mono text-gold text-sm tracking-wider uppercase">
                      {category.label}
                    </h3>
                    <p className="font-dm-mono text-cream/20 text-xs mt-0.5">
                      {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-gold/20 via-gold/10 to-transparent mb-6" />

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
