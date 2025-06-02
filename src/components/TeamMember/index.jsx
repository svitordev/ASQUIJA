import Image from "next/image";
import React from "react";

export const TeamMember = ({name, role, src}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        className="w-1/2 h-full rounded-full hover:scale-105 transition-transform duration-300 ease-in-out object-cover "
        quality={100}
        width={2000}
        height={100}
        src={src}
        alt={`Foto do ${role} da ASQUIJA, ${name}.`}
      />
      <div className="text-center">
        <h3 className="text-terciary-2 font-bold text-lg">{name}</h3>
        <span className="text-secundary-4">{role}</span>
      </div>
    </div>
  );
};
