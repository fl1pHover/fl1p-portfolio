"use client";

import Link from "next/link";
import { FollowButton } from "../ui/FollowButton";
import { useLanguage } from "@/context/LanguageContext";
import { HERO_TEXT } from "@/lib/constants";
import { motion } from "framer-motion";
import SplitText from "../ui/SplitText";
import { StarIcon } from "@/lib/icons";

export default function Hero() {
  const { lang } = useLanguage();
  const text = HERO_TEXT[lang];

  const initialDelay = 1;
  const initialDuration = 1;

  return (
    <section data-scroll-section className="h-screen padding-bigger">
      <div className="padding-inner">
        <div className="border-x border-b border-border lg:h-screen lg:min-h-screen">
          <div className="px-2 lg:px-[3rem] flex flex-col justify-end h-full items-center pt-[7em]">
            <motion.div initial={{ scale: 1.5 }} animate={{ scale: 1 }} transition={{ duration: initialDuration, delay: initialDelay, ease: "easeInOut" }} className="h-full flex flex-col justify-center pb-20 lg:pb-0">
              {/* <h1>{text.name}</h1> */}
              <SplitText text="Creative" className="bro-header translate-x-[5%]" />
              <SplitText text="Frontend" className="bro-header -translate-x-[15%]" />
              <SplitText text="Developer" className="bro-header translate-x-[30%]" />

              {/* <h1 className="text-6xl font-bold uppercase italic">
                Frontend <br />
                <motion.span initial={{ marginLeft: 0 }} animate={{ marginLeft: 100 }} transition={{ delay: initialDelay, duration: initialDuration }}>
                  Developer
                </motion.span>
              </h1> */}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="grid lg:grid-cols-2 items-end w-full">
              <div className="py-[6em] hidden lg:block">{/* <video src={"/videos/loop.mp4"} autoPlay loop muted className="w-full h-full object-cover "></video> */}</div>

              <div className="ml-2 lg:pl-[3.5rem] lg:pr-[1rem] space-y-10 relative py-[3em] lg:py-[6em]">
                <div className="bg-background absolute z-10 top-0 left-0 -translate-x-[50%] -translate-y-[50%] p-2">
                  <StarIcon className="size-4 " />
                </div>
                <div className="absolute top-0 left-0 w-full z-0 flex items-center gap-1 -translate-y-[50%]">
                  <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="w-1/3 lg:w-1/2 h-[1px] bg-white"></motion.div>
                  <div className="bg-white rounded-full px-4 py-2 flex items-center gap-2">
                    <div className="rounded-full size-1.5 bg-green-500"></div>
                    <h6 className="text-xs md:text-sm text-background text-nowrap">{text.available}</h6>
                  </div>
                </div>
                <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: initialDuration, delay: 2, ease: "easeInOut" }} className="absolute top-0 left-0 h-full w-[1px] bg-border z-0 hidden lg:block"></motion.div>
                <h1 className="lg:text-lg font-medium">
                  {text.desc}
                  {/* <SplitText text={text.desc} /> */}
                </h1>

                <div className="gap-4 flex flex-col sm:flex-row">
                  <Link href="/contact">
                    <FollowButton className="yellow-btn big-btn w-full lg:w-fit">{text.getInTouch}</FollowButton>
                  </Link>
                  <Link href="/work">
                    <FollowButton variant={"outline"} className="dark-btn big-btn w-full lg:w-fit">
                      {text.seeWork}
                    </FollowButton>
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
