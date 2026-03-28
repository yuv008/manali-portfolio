"use client";

import { motion } from "framer-motion";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <motion.span
      className={[
        "inline-block px-4 py-1.5 rounded-full text-sm",
        "font-dm-mono border border-gold/20 text-cream/80 bg-gold/5",
        "cursor-default select-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      whileHover={{
        boxShadow:
          "0 0 12px rgba(201, 168, 76, 0.35), 0 0 24px rgba(201, 168, 76, 0.15)",
        borderColor: "rgba(201, 168, 76, 0.5)",
        color: "rgba(245, 240, 232, 1)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
