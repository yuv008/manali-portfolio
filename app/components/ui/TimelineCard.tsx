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
      className="relative rounded-2xl p-7 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm overflow-hidden group"
      whileHover={{
        borderColor: "rgba(201, 168, 76, 0.2)",
        y: -2,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Date badge */}
      <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-3 py-1 mb-4">
        <Briefcase size={12} className="text-gold/60" />
        <span className="font-dm-mono text-gold/70 text-xs">{date}</span>
      </div>

      {/* Role */}
      <h3 className="font-cormorant text-2xl font-semibold text-cream leading-tight">
        {role}
      </h3>

      {/* Organisation */}
      <p className="mt-1.5 text-cream/50 text-sm font-dm-sans">
        {org}
      </p>

      {/* Divider */}
      <div className="h-px bg-white/[0.06] my-5" />

      {/* Bullet points */}
      {bullets.length > 0 && (
        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex gap-3 text-cream/60 text-sm font-dm-sans leading-relaxed"
            >
              <span
                className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold/50"
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
