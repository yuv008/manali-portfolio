"use client";

import ScrollReveal from "./ui/ScrollReveal";
import { GraduationCap, Award } from "lucide-react";

interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  specialization?: string;
  date: string;
  highlights: string[];
}

const EDUCATION: EducationEntry[] = [
  {
    school: "Boston University School of Public Health",
    location: "Boston, MA",
    degree: "Master of Public Health",
    specialization: "Epidemiology & Biostatistics, Program Management",
    date: "Anticipated May 2027",
    highlights: [
      "Merit Scholarship Recipient",
      "SPH Governing Council — Student Representative",
      "International Students Organization — Internal Vice President",
      "Global Health Student Organization — Treasurer",
    ],
  },
  {
    school: "Bharati Vidyapeeth Dental College and Hospital",
    location: "Pune, India",
    degree: "Bachelor of Dental Surgery (BDS)",
    date: "December 2024",
    highlights: ["Graduated with First Class with Subject Distinction"],
  },
];

const CERTIFICATIONS = [
  "CITI Program — Biomedical Researchers (2026–2029)",
  "BUMC HIPAA & Research Data Security (2026)",
  "AHA Basic Life Support (2024)",
];

function EducationCard({ entry }: { entry: EducationEntry }) {
  return (
    <div
      className="border border-gold/20 rounded-2xl p-8 h-full"
      style={{ backgroundColor: "#141414" }}
    >
      {/* Icon */}
      <GraduationCap size={32} className="text-gold" />

      {/* School name */}
      <h3 className="font-cormorant text-2xl text-cream mt-4 leading-snug">
        {entry.school}
      </h3>

      {/* Location */}
      <p className="font-dm-mono text-cream/40 text-sm mt-1">
        {entry.location}
      </p>

      {/* Degree */}
      <p className="text-cream/80 mt-3">{entry.degree}</p>

      {/* Specialization */}
      {entry.specialization && (
        <p className="text-cream/60 text-sm mt-1">{entry.specialization}</p>
      )}

      {/* Date */}
      <p className="font-dm-mono text-gold/60 text-sm mt-4">{entry.date}</p>

      {/* Highlights */}
      <ul className="mt-6 flex flex-col gap-2">
        {entry.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3">
            <span
              className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
              aria-hidden="true"
            />
            <span className="text-cream/60 text-sm leading-relaxed">
              {highlight}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="bg-navy py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <ScrollReveal delay={0}>
          <p className="font-dm-mono text-gold-muted text-sm tracking-[0.3em] uppercase mb-4">
            EDUCATION
          </p>
        </ScrollReveal>

        {/* Section heading */}
        <ScrollReveal delay={0.05}>
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-cream mb-16">
            Academic Background
          </h2>
        </ScrollReveal>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((entry, index) => (
            <ScrollReveal
              key={entry.school}
              delay={index === 0 ? 0 : 0.15}
              direction="up"
            >
              <EducationCard entry={entry} />
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications row */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-wrap gap-3 items-center">
            <Award size={16} className="text-gold/50 shrink-0" />
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="border border-cream/10 rounded-full px-4 py-2 font-dm-mono text-xs text-cream/40"
              >
                {cert}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
