import { s } from "motion/react-client";

export const HERO_TEXT = {
  en: {
    name: "Hi, I'm fl1p",
    title: "Frontend Developer",
    desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consequatur consequuntur laborum iste aut deleniti sequi aperiam magnam optio, officia mollitia! Nesciunt porro nemo illum quae mollitia doloribus tempora cum.",
    getInTouch: "Get in touch",
    seeWork: "See work",
    available: "Available to Work",
  },
  mn: {
    name: "Hi, I'm fl1p",
    title: `Frontend хөгжүүлэгч`,
    desc: "mgl text",
    getInTouch: "Холбогдох",
    seeWork: "Ажлуудыг үзэх",
    available: "Ажиллах боломжтой",
  },
} as const;

export const NAV_TEXT = {
  en: {
    items: [
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    sound: "Turn on Sound",
  },
  mn: {
    items: [
      { label: "Ажлууд", href: "/work" },
      { label: "Тухай", href: "/about" },
      { label: "Холбогдох", href: "/contact" },
    ],
    sound: "Дууг асаах",
  },
} as const;
