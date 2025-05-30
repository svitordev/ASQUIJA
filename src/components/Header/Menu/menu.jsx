import React from "react";

export const MenuPlus = ({ children }) => {
  return (
    <nav className="hidden md:flex items-center gap-5  font-serif text-terra-800 font-bold bg-primary-2 text-secundary-2 md:text-sm lg:text-base">
      {children}
    </nav>
  );
};
