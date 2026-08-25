"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Direction = "up" | "left" | "right";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
}

function getInitialOffset(direction: Direction): { x?: number; y?: number } {
  switch (direction) {
    case "left":
      return { x: -40 };
    case "right":
      return { x: 40 };
    case "up":
    default:
      return { y: 40 };
  }
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const offset = getInitialOffset(direction);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...offset }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
