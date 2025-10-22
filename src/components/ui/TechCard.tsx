import { LinkArrowIcon } from "@/lib/icons";
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

      <LinkArrowIcon className="size-0 group-hover:size-6 duration-75 absolute top-2 right-2" />

      <span className="text-xs uppercase bottom-2 left-2 absolute opacity-0 group-hover:opacity-100 duration-75">[ {text} ]</span>
    </Link>
  );
};

export default TechCard;
