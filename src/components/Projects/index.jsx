import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Projects = ({ srcImg, title, link, resume }) => {
  return (
    <div className="bg-secundary-3 rounded-lg font-sans py-5  shadow-lg shadow-primary-2/50 overflow-hidden flex flex-col items-center justify-evenly gap-2">
      <Image
        src={srcImg}
        alt={title}
        quality={100}
        width={1000}
        height={100}
        className="w-1/2 md:w-3/5 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out object-cover"
      />
      <h2 className="text-terciary-2 text-xl   font-bold uppercase">
        {title}
      </h2>
      <p className="text-center w-4/5 text-primary-2  text-sm">{resume}</p>
      <div className="flex flex-col items-center justify-center">
        {!link ? (
          <p className="mt-4 px-4 py-1.5 rounded-md bg-terciary-2 text-white text-lg font-semibold shadow-lg shadow-primary-2/40">
            Em breve
          </p>
        ) : (
          <Link
            href={link}
            className="mt-4 px-4 py-1.5 rounded-md bg-terciary-2 text-white hover:bg-terciary-1 text-lg font-semibold shadow-lg shadow-primary-2/40"
          >
            Saiba mais
          </Link>
        )}
      </div>
    </div>
  );
};
