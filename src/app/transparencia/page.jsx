import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { TopTitle } from "@/components/TopTitle";
import Link from "next/link";
import React from "react";
import { IoDocumentText } from "react-icons/io5";

export default function Transparency() {
  const files = [
    {
      text: "Fundação da ASQUIJA",
      src: "/structure/documents/fundação-asquija.pdf",
    },
    {
      text: "Estatuto da ASQUIJA",
      src: "/structure/documents/estatuto-asquija.pdf",
    },
    {
      text: "Regulamento Interno ASQUIJA",
      src: "/structure/documents/regulamento-interno-asquija.pdf",
    },
    {
      text: "Posse 2024",
      src: "/structure/documents/posse-2024.pdf",
    },
  ];
  return (
    <>
      <Header>
        <Link className="hover:text-terciary-1" href="/">
          Página Principal
        </Link>
        <Link className="hover:text-terciary-1" href="/sobre">
          Sobre Nós
        </Link>
      </Header>
      <main id="top">
        <TopTitle>Painel da Transparência</TopTitle>
        <section className=" space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-44 3xl:px-72">
          <Title>Compromisso com a Transparência</Title>
          <div className="space-y-3">
            {files.map((file, index) => (
              <a
                key={index}
                href={file.src}
                className="flex items-center gap-2 text-primary-2 hover:text-primary-1 text-lg"
                target="_blank"
                rel="noopener"
              >
                <IoDocumentText /> {file.text}
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer>
        <Link className="hover:text-terciary-1" href="/">
          Página Principal
        </Link>
        <Link className="hover:text-terciary-1" href="/sobre">
          Sobre Nós
        </Link>
      </Footer>
    </>
  );
}
