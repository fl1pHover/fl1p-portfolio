"use client";

import SplitText from "@/components/ui/SplitText";
import { StarIcon } from "@/lib/icons";
import React from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { fadeIn } from "@/lib/animations";
import { AniBorder } from "@/components/ui/animatedComponents";
import { FollowButton } from "@/components/ui/FollowButton";
import { WORK_LIST, WORK_TEXT } from "@/lib/constants";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Hero from "@/components/sections/Hero";

export default function Work() {
  const { lang, setLang } = useLanguage();
  const text = WORK_TEXT[lang];

  return (
    <>
      <section className="padding-bigger">
        <div className="padding-inner">
          <div className="border-x border-border grid md:grid-cols-2 pt-[9em] pb-10 px-10 md:px-2 md:px-[3rem] space-y-10">
            <div className="flex flex-col justify-center">
              <SplitText text={text.title1} className="bro-header text-4xl! xl:text-7xl! leading-none" />
              <SplitText text={text.title2} className="bro-header text-4xl! xl:text-7xl! leading-none" />
              {/* <SplitText text="on" className="bro-header text-7xl! leading-none" /> */}
            </div>
            <div className="flex flex-col gap-10 md:p-10 relative">
              <AniBorder direction="vertical" delay={1} className="bottom-0 left-0 hidden md:block" />
              <motion.div variants={fadeIn(1, 1)} initial="hidden" animate={"visible"} viewport={{ once: true }} className="space-y-10 pb-20 md:pb-10">
                <h1>{text.description}</h1>
                <Link href={"/contact"} className="inline-flex">
                  <FollowButton>{text.button}</FollowButton>
                </Link>
              </motion.div>
              <div className="bg-background absolute bottom-0 left-0 flex w-full items-center gap-2 z-10 -translate-x-3 p-1.5">
                <div className="">
                  <StarIcon className="size-4" />
                </div>{" "}
                <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ duration: 1, delay: 1, ease: "easeInOut" }} className="w-1/3 lg:w-1/2 h-[1px] bg-white"></motion.div>
                <Label size={"sm"} className="font-bold text-nowrap">
                  {text.status}
                </Label>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 border border-b-0 md:divide-x md:divide-y divide-border last:divide-y-0">
            {WORK_LIST.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-3 px-4 py-8 border-b">
                  <Label size={"xs"} className="text-foreground-secondary opacity-80">
                    Project__{item.id}
                  </Label>
                  <div className="aspect-16/9 bg-black w-full rounded-lg overflow-hidden relative">
                    <Link href={item.url} target="_blank" className="absolute bottom-4 left-4">
                      <FollowButton variant={"outline"} className="backdrop-blur-xl bg-muted/70">
                        {text.view}
                      </FollowButton>
                    </Link>
                  </div>
                  <h1 className="bro-header text-xl! normal-case!">{item.title}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
