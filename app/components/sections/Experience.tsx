"use client";

import { motion } from "framer-motion";
import PageShell from "../ui/PageShell";
import PageHeader from "../ui/PageHeader";
import ScrollReveal from "../ui/ScrollReveal";
import Tag from "../ui/Tag";
import TimelineCard from "../ui/TimelineCard";
import { experience } from "../../data/experience";
import { skillCategories } from "../../data/skills";

export default function Experience() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Career"
        title="Professional"
        titleAccent="Experience"
        lede="From clinical care in India to healthcare operations and epidemiologic research at Boston University — a trajectory shaped by purpose."
      />

      {/* Timeline */}
      <div className="relative mb-28">
        <div
          className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rose/40 via-rose/15 to-transparent lg:-translate-x-px"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-10">
          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <ScrollReveal
                key={exp.role}
                delay={0.1 + index * 0.06}
                direction={isLeft ? "left" : "right"}
              >
                <div
                  className={[
                    "relative flex",
                    "pl-12 lg:pl-0",
                    isLeft
                      ? "lg:justify-start lg:pr-[calc(50%+1.5rem)]"
                      : "lg:justify-end lg:pl-[calc(50%+1.5rem)]",
                  ].join(" ")}
                >
                  {/* Timeline node — mobile */}
                  <motion.span
                    className="absolute left-4 top-7 lg:hidden -translate-x-1/2 h-3 w-3 rounded-full bg-rose ring-[3px] ring-ivory"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.06, type: "spring" }}
                    aria-hidden="true"
                  />

                  {/* Timeline node — desktop */}
                  <motion.span
                    className="absolute top-7 hidden lg:block left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-rose ring-[3px] ring-ivory"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + index * 0.06, type: "spring" }}
                    aria-hidden="true"
                  />

                  {/* Connector line — desktop only */}
                  <div
                    className={[
                      "hidden lg:block absolute top-[1.95rem] h-px w-5 bg-rose/25",
                      isLeft ? "right-[calc(50%-0.5rem)]" : "left-[calc(50%-0.5rem)]",
                    ].join(" ")}
                    aria-hidden="true"
                  />

                  <div className="w-full lg:max-w-[calc(50%-2rem)]">
                    <TimelineCard
                      role={exp.role}
                      org={exp.org}
                      date={exp.date}
                      bullets={exp.bullets}
                      isLeft={isLeft}
                    />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Skills matrix */}
      <ScrollReveal delay={0}>
        <h2 className="font-cormorant text-3xl md:text-4xl font-light text-plum mb-8">
          Skills &amp; Proficiencies
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, i) => (
          <ScrollReveal key={category.label} delay={0.05 + i * 0.08}>
            <motion.div
              className="soft-card rounded-2xl p-8 h-full group"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-rose/10 p-3 group-hover:bg-rose/15 transition-colors duration-300">
                  <category.icon className="text-rose-deep" size={22} />
                </div>
                <div>
                  <h3 className="font-dm-mono text-rose-deep text-sm tracking-wider uppercase">
                    {category.label}
                  </h3>
                  <p className="font-dm-mono text-plum-muted/60 text-xs mt-0.5">
                    {category.skills.length} skills
                  </p>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-rose/25 via-rose/10 to-transparent mb-6" />

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </PageShell>
  );
}
