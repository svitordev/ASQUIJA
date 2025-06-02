import { BoxValues } from "@/components/BoxValues";
import { Tag } from "@/components/Tag";
import { Title } from "@/components/Title";
import { TopTitle } from "@/components/TopTitle";
import Image from "next/image";
import Link from "next/link";
import { FiTarget } from "react-icons/fi";
import { BoxImpact } from "./boxImpact";
import { Footer } from "@/components/Footer";


export default function QuilomboForte() {
  const imagens = [
    "/structure/asquija/sobre1.png",
    "/structure/asquija/sobre1.png",
  ];
  return (
    <>
      
      <main id="inicio">
        <TopTitle
          subTitle={"Cultura, educação e geração de renda"}
          parag={
            "Contribuindo para a proteção e desenvolvimento integral de crianças e adolescentes quilombolas"
          }
        >
          Projeto Quilombo Forte
        </TopTitle>

        <section className="space-y-2 py-12 px-2 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56">
          <Tag>
            <FiTarget /> Nossa História
          </Tag>

          <div className="flex justify-between items-center gap-5 lg:gap-0">
            <div className="flex flex-col md:hidden space-y-4">
              <Title>
                Cultura, educação e geração de renda como caminhos para o
                fortalecimento quilombola
              </Title>
              <div className="md:hidden space-y-4 text-justify text-secundary-4">
                <p>
                  O Projeto Quilombo Forte é uma iniciativa da ASQUIJA que visa
                  contribuir para a proteção e o desenvolvimento integral de
                  crianças, adolescentes e suas famílias da comunidade
                  quilombola de Brejinhos, em João Alfredo – PE.
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
                  Com foco na valorização da identidade étnico-racial, no
                  fortalecimento dos vínculos afetivos e comunitários e na
                  promoção da cidadania, o projeto desenvolve oficinas de danças
                  afro e populares, atividades de arte e educação, rodas de
                  diálogo e vivências culturais que estimulam o protagonismo
                  juvenil e a autoestima.
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
                  Além disso, promove ações voltadas à geração de renda e ao
                  empoderamento feminino, por meio de formações em culinária
                  afro-brasileira, estética negra, confecção de figurinos e
                  instrumentos musicais, empreendedorismo e valorização da
                  agricultura familiar.
                </p>
                <p>
                  O Quilombo Forte também atua em parceria com a rede
                  socioassistencial e órgãos públicos, promovendo o acesso a
                  políticas de proteção social, saúde e educação. Com uma
                  abordagem comunitária e participativa, o projeto fortalece a
                  cultura quilombola como instrumento de transformação social.
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-col self-start space-y-6 w-1/2">
              <Title>
                Cultura, educação e geração de renda como caminhos para o
                fortalecimento quilombola
              </Title>
              <div className="space-y-4 text-justify 2xl:w-4/5 text-secundary-4">
                <p>
                  O Projeto Quilombo Forte é uma iniciativa da ASQUIJA que visa
                  contribuir para a proteção e o desenvolvimento integral de
                  crianças, adolescentes e suas famílias da comunidade
                  quilombola de Brejinhos, em João Alfredo – PE.
                </p>

                <p>
                  Com foco na valorização da identidade étnico-racial, no
                  fortalecimento dos vínculos afetivos e comunitários e na
                  promoção da cidadania, o projeto desenvolve oficinas de danças
                  afro e populares, atividades de arte e educação, rodas de
                  diálogo e vivências culturais que estimulam o protagonismo
                  juvenil e a autoestima.
                </p>

                <p>
                  Além disso, promove ações voltadas à geração de renda e ao
                  empoderamento feminino, por meio de formações em culinária
                  afro-brasileira, estética negra, confecção de figurinos e
                  instrumentos musicais, empreendedorismo e valorização da
                  agricultura familiar.
                </p>
                <p>
                  O Quilombo Forte também atua em parceria com a rede
                  socioassistencial e órgãos públicos, promovendo o acesso a
                  políticas de proteção social, saúde e educação. Com uma
                  abordagem comunitária e participativa, o projeto fortalece a
                  cultura quilombola como instrumento de transformação social.
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end space-y-6 w-1/2 xl:w-2/5">
              <Image
                className="w-full lg:w-4/5 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
                quality={100}
                width={1000}
                height={100}
                src={imagens[0]}
                alt=""
              />
              <Image
                className="w-full lg:w-4/5 rounded-md hover:scale-105 transition-transform duration-300 ease-in-out object-cover"
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
          className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>Objetivos do Projeto</Title>
            <Tag>
              <FiTarget /> Nossos Objetivos
            </Tag>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues title={"Fortalecimento da Identidade"}>
              <p className="text-secundary-4 ">
                Fortalecer os vínculos identitários através de atividades de
                arte e educação, valorizando as raízes culturais de matriz
                africana.
              </p>
            </BoxValues>
            <BoxValues title={"Exercício de Direitos"}>
              <p className="text-secundary-4 ">
                Contribuir para o exercício dos direitos fundamentais ao lazer,
                esporte, expressão e participação social e política.
              </p>
            </BoxValues>
            <BoxValues title={"Geração de Renda"}>
              <p className="text-secundary-4 ">
                Identificar alternativas para geração de renda baseada na
                cultura afro-brasileira e estética negra para famílias da
                comunidade.
              </p>
            </BoxValues>
          </div>
        </section>

        <section
          id="atividades"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56"
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
        </section>

        <section
          id="beneficiados"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
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
        </section>

        <section
          id="metodologias"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>Metodologia</Title>
            <Tag>
              <FiTarget /> Metodologias
            </Tag>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues bg={true} title={"Planejamento e Alinhamento"}>
              <p className="text-secundary-4">
                Organização das ações, divulgação e inscrições. Elaboração de
                contratos simbólicos com educandos e educadores.
              </p>
            </BoxValues>
            <BoxValues bg={true} title={"Valorização Cultural"}>
              <p className="text-secundary-4">
                Reflexão sobre a contribuição dos povos africanos e constituição
                dos quilombos. Atividades de dança, percussão e cidadania.
              </p>
            </BoxValues>
            <BoxValues bg={true} title={"Formação e Empoderamento"}>
              <p className="text-secundary-4">
                Formações para geração de renda, empoderamento feminino e
                fortalecimento dos vínculos familiares e comunitários.
              </p>
            </BoxValues>
          </div>
        </section>

        <section
          id="impacto"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <div className="space-y-2 w-full">
            <Title center={true}>Impacto na Comunidade</Title>
            <Tag>
              <FiTarget /> Impacto
            </Tag>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base ">
            <BoxImpact name={"Missilene Santana"} role={"Presidenta"}>
              O projeto tem sido fundamental para que nossos jovens se
              reconheçam e valorizem suas raízes. Ver as crianças orgulhosas de
              sua identidade quilombola é o maior presente.
            </BoxImpact>
            <BoxImpact name={"André Lima"} role={"Pai de Participante"}>
              Através das oficinas de dança e percussão, nossa filha desenvolveu
              autoestima. O Quilombo Forte transformou nossa família.
            </BoxImpact>
            <BoxImpact name={"Bruna Martins"} role={"Estudante Participante"}>
              Eu não sabia quase nada sobre a cultura quilombola, mas nas
              oficinas aprendi muito. Agora, me sinto parte e quero levar esse
              conhecimento adiante.
            </BoxImpact>
          </div>
        </section>
      </main>
      <Footer>
        <Link className="hover:text-terciary-1" href="/">
          Página Principal
        </Link>
        <Link className="hover:text-terciary-1" href="#objetivos">
          Objetivos
        </Link>
        <Link className="hover:text-terciary-1" href="#atividades">
          Atividades
        </Link>
        <Link className="hover:text-terciary-1" href="#beneficiados">
          Beneficiados
        </Link>
        <Link className="hover:text-terciary-1" href="#metodologias">
          Metodologias
        </Link>
        <Link className="hover:text-terciary-1" href="#impacto">
          Impacto
        </Link>
      </Footer>
    </>
  );
}
