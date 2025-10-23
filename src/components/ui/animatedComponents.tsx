'use client';
import { motion } from "framer-motion";
import React from "react";

type AniBorderProps = {
  direction?: "horizontal" | "vertical";
  duration?: number | string;
  delay?: number | string;
  className?: string;
};

export function AniBorder({
  direction = "vertical",
  duration = 1,
  delay = 1,
  className = "",
}: AniBorderProps) {
  const isWidth = direction === "horizontal";

  return (
    <motion.div
      initial={isWidth ? { width: 0 } : { height: 0 }}
      whileInView={isWidth ? { width: "100%" } : { height: "100%" }}
      transition={{
        duration: Number(duration),
        delay: Number(delay),
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={`absolute bg-border ${isWidth ? "h-[1px]" : "w-[1px]"} ${className}`}
    />
  );
}

interface AniDivProps {
  className?: string;
  children: React.ReactNode;
}


export function AniDiv({
  children,
  className,
}: AniDivProps) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} className={className}>
      {children}
    </motion.div>
  );
}
