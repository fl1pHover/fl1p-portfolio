"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { NAV_TEXT } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function AudioButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const { lang, setLang } = useLanguage();

  const text = NAV_TEXT[lang];

  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <button onClick={toggleAudio} className="flex items-center cursor-pointer navbar-button gap-2">
        <span className="text-[9px] uppercase">{text.sound}</span>
        <div className="flex items-center gap-[2px] h-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              className="size-0.5 bg-white rounded-full"
              animate={
                isPlaying
                  ? // animated bars
                    { height: ["15%", "60%", "15%"] }
                  : // static dots
                    { height: "15%" }
              }
              transition={
                isPlaying
                  ? {
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 0.6 + i * 0.1,
                    }
                  : { duration: 0 }
              }
            />
          ))}
        </div>
      </button>

      <audio ref={audioRef} src="/audio/loop.mp3" loop />
    </div>
  );
}
