"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const projects = [{ color: "bg-white" }, { color: "bg-red-500" }, { color: "bg-green-500" }, { color: "bg-blue-500" }];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Projects секшн top хүрэхээс эхлээд scroll прогресс
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // start start = секшн top viewport top-той таарсан үед
  });

  // scrollYProgress 0->1 байх үед background color-ыг map хийх
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1], // эхний 5% дээр өнгө солигдох
    ["#000000", "#5542ff", "#5542ff", "#000000"] // хар -> эхний card color -> last card -> хар
  );

  // scroll өөрчлөгдөх бүрт body background-ыг update
  bgColor.onChange((v) => {
    document.body.style.backgroundColor = v;
  });

  return (
    <motion.section ref={sectionRef} style={{ backgroundColor: bgColor }} className="relative padding-bigger pt-20">
      {projects.map((project, i) => (
        <div key={i} className={cn("sticky top-10")}>
          <StickyCard color={project.color} isLast={i === projects.length - 1} />
        </div>
      ))}
    </motion.section>
  );
}

function StickyCard({ color, isLast }: { color: string; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -10]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1]);

  return (
    <div ref={ref}>
      <motion.div style={{ rotateX, scale }} className={`${isLast ? "" : "sticky top-10"} h-[90vh] w-full rounded-2xl overflow-hidden ${color} shadow-xl`}>
        <img src="/videos/project-1.gif" className="w-full h-full object-cover will-change-transform"  />
      </motion.div>
    </div>
  );
}
