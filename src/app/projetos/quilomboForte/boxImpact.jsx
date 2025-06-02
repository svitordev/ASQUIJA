import React from "react";

export const BoxImpact = ({children, name, role}) => {
  return (
    <div className="border-l-4 border-terciary-1 rounded-lg py-3 px-3 3xl:px-12 space-y-3 shadow-lg shadow-terciary-2/40 text-primary-2 font-semibold flex flex-col bg-white">
      <p className="flex-1 md:pr-5 lg:pr-0 md:text-justify lg:text-start">
        {children}
      </p>
      <div>
        <p className="text-terciary-2 font-bold text-lg">{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};
