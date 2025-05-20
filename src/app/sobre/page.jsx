import { Header } from "@/components/Header";
import { Tag } from "@/components/Tag";
import { Title } from "@/components/Title";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { FaCertificate } from "react-icons/fa";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BoxValues } from "@/components/BoxValues";
import { TeamMember } from "@/components/TeamMember";

export default function About() {
  return (
    <>
      <Header>
        <Link className="hover:text-terciary-1" href="/">
          Início
        </Link>
        <Link className="hover:text-terciary-1" href="#sobre">
          Sobre Nós
        </Link>
        <Link className="hover:text-terciary-1" href="#diretrizes">
          Diretrizes
        </Link>
        <Link className="hover:text-terciary-1" href="#equipe">
          Diretoria
        </Link>
        <Link className="hover:text-terciary-1" href="#contact">
          Contato
        </Link>{" "}
      </Header>

      <div
        id="sobre"
        className="home w-full h-24 md:h-36 lg:h-44 flex flex-col items-center justify-center gap-6 lg:gap-12 text-center"
      >
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-sans font-bold">
          Sobre Nós
        </h1>
      </div>

      <section className="space-y-2 py-12 px-2 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56">
        <Tag>
          <FaClockRotateLeft /> Nossa História
        </Tag>

        <div className="flex justify-between items-center gap-5 lg:gap-0">
          <div className="flex flex-col md:hidden space-y-4">
            <Title>
              Uma trajetória de resistência, ancestralidade e fortalecimento
              comunitário
            </Title>
            <div className="md:hidden space-y-4 text-justify text-secundary-4">
              <p>
                A Associação Quilombola Raízes Vivas foi fundada em 2010, a
                partir da união de lideranças comunitárias que buscavam
                fortalecer a identidade cultural, garantir os direitos
                territoriais e promover melhores condições de vida para as
                famílias quilombolas da região. O que começou com encontros
                entre moradores se transformou em uma organização reconhecida
                pela sua luta e compromisso com a justiça social e o legado
                ancestral.
              </p>
              <Image
                className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                quality={100}
                width={1000}
                height={100}
                src={"/structure/bgQuilombola.webP"}
                alt=""
              />
              <p>
                Ao longo dos anos, nossa associação ampliou suas ações, firmando
                parcerias com instituições públicas e organizações da sociedade
                civil, desenvolvendo projetos voltados à educação, geração de
                renda, valorização cultural e proteção ambiental.
              </p>
              <Image
                className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                quality={100}
                width={1000}
                height={100}
                src={"/structure/bgQuilombola.webP"}
                alt=""
              />
              <p>
                Atualmente, somos mais de 300 associados e contamos com uma
                estrutura que oferece apoio jurídico, técnico e social às
                comunidades quilombolas, sempre guiados pelos princípios da
                coletividade, resistência histórica e dignidade para todas as
                gerações.
              </p>
            </div>
          </div>

          <div className="hidden md:flex flex-col self-start space-y-6 w-1/2">
            <Title>
              Uma trajetória de resistência, ancestralidade e fortalecimento
              comunitário
            </Title>
            <div className="space-y-4 text-justify 2xl:w-3/4 text-secundary-4">
              <p>
                A Associação Quilombola Raízes Vivas foi fundada em 2010, a
                partir da união de lideranças comunitárias que buscavam
                fortalecer a identidade cultural, garantir os direitos
                territoriais e promover melhores condições de vida para as
                famílias quilombolas da região. O que começou com encontros
                entre moradores se transformou em uma organização reconhecida
                pela sua luta e compromisso com a justiça social e o legado
                ancestral.
              </p>

              <p>
                Ao longo dos anos, nossa associação ampliou suas ações, firmando
                parcerias com instituições públicas e organizações da sociedade
                civil, desenvolvendo projetos voltados à educação, geração de
                renda, valorização cultural e proteção ambiental.
              </p>

              <p>
                Atualmente, somos mais de 300 associados e contamos com uma
                estrutura que oferece apoio jurídico, técnico e social às
                comunidades quilombolas, sempre guiados pelos princípios da
                coletividade, resistência histórica e dignidade para todas as
                gerações.
              </p>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-end space-y-6 w-1/2 xl:w-2/5">
            <Image
              className="w-full lg:w-4/5 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
              quality={100}
              width={1000}
              height={100}
              src={"/structure/bgQuilombola.webP"}
              alt=""
            />
            <Image
              className="w-full lg:w-4/5 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
              quality={100}
              width={1000}
              height={100}
              src={"/structure/bgQuilombola.webP"}
              alt=""
            />
          </div>
        </div>
      </section>

      <section id="diretrizes" className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40">
        <div className="space-y-2 w-full">
          <Title center={true}>O que nos orienta</Title>
          <Tag>
            <FiTarget /> Nossos Princípios
          </Tag>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
          <BoxValues title={"Missão"}>
            <p className="text-secundary-4 ">
              Preservar e fortalecer a identidade cultural e territorial da
              comunidade quilombola do Sítio Bretinhos, promovendo o
              desenvolvimento sustentável e a garantia dos direitos individuais
              e coletivos de seus moradores.
            </p>
          </BoxValues>
          <BoxValues title={"Visão"}>
            <p className="text-secundary-4 ">
              Ser uma comunidade autônoma, reconhecida por sua rica herança
              cultural, pela preservação de seu território tradicional e pela
              qualidade de vida de seus habitantes, tornando-se referência entre
              as comunidades quilombolas do Brasil.
            </p>
          </BoxValues>
          <BoxValues title={"Valores"}>
            <ul className="flex flex-col items-start  list-disc pl-3 text-secundary-4">
              <li>Coletividade e solidariedade</li>
              <li>Respeito aos ancestrais e tradições</li>
              <li>Preservação ambiental</li>
              <li>Educação e cultura</li>
              <li>Equidade e justiça social</li>
              <li>Resistência e autonomia</li>
            </ul>
          </BoxValues>
        </div>
      </section>

      <section id="equipe" className="space-y-14 py-12 px-2 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56">
        <div className="flex flex-col items-center gap-2 w-full text-center">
          <Title center={true}>Conheça quem faz a diferença</Title>
          <Tag>
            <FaCertificate /> Nossa Equipe
          </Tag>
          <p className="text-secundary-4 md:w-3/5 md:text-lg">
            Nossa equipe é formada por lideranças comprometidas com a
            valorização da cultura quilombola, a defesa dos direitos das
            comunidades e a construção de um futuro mais justo, coletivo e
            enraizado na ancestralidade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0">
          <TeamMember name="Carlos Eduardo" role="Presidente" src={"/structure/perfil.png"} />
          <TeamMember name="Carlos Eduardo" role="Presidente" src={"/structure/perfil.png"} />
          <TeamMember name="Carlos Eduardo" role="Presidente" src={"/structure/perfil.png"} />
          <TeamMember name="Carlos Eduardo" role="Presidente" src={"/structure/perfil.png"} />
        </div>
      </section>
    </>
  );
}
