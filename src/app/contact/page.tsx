"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { HERO_TEXT } from "@/lib/constants";
import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import AniDiv from "@/components/ui/AniDiv";

export default function Contact() {
  const { lang } = useLanguage();
  const text = HERO_TEXT[lang];

  const initialDelay = 1;
  const initialDuration = 1;

  return (
    <section className="padding-bigger">
      <div className="xl:px-[4.37em]">
        {/* Parent */}
        <div className="relative">
          <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="absolute top-0 left-0 h-full w-[1px] bg-border z-0"></motion.div>
          <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="absolute bottom-0 left-0 h-[1px] bg-border z-0"></motion.div>
          <div className="flex flex-col justify-end h-full items-center">
            <motion.div className="grid lg:grid-cols-2 items-end w-full relative">
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="absolute bottom-0 left-0 h-[1px] bg-border z-0"></motion.div>
              <div className="pb-[5rem] pt-[10rem] h-full align-bottom px-[3rem] ">
                <SplitText text="llr nmg <br />  ajild av" className="text-7xl font-semibold text-white uppercase italic" />
              </div>

              <div className="relative p-[5rem] text-lg pt-[10rem]">
                <AniDiv text="Whether you’re launching something new, refining your current site, or exploring a collaboration, let’s find the right approach together." />
                <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="absolute top-0 left-0 h-full w-[1px] bg-border z-0"></motion.div>
                <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="absolute bottom-0 right-0 h-full w-[1px] bg-border z-0"></motion.div>
              </div>
            </motion.div>
          </div>
          <div className="w-full grid grid-cols-6">
            <div className="col-span-2 relative" style={{ padding: "4.5rem 2.5rem 3.5rem" }}>
              <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="absolute bottom-0 right-0 h-full w-[1px] bg-border z-0"></motion.div>
              <div className="space-y-10">
                <div className="space-y-1.5">
                  <h6 className="small-label">[ Email ]</h6>
                  <AniDiv text="bishu.hover@gmail.com" className="font-semibold"></AniDiv>
                </div>
                <div className="space-y-1.5">
                  <h6 className="small-label">[ Phone ]</h6>
                  <AniDiv text="(976)9620-8458" className="font-semibold"></AniDiv>
                </div>
                <div className="space-y-1.5">
                  <h6 className="small-label">[ for collaborators ]</h6>
                  <AniDiv text="I occasionally collaborate with designers, developers, and other creatives on projects that share the same care for detail and creative intent. If that sounds like you, get in touch." className="font-semibold"></AniDiv>
                </div>
                <div className="space-y-1.5">
                  <h6 className="small-label">[ for questions ]</h6>
                  <AniDiv text="Have a question? You can check the FAQ or get in touch directly."></AniDiv>
                </div>
              </div>
            </div>
            <div className="col-span-4 flex h-full items-center justify-center text-3xl">Coming soon</div>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </section>
  );
}
