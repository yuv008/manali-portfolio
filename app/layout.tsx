import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manali Sanghai — MPH Candidate & Epidemiologist",
  description:
    "MPH candidate at Boston University specializing in Epidemiology, Biostatistics, and Program Management, with clinical training as a dentist.",
  openGraph: {
    title: "Manali Sanghai — MPH Candidate & Epidemiologist",
    description:
      "MPH candidate at Boston University specializing in Epidemiology, Biostatistics, and Program Management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="font-dm-sans antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
