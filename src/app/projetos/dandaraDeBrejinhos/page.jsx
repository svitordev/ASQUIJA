import { BoxValues } from "@/components/BoxValues";
import { Tag } from "@/components/Tag";
import { Title } from "@/components/Title";
import { TopTitle } from "@/components/TopTitle";
import Image from "next/image";
import Link from "next/link";
import { FiTarget } from "react-icons/fi";
import { Footer } from "@/components/Footer";
import React from "react";
import { LinkInsta } from "./linkInsta";

export default function DandaraBrejinhos() {
  const imagens = [
    "/structure/dandara/imagem1.png",
    "/structure/dandara/imagem2.png",
  ];
  return (
    <>
      <main id="inicio">
        <TopTitle
          subTitle={"Movimento, Ancestralidade e Resistência"}
          parag={
            "Dança afro-contemporânea que, por meio de vivências em maculelê e ciranda, valoriza a ancestralidade, fortalece a cultura local e impulsiona o protagonismo de jovens mulheres negras."
          }
        >
          Grupo Dandara de Brejinhos
        </TopTitle>

        <section className="space-y-2 py-12 px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56">
          <Tag>
            <FiTarget /> Nossa História
          </Tag>

          <div className="flex justify-between items-center gap-5 lg:gap-0">
            <div className="flex flex-col md:hidden space-y-4">
              <Title>
                Dandara em Movimento — Ancestralidade, Arte e Protagonismo
                Feminino
              </Title>
              <div className="md:hidden space-y-4 text-justify text-secundary-4">
                <p>
                  O <strong>Grupo Dandara</strong> nasceu em{" "}
                  <strong>28 de julho de 2022</strong>, da união de jovens
                  apaixonadas pela arte e pela cultura afro. O ponto de partida
                  foi espontâneo: convites para apresentações em eventos e
                  espaços comunitários que, pouco a pouco, nos impulsionaram a
                  oficializar a caminhada artística.
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
                  Nossas criações têm inspiração afro, com foco em{" "}
                  <strong>maculelê e ciranda</strong>, para fortalecer origens e
                  ancestralidade. Cada apresentação é construída de forma{" "}
                  <strong>coletiva</strong>, com{" "}
                  <strong>dedicação, energia e respeito</strong>, buscando
                  transmitir <strong>representatividade, força e beleza</strong>{" "}
                  por meio da dança afro-contemporânea.
                </p>
                <Image
                  className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                  quality={100}
                  width={1000}
                  height={100}
                  src={imagens[1]}
                  alt=""
                />
                <p>
                  Mesmo diante dos desafios, seguimos firmes. Com{" "}
                  <strong>figurinos simples</strong> que resgatam o toque das
                  saias tradicionais e com poucos recursos, mantemos o propósito
                  de <strong>valorizar nossas raízes</strong> e levar adiante o
                  sonho de ver as{" "}
                  <strong>meninas Dandaras de João Alfredo</strong>{" "}
                  compartilhando sua alegria e arte com cada vez mais pessoas.
                </p>
                <p>
                  Mais que um grupo de palco, o Dandara é um movimento de{" "}
                  <strong>resistência, identidade e inspiração:</strong>{" "}
                  promovemos o diálogo cultural, o empoderamento feminino e o
                  orgulho de ser mulher preta, e buscamos parcerias que nos
                  ajudem a ampliar oportunidades e a fortalecer a cultura local.
                </p>
                <LinkInsta />
              </div>
            </div>

            <div className="hidden md:flex flex-col self-start space-y-6 w-1/2">
              <Title>
                 Dandara em Movimento — Ancestralidade, Arte e Protagonismo
                Feminino
              </Title>
              <div className="space-y-4 text-justify 2xl:w-4/5 text-secundary-4">
                <p>
                  O <strong>Grupo Dandara</strong> nasceu em{" "}
                  <strong>28 de julho de 2022</strong>, da união de jovens
                  apaixonadas pela arte e pela cultura afro. O ponto de partida
                  foi espontâneo: convites para apresentações em eventos e
                  espaços comunitários que, pouco a pouco, nos impulsionaram a
                  oficializar a caminhada artística.
                </p>

                <p>
                  Nossas criações têm inspiração afro, com foco em{" "}
                  <strong>maculelê e ciranda</strong>, para fortalecer origens e
                  ancestralidade. Cada apresentação é construída de forma{" "}
                  <strong>coletiva</strong>, com{" "}
                  <strong>dedicação, energia e respeito</strong>, buscando
                  transmitir <strong>representatividade, força e beleza</strong>{" "}
                  por meio da dança afro-contemporânea.
                </p>

                <p>
                  Mesmo diante dos desafios, seguimos firmes. Com{" "}
                  <strong>figurinos simples</strong> que resgatam o toque das
                  saias tradicionais e com poucos recursos, mantemos o propósito
                  de <strong>valorizar nossas raízes</strong> e levar adiante o
                  sonho de ver as{" "}
                  <strong>meninas Dandaras de João Alfredo</strong>{" "}
                  compartilhando sua alegria e arte com cada vez mais pessoas.
                </p>
                <p>
                  Mais que um grupo de palco, o Dandara é um movimento de{" "}
                  <strong>resistência, identidade e inspiração:</strong>{" "}
                  promovemos o diálogo cultural, o empoderamento feminino e o
                  orgulho de ser mulher preta, e buscamos parcerias que nos
                  ajudem a ampliar oportunidades e a fortalecer a cultura local.
                </p>
                 <LinkInsta />
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end space-y-6 w-1/2 xl:w-2/5">
              <Image
                  className="w-full rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                  quality={100}
                  width={1000}
                  height={100}
                  src={imagens[0]}
                  alt=""
                />
              <Image
                className="w-full  rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                quality={100}
                width={1000}
                height={100}
                src={imagens[1]}
                alt=""
              />
            </div>
          </div>
        </section>

        <section
          id="objetivos"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>Objetivos do Projeto</Title>
            <Tag>
              <FiTarget /> Nossos Objetivos
            </Tag>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues bg={true} title={"Fortalecimento da Ancestralidade e Identidade"}>
              <p className="text-secundary-4 ">
                Fortalecer os vínculos identitários por meio das danças de matriz africana (maculelê e ciranda), promovendo a valorização das raízes e o orgulho de ser mulher preta.
              </p>
            </BoxValues>
            <BoxValues bg={true} title={"Formação Artística e Protagonismo Feminino"}>
              <p className="text-secundary-4 ">
                Oferecer vivências e processos criativos em dança afro-contemporânea que desenvolvam técnica, expressão e liderança das jovens Dandaras.
              </p>
            </BoxValues>
            <BoxValues bg={true} title={"Circulação Cultural e Sustentabilidade do Grupo"}>
              <p className="text-secundary-4 ">
                Ampliar apresentações e parcerias na comunidade e região, captando apoios para figurinos e produção, garantindo a continuidade e a qualidade das ações.
              </p>
            </BoxValues>
          </div>
        </section>

        {/* <section
          id="atividades"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>Atividades Desenvolvidas</Title>
            <Tag>
              <FiTarget /> Atividades
            </Tag>
          </div>

          <p className="text-terciary-2 md:w-3/5 md:text-lg text-center">
            Fortalecer os vínculos identitários das crianças e adolescentes de
            Brejinhos, através de atividades de arte e educação, fortalecimento
            das raízes culturais de matriz africana e de suas expressões na
            arte, na cultura, na ética e na estética.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues bg={true}>
              <p className="text-secundary-4 w-4/5 mx-auto my-1">
                Realizar atividades voltadas para o resgate da história da
                comunidade;
              </p>
            </BoxValues>
            <BoxValues bg={true}>
              <p className="text-secundary-4 w-4/5 mx-auto my-1">
                Realizar oficinas de expressões da cultura afro-brasileiras,
                popular e/ou de matriz africana com crianças e adolescentes.
              </p>
            </BoxValues>
            <BoxValues bg={true}>
              <p className="text-secundary-4 w-4/5 mx-auto my-1">
                Realizar visitas pedagógicas espaços culturais e educacionais.
              </p>
            </BoxValues>
          </div>

          <p className="text-terciary-2 md:w-3/5 md:text-lg text-center">
            Contribuir para o exercício dos direitos fundamentais ao lazer,
            esporte, expressão, participação social e política, estabelecidos no
            Estatuto da Criança e do Adolescente.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues bg={true}>
              <p className="text-secundary-4">
                Realizar roda de diálogos sobre os direitos fundamentais e
                Sistema de Garantia de Direitos da criança e do adolescente.
              </p>
            </BoxValues>
            <BoxValues bg={true}>
              <p className="text-secundary-4">
                Proporcionar às crianças e adolescentes a participação em
                atividades de lazer, esporte recreação e vivência das
                manifestações culturais (Dia da Consciência Negra, Dia da Mulher
                Negra Latino-Americana e Caribenha e ciclos culturais diversos).
              </p>
            </BoxValues>
            <BoxValues bg={true}>
              <p className="text-secundary-4">
                Estimular a participação das crianças e adolescentes nos espaços
                de mobilização e de controle social do município.
              </p>
            </BoxValues>
          </div>

          <p className="text-terciary-2 md:w-3/5 md:text-lg text-center">
            Contribuir para o fortalecimento dos vínculos afetivos, a identidade
            camponesa e comunitária das crianças e adolescentes, bem como a
            identificação de alternativas para a geração de renda para os seus
            familiares/responsáveis na comunidade.
          </p>
          <div className="flex flex-col md:grid md:grid-cols-4 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues bg={true}>
              <p className="text-secundary-4">
                Realizar formação voltada para o empoderamento feminino, e a
                geração de renda baseada em atividades ligadas à cultura
                afro-brasileira e a estética negra.
              </p>
            </BoxValues>
            <BoxValues bg={true}>
              <p className="text-secundary-4">
                Realizar reuniões e vivências temáticas com as famílias (raça,
                gênero, etnia, direitos humanos, direitos da criança,
                diversidade cultural e religiosa).
              </p>
            </BoxValues>
            <BoxValues bg={true}>
              <p className="text-secundary-4">
                Atender e acompanhar os familiares das crianças e adolescentes.
              </p>
            </BoxValues>
            <BoxValues bg={true}>
              <p className="text-secundary-4">
                Realizar formação voltada à valorização da agricultura familiar
                e cultura camponesa
              </p>
            </BoxValues>
          </div>
        </section> */}

        {/* <section
          id="beneficiados"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>Público Beneficiado</Title>
            <Tag>
              <FiTarget /> Beneficiados
            </Tag>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 text-base font-semibold ">
            <BoxValues title={"Crianças (9-11 anos)"}>
              <p className="text-terciary-2 flex justify-center items-center flex-1 text-4xl">
                10
              </p>
            </BoxValues>
            <BoxValues title={"Adolescentes"}>
              <p className="text-terciary-2 flex justify-center items-center flex-1 text-4xl">
                30
              </p>
            </BoxValues>
            <BoxValues title={"Famílias"}>
              <p className="text-terciary-2 flex justify-center items-center flex-1 text-4xl">
                30
              </p>
            </BoxValues>
            <BoxValues title={"Moradores da comunidade"}>
              <p className="text-terciary-2 flex justify-center items-center flex-1 text-4xl">
                300
              </p>
            </BoxValues>
            <BoxValues title={"Profissionais da rede municipal"}>
              <p className="text-terciary-2 flex justify-center items-center flex-1 text-4xl">
                40
              </p>
            </BoxValues>
            <BoxValues title={"Parceiros"}>
              <p className="text-terciary-2 flex justify-center items-center flex-1 text-4xl">
                15
              </p>
            </BoxValues>
          </div>
        </section> */}

        <section
          id="metodologias"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>Metodologia</Title>
            <Tag>
              <FiTarget /> Metodologias
            </Tag>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues bg={true} title={"Planejamento e Alinhamento Artístico"}>
              <p className="text-secundary-4">
                Organização de ensaios, calendário de apresentações e divulgação; inscrições das participantes e “acordos de convivência” (contratos simbólicos) entre educandas e educadoras para garantir cuidado, pontualidade e respeito.
              </p>
            </BoxValues>
            <BoxValues bg={true} title={"Vivências de Dança e Valorização Cultural"}>
              <p className="text-secundary-4">
                Oficinas de maculelê e ciranda com preparação corporal e rítmica, rodas de conversa sobre ancestralidade e história afro-brasileira, canto e percussão — fortalecendo autoestima, pertencimento e identidade.
              </p>
            </BoxValues>
            <BoxValues bg={true} title={"Criação Coletiva, Figurino e Protagonismo"}>
              <p className="text-secundary-4">
                Processos colaborativos de montagem cênica (repertório, coreografias e trilhas), confecção de figurinos inspirados nas saias tradicionais e formação em produção cultural, comunicação e liderança para ampliar o protagonismo das jovens Dandaras.
              </p>
            </BoxValues>
          </div>
        </section>
      </main>
      <Footer>
        <Link className="hover:text-terciary-1" href="#objetivos">
          Objetivos
        </Link>
        {/* <Link className="hover:text-terciary-1" href="#atividades">
          Atividades
        </Link> */}
        <Link className="hover:text-terciary-1" href="#metodologias">
          Metodologias
        </Link>
      </Footer>
    </>
  );
}
