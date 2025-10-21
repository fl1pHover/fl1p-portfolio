import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TechCardProps {
  src: string;
  alt: string;
  text: string;
  url?: string;
}

const TechCard: React.FC<TechCardProps> = ({ src, alt, text, url }) => {
  return (
    <Link href={url || "#"} target="_blank" className="bg-black aspect-6/5 duration-75 group flex flex-col items-center justify-center p-4 hover:bg-white/10 hover:border-x inset-0 border-border relative">
      <Image src={src} alt={alt} width={200} height={200} className="max-h-1/2 max-w-1/2 object-contain text-white " />

      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 17" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" className="size-0 group-hover:size-6 duration-75 absolute top-2 right-2">
        <path d="M5.4968 12.8921L14.665 3.72391M14.665 3.72391V11.9352M14.665 3.72391L6.62624 3.72391" stroke="currentColor"></path>
        <path d="M0 16.3636V0H3.27273V0.971592H1.08665V15.392H3.27273V16.3636H0Z" fill="currentColor"></path>
        <path d="M20.9048 0V16.3636H17.6321V15.392H19.8182V0.971592H17.6321V0H20.9048Z" fill="currentColor"></path>
      </svg>
      {/* <h1 className="mt-2 text-center text-sm font-medium">{text}</h1> */}

      <span className="text-xs uppercase bottom-2 left-2 absolute opacity-0 group-hover:opacity-100 duration-75">[ {text} ]</span>
    </Link>
  );
};

export default TechCard;
