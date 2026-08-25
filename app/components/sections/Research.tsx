"use client";

import PageShell from "../ui/PageShell";
import PageHeader from "../ui/PageHeader";
import ScrollReveal from "../ui/ScrollReveal";
import BentoCard from "../ui/BentoCard";
import { research, selectedProjects } from "../../data/research";

export default function Research() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Research"
        title="Research &"
        titleAccent="Publications"
        lede="Systematic reviews, biomarker research, and operational projects translating data into evidence-based recommendations."
      />

      {/*
        Asymmetric bento grid
        Desktop (md+): 3 columns — first (featured) card spans 2, remaining span 1
        Mobile: single column stack
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {research.map((entry, i) => (
          <ScrollReveal
            key={entry.title}
            delay={0.1 + i * 0.1}
            className={entry.featured ? "md:col-span-2" : "md:col-span-1"}
          >
            <BentoCard
              title={entry.title}
              description={entry.description}
              tags={entry.tags}
              featured={entry.featured}
              link={entry.link}
              className="h-full"
            />
          </ScrollReveal>
        ))}
      </div>

      {/* Selected projects */}
      <ScrollReveal delay={0}>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-plum mb-8">
          Selected Projects
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedProjects.map((project, i) => (
          <ScrollReveal key={project.title} delay={0.05 + i * 0.08}>
            <BentoCard
              title={project.title}
              description={project.description}
              tags={project.tags}
              className="h-full"
            />
          </ScrollReveal>
        ))}
      </div>
    </PageShell>
  );
}
