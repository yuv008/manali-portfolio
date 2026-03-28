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
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const motionValue = useMotionValue(0);

  const displayValue = useTransform(motionValue, (latest) =>
    Math.round(latest).toString()
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    } else {
      motionValue.set(0);
    }
  }, [isInView, motionValue, target, duration]);

  return (
    <span ref={ref} className="font-cormorant text-5xl font-bold text-gold">
      <motion.span>{displayValue}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
