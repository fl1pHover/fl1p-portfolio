import { label, s } from "motion/react-client";

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

export const TECH_TEXT = {
  en: {
    title: "Technologies I Use & My Experiences",
    desc: "Here are some of the technologies and tools I work with:",
  },
  mn: {
    title: "Би ашигладаг технологиуд & туршлага",
    desc: "Энд би ашигладаг зарим технологи ба хэрэгслүүд байна:",
  },
} as const;

export const TECH_LIST = [
  {
    label: "JavaScript",
    src: "/images/logo/javascript.svg",
    alt: "JavaScript Logo",
    url: "https://www.javascript.com/",
  },
  {
    label: "TypeScript",
    src: "/images/logo/typescript.svg",
    alt: "TypeScript Logo",
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    src: "/images/logo/react.svg",
    alt: "React Logo",
    url: "https://reactjs.org/",
  },
  {
    label: "Next.js",
    src: "/images/logo/nextjs.svg",
    alt: "Next.js Logo",
    url: "https://nextjs.org/",
  },
  {
    label: "Tailwind CSS",
    src: "/images/logo/tailwindcss.svg",
    alt: "Tailwind CSS Logo",
    url: "https://tailwindcss.com/",
  },
  {
    label: "Framer Motion",
    src: "/images/logo/motion.png",
    alt: "Framer Motion Logo",
    url: "https://www.framer.com/motion/",
  },
  {
    label: "Three.js",
    src: "/images/logo/threejs.svg",
    alt: "Three.js Logo",
    url: "https://threejs.org/",
  },
  {
    label: "GSAP",
    src: "/images/logo/gsap.svg",
    alt: "GSAP Logo",
    url: "https://greensock.com/gsap/",
  },
];
