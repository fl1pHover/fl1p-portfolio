"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  { color: "bg-white", img: "/videos/project-1.gif" },
  { color: "bg-red-500", img: "/videos/project-2.gif" },
  { color: "bg-green-500", img: "/videos/project-3.gif" },
  { color: "bg-blue-500", img: "/videos/project-4.gif" },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.05, 0.95, 1],
    ["#0a090f", "#0a090f", "#0a090f", "#0a090f"]
  );

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="relative pt-40"
    >
      <div className="relative">
        {projects.map((project, i) => (
          <StickyCard
            key={i}
            index={i}
            color={project.color}
            img={project.img}
            total={projects.length}
          />
        ))}
      </div>
    </motion.section>
  );
}

function StickyCard({
  color,
  img,
  index,
  total,
}: {
  color: string;
  img: string;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center", "center center"],
  });

  // Tilt + Scale + Fade + Move
  const rotateX = useTransform(scrollYProgress, [0, 0.9, 1], [100, 0,  0]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [2, 1.3, 0.9]);

  return (
    <div ref={ref} className="sticky top-0 h-[100vh] py-10 w-screen overflow-x-hidden">
      <motion.div
        style={{
          rotateX,
          y,
          scale,
          transformPerspective: 1200,
          transformOrigin: "bottom center",
          zIndex: total - index,
        }}
        transition={{ stiffness: 100}}
        className={cn(
          "h-[80vh] w-[90%] mx-auto rounded-2xl overflow-hidden shadow-2xl will-change-transform transition-transform",
          color
        )}
      >
        <img
          src={img}
          alt={`Project ${index}`}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
