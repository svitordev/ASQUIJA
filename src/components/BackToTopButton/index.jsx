"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDropup } from "react-icons/io";


export const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.8) {
        setIsVisible(true); 
      } else {
        setIsVisible(false); 
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      isVisible && ( 
          <Link href="#inicio" className="fixed w-12 h-12 bottom-24 md:bottom-20 lg:bottom-4 right-4 rounded-full flex justify-center items-center bg-terciary-2 text-secundary-1">
          <IoIosArrowDropup className="w-full h-full"/>
          </Link>
          
      )
    );
  };