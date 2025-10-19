"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { NAV_TEXT } from "@/lib/constants";
import  { motion } from "framer-motion";

export default function Navbar() {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const audioElementRef = useRef<HTMLAudioElement | null>(null);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      // navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      // navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      // navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      // audioElementRef.current.play();
    } else {
      // audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  // time
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const { lang, setLang } = useLanguage();

  const text = NAV_TEXT[lang];

  return (
    <motion.div initial={{ opacity: 0, y: -70 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: 1 }} className="border-b-1 fixed top-0 left-0 w-full">
      <div className="padding-global bg-background">
        <div className="py-[1.1em] grid grid-cols-5 items-center w-full">
          <div className="col-span-1">fl1p</div>
          <div className="col-span-3 flex items-center justify-center gap-4 text-xs uppercase">
            {text.items.map((item) => (
              <Link key={item.href} href={item.href} className="hover:underline">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="col-span-1 flex justify-end items-center gap-4">
            <button onClick={toggleAudioIndicator} className="flex items-center cursor-pointer navbar-button">
              <span className="text-[9px] uppercase">{text.sound}</span>
              {/* <div onClick={toggleAudioIndicator} className="flex items-center space-x-0.5">
              <audio src="/audio/loop.mp3" ref={audioElementRef} className="hidden" loop />
              {[1, 2, 3, 4, 5].map((bar) => (
                <div key={bar} className={cn("indicator-line", isIndicatorActive ? "active" : "")} style={{ animationDelay: `${bar * 0.1}s` }} />
              ))}
            </div> */}
            </button>
            <div className="text-sm">{time}</div>
            <button onClick={() => setLang(lang === "en" ? "mn" : "en")} className="pl-4 border-l border-border text-sm cursor-pointer">
              {lang === "en" ? "EN" : "MN"}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
