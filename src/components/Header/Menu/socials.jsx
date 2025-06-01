import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export const Socials = () => {
  return (
    <div className="text-2xl  flex gap-2">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/associacaoquilombolaa/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110"
      >
        <FaInstagram />
      </a>
    </div>
  );
};
