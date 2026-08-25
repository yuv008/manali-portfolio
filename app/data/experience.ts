export interface ExperienceEntry {
  role: string;
  org: string;
  date: string;
  location?: string;
  bullets: string[];
}

// Transcribed verbatim from MANALI_RESUME.pdf. Two entries ("Sept 2026–Present",
// "Aug 2026–Present") are dated at/after the resume's own timeline — kept as-is
// pending confirmation from Manali rather than silently corrected.
export const experience: ExperienceEntry[] = [
  {
    role: "Financial Navigator Intern",
    org: "StreetCred at Boston Medical Center",
    date: "Jul 2026 – Present",
    location: "Boston, MA",
    bullets: [
      "Deployed a benefits-navigation model (SNAP, WIC, PFML, 529 CSA) for BMC's Pediatric Clinic caseload, directly improving household financial stability and reducing downstream utilization of costlier emergency safety-net services.",
      "Standardized EPIC documentation across 240+ practicum hours, closing data-quality gaps that had limited leadership's ability to evaluate program performance.",
    ],
  },
  {
    role: "Graduate Research Assistant",
    org: "Boston University School of Public Health",
    date: "April 2026 – Present",
    location: "Boston, MA",
    bullets: [
      "Own full operational governance of a 1,000+-specimen biorepository for an NIH-funded multi-site study, sustaining 100% protocol compliance with zero data-integrity incidents to date.",
      "Re-engineered lab-to-analysis data workflows, cutting manual prep time and shortening the pipeline from raw sample to analysis-ready dataset for the research team.",
    ],
  },
  {
    role: "Graduate Teaching Assistant, ICPH PH720 (Health Systems, Law & Policy)",
    org: "Boston University School of Public Health",
    date: "Sept 2026 – Present",
    location: "Boston, MA",
    bullets: [
      "Own end-to-end support for 20–25 students — grading, office hours, and course logistics — as primary point of contact, partnering directly with faculty on course delivery.",
    ],
  },
  {
    role: "Graduate Core Course Tutor (TA)",
    org: "Boston University School of Public Health",
    date: "Aug 2026 – Present",
    location: "Boston, MA",
    bullets: [
      "Run weekly review sessions on statistical and epidemiologic methods for 10+ graduate students, directly improving course outcomes in partnership with faculty.",
    ],
  },
  {
    role: "Graduate Office Assistant",
    org: "The Albert & Jessie Danielsen Institute, Boston University",
    date: "Jan 2026 – Aug 2026",
    location: "Boston, MA",
    bullets: [
      "Redesigned intake and scheduling workflows supporting 50+ weekly patient visits, eliminating recurring administrative bottlenecks and lifting clinic throughput.",
      "Built and maintained a structured reporting process across 200+ monthly visits (Access, Excel, Valant EHR), surfacing patient-access gaps that informed operational decisions.",
    ],
  },
  {
    role: "Dental Intern",
    org: "Bharati Vidyapeeth Dental College and Hospital",
    date: "Jan 2024 – Dec 2024",
    location: "Pune, India",
    bullets: [
      "Delivered clinical care to 1,000+ patients in a high-volume, multidisciplinary hospital while managing competing priorities under tight time and resource constraints.",
      "Designed and led a preventive-care outreach initiative reaching 500+ individuals, lifting patient engagement by 60%+.",
    ],
  },
];
