import type { Metadata } from "next";
import Contact from "../components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Manali Sanghai",
  description: "Get in touch with Manali Sanghai.",
};

export default function ContactPage() {
  return <Contact />;
}
