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
        "font-dm-mono border border-rose/25 text-plum-muted bg-rose/5",
        "cursor-default select-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      whileHover={{
        boxShadow:
          "0 0 12px rgba(201, 139, 139, 0.25), 0 0 24px rgba(201, 139, 139, 0.12)",
        borderColor: "rgba(168, 95, 95, 0.5)",
        color: "rgba(61, 50, 56, 1)",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.span>
  );
}
