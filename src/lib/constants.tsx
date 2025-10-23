import { ins, label, s } from "motion/react-client";
import { title } from "process";

export const INTRO_TEXT = {
  en: {
    title: "Welcome to my Portfolio",
  },
  mn: {
    title: "Миний портфолиод тавтай морил",
  },
};

export const HERO_TEXT = {
  en: {
    name: "Hi, I'm fl1p",
    title: "Frontend Developer",
    desc: "Hello, I’m Bishubazar, a Front-End Developer passionate about creating user-friendly and visually appealing web experiences. I build interactive websites using React, Next.js, and Tailwind CSS.",
    getInTouch: "Get in touch",
    seeWork: "See work",
    available: "Available to Work",
  },
  mn: {
    name: "Hi, I'm fl1p",
    title: `Frontend хөгжүүлэгч`,
    desc: "Сайн байна уу, Намайг Бишүбазар гэдэг. Хэрэглэгчдэд ээлтэй, харагдах байдал сайтай бүтээлч вэб бүтээх сонирхолтой Front-End хөгжүүлэгч. React, Next.js, Tailwind CSS ашиглан интерактив вэбсайтуудыг хийдэг.",
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
    title: "Technologies I Use & Learn",
    desc: "Here are some of the technologies and tools I work with:",
  },
  mn: {
    title: "Ашигладаг & сурч байгаа технологиуд",
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

export const WORK_TEXT = {
  en: {
    title1: "Projects I",
    title2: "worked on",
    description: "During my studies, I worked on web development projects both independently and during internships. These projects gave me valuable experience, strengthened my skills, and formed the foundation for creating this portfolio.",
    button: "Get in Touch",
    status: "Newbie Graduated Developer",
    view: "View site",
  },
  mn: {
    title1: "Хийсэн",
    title2: "ажлууд",
    description: "Сурч байх хугацаандаа хувиараа болон дадлагын үеэр гүйцэтгэсэн веб хөгжүүлэлтийн ажлууд. Эдгээр ажлууд нь туршлага болж мэдлэг чадварыг маань бататган энэхүү портфолиог бүтээх үндэс болсон.",
    button: "Холбогдох",
    status: "Шинэхэн төгсөгч",
    view: "Сайт үзэх",
  },
};

export const WORK_LIST = [
  {
    id: "001",
    title: "Space-boi - UFE Creative Contest",
    url: "",
  },
  {
    id: "002",
    title: "lorem",
    url: "",
  },
  {
    id: "003",
    title: "lorem",
    url: "",
  },
  {
    id: "004",
    title: "lorem",
    url: "",
  },
  {
    id: "005",
    title: "lorem",
    url: "",
  },
  {
    id: "006",
    title: "lorem",
    url: "",
  },
];

export const ABOUT_TEXT = {
  en: {
    title: "Call me Bishu",
    name: "Bishubazar Sosorburam",
    status: "Newbie Graduated Student",
    description: "I hold a Bachelor's degree in Information Systems and am passionate about working as a Front-End Developer. I have successfully gained hands-on experience through projects and internships in positions such as Front-End Developer and UX Designer. I am deeply interested in web development and design, with the ability to quickly learn new technologies. I possess strong teamwork, problem-solving, and time management skills. I am responsible, adaptable, and continuously strive to develop my professional abilities and acquire new knowledge.",
    cv: "Download CV",
    eduTitle1: "Education &",
    eduTitle2: "Certifications",
  },
  mn: {
    title: "Call me Bishu",
    name: "Сосорбурам Бишүбазар",
    status: "Шинэхэн төгсөгч",
    description: "Мэдээллийн системийн бакалавр боловсролтой, Frontend хөгжүүлэгчээр ажиллах сонирхолтой. Front-End Developer, UX Designer зэрэг албан тушаалд төслүүд дээр дадлагажигчаар амжилттай ажилласан туршлатай. Вэб хөгжүүлэлт, дизайны чиглэлд сонирхолтой бөгөөд шинэ технологиудыг хурдан сурах чадвартай. Багаар ажиллах, асуудал шийдвэрлэх, цагийн менежмент зэрэг ур чадваруудтай. Хариуцлагатай, дасан зохицох чадвартай. Мэргэжлийн ур чадвараа хөгжүүлэхийн тулд тасралтгүй суралцаж, шинэ мэдлэгийг эзэмшихийг зорьдог.",
    cv: "CV татах",
    eduTitle1: "Боловсрол &",
    eduTitle2: "Гэрчилгээнүүд",
  },
};

export const EDUCATION_LIST = {
  en: [
    {
      year: "2020-2025",
      title: "Bachelor's Degree in Information Systems Management",
      institution: "UFE",
      url: "https://ufe.edu.mn/en/c/76?departmentId=13",
      image: "/images/ufe.png",
    },
    {
      year: "2025",
      title: "Foundations of Web Development: CSS, Bootstrap, JS, React",
      institution: "Udemy",
      url: "https://www.udemy.com/certificate/UC-861b27e8-6751-466b-b1b5-94f435d4fb0d/",
      image: "/images/udemy.jpg",
    },
    {
      year: "2025",
      title: "Introduction of Front-End development",
      institution: "Meta",
      url: "https://www.coursera.org/account/accomplishments/certificate/TMDDU2Z91FA8",
      image: "/images/coursera.png",
    },
  ],
  mn: [
    {
      year: "2020-2025",
      title: "Мэдээллийн Систем Менежментийн Баколаврын зэрэг",
      institution: "UFE",
      url: "https://ufe.edu.mn/en/c/76?departmentId=13",
      image: "/images/ufe.png",
    },
    {
      year: "2025",
      title: "Foundations of Web Development: CSS, Bootstrap, JS, React",
      institution: "Udemy",
      url: "https://www.udemy.com/certificate/UC-861b27e8-6751-466b-b1b5-94f435d4fb0d/",
      image: "/images/udemy.jpg",
    },
    {
      year: "2025",
      title: "Introduction of Front-End development",
      institution: "Meta",
      url: "https://www.coursera.org/account/accomplishments/certificate/TMDDU2Z91FA8",
      image: "/images/coursera.png",
    },
  ],
};

export const CONTACT_TEXT = {
  en: {
    title1: "Contact",
    title2: "information",
    description: "I may not yet have real-world work experience, but I have a strong desire to learn, grow, and gain practical skills. I created this portfolio to demonstrate my knowledge and abilities. If you are interested in hiring me, please feel free to contact me. I would be happy to collaborate with you. Thank you.",
    button: "Currently not working",
    contactNote: "Can’t find an answer to your question? Feel free to write down.",
  },
  mn: {
    title1: "Холбоо барих",
    title2: "Мэдээлэл",
    description: "Бодит ажлын байранд ажиллаж байсан туршлага хараахан байхгүй ч, туршлага хуримтлуулах, суралцах, өөрийгөө хөгжүүлэх чин хүсэлтэй билээ. Энэхүү портфолиог мэдлэг, ур чадвараа батлан харуулах зорилгоор бүтээлээ. Хэрэв ажилд авах сонирхолтой байвал холбогдоорой гэж хүсье. Хамтран ажиллахад баяртай байх болно. Баярлалаа.",
    button: "Одоогоор ажиллахгүй байгаа",
    contactNote: "Асуултынхаа хариуг олж чадахгүй байвал чөлөөтэй бичээд үлдээгээрэй.",
  },
};

// contact-info.ts
export const CONTACT_INFO = {
  en: [
    { title: "Email", type: "email", value: "bishu.hover@gmail.com" },
    { title: "Phone", type: "phone", value: "(976) 9620-8458" },
    {
      title: "Socials",
      socials: [
        { title: "LinkedIn", icon: "linkedin.svg", url: "https://www.linkedin.com/in/bishubazar-sosorburam-767410226/" },
        { title: "Instagram", icon: "instagram.svg", url: "https://www.instagram.com/s_bishu04/" },
        { title: "Telegram", icon: "telegram.svg", url: "https://t.me/fl1ppppp" },
      ],
    },
  ],
  mn: [
    { title: "Имэйл", type: "email", value: "bishu.hover@gmail.com" },
    { title: "Утас", type: "phone", value: "(976) 9620-8458" },
    {
      title: "Сошиал хаяг",
      socials: [
        { title: "LinkedIn", icon: "linkedin.svg", url: "https://www.linkedin.com/in/bishubazar-sosorburam-767410226/" },
        { title: "Instagram", icon: "instagram.svg", url: "https://www.instagram.com/s_bishu04/" },
        { title: "Telegram", icon: "telegram.svg", url: "https://www.instagram.com/" },
      ],
    },
  ],
};

// contact-form.ts
export const CONTACT_FORM = {
  en: [
    { label: "Company name?", placeholder: "Company name", type: "input" },
    { label: "Company email?", placeholder: "name@company.com", type: "input" },
    {
      label: "What skills do you think are important to learn?",
      placeholder: "React, UI/UX, teamwork etc - feel free to write. Thank you.",
      type: "textarea",
    },
  ],
  mn: [
    { label: "Танай компаний нэр?", placeholder: "Компаний нэр", type: "input" },
    { label: "Компаний имэйл?", placeholder: "name@company.com", type: "input" },
    {
      label: "Ямар ур чадваруудыг сурах хэрэгтэй гэж бодож байна вэ?",
      placeholder: "React, UI/UX, багийн ажиллагаа гэх мэт...",
      type: "textarea",
    },
  ],
};

// faq.ts
export const FAQ_TEXT = {
  en: {
    title1: "FREQUENTLY",
    title2: "ASKED QUESTIONS",
    list: [
      {
        question: "What university did you graduate from?",
        answer: "I graduated from the University of Finance and Economics (UFE), majoring in Information Systems. Through my coursework, I gained in-depth knowledge in programming, UI/UX design, business strategy, and IT management.",
      },
      {
        question: "Where did you learn to code?",
        answer: "Aside from university classes, I practiced on the 1234.mn platform and spent most of my time learning independently through YouTube tutorials and videos from international professionals. I’ve built several projects using React, Next.js, and Tailwind CSS — including this portfolio itself.",
      },
      {
        question: "Why are you interested in becoming a Front-End developer?",
        answer: "Since childhood, I’ve loved drawing and painting, which helped me develop a strong sense of color and aesthetics. Combining that with my passion for technology, I want to create visually appealing and user-friendly digital experiences.",
      },
      {
        question: "What are your future career goals?",
        answer: "I aim to specialize in UX and front-end development, creating high-quality web projects recognized on international platforms like Awwwards.com. My goal is to become a globally competitive designer and developer.",
      },
      {
        question: "What are your strengths?",
        answer: "I’m highly motivated to keep improving myself and can quickly adapt to new technologies or environments. Once I start something, I stay persistent until I finish it — I’d describe myself as a ‘keep trying’ person.",
      },
    ],
  },
  mn: {
    title1: "ТҮГЭЭМЭЛ",
    title2: "АСУУЛТУУД",
    list: [
      { question: "Ямар сургууль төгссөн бэ?", answer: "Санхүү Эдийн Засгийн Их Сургууль (СЭЗИС)-ийн Мэдээллийн Системийн ангийг төгссөн. Мэргэжлийн хичээлүүдээр дамжуулан программчлал, UI/UX дизайн, бизнесийн стратеги болон мэдээллийн технологийн менежмент зэрэг чиглэлээр гүнзгий мэдлэг олж авсан." },
      { question: "Хаана код бичиж сурсан бэ?", answer: "Сургуулийн хичээлээс гадна 1234.mn платформ. Ихэнх цаг хугацааг YouTube-ийн эх сурвалжууд, гадаад мэргэжилтнүүдийн бичлэгүүдийг үзэж бие даан сурсан. React, Next.js, Tailwind зэрэг технологиудаар төслүүд хийж практик туршлага хуримтлуулсан. Энэ портфолиогоо бас хийсэн байгаа." },
      { question: "Яагаад Front-End хөгжүүлэгч болох сонирхолтой байна вэ?", answer: "Багаасаа зураг зурж, буддаг байсан учир хараа болон гоо зүйн мэдрэмж дажгүй. Энэ чадвараа компьютерын сониролтойгоо уялдуулан технологийн салбарт ашиглан хэрэглэгчдэд нүд булаасан, сонирхолтой, ойлгомжтой интерфэйс бүтээхэд ашиглахыг хүсдэг." },
      { question: "Ирээдүйн карьерын зорилго чинь юу вэ?", answer: "UX болон фронтенд хөгжүүлэлтийн чиглэлээр гүнзгийрч, Awwwards.com зэрэг олон улсын платформд үнэлэгдэх чанартай веб бүтээл гаргахыг хүсч байна. Олон улсын түвшинд өрсөлдөх чадвартай болохыг хүсдэг" },
      { question: "Давуу тал чинь юу вэ?", answer: "Өөрийгөө тасралтгүй хөгжүүлэх хүсэл эрмэлзэлтэй, аливаа шинэ зүйлд хурдан дасан зохицдог. Нэг зүйлд төвлөрч эхэлсэн бол дуусгах хүртлээ оролддог, keep trying хүн гэж өөрийгөө тодорхойлдог." },
    ],
  },
};

export const FOOTER_TEXT = {
  en: [
    {
      title: "overview",
      items: [
        { id: "01", label: "home", href: "/" },
        { id: "02", label: "work", href: "/work" },
        { id: "03", label: "about", href: "/about" },
        { id: "04", label: "contact", href: "/contact" },
      ],
    },
    {
      title: "social",
      items: [
        { id: "05", label: "linkedin", href: "https://www.linkedin.com/in/bishubazar-sosorburam-767410226/" },
        { id: "06", label: "instagram", href: "https://www.instagram.com/s_bishu04/" },
        { id: "07", label: "telegram", href: "https://t.me/fl1ppppp" },
      ],
    },
    {
      title: "contact",
      items: [
        { id: "08", label: "96208458", href: "tel:+97696208458" },
        { id: "09", label: "bishu.hover@gmail.com", href: "mailto:bishu.hover@gmail.com" },
      ],
    },
  ],
  mn: [
    {
      title: "цэс",
      items: [
        { id: "01", label: "Нүүр", href: "/" },
        { id: "02", label: "Ажлууд", href: "/work" },
        { id: "03", label: "Тухай", href: "/about" },
        { id: "04", label: "Холбогдох", href: "/contact" },
      ],
    },
    {
      title: "сошиал",
      items: [
        { id: "05", label: "linkedin", href: "https://www.linkedin.com/in/bishubazar-sosorburam-767410226/" },
        { id: "06", label: "instagram", href: "https://www.instagram.com/s_bishu04/" },
        { id: "07", label: "telegram", href: "https://t.me/fl1ppppp" },
      ],
    },
    {
      title: "холбогдох",
      items: [
        { id: "08", label: "96208458", href: "tel:+97696208458" },
        { id: "09", label: "bishu.hover@gmail.com", href: "mailto:bishu.hover@gmail.com" },
        // { id: "15", label: "AWWWARDS", href: "/work" },
      ],
    },
  ],
};
