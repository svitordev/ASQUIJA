import { Calendar } from "lucide-react";
import Image from "next/image";
import React from "react";

export const New = ({ srcImg, link, title, date, resume }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-stone-300 rounded-lg border-2 border-secundary-3 hover:border-primary-2 shadow-lg shadow-secundary-3/80 hover:shadow-primary-2/50 overflow-hidden "
    >
      <Image
        className="w-full rounded-t-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
        quality={100}
        width={1000}
        height={100}
        src={srcImg}
        alt=""
      />

      <div className="py-4 px-2 space-y-2">
        <h3 className="text-terciary-2 font-bold text-lg md:text-xl">
          {title}
        </h3>
        <span className="flex gap-1 items-center text-primary-2 text-sm md:text-base">
          <Calendar size={16} /> {date}
        </span>
        <p className="text-primary-2 md:text-lg">{resume}</p>
      </div>
    </a>
  );
};
