import type { Metadata } from "next";
import About from "../components/sections/About";

export const metadata: Metadata = {
  title: "About — Manali Sanghai",
  description:
    "Clinician-turned-quantitative analyst pivoting from dentistry into data-driven healthcare strategy.",
};

export default function AboutPage() {
  return <About />;
}
