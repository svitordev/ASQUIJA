import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

export const Socials = () => {
  return (
    <div className="text-2xl  flex gap-2">
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 pointer-events-none"
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
      <a
        href="https://"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 pointer-events-none"
      >
        <FaYoutube />
      </a>
    </div>
  );
};
