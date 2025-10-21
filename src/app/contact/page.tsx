"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { HERO_TEXT } from "@/lib/constants";
import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import AniDiv from "@/components/ui/AniDiv";
import { fadeIn } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { FollowButton } from "@/components/ui/FollowButton";
import { Label } from "@/components/ui/label";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";

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
                <SplitText text="Contact <br /> information" className="text-6xl font-semibold text-white uppercase" />
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
              <motion.div variants={fadeIn} initial="hidden" animate="visible" whileInView="visible" viewport={{ once: true }} className="space-y-10">
                <div className="space-y-1.5">
                  <h6 className="small-label">[ Email ]</h6>
                  <h1 className="font-semibold">bishu.hover@gmail.com</h1>
                </div>
                <div className="space-y-1.5">
                  <h6 className="small-label">[ Phone ]</h6>
                  <h1 className="font-semibold">(976)9620-8458</h1>
                </div>
                <div className="space-y-1.5">
                  <h6 className="small-label">[ Socials ]</h6>
                  <div className="flex gap-2">
                    <Link href={"https://www.linkedin.com/in/bishubazar-sosorburam-767410226/"} className="flex items-center gap-2">
                      <Image src="/images/logo/linkedin.svg" width={50} height={50} alt="Linkedin" className="size-8 bg-white p-1 hover:opacity-80 rounded-xs duration-150" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/bishubazar-sosorburam-767410226/"} className="flex items-center gap-2">
                      <Image src="/images/logo/telegram.svg" width={50} height={50} alt="Linkedin" className="size-8 bg-white p-1 hover:opacity-80 rounded-xs duration-150" />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/bishubazar-sosorburam-767410226/"} className="flex items-center gap-2">
                      <Image src="/images/logo/linkedin.svg" width={50} height={50} alt="Linkedin" className="size-8 bg-white p-1 hover:opacity-80 rounded-xs duration-150" />
                    </Link>
                  </div>
                </div>
                {/* <div className="space-y-1.5">
                  <h6 className="small-label">[ for collaborators ]</h6>
                  <h1 className="font-semibold">I occasionally collaborate with designers, developers, and other creatives on projects that share the same care for detail and creative intent. If that sounds like you, get in touch.</h1>
                </div> */}
                <div className="space-y-1.5">
                  <h6 className="small-label">[ for questions ]</h6>
                  <AniDiv text="Have a question? You can check the FAQ or get in touch directly."></AniDiv>
                </div>
              </motion.div>
            </div>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" className="col-span-4 h-fit text-3xl grid grid-cols-2 gap-8 gap-y-12" style={{ padding: "4.5rem 2.5rem 3.5rem" }}>
              <div className="space-y-2">
                <Label>What's your name?</Label>
                <Input placeholder="Full Name" />
              </div>
              <div className="space-y-2">
                <Label>What’s your email?</Label>
                <Input placeholder="name@company.com" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label>What’s your brief?</Label>
                <Input placeholder="Write you brief here: I need ___ with this scope, pages, specific need ___." />
              </div>
              <div className="w-fit">
                <FollowButton className="w-fit">Submit</FollowButton>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-3 relative pt-20">
          <div className="col-span-2 p-4 border-r">
            <SplitText text="FREQUENTLY <br /> ASKED QUESTIONS" className="text-7xl font-semibold text-white uppercase" />
          </div>
          <div
            className="col-span-1 border-b border-white ml-2
          flex size-full items-end justify-end p-1"
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
                FAQ__004
              </Label>
            </div>
          </div>
          <div className="col-span-2 relative pb-48">
            <div className="w-full relative border-r border-b">{/* <div className="bg-border w-[1px] h-full absolute right-0 top-0"></div> */}</div>
            <div className="w-[1px] absolute top-0 left-0 h-full bg-border"></div>

            <Accordion type="single" collapsible className="relative">
              <AccordionItem value="item-1">
                <AccordionTrigger>Why Choose Webflow for you website?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Why Choose Webflow for you website?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Why Choose Webflow for you website?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Why Choose Webflow for you website?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="p-6 sticky top-20">Can’t find an answer to your question? Feel free to contact me.</div>
        </div>
      </div>
    </section>
  );
}
