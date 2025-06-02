import { Header } from "@/components/Header";
import { Tag } from "@/components/Tag";
import { Title } from "@/components/Title";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { FaCertificate } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BoxValues } from "@/components/BoxValues";
import { TeamMember } from "@/components/TeamMember";
import { TopTitle } from "@/components/TopTitle";
import { Footer } from "@/components/Footer";

export default function About() {
  const members = [
    {
      name: "Genilson Severino",
      role: "Fundador",
      src: "/structure/team/GenilsonFundador.jpg",
    },
    {
      name: "Missilene Santana",
      role: "Presidenta",
      src: "/structure/team/PreMisselene.jpg",
    },
    {
      name: "Maria Martins",
      role: "Diretora Financeira",
      src: "/structure/team/noUser.png",
    },
    {
      name: "Ruan Santos",
      role: "Secretário Geral",
      src: "/structure/team/noUser.png",
    },
  ];
  const imagens = [
    "/structure/asquija/sobre1.png",
    "/structure/asquija/sobre2.webp",
    "/structure/asquija/sobre3.jpg",
  ];
  return (
    <>
      <Header>
        <Link className="hover:text-terciary-1 md:hidden lg:block" href="/">
          Página Principal
        </Link>
        <Link className="hover:text-terciary-1" href="#diretrizes">
          Diretrizes
        </Link>
        <Link className="hover:text-terciary-1" href="#equipe">
          Diretoria
        </Link>
        <Link className="hover:text-terciary-1" href="#contact">
          Contato
        </Link>
        <Link
          className="bg-terciary-1 hover:bg-primary-1 px-2 py-1.5 text-white rounded-md"
          href="/transparencia"
        >
          Transparência
        </Link>{" "}
      </Header>
      <main id="inicio">
        <TopTitle>Sobre Nós</TopTitle>

        <section className="space-y-2 py-12 px-2 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56">
          <Tag>
            <FaClockRotateLeft /> Nossa História
          </Tag>

          <div className="flex justify-between items-center gap-5 lg:gap-0">
            <div className="flex flex-col md:hidden space-y-4">
              <Title>
                Uma trajetória de resistência, cultura popular e compromisso com
                a infância
              </Title>
              <div className="md:hidden space-y-4 text-justify text-secundary-4">
                <p>
                  A ASQUIJA – Associação Sociocultural Quilombola de João
                  Alfredo – é uma Organização da Sociedade Civil (OSC) com
                  atuação no Povoado Brejinhos, em João Alfredo-PE. Desde antes
                  de sua formalização em 2015, já promovia ações culturais por
                  meio do Maracatu, mobilizando a comunidade local em torno da
                  arte negra e da cultura quilombola.
                </p>
                <div className="flex justify-between">
                  <Image
                    className="w-[49%] rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                    quality={100}
                    width={1000}
                    height={100}
                    src={imagens[1]}
                    alt=""
                  />
                  <Image
                    className="w-[49%] rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                    quality={100}
                    width={1000}
                    height={100}
                    src={imagens[2]}
                    alt=""
                  />
                </div>
                <p>
                  A associação nasce do desejo coletivo de fortalecer a
                  identidade cultural e promover a justiça social para crianças,
                  adolescentes e famílias em situação de vulnerabilidade.
                  Comprometida com a valorização das raízes ancestrais, atua
                  também na luta pelo reconhecimento do território como
                  remanescente de quilombo, processo que tramita na Fundação
                  Palmares desde 2021.
                </p>
                <Image
                  className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                  quality={100}
                  width={1000}
                  height={100}
                  src={imagens[0]}
                  alt=""
                />
                <p>
                  Ao longo de sua história, a ASQUIJA tem marcado presença em
                  importantes encontros e festivais, como o Festival de Inverno
                  de Garanhuns e o Encontro Nacional de Quilombolas –
                  Aquilombar, reafirmando seu papel como agente de transformação
                  cultural e social.
                </p>
                <p>
                  Diante dos desafios impostos pelo contexto político e
                  econômico atual, a associação tem intensificado suas ações em
                  defesa dos direitos das infâncias e juventudes, buscando
                  alternativas de proteção, geração de renda e fortalecimento
                  comunitário.
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-col self-start space-y-6 w-1/2">
              <Title>
                Uma trajetória de resistência, cultura popular e compromisso com
                a infância
              </Title>
              <div className="space-y-4 text-justify 2xl:w-3/4 text-secundary-4">
                <p>
                  A ASQUIJA – Associação Sociocultural Quilombola de João
                  Alfredo – é uma Organização da Sociedade Civil (OSC) com
                  atuação no Povoado Brejinhos, em João Alfredo-PE. Desde antes
                  de sua formalização em 2015, já promovia ações culturais por
                  meio do Maracatu, mobilizando a comunidade local em torno da
                  arte negra e da cultura quilombola.
                </p>

                <p>
                  A associação nasce do desejo coletivo de fortalecer a
                  identidade cultural e promover a justiça social para crianças,
                  adolescentes e famílias em situação de vulnerabilidade.
                  Comprometida com a valorização das raízes ancestrais, atua
                  também na luta pelo reconhecimento do território como
                  remanescente de quilombo, processo que tramita na Fundação
                  Palmares desde 2021.
                </p>

                <p>
                  Ao longo de sua história, a ASQUIJA tem marcado presença em
                  importantes encontros e festivais, como o Festival de Inverno
                  de Garanhuns e o Encontro Nacional de Quilombolas –
                  Aquilombar, reafirmando seu papel como agente de transformação
                  cultural e social.
                </p>
                <p>
                  Diante dos desafios impostos pelo contexto político e
                  econômico atual, a associação tem intensificado suas ações em
                  defesa dos direitos das infâncias e juventudes, buscando
                  alternativas de proteção, geração de renda e fortalecimento
                  comunitário.
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end space-y-3 w-1/2 xl:w-2/5">
              <div className="flex gap-3 justify-end">
                <Image
                  className="w-full md:w-[49%]  lg:w-2/5 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                  quality={100}
                  width={1000}
                  height={100}
                  src={imagens[1]}
                  alt=""
                />
                <Image
                  className="w-full md:w-[49%] lg:w-2/5 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                  quality={100}
                  width={1000}
                  height={100}
                  src={imagens[2]}
                  alt=""
                />
              </div>

              <Image
                className="w-full lg:w-[82%] rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                quality={100}
                width={1000}
                height={100}
                src={imagens[0]}
                alt=""
              />
            </div>
          </div>
        </section>

        <section
          id="diretrizes"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>O que nos orienta</Title>
            <Tag>
              <FiTarget /> Nossos Princípios
            </Tag>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues title={"Missão"}>
              <p className="text-secundary-4 ">
                Fortalecer a identidade cultural e a organização comunitária da
                população do Povoado Brejinhos, com foco na arte negra e na
                cultura quilombola, promovendo o desenvolvimento humano, a
                proteção integral de crianças e adolescentes e a garantia de
                direitos às famílias em situação de vulnerabilidade.
              </p>
            </BoxValues>
            <BoxValues title={"Visão"}>
              <p className="text-secundary-4 ">
                Ser referência como organização comprometida com a cultura
                popular, a justiça social e o reconhecimento do território
                quilombola, contribuindo para a construção de uma comunidade
                forte, unida, autônoma e protagonista de sua própria história.
              </p>
            </BoxValues>
            <BoxValues title={"Valores"}>
              <p className="text-secundary-4 ">
                Cultivamos o compromisso com a cultura afro-brasileira e
                quilombola, a defesa da infância e juventude, a solidariedade, a
                dignidade e a resistência. Valorizamos a educação popular, a
                justiça social, a equidade racial e a preservação da memória e
                do território.
              </p>
            </BoxValues>
          </div>
        </section>

        <section
          id="estatuto"
          className="space-y-14 py-12 px-2 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 text-center"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>Estatuto da Associação</Title>
            <Tag>
              <IoDocumentText /> Estatuto
            </Tag>
          </div>
          <div className="flex flex-col gap-2 items-center w-full">
            <p className="text-secundary-4 md:text-lg">
              Conheça as diretrizes que orientam nossas ações e compromissos.{" "}
              <br /> Baixe o estatuto completo da ASQUIJA abaixo:
            </p>
            <div className="flex gap-2">
              <a
                href="/structure/estatuto-asquija.pdf"
                className="flex items-center gap-2 px-5 py-3 bg-secundary-1 hover:bg-secundary-3 rounded-full text-primary-2 shadow-md shadow-secundary-4/30"
                target="_blank"
                rel="noopener"
              >
                <IoDocumentText /> Baixar Estatuto
              </a>
              <Link
                className="bg-terciary-2 hover:bg-primary-1 px-5 py-3 text-white rounded-full"
                href="/transparencia"
              >
                Transparência
              </Link>
            </div>
          </div>
        </section>

        <section
          id="equipe"
          className="space-y-14 py-12 px-2 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <div className="flex flex-col items-center gap-2 w-full text-center">
            <Title center={true}>Conheça quem faz a diferença</Title>
            <Tag>
              <FaCertificate /> Nossa Equipe
            </Tag>
            <p className="text-secundary-4 md:w-3/5 md:text-lg">
              Nossa equipe é composta por lideranças comunitárias e defensores
              dos direitos quilombolas que atuam com dedicação no fortalecimento
              da cultura popular, no cuidado com as infâncias e na luta por
              justiça social. São pessoas comprometidas com a transformação do
              território, guiadas pela ancestralidade, pela coletividade e pela
              construção de um amanhã mais digno para todas as gerações.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-0">
            {members.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                src={member.src}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer>
        <Link className="hover:text-terciary-1" href="/">
          Página Principal
        </Link>
        <Link className="hover:text-terciary-1" href="#diretrizes">
          Diretrizes
        </Link>
        <Link className="hover:text-terciary-1" href="#equipe">
          Diretoria
        </Link>
        <Link className="hover:text-terciary-1" href="#contact">
          Contato
        </Link>
        <Link className="hover:text-terciary-1" href="/transparencia">
          Transparência
        </Link>{" "}
      </Footer>
    </>
  );
}
