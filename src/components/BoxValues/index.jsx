import React from "react";

export const BoxValues = ({ bg, title, children }) => {
  return (
    <div className={`border border-terciary-1 rounded-lg ${bg ? ("bg-secundary-1/40") : ("bg-white")}  text-center  py-6 px-6 md:py-3 md:px-3 space-y-3 shadow-lg shadow-secundary-3/80`}>
      <h3 className="text-terciary-2 font-bold text-xl">{title}</h3>
      {children}
    </div>
  );
};
