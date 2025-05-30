import { BoxValues } from "@/components/BoxValues";
import { Header } from "@/components/Header";
import { CarouselNews } from "@/components/NewsCarousel";
import { Projects } from "@/components/Projects";
import { Title } from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Header>
        <Link className="hover:text-terciary-1" href="/sobre">
          Sobre Nós
        </Link>
        <Link className="hover:text-terciary-1" href="#projects">
          Projetos
        </Link>
        <Link className="hover:text-terciary-1" href="#news">
          Noticias
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
      <main id="top">
        <section className="home w-full h-full lg:h-dvh py-16 flex flex-col items-center justify-center gap-6 lg:gap-12 text-center">
          <h1 className="text-secundary-2 text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-sans font-bold md:w-4/5 xl:w-3/5">
            Associação Quilombola <br /> de João Alfredo
          </h1>
          <p className="text-primary-1 md:text-lg xl:text-xl font-sans px-4 md:px-2 md:w-3/5 lg:w-2/4">
            Trabalhamos para valorizar a identidade, os saberes e os modos de
            vida das comunidades quilombolas, promovendo a justiça social, o
            desenvolvimento sustentável e o respeito às tradições.
          </p>
          <Link
            href="/sobre"
            className="text-white flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-terciary-1 hover:bg-terciary-2 md:text-lg xl:text-xl"
          >
            Conheça nossa missão <FaArrowRight className="text-base" />{" "}
          </Link>
        </section>

        <section className=" space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-44 3xl:px-72">
          <div className="flex flex-col items-center justify-center text-center space-y-5">
            <Title center={true}>Missão, Visão e Valores</Title>
            <p className="text-terciary-2 md:w-3/5 md:text-lg">
              Trabalhamos com dedicação para preservar a cultura quilombola,
              promover a autonomia das comunidades e fortalecer a identidade e
              os saberes ancestrais.
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3 text-base font-semibold ">
            <BoxValues bg={true} title={"Missão"}>
              <p className="text-secundary-4 ">
                Preservar e fortalecer a identidade cultural e territorial da
                comunidade quilombola do Sítio Bretinhos, promovendo o
                desenvolvimento sustentável e a garantia dos direitos
                individuais e coletivos de seus moradores.
              </p>
            </BoxValues>
            <BoxValues bg={true} title={"Visão"}>
              <p className="text-secundary-4 ">
                Ser uma comunidade autônoma, reconhecida por sua rica herança
                cultural, pela preservação de seu território tradicional e pela
                qualidade de vida de seus habitantes, tornando-se referência
                entre as comunidades quilombolas do Brasil.
              </p>
            </BoxValues>
            <BoxValues bg={true} title={"Valores"}>
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

        <section
          id="projects"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <Title>Nossos Projetos</Title>

          <div className="flex flex-col md:grid md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-3">
            <Projects
              srcImg="/structure/quilomboForteLogo.png"
              title="Quilombo Forte"
              resume={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos voluptatem vel magni aut fuga corrupti eligendi rem."}
              link=""
            />
            <Projects
              srcImg="/structure/logo.png"
              title="Mão na Massa"
              resume={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eos voluptatem vel magni aut fuga corrupti eligendi rem."}
              link=""
            />
          </div>
        </section>

        <section
          id="news"
          className="flex flex-col space-y-12 md:space-y-0 md:flex-row py-12 px-2 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56"
        >
          <div className="w-full md:w-2/3 2xl:w-3/5 space-y-10">
            <Title>Notícias</Title>
            <CarouselNews />
          </div>
          <div className="w-full md:w-1/3 2xl:w-2/5 space-y-10">
            <Title center={true}>Redes Sociais</Title>
            <div className="flex h-4/5 flex-col justify-start gap-10 lg:gap-12 2xl:gap-16 3xl:gap-20 items-center">
              <div className="text-7xl lg:text-8xl 2xl:text-[115px] 3xl:text-9xl flex gap-3 text-terciary-2 ">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 hover:text-terciary-1"
                >
                  <FaFacebook />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 hover:text-terciary-1"
                >
                  <FaInstagram />
                </a>
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 hover:text-terciary-1"
                >
                  <FaYoutube />
                </a>
              </div>
              <div className="w-2/5 md:w-3/5 2xl:w-1/2  h-0.5 bg-secundary-3"></div>
              <Link
                className="bg-terciary-2 hover:bg-terciary-1 px-4 py-2 text-white rounded-md lg:text-lg 2xl:text-2xl"
                href="/transparencia"
              >
                Transparência
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
