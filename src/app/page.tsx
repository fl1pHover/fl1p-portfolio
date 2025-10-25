"use client";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Techs from "@/components/sections/Techs";
import { useLanguage } from "@/context/LanguageContext";
import { INTRO_TEXT } from "@/lib/constants";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro() {
  const [showContent, setShowContent] = useState(false);

  const handleEnterClick = () => {
    setShowContent(true);
  };

  const { lang } = useLanguage();
  const intro = INTRO_TEXT[lang];

  return (
    <>
      {!showContent && (
        <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [0, 0, 0, 0] }}
            transition={{
              duration: 4,
              times: [0, 0.25, 0.75, 1],
            }}
            onAnimationComplete={handleEnterClick}
            className="flex flex-col items-center gap-4"
          >
            <h1 className="text-sm md:text-base">{intro.title}</h1>
            <div className="w-[300px] bg-border h-0.5">
              <motion.div initial={{ width: 20 }} animate={{ width: "100%" }} transition={{ duration: 2 }} className="bg-white h-full"></motion.div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Hero />
          <Projects />
          <Techs />
        </motion.div>
      )}
    </>
  );
}
