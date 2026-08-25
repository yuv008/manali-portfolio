export interface EducationEntry {
  school: string;
  location: string;
  degree: string;
  specialization?: string;
  date: string;
  highlights: string[];
}

export const education: EducationEntry[] = [
  {
    school: "Boston University School of Public Health",
    location: "Boston, MA",
    degree: "Master of Public Health",
    specialization: "Epidemiology & Biostatistics, Program Management",
    date: "Anticipated May 2027",
    highlights: [
      "Coursework: Health Systems, Law & Policy; Health Program Management; Lean Management in Healthcare; Data to Dashboards",
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

export interface LeadershipEntry {
  role: string;
  org: string;
  date?: string;
  description: string;
}

export const leadership: LeadershipEntry[] = [
  {
    role: "Student Representative",
    org: "SPH Governing Council, Boston University",
    date: "Jan 2026 – Present",
    description:
      "Elected to represent 1,200+ School of Public Health students on the school's senior governance body, directly shaping academic policy and resource-allocation decisions.",
  },
  {
    role: "President",
    org: "International Students Organization",
    description:
      "Leads a 10-member board driving policy and programming advocacy for the international student population.",
  },
  {
    role: "International Student Representative",
    org: "BU Student Senate",
    description:
      "Represents international student interests within the university's broader student governance body.",
  },
];

export const awards: string[] = [
  "1st Runner-Up, Poster Presentation — ISP West Zone Perio UG Convention (2024)",
  "2nd Runner-Up, Poster Presentation — National Dental Science Update (2024)",
];

export const certifications: string[] = [
  "Lean Six Sigma Green Belt, BUSPH (2026)",
  "Google Project Management (in progress)",
  "CITI Biomedical Research (2026–2029)",
  "BUMC HIPAA & Research Data Security (2026)",
  "AHA Basic Life Support (2024)",
  "Lab Safety, Biosafety, Chemical & Bloodborne Pathogens, SciShield (2026–2027)",
];
