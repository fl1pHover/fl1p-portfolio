"use client";

import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Label } from "@/components/ui/label";
import SplitText from "@/components/ui/SplitText";
import { CornerDownRight } from "lucide-react";
import { EDUCATION_LIST } from "@/lib/constants";
import Link from "next/link";

export default function About() {
  const [activeEdu, setActiveEdu] = React.useState<number | null>(null);

  const imageVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.15, easeInOut } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.15, easeInOut } },
  };

  return (
    <section className="padding-bigger">
      <div className="xl:px-[4.37em]">
        <div className="relative">
          <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute top-0 left-0 h-full w-[1px] bg-border z-0"></motion.div>
          <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute top-0 right-0 h-full w-[1px] bg-border z-0"></motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" className="px-[3rem] grid grid-cols-3 h-full items-start relative">
            <div className="col-span-1 relative p-6 sticky top-7 left-0 py-[7em]">
              <div className="w-full aspect-3/4 rounded-lg bg-red-500 relative">
                <Label size={"xs"} className="absolute -rotate-90 bottom-0 -left-4 origin-left text-foreground-secondary">
                  IMAGE_356
                </Label>
              </div>
            </div>
            <div className="col-span-2 relative size-full p-6 pt-[7em]">
              <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute top-0 left-0 h-full w-[1px] bg-border z-0"></motion.div>

              <h1 className="text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium ex praesentium itaque atque facere, laboriosam enim quia numquam vel neque at alias nam culpa possimus assumenda iure tempore vero dolorem qui optio debitis! Sed adipisci sit nihil laudantium dolore ullam expedita magni possimus quos, similique illo, delectus deserunt repellendus.</h1>
              <br />
              <h1 className="text-2xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium ex praesentium itaque atque facere, laboriosam enim quia numquam vel neque at alias nam culpa possimus assumenda iure tempore vero dolorem qui optio debitis! Sed adipisci sit nihil laudantium dolore ullam expedita magni possimus quos, similique illo, delectus deserunt repellendus.</h1>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-3 border border-r-0">
          <div className="col-span-2 p-4 py-10">
            <SplitText text="FREQUENTLY <br /> ASKED QUESTIONS" className="text-7xl font-semibold text-white uppercase" />
          </div>
          <div
            className="col-span-1 border-b border-white ml-2
                    flex size-full items-end justify-end p-1"
          >
            <div className="flex items-center gap-1">
              {[...Array(35)].map((_, i) => (
                <div
                  key={i}
                  className="w-[1.5px] h-3 bg-white"
                  style={{
                    transform: `rotate(20deg)`,
                    transformOrigin: "top left",
                  }}
                />
              ))}
              <Label size={"xs"} className="pl-2">
                FAQ__004
              </Label>
            </div>
          </div>
        </div>
        <div className="pl-20 flex flex-col border-l py-20 group">
          {EDUCATION_LIST.map((item, index) => (
            <Link href="/" target="_blank" onMouseEnter={() => setActiveEdu(index)} onMouseLeave={() => setActiveEdu(null)} key={index} className="px-4 py-8 hover:bg-accent duration-200 flex items-center text-sm border-b-[0.3px]">
              <div className="w-[200px]">{item.year}</div>
              <div className="w-full">{item.title}</div>
              <div className="w-[200px] flex items-center gap-2">
                <CornerDownRight className="size-5 pb-1" />
                {item.institution}
              </div>
            </Link>
          ))}
          <div className="fixed bottom-20 right-20 w-80 aspect-4/3 z-50">
            <AnimatePresence mode="wait">
              {activeEdu !== null && (
                <motion.img
                  key={activeEdu} // important: forces remount on each hover
                  src={EDUCATION_LIST[activeEdu].image}
                  alt={EDUCATION_LIST[activeEdu].title}
                  className="w-full h-full object-cover rounded-lg shadow-lg bg-white"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={imageVariants}
                />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
