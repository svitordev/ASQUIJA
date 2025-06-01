"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { MobileMenu } from "./Menu/mobileMenu";
import { MenuPlus } from "./Menu/menu";
import Link from "next/link";
import Image from "next/image";
import { Socials } from "./Menu/socials";

export const Header = ({ children }) => {
  const [menuMobile, setMenuMobile] = useState(false);
  const menuIsOpen = () => setMenuMobile(true);
  const menuIsClose = () => setMenuMobile(false);
  return (
    <header className="py-3 flex justify-between items-center px-3 lg:px-12 xl:px-24 2xl:px-32 3xl:px-48  bg-primary-2 sticky top-0 z-50">
      <Link className="items-center inline-flex gap-2" href="/">
        <Image
          width={1000}
          height={100}
          quality={100}
          className="w-10 lg:w-12"
          src="/structure/asquija/logoAsquija.png"
          alt=""
        />
        <h1 className="text-2xl lg:text-3xl font-extrabold font-sans text-secundary-2">
          ASQUIJA
        </h1>
      </Link>

      <div className="relative text-sm">
        {!menuMobile ? (
          <div onClick={menuIsOpen} className="md:hidden  cursor-pointer p-2 ">
            <Menu className="text-secundary-2 size-8" />
          </div>
        ) : (
          <div onClick={menuIsClose} className="md:hidden cursor-pointer p-2">
            <X className="text-secundary-2 size-8" />
          </div>
        )}
        {menuMobile && (
          <MobileMenu>
            {children}
            <div className="h-[1px] w-20 md:w-[1px] md:h-10 bg-secundary-2"></div>
            <Socials />
          </MobileMenu>
        )}
        <MenuPlus>
          {children}
          <div className="h-[1px] w-20 md:w-[1px] md:h-10 bg-secundary-2"></div>
          <Socials />
        </MenuPlus>
      </div>
    </header>
  );
};
