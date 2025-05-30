import React from "react";

export const MobileMenu = ({children}) => {
  return (
    <nav
      className="bg-primary-2 md:hidden flex items-center border border-secundary-3 flex-col gap-3 absolute right-0 top-[4.55rem] py-4 px-4 w-40 rounded-xl z-50 text-center font-serif text-secundary-2 font-bold"
    >
      {children}
    </nav>
  );
};
