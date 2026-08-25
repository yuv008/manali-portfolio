"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { profile, highlightStats } from "../../data/profile";
import AnimatedCounter from "../ui/AnimatedCounter";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const underlineVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.7, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const highlightTiles = [
  {
    title: "Healthcare Operations",
    description:
      "Lean Six Sigma process redesign across clinical and research operations at Boston Medical Center and BUSPH.",
  },
  {
    title: "Epidemiologic Research",
    description:
      "PRISMA-guided systematic reviews, biorepository governance, and a peer-reviewed publication in Cureus.",
  },
  {
    title: "Data-Driven Strategy",
    description:
      "R, SAS, and SQL translated into resource-conscious recommendations for healthcare and life sciences teams.",
  },
];

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="mesh-gradient relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      >
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Display name */}
          <motion.div variants={fadeUpVariants}>
            <h1
              className={[
                "font-cormorant",
                "text-[14vw] md:text-[10vw] lg:text-[10vw]",
                "text-plum",
                "font-light",
                "leading-none",
                "tracking-tight",
              ].join(" ")}
            >
              {profile.name}
            </h1>

            <motion.div
              className="mt-3 h-[2px] w-full bg-rose"
              variants={underlineVariants}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="font-dm-mono mt-6 text-sm md:text-base text-plum-muted tracking-widest uppercase"
            variants={fadeUpVariants}
          >
            {profile.subtitle}
          </motion.p>

          {/* Summary lede */}
          <motion.p
            className="font-dm-sans mt-8 max-w-2xl text-plum/70 text-base md:text-lg leading-relaxed"
            variants={fadeUpVariants}
          >
            {profile.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            variants={fadeUpVariants}
          >
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 bg-rose-deep text-ivory font-dm-mono text-sm uppercase tracking-wider px-6 py-3 rounded hover:bg-rose-deep/90 transition-colors duration-300"
            >
              View Experience
              <ArrowRight size={16} />
            </Link>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-rose/40 text-plum font-dm-mono text-sm uppercase tracking-wider px-6 py-3 rounded hover:border-rose-deep hover:text-rose-deep transition-colors duration-300"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Highlight tiles */}
      <section className="bg-ivory px-6 md:px-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightTiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              className="soft-card rounded-2xl p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
            >
              <h3 className="font-cormorant text-2xl text-plum mb-3">
                {tile.title}
              </h3>
              <p className="text-plum-muted text-sm leading-relaxed">
                {tile.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="max-w-7xl mx-auto mt-6">
          <div className="bg-blush rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {highlightStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col gap-3 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                >
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} duration={2} />
                  <span className="font-dm-mono text-plum-muted text-xs uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="w-8 h-px bg-rose/30 mx-auto" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
