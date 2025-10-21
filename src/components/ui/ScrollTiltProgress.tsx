"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollTiltProgressProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollTiltProgress({
  children,
  className,
}: ScrollTiltProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "center 50%"], // доороос дунд хүртэл range
  });

  // Scroll явцад tilt багасах
  const rotateX = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        y,
        opacity,
        transformPerspective: 800,
        transformOrigin: "bottom center",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
