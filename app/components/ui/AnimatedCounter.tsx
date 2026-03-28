"use client";

import { useEffect, useRef } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
  motion,
} from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Raw motion value that tracks the numeric progress
  const motionValue = useMotionValue(0);

  // Transform the raw number to a rounded integer string for display
  const displayValue = useTransform(motionValue, (latest) =>
    Math.round(latest).toString()
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, target, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, motionValue, target, duration]);

  return (
    <span ref={ref} className="font-cormorant text-5xl font-bold text-gold">
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
