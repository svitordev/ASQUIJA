import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiSolidBank } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {
  return (
    <footer id="contact" className="">
      <div className="bg-primary-2 text-secundary-2 border-b border-secundary-3 py-8 px-6 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 flex flex-col  md:flex-row md:gap-8 justify-between">
        <div className="flex flex-col gap-2 sm:w-3/5  md:w-2/5">
          <Link href={"/"} className="items-center inline-flex gap-2">
            <Image
              width={1000}
              height={100}
              quality={100}
              className="w-10 md:w-12"
              src="/structure/logo.png"
              alt=""
            />
            <h1 className="text-xl md:text-2xl font-extrabold font-sans text-secundary-2">
              ASQUIJA
            </h1>
          </Link>

          <p className="md:text-lg">
            Associação Quilombola de João Alfredo - Preservando nossas raízes,
            fortalecendo nossa cultura e lutando pelos nossos direitos.
          </p>
          <div className="text-xl md:text-2xl flex gap-2">
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
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0  md:w-1/5">
          <h3 className="text-lg md:text-xl">Acesso Rápido</h3>
          <div className="flex flex-col h-20 md:h-full flex-wrap md:text-lg">
            <Link className="hover:text-terciary-1" href="/">
              Início
            </Link>
            <Link className="hover:text-terciary-1" href="/sobre">
              Sobre Nós
            </Link>
            <a className="hover:text-terciary-1" href="#news">
              Notícias
            </a>
            <a className="hover:text-terciary-1" href="#events">
              Eventos
            </a>
            <a className="hover:text-terciary-1" href="/transparencia">
              Transparência
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0  md:w-2/5">
          <h3 className="text-lg md:text-xl">Contato</h3>
          <div className="flex flex-col flex-wrap gap-1 md:text-lg">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-primary-1 text-lg md:text-lg" />
              <p>
                Rodovia SP-123, Km 15, Zona Rural, João Alfredo - PE, CEP
                55750-000
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaPhoneAlt className="text-primary-1" />
              <p>(12) 3456-7890</p>
            </div>

            <div className="flex gap-2 items-center">
              <IoIosMail className="text-primary-1 md:text-lg" />
              <p>contato@campoecomunidade.org.br</p>
            </div>
            <div className="flex gap-2 items-center">
              <BiSolidBank className="text-primary-1 md:text-lg" />
              <p>CNPJ: 43.018.113/0001-27</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-2 text-secundary-2 py-5 text-center md:text-lg">
        <p>
          © 2025 Associação Quilombola de João Alfredo (ASQUIJA). Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
};
