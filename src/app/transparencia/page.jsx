import { Header } from "@/components/Header";
import { TopTitle } from "@/components/TopTitle";
import Link from "next/link";
import React from "react";

export default function Transparency() {
  return (
    <>
      <Header>
        <Link className="hover:text-terciary-1" href="/sobre">
          Sobre Nós
        </Link>
        <Link className="hover:text-terciary-1" href="#contact">
          Contato
        </Link>{" "}
      </Header>
      <main id="top">
        <TopTitle>Painel da Transparência</TopTitle>
      </main>
    </>
  );
}
