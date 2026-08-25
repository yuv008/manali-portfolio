import type { LucideIcon } from "lucide-react";
import { Workflow, LineChart, FlaskConical, Database } from "lucide-react";

export interface SkillCategory {
  label: string;
  icon: LucideIcon;
  skills: string[];
}

// Mirrors the four categories on MANALI_RESUME.pdf exactly.
export const skillCategories: SkillCategory[] = [
  {
    label: "Operations & PM",
    icon: Workflow,
    skills: [
      "Lean Six Sigma (VSM, FMEA, SIPOC)",
      "Program Implementation",
      "Healthcare Delivery",
      "Cross-Functional Coordination",
      "Agile / Scrum / Waterfall",
    ],
  },
  {
    label: "Data & Statistics",
    icon: LineChart,
    skills: [
      "R (tidyverse, ggplot2)",
      "SAS",
      "SQL",
      "Excel (Pivot Tables, Regression)",
      "Logistic Regression",
      "Statistical Modeling",
    ],
  },
  {
    label: "Research Methods",
    icon: FlaskConical,
    skills: [
      "Systematic Review & Meta-Analysis (PRISMA, PICO)",
      "Survey Design",
      "Program Evaluation",
      "Biospecimen Management",
    ],
  },
  {
    label: "Systems",
    icon: Database,
    skills: ["EPIC", "Valant EHR", "Microsoft Access", "REDCap", "Tableau", "Research Data Pipelines"],
  },
];
