"use client";

import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { NAV_TEXT } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import AudioButton from "../ui/AudioButton";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // эхэндээ харагдахгүй
  const { y: currentScrollY } = useWindowScroll();

  // scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // доош гүйлгэхэд нуугдана
        setIsVisible(false);
      } else {
        // дээш гүйлгэхэд гарч ирнэ
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // delay дараа эхний харагдалт
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2 секунд delay
    return () => clearTimeout(timer);
  }, []);

  // цагийн logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const { lang, setLang } = useLanguage();
  const text = NAV_TEXT[lang];

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }} // remove delay:2 for instant response
          className="fixed top-0 left-0 w-full z-50 p-3"
        >
          <div className="padding-global bg-background border rounded-md">
            <div className="py-[1.1em] grid grid-cols-5 items-center w-full">
              <Link href="/" className="col-span-1">
                fl1p
              </Link>
              <div className="col-span-3 flex items-center justify-center gap-4 text-xs uppercase">
                {text.items.map((item) => (
                  <Link key={item.href} href={item.href} className="navbar-button">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="col-span-1 flex justify-end items-center gap-4">
                <AudioButton />

                <div className="text-sm">{time}</div>
                <button onClick={() => setLang(lang === "en" ? "mn" : "en")} className="pl-4 border-l border-border text-sm cursor-pointer">
                  {lang === "en" ? "EN" : "MN"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
