"use client";

import { useEffect, useRef } from "react";
import Vivus from "vivus";

interface VivusIconProps {
  src: string;
  className?: string;
  duration?: number;
}

export default function VivusIcon({
  src,
  className = "h-[160px] w-[160px]",
  duration = 120,
}: VivusIconProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const vivus = new Vivus(containerRef.current, {
      file: src,
      type: "oneByOne",
      duration,
      animTimingFunction: Vivus.EASE_OUT,
      start: "manual",
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            vivus.play();
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [src, duration]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
    />
  );
}

