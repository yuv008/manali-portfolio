"use client";

import { motion } from "framer-motion";

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
  isLeft = false,
}: TimelineCardProps) {
  return (
    <motion.div
      className={[
        "glass-card rounded-xl p-6",
        "relative w-full",
        isLeft ? "text-left" : "text-left",
      ].join(" ")}
      whileHover={{
        scale: 1.02,
        boxShadow:
          "0 0 24px rgba(201, 168, 76, 0.12), 0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {/* Role */}
      <h3 className="font-cormorant text-xl font-semibold text-gold leading-tight">
        {role}
      </h3>

      {/* Organisation */}
      <p className="mt-1 text-cream/90 text-sm font-dm-sans font-medium">
        {org}
      </p>

      {/* Date */}
      <p className="mt-1 font-dm-mono text-gold/60 text-sm">{date}</p>

      {/* Bullet points */}
      {bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex gap-2 text-cream/70 text-sm font-dm-sans leading-relaxed"
            >
              {/* Decorative gold dot */}
              <span
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50"
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
