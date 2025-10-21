import { motion } from "framer-motion";
import TechCard from "../ui/TechCard";
import { TECH_LIST, TECH_TEXT } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function Techs() {

   const { lang, setLang } = useLanguage();
   const text = TECH_TEXT[lang];


  return (
    <div className="h-[200vh] py-20">
      <div className="h-6 border-y border-white flex items-center relative max-w-screen overflow-x-hidden">
        <motion.div className="flex items-center flex-nowrap absolute left-[50%] -translate-x-[50%] gap-x-1.5">
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="w-[1.5px] h-3 bg-white"
              style={{
                transform: `rotate(20deg)`,
                transformOrigin: "top left",
              }}
            />
          ))}
          <h6 className="text-[10px] px-2 uppercase text-nowrap pt-0.5">{text.title}</h6>
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              className="w-[1.5px] h-3 bg-white"
              style={{
                transform: `rotate(20deg)`,
                transformOrigin: "top left",
              }}
            />
          ))}
        </motion.div>
      </div>
      <div className="grid grid-cols-8">
        {TECH_LIST.map((item, i) => {
          return (
            <div key={i}>
              <TechCard text={item.label} alt={item.alt} src={item.src} url={item.url} />
            </div>
          );
        })}
      </div>
      <div className="h-6 border-y border-white flex items-center relative max-w-screen overflow-x-hidden">
        <div className="flex items-center flex-nowrap absolute left-[50%] -translate-x-[50%] gap-x-1.5">
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className="w-[1.5px] h-3 bg-white"
              style={{
                transform: `rotate(20deg)`,
                transformOrigin: "top left",
              }}
            />
          ))}
          <h6 className="text-[10px] px-2 uppercase text-nowrap pt-0.5">{text.title}</h6>
          {[...Array(300)].map((_, i) => (
            <div
              key={i}
              className="w-[1.5px] h-3 bg-white"
              style={{
                transform: `rotate(20deg)`,
                transformOrigin: "top left",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
