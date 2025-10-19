import React from "react";
import { motion } from "framer-motion";

interface AniDivProps {
  text: string;
  className?: string;
}


export default function AniDiv({
  text,
  className,
}: AniDivProps) {
  // Split text by <br /> or newline
  const lines = text.split(/<br\s*\/?>|\n/);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className={className}>
      {text}
    </motion.div>
  );
}
