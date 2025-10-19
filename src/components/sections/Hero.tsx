"use client";

import Link from "next/link";
import { FollowButton } from "../ui/FollowButton";
import { useLanguage } from "@/context/LanguageContext";
import { HERO_TEXT } from "@/lib/constants";
import { motion } from "framer-motion";
import SplitText from "../ui/SplitText";

export default function Hero() {
  const { lang } = useLanguage();
  const text = HERO_TEXT[lang];

  const initialDelay = 1;
  const initialDuration = 1;

  return (
    <section className="h-screen padding-bigger">
      <div className="xl:px-[4.37em]">
        <div className="border-x border-b border-border lg:h-screen lg:min-h-screen">
          <div className="px-[3rem] flex flex-col justify-end h-full items-center pt-[7em]">
            <motion.div initial={{ scale: 2, y: 200 }} animate={{ scale: 1, y: 0 }} transition={{ duration: initialDuration, delay: initialDelay, ease: "easeInOut" }} className="h-full flex flex-col justify-center">
              <h1>{text.name}</h1>
              <SplitText text="Frontend <br /> Developer" className="text-6xl font-semibold text-white uppercase italic" />

              {/* <h1 className="text-6xl font-bold uppercase italic">
                Frontend <br />
                <motion.span initial={{ marginLeft: 0 }} animate={{ marginLeft: 100 }} transition={{ delay: initialDelay, duration: initialDuration }}>
                  Developer
                </motion.span>
              </h1> */}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="grid lg:grid-cols-2 items-end w-full">
              <div className="py-[7em]">
                <video src={"/videos/loop_desktop.mp4"} autoPlay loop muted className="w-full h-full object-cover gpu-accelerated" preload="auto" crossOrigin="anonymous"></video>
              </div>

              <div className="ml-2 pl-[3.5rem] pr-[1rem] space-y-10 relative py-[7em]">
                <div className="bg-background absolute z-10 top-0 left-0 -translate-x-[50%] -translate-y-[50%] p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 17" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" className="size-4 ">
                    <path d="M2.41002 14.2237L13.7237 2.91001M0 8.54529H16M8.0453 16.5V0.5M2.36688 2.91001L13.6806 14.2237" stroke="currentColor" strokeWidth="1.5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 left-0 w-full z-0 flex items-center gap-1 -translate-y-[50%]">
                  <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="w-1/2 h-[1px] bg-white"></motion.div>
                  <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
                    <div className="rounded-full size-1.5 bg-green-500"></div>
                    <h6 className="text-sm text-background">{text.available}</h6>
                  </div>
                </div>
                <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="absolute top-0 left-0 h-full w-[1px] bg-border z-0"></motion.div>
                <h1 className="text-lg font-medium">{text.desc}</h1>
                <div className="space-x-4">
                  <Link href="/contact">
                    <FollowButton className="yellow-btn big-btn">{text.getInTouch}</FollowButton>
                  </Link>
                  <Link href="/contact">
                    <FollowButton className="dark-btn big-btn">{text.seeWork}</FollowButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
