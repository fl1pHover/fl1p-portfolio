"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FollowButton } from "../ui/FollowButton";
import Link from "next/link";

const projects = [
  { color: "bg-white", img: "/videos/project-1.gif", name: "Project 1" },
  { color: "bg-muted", img: "/videos/project-2.gif", name: "Project 2" },
  { color: "bg-muted", img: "/videos/project-3.gif", name: "Project 3" },
  { color: "bg-muted", img: "/videos/project-4.gif", name: "Project 4" },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"], });

  const bgColor = useTransform( scrollYProgress, [0, 0.05, 0.95, 1], ["#0a090f", "#5542ff", "#5542ff", "#0a090f"] );

  return (
    <motion.section style={{ backgroundColor: bgColor }} ref={sectionRef} className="relative pt-40">
      <div className="relative">
        {projects.map((project, i) => (
          <StickyCard
            key={i}
            index={i}
            project={project}
            total={projects.length}
            setActive={setActive}
          />
        ))}
      </div>

      {/* Fixed thumbnail + project name */}
      {active !== null && (
        <div className="fixed left-8 bottom-8 aspect-2/1 h-50 z-50 flex flex-col backdrop-blur-xl bg-background/40 rounded border-white/40 border p-5 space-y-2">
          {/* <img
            src={projects[active].img}
            alt={`Project ${active}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          /> */}
          <h1 className="mt-2 text-foreground text-3xl font-bold font-brockmann">{projects[active].name}</h1>
          <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, cumque.</p>
          <FollowButton asChild><Link href={"/"} target="_blank">View Site</Link></FollowButton>
        </div>
      )}
    </motion.section>
  );
}

function StickyCard({
  project,
  index,
  total,
  setActive,
}: {
  project: { color: string; img: string; name: string };
  index: number;
  total: number;
  setActive: (i: number | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.9, 1], [20, 10, 0]);
  const y = useTransform(scrollYProgress, [0, 0.9, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.3, 1]);

  // Scroll бүрд active update
  scrollYProgress.onChange((v) => {
    if (v >= 0.4 && v <= 0.6) {
      setActive(index);
    } else if (v < 0.4 && index === 0) {
      setActive(null); // эхэндээс өмнө нь square байхгүй
    } 
    else if (v > 0.6 && index === 0) {
      setActive(null); // эхэндээс хойш нь square байхгүй
    }
  });

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
        transition={{ stiffness: 10000 }}
        className={cn(
          "h-full w-[90%] mx-auto rounded-2xl overflow-hidden shadow-2xl will-change-transform transition-transform",
          project.color
        )}
      >
        <img src={project.img} alt={project.name} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}
