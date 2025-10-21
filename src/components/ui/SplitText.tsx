"use client";

import { motion } from "framer-motion";
import { useInView } from "motion/react"
interface SplitTextProps {
  text: string;
  className?: string;
  delayPerChar?: number;
}

export default function SplitText({
  text,
  className,
  delayPerChar = 0.05,
}: SplitTextProps) {
  // Split text by <br /> or newline
  const lines = text.split(/<br\s*\/?>|\n/);

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: "block", overflow: "hidden" }}>
          {line.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (lineIndex * 0.5) + index * delayPerChar, duration: 0.2 }}
              style={{ display: "inline-block" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}
