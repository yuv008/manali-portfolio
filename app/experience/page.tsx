import type { Metadata } from "next";
import Experience from "../components/sections/Experience";

export const metadata: Metadata = {
  title: "Experience — Manali Sanghai",
  description:
    "Healthcare operations, research, and teaching experience across Boston Medical Center and Boston University School of Public Health.",
};

export default function ExperiencePage() {
  return <Experience />;
}
