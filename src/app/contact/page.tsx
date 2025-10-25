"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_FORM, CONTACT_INFO, CONTACT_TEXT, FAQ_TEXT, HERO_TEXT } from "@/lib/constants";
import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import { fadeIn } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { FollowButton } from "@/components/ui/FollowButton";
import { Label } from "@/components/ui/label";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { AniBorder, AniDiv } from "@/components/ui/animatedComponents";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const { lang } = useLanguage();
  const text = CONTACT_TEXT[lang];
  const info = CONTACT_INFO[lang];
  const form = CONTACT_FORM[lang];
  const faq = FAQ_TEXT[lang];

  return (
    <section className="padding-bigger">
      <div className="xl:px-[4.37em]">
        {/* Parent */}
        <div className="relative">
          <AniBorder className="top-0 left-0" />
          <AniBorder direction="horizontal" className="bottom-0 left-0" />

          <div className="flex flex-col justify-end h-full items-center">
            <motion.div className="grid lg:grid-cols-2 items-end w-full relative">
              <AniBorder direction="horizontal" className="bottom-0 left-0" />

              <div className="lg:pb-[5rem] pt-[10rem] h-full align-bottom px-6 lg:px-[3rem] flex flex-col">
                <SplitText text={text.title1} className="bro-header text-3xl! sm:text-5xl!" />
                <SplitText text={text.title2} className="bro-header text-3xl! sm:text-5xl!" />
              </div>

              <div className="relative p-10 lg:p-[3em] text-lg lg:pt-[10rem]">
                <AniDiv>
                  <h1>{text.description}</h1>
                </AniDiv>

                <AniBorder direction="vertical" className="top-0 left-0" />
                <AniBorder direction="vertical" className="bottom-0 right-0" />
              </div>
            </motion.div>
          </div>
          <div className="w-full grid grid-cols-6">
            <div className="col-span-full sm:col-span-2 relative" style={{ padding: "4.5rem 2.5rem 3.5rem" }}>
              <AniBorder direction="vertical" className="bottom-0 right-0" />

              <motion.div variants={fadeIn(1, 1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-10">
                {info.map((item, i) => (
                  <div key={i} className="space-y-1.5">
                    <h6 className="small-label">{`[ ${item.title} ]`}</h6>

                    <h1 className="semi-bold">
                      {item.type ? (
                        <Link href={cn((item.type === "email" && "mailto:bishu.hover@gmail.com") || (item.type === "phone" && "tel:+97696208458"))} target="_blank">
                          {item.value}
                        </Link>
                      ) : (
                        <>{item.value}</>
                      )}
                    </h1>

                    {item.socials && (
                      <div className="flex gap-2">
                        {item.socials.map((social, j) => (
                          <Link key={j} href={social.url} target="_blank">
                            <Image src={`/images/logo/${social.icon}`} width={50} height={50} alt={social.title} className="size-8 bg-white p-1 hover:opacity-80 rounded-xs duration-150" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div variants={fadeIn(1, 1)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="col-span-full sm:col-span-4 h-fit text-3xl sm:grid grid-cols-2 gap-8 space-y-12 pt-10 px-10 sm:pt-[4.5rem] pb-14">
              {form.map((input, i) => (
                <div key={i} className={cn("col-span-1 space-y-2 mb-4", input.type === "textarea" && "col-span-full")}>
                  <Label>{input.label}</Label>

                  {input.type === "input" && <Input className="cursor-not-allowed pointer-events-none" placeholder={input.placeholder} />}

                  {input.type === "textarea" && <Textarea className="cursor-not-allowed max-h-50 pointer-events-none" rows={3} placeholder={input.placeholder} />}
                </div>
              ))}
              <div className="w-fit">
                <FollowButton className="w-fit cursor-not-allowed pointer-events-none text-xs">{text.button}</FollowButton>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 relative pt-20">
          <div className="col-span-2 p-0 sm:p-4 relative text-3xl sm:text-7xl">
            <SplitText text={faq.title1} className="bro-header" />
            <SplitText text={faq.title2} className="bro-header" />
            <AniBorder className="right-0 bottom-0" delay={0} />
          </div>
          <div
            className="col-span-2 sm:col-span-1 border-b border-white ml-0 sm:ml-2
          flex size-full items-end justify-end p-1"
          >
            <motion.div variants={fadeIn(0, 1)} initial="hidden" whileInView={"visible"}>
              <div className="flex items-center gap-1">
                {[...Array(25)].map((_, i) => (
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
                  FAQ__{faq.list.length}
                </Label>
              </div>
            </motion.div>
          </div>
          <div className="col-span-2 relative pb-48 mt-2 sm:mt-0">
            <AniBorder direction="vertical" delay={0} className="top-0 left-0" />

            <Accordion type="single" collapsible className="relative">
              {faq.list.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="p-6 sticky top-20">{text.contactNote}</div>
        </div>
      </div>
    </section>
  );
}
