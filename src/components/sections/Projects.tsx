"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FollowButton } from "../ui/FollowButton";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { WORK_LIST } from "@/lib/constants";
import Image from "next/image";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const { lang } = useLanguage();

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });

  const bgColor = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], ["#0a090f", "#5542ff", "#5542ff", "#0a090f"]);

  const projects = WORK_LIST;

  return (
    <motion.section style={{ backgroundColor: bgColor }} ref={sectionRef} className="relative pt-40">
      <div className="relative">
        {projects.map((project, i) => (
          <StickyCard key={project.id} project={project} index={i} total={projects.length} setActive={setActive} />
        ))}
      </div>

      {/* Fixed thumbnail + project name */}

      {active && (
        <div className="sticky left-4 sm:w-auto lg:left-8 bottom-8 aspect-[2/1] h-50 z-50 flex flex-col backdrop-blur-xl bg-background/40 rounded border border-white/40 p-5 space-y-2 w-[80vw]">
          <h1 className="mt-2 text-foreground text-lg lg:text-3xl font-bold font-brockmann">{projects[active].title}</h1>
          <p className="text-xs mb-4">{projects[active].description?.[lang] || projects[active].description?.en}</p>
          {projects[active].url && (
            <FollowButton asChild>
              <Link href={projects[active].url} target="_blank" rel="noopener noreferrer">
                {lang === "mn" ? "Сайтыг үзэх" : "View Site"}
              </Link>
            </FollowButton>
          )}
        </div>
      )}
    </motion.section>
  );
}

function StickyCard({ project, index, total, setActive }: { project: { id: number; video: string; title: string; url: string; description?: { en: string; mn: string } }; index: number; total: number; setActive: (i: number | null) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center", "center center"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.9, 1], [20, 10, 0]);
  const y = useTransform(scrollYProgress, [0, 0.9, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.3, 1]);

  scrollYProgress.onChange((v) => {
    const start = index / total; // тухайн card эхлэх scroll хувь
    const end = (index + 1) / total; // тухайн card дуусах scroll хувь

    if (v >= start && v < end) {
      setActive(index); // active болгох
    } else if (index === 0 && v < start) {
      setActive(null); // эхний card-аас өмнө null
    }
  });

  return (
    <div ref={ref} className="sticky top-0 h-[100vh] py-32 w-screen overflow-x-hidden flex justify-center items-center pointer-events-none">
      <motion.div style={{ rotateX, y, scale, transformPerspective: 1200, transformOrigin: "bottom center", zIndex: total - index }} transition={{ stiffness: 10000 }} className={cn("aspect-square sm:aspect-16/9 w-[90%] sm:w-[80%] mx-auto rounded-2xl overflow-hidden shadow-2xl will-change-transform transition-transform bg-foreground")}>
        <Image width={1200} height={1200} src={project.video} alt={project.title} className="w-full h-full object-cover object-top" />
      </motion.div>
    </div>
  );
}
