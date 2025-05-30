import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Projects = ({ srcImg, title, link, resume }) => {
  return (
    <div className="bg-secundary-3 rounded-lg border-2 py-5 border-primary-2 shadow-lg shadow-primary-2/50 overflow-hidden flex flex-col items-center justify-evenly gap-3 lg:gap-5">  
        <h2 className="text-terciary-2 text-xl xl:text-2xl font-sans font-bold uppercase">{title}</h2>
        <Image
          src={srcImg}
          alt={title}
          quality={100}
          width={1000}
          height={100}
          className="w-1/2 md:w-2/3 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out object-cover"
        />
        <p className="text-center w-4/5 text-primary-2">{resume}</p>
      <div className="flex flex-col items-center justify-center">
        {!link ? (
            <p className="mt-4 px-6 py-2 rounded-md bg-terciary-2 text-white text-lg font-semibold">
            Em breve
            </p>
        ):(
            <Link href={link} className="mt-4 px-6 py-2 rounded-md bg-terciary-2 text-white hover:bg-terciary-1 text-lg font-semibold">
            Saiba mais
            </Link>
        )}
            
        </div>
    </div>
  );
};
