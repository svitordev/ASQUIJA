import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Event = ({ srcImg, link, title, date, hours, location  }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white hover:bg-stone-300 rounded-lg border-2 border-secundary-3 hover:border-primary-2 shadow-lg shadow-secundary-3/80 hover:shadow-primary-2/50 overflow-hidden flex w-full"
    >

      <Image
        className="h-auto w-2/5 rounded-l-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
        quality={100}
        width={1000}
        height={100}
        src={srcImg}
        alt=""
      />

      <div className="py-4 px-4 space-y-2">
        <h3 className="text-terciary-2 font-bold text-lg md:text-xl">{title}</h3>
        <div className="space-y-2 text-sm md:text-base">
          <span className="flex gap-1 items-center justify-start text-primary-2 ">
            <Calendar size={16} /> {date}
          </span>
          <span className="flex gap-1 items-center text-primary-2 ">
            <Clock  size={16} /> {hours}
          </span>
          <span className="flex gap-1 items-center text-primary-2 ">
            <MapPin size={16} /> {location}
          </span>
        </div>
      </div>
    </a>
  );
};
