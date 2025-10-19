"use client";

import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import TechCard from "@/components/ui/TechCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Intro() {
  const [showEnter, setShowEnter] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleEnterClick = () => {
    setShowContent(true);
  };

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
            onAnimationComplete={() => setShowEnter(true)}
            className="flex flex-col items-center gap-4"
          >
            <h1>Welcome to my Portfolio</h1>
            <div className="w-[300px] bg-border h-0.5">
              <motion.div initial={{ width: 20 }} animate={{ width: "100%" }} transition={{ duration: 2 }} className="bg-white h-full"></motion.div>
            </div>
          </motion.div>

          {showEnter && (
            <motion.button initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}   whileHover={{
    scale: 1.04,
    transition: { duration: 0.2 },
  }}
  whileTap={{ scale: 0.96 }} className="dark-btn rounded-full! px-10 py-3 hover:bg-border hover:border-white cursor-pointer duration-75" onClick={handleEnterClick}>
              Enter
            </motion.button>
          )}
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* <Navbar /> */}
          <Hero />
          <Projects />
          <div className="h-[200vh] py-20">
            <div className="h-6 border-y border-white flex items-center relative max-w-screen overflow-x-hidden">
              <motion.div className="flex items-center flex-nowrap absolute left-[50%] -translate-x-[50%] gap-x-1.5">
                {[...Array(200)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[1.5px] h-3 bg-white"
                    style={{
                      transform: `rotate(20deg)`,
                      transformOrigin: "top left",
                    }}
                  />
                ))}
                <h6 className="text-[10px] px-2 uppercase text-nowrap pt-0.5">Tech I Use & Experiences</h6>
                {[...Array(200)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[1.5px] h-3 bg-white"
                    style={{
                      transform: `rotate(20deg)`,
                      transformOrigin: "top left",
                    }}
                  />
                ))}
              </motion.div>
            </div>
            <div className="grid grid-cols-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => {
                return (
                  <div key={i}>
                    <TechCard text="asdasd" alt="asdasd" src="" />
                  </div>
                );
              })}
            </div>
             <div className="h-6 border-y border-white flex items-center relative max-w-screen overflow-x-hidden">
              <div className="flex items-center flex-nowrap absolute left-[50%] -translate-x-[50%] gap-x-1.5">
                {[...Array(300)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[1.5px] h-3 bg-white"
                    style={{
                      transform: `rotate(20deg)`,
                      transformOrigin: "top left",
                    }}
                  />
                ))}
                <h6 className="text-[10px] px-2 uppercase text-nowrap pt-0.5">Tech I Use & Experiences</h6>
                {[...Array(300)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[1.5px] h-3 bg-white"
                    style={{
                      transform: `rotate(20deg)`,
                      transformOrigin: "top left",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
