import type { Metadata } from "next";
import Research from "../components/sections/Research";

export const metadata: Metadata = {
  title: "Research — Manali Sanghai",
  description:
    "Systematic reviews, peer-reviewed publications, and Lean Six Sigma process improvement projects.",
};

export default function ResearchPage() {
  return <Research />;
}
