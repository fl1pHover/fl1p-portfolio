"use client";

import Link from "next/link";
import React from "react";
import { Label } from "../ui/label";
import { useLanguage } from "@/context/LanguageContext";
import { FOOTER_TEXT } from "@/lib/constants";
import { LeftPillarSVG, RightPillarSVG } from "@/lib/icons";
import { cn } from "@/lib/utils";

export default function Footer() {
  const { lang, setLang } = useLanguage();
  const text = FOOTER_TEXT[lang];

  return (
    <section className="relative padding-bigger">
      <div className="w-full h-[50vh] border-t border-border relative">
        <LeftPillarSVG className="absolute origin-right -left-4 top-0 w-4 text-border" />
        <RightPillarSVG className="absolute -right-3 top-0 w-3 text-border" />
        <div className="padding-bigger w-full py-10">
          <div className="flex justify-between border-b items-end border-border w-full relative">
            <Link href={"/"} className="text-xl! font-bold bro-header lowercase! tracking-normal! py-3">
              flipDev
            </Link>
            <Label size={"xs"} className="border-white w-1/3 border-b absolute bottom-0 right-0 flex justify-end pb-2 uppercase text-xs font-bold">
             {lang === "en" ? "Front-End Developer" : "Фронт-Энд Хөгжүүлэгч"}
              
            </Label>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {text.map((section, index) => (
              <div key={index} className="py-[3em] space-y-6 border-b border-border">
                {section.title && <h3 className="tracking-widest bro-header text-sm!">{section.title}</h3>}
                <div className="">
                  {section.items.map((item) => (
                    <Link key={item.id} href={item.href} scroll={true} className="text-base tracking-wide hover:text-gray-300 flex items-center group transition duration-150 py-3" target={cn((section.title === "connect" || section.title === "сошиал") && "_blank")}>
                      <Label size={"xs"} className="text-foreground/50 mr-2 group-hover:text-white cursor-pointer">
                        [{item.id}]
                      </Label>
                      <Label className="text-[12px] group-hover:translate-x-2 duration-150 cursor-pointer">{item.label}</Label>
                      {/* {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )} */}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
