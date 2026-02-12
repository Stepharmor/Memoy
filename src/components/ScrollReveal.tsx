"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  trigger?: "inView" | "mount";
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  trigger = "inView",
}: ScrollRevealProps) {
  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  };

  const finalState = { y: 0, x: 0, opacity: 1 };

  return (
    <motion.div
      initial={directionVariants[direction]}
      {...(trigger === "mount"
        ? { animate: finalState }
        : { whileInView: finalState, viewport: { once: true, margin: "-100px" } })}
      transition={{
        duration: 1,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
