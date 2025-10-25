"use client";

import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { FOOTER_TEXT, NAV_TEXT } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import AudioButton from "../ui/AudioButton";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Label } from "../ui/label";
import { StarIcon } from "@/lib/icons";
import SplitText from "../ui/SplitText";
import { FollowButton } from "../ui/FollowButton";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // эхэндээ харагдахгүй
  const [menuActive, setMenuActive] = useState(false);
  const { y: currentScrollY } = useWindowScroll();

  const handleMenuClick = () => {
    setMenuActive((prev) => !prev);
  };

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
  const [isOpen, setIsOpen] = useState(false);

  const { lang, setLang } = useLanguage();
  const text = NAV_TEXT[lang];
  const list = FOOTER_TEXT[lang][0];
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div initial={{ y: -70, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="fixed top-0 left-0 w-full z-50 p-3">
          <div className="padding-global bg-background border rounded-md">
            <div className="py-[1.1em] flex md:grid grid-cols-5 justify-between items-center w-full">
              <Link href="/" className="col-span-1 bro-header text-base! lowercase!" scroll={true}>
                Fl1p<span className="bro-header text-base!">Dev</span>
              </Link>
              <div className="col-span-3 md:flex items-center justify-center gap-4 text-xs uppercase hidden ">
                {text.items.map((item, index) => (
                  <Link key={index} href={item.href} className="navbar-button">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="col-span-1 flex justify-end items-center gap-4">
                <AudioButton />

                <div className="text-sm text-nowrap hidden md:block">{time}</div>
                <button onClick={() => setLang(lang === "en" ? "mn" : "en")} className="pl-4 border-l border-border text-sm cursor-pointer hidden md:block">
                  {lang === "en" ? "EN" : "MN"}
                </button>

                <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
                  <DrawerTrigger className="border-border border size-10! rounded-full hover:bg-muted aspect-square cursor-pointer duration-150 z-[100]" asChild>
                    <Button variant={"outline"}>
                      <Menu />
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="relative">
                      <div className="flex items-center flex-row justify-between">
                        <DrawerTitle className="bro-header text-lg! font-bold lowercase!">
                          <Link href={"/"} onClick={() => setIsOpen(false)} scroll={true}>
                            fl1pDev
                          </Link>
                        </DrawerTitle>
                        <DrawerClose asChild className=" right-6 top-6 border-foreground size-10 border p-2 rounded-full hover:bg-foreground/15 cursor-pointer">
                          {/* <FollowButton> */}
                          <X className="size-2" />
                          {/* </FollowButton> */}
                        </DrawerClose>
                      </div>
                      <div className="flex flex-col h-full py-20 gap-6 relative sm:pl-6">
                        {list?.items.map((item, index) => (
                          <div className="flex items-start gap-2" key={index}>
                            <Label size={"xs"} className="pt-1">
                              [{item.id}]
                            </Label>
                            <Link href={item.href} onClick={() => setIsOpen(false)} scroll={true} className="bro-header text-4xl!">
                              <SplitText text={item.label} className="text-3xl sm:text-4xl lg:text-6xl leading-none!" />
                            </Link>
                          </div>
                        ))}
                      </div>
                    </DrawerHeader>

                    <DrawerFooter className="relative p-10 pr-6 gap-6">
                      <Button variant={"transparent"} onClick={() => setLang(lang === "en" ? "mn" : "en")} className="text-sm cursor-pointer border border-white w-fit mx-auto">
                        {lang === "en" ? "Change Language - EN" : "Хэл солих - Монгол"}
                      </Button>
                      <div className="flex gap-2 items-center">
                        <div className="h-[1px] bg-white w-full"></div>
                        <StarIcon className="size-4" />
                      </div>
                      <div className="flex items-center justify-between">
                        <AudioButton />

                        <div className="text-sm flex-nowrap">{time}</div>
                      </div>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
