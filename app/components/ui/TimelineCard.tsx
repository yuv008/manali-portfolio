"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface TimelineCardProps {
  role: string;
  org: string;
  date: string;
  bullets: string[];
  isLeft?: boolean;
}

export default function TimelineCard({
  role,
  org,
  date,
  bullets,
}: TimelineCardProps) {
  return (
    <motion.div
      className="soft-card relative rounded-2xl p-7 overflow-hidden group"
      whileHover={{
        borderColor: "rgba(168, 95, 95, 0.3)",
        y: -2,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Top rose accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Date badge */}
      <div className="inline-flex items-center gap-2 bg-rose/10 rounded-full px-3 py-1 mb-4">
        <Briefcase size={12} className="text-rose-deep/70" />
        <span className="font-dm-mono text-rose-deep/80 text-xs">{date}</span>
      </div>

      {/* Role */}
      <h3 className="font-cormorant text-2xl font-semibold text-plum leading-tight">
        {role}
      </h3>

      {/* Organisation */}
      <p className="mt-1.5 text-plum-muted text-sm font-dm-sans">
        {org}
      </p>

      {/* Divider */}
      <div className="h-px bg-plum/[0.06] my-5" />

      {/* Bullet points */}
      {bullets.length > 0 && (
        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex gap-3 text-plum-muted text-sm font-dm-sans leading-relaxed"
            >
              <span
                className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-rose"
                aria-hidden="true"
              />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}
