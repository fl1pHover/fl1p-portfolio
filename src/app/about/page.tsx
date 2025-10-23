"use client";

import React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { Label } from "@/components/ui/label";
import SplitText from "@/components/ui/SplitText";
import { CornerDownRight } from "lucide-react";
import { ABOUT_TEXT, EDUCATION_LIST } from "@/lib/constants";
import Link from "next/link";
import { StarIcon } from "@/lib/icons";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { FollowButton } from "@/components/ui/FollowButton";

export default function About() {
  const [activeEdu, setActiveEdu] = React.useState<number | null>(null);

  const imageVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.15, easeInOut } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.15, easeInOut } },
  };

  const { lang } = useLanguage();
  const text = ABOUT_TEXT[lang];
  const edu = EDUCATION_LIST[lang];

  return (
    <section className="padding-bigger">
      <div className="padding-inner">
        <div className="relative">
          <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute top-0 left-0 h-full w-[1px] bg-border z-0"></motion.div>
          <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute top-0 right-0 h-full w-[1px] bg-border z-0"></motion.div>

          <motion.div variants={fadeIn(1, 1)} initial="hidden" animate="visible" className="lg:px-[3rem] lg:pr-[1em] grid lg:grid-cols-3 h-full items-start relative">
            <div className="col-span-1 relative p-6 sticky top-7 left-0 py-[7em] hidden lg:flex flex-col items-center gap-6">
              <div className="w-full aspect-square rounded-lg relative">
                <div className="p-[1px] bg-white" style={{ clipPath: "polygon(99% 0, 99% 6%, 100% 7%, 100% 100%, 6% 100%, 0 94%, 0 0)" }}>
                  <Image src={"/images/pixel.png"} alt="Profile image" width={600} height={600} className="size-full" style={{ clipPath: "polygon(99% 0, 99% 6%, 100% 7%, 100% 100%, 6% 100%, 0 94%, 0 0)" }} />
                </div>
                <Label size={"xs"} className="absolute -rotate-90 bottom-5 -left-4 origin-left text-foreground-secondary z-20">
                  IMAGE_356
                </Label>
              </div>
              <Link href={"/cv.pdf"} download>
                <FollowButton>{text.cv}</FollowButton>
              </Link>
            </div>
            <div className="col-span-2 relative size-full p-6 py-[7em]">
              <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 1, ease: "easeInOut" }} className="absolute top-0 left-0 h-full w-[1px] bg-border z-0"></motion.div>
              <div className="py-[0.5em] col-span-full text-center lg:text-left">
                <SplitText text={text.title} className="bro-header leading-none" />
                {/* <SplitText text="Bishu" className="bro-header leading-none" /> */}
                <h1 className="text-sm! bro-header italic">{text.name}</h1>
              </div>

              <div className="py-8 lg:py-10 relative space-y-8">
                <div className="rounded-lg flex justify-center lg:hidden relative flex-col items-center gap-6">
                  <div className="p-[1px] aspect-square w-[80%]  bg-white relative" style={{ clipPath: "polygon(99% 0, 99% 6%, 100% 7%, 100% 100%, 6% 100%, 0 94%, 0 0)" }}>
                    <Image src={"/images/pixel.png"} alt="Profile image" width={600} height={600} className="size-full" style={{ clipPath: "polygon(99% 0, 99% 6%, 100% 7%, 100% 100%, 6% 100%, 0 94%, 0 0)" }} />
                  </div>

                  <Label size={"xs"} className="absolute -rotate-90 bottom-20 left-4 origin-left text-foreground-secondary">
                    IMAGE_356
                  </Label>
                  <Link href={"/cv.pdf"} download>
                    <FollowButton>{text.cv}</FollowButton>
                  </Link>
                </div>
                <div className="flex items-center text-foreground justify-between gap-2">
                  <StarIcon className="size-4" />
                  <div className="h-[1px] w-full bg-foreground"></div>
                  <Label size={"xs"} className="bg-background text-nowrap font-bold">
                    {text.status}
                  </Label>
                </div>
              </div>

              <h1 className="text-base lg:text-2xl font-medium">{text.description}</h1>
            </div>
          </motion.div>
        </div>
        <div className="border border-r-0 relative">
          <div className="p-4 py-10 pt-[5em] flex flex-col">
            <SplitText text={text.eduTitle1} className="bro-header leading-none lg:leading-normal" />
            <SplitText text={text.eduTitle2} className="bro-header lg:pl-10 leading-none lg:leading-normal" />
          </div>
          <div
            className="border-b border-white ml-2
                    flex size-full items-end w-fit absolute bottom-0 right-0 justify-end p-1"
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
                EDU__00{edu.length}
              </Label>
            </div>
          </div>
        </div>
        <div className="p-0 sm:pl-10 lg:pl-20 flex flex-col border-l py-10 lg:py-20 group">
          {edu.map((item, index) => (
            <Link href={item.url} target="_blank" onMouseEnter={() => setActiveEdu(index)} onMouseLeave={() => setActiveEdu(null)} key={index} className="px-4 py-8 hover:bg-accent duration-200 flex items-center text-sm border-b-[0.3px]">
              <div className="w-[200px] text-[10px] md:text-base">{item.year}</div>
              <div className="w-full text-xs md:text-base">{item.title}</div>
              <div className="w-[200px] flex items-center gap-2 text-xs md:text-base">
                <CornerDownRight className="size-5 pb-1" />
                {item.institution}
              </div>
            </Link>
          ))}
          <div className="fixed bottom-20 right-20 w-80 aspect-3/2 z-50" style={{ clipPath: "polygon(99% 0, 99% 6%, 100% 7%, 100% 100%, 6% 100%, 0 94%, 0 0)" }}>
            <AnimatePresence mode="wait">
              {activeEdu !== null && (
                <motion.img
                  key={activeEdu} // important: forces remount on each hover
                  src={edu[activeEdu].image}
                  alt={edu[activeEdu].title}
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
