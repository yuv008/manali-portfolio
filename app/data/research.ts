export interface ResearchEntry {
  title: string;
  org: string;
  date: string;
  description: string;
  tags: string[];
  featured?: boolean;
  link?: string;
}

export const research: ResearchEntry[] = [
  {
    title:
      "Food Insecurity & Glycemic Control in Adults with Type 2 Diabetes",
    org: "Boston University School of Public Health · Graduate Research Project",
    date: "Jun 2026 – Present",
    description:
      "Leading a PRISMA-guided systematic review and meta-analysis (PICO framework) quantifying the association between food insecurity and glycemic control in adults with Type 2 diabetes.",
    tags: ["Systematic Review", "PRISMA", "Meta-Analysis"],
    featured: true,
  },
  {
    title:
      "C-Reactive Protein as a Prognostic Indicator in Oral Pre-Malignant and Malignant Lesions",
    org: "Cureus Journal of Medical Science / PubMed Central · Co-Author",
    date: "2024",
    description:
      "Co-authored a peer-reviewed study identifying C-reactive protein as a prognostic biomarker for oral pre-malignant and malignant lesions.",
    tags: ["Publication", "PMID: 38910781"],
    link: "https://doi.org/10.7759/cureus.60812",
  },
  {
    title: "Orthodontic Biomarker Analysis",
    org: "Bharati Vidyapeeth Dental College and Hospital · Laboratory Research",
    date: "2024",
    description:
      "Ran ELISA-based biomarker analysis on orthodontic treatment GCF samples to benchmark comparative treatment outcomes.",
    tags: ["Laboratory Research", "ELISA", "Biomarkers"],
  },
];

export interface ProjectEntry {
  title: string;
  description: string;
  tags: string[];
}

export const selectedProjects: ProjectEntry[] = [
  {
    title: "Lean Six Sigma, BCH Urology",
    description:
      "Redesigned a call-center workflow using VSM, takt time, SIPOC and FMEA — projected to raise answer rates from 43.2% to 80% and cut abandonment from 17.1% to under 5%.",
    tags: ["Lean Six Sigma", "VSM", "FMEA", "SIPOC"],
  },
  {
    title: "Quantitative Epidemiology (CDC YRBS)",
    description:
      "Built a logistic regression model in R quantifying links between bullying, social determinants and youth suicide risk, pinpointing subgroups for targeted intervention and resource prioritization.",
    tags: ["R", "Logistic Regression", "CDC YRBS"],
  },
  {
    title: "Oral Health Survey (Primary Investigator)",
    description:
      "Designed and validated a survey instrument end-to-end, translating demographic patterns into a prioritized outreach strategy that closed key knowledge gaps.",
    tags: ["Survey Design", "Primary Investigator"],
  },
];
