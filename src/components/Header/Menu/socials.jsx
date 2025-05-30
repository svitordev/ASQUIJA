import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export const Socials = () => {
  return (
    <>
      <div className="h-[1px] w-20 md:w-[1px] md:h-10 bg-secundary-2"></div>
      <div className="text-2xl md:text-3xl flex gap-2">
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
    </>
  );
};
