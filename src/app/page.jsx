import { New } from "@/components/New";
import { BoxValues } from "@/components/BoxValues";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Event } from "@/components/Events";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Header>
        <Link className="hover:text-terciary-1" href="#inicio">
          Início
        </Link>
        <Link className="hover:text-terciary-1" href="/sobre">
          Sobre Nós
        </Link>
        <Link className="hover:text-terciary-1" href="#news">
          Notícias
        </Link>
        <Link className="hover:text-terciary-1" href="#events">
          Eventos
        </Link>
        <Link className="hover:text-terciary-1" href="#contact">
          Contato
        </Link>{" "}
      </Header>
      <main id="inicio">
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
        <section className=" space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56">
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
          id="news"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-3 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56 bg-secundary-1/40"
        >
          <div className="flex flex-col w-full items-center md:items-start">
            <Title>Últimas Notícias</Title>
            {/* <Link
              href="/noticias"
              className="flex items-center gap-2 self-end text-terciary-1 hover:text-terciary-2 md:text-lg"
            >
              Ver mais <FaArrowRight className="text-base" />
            </Link> */}
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-3">
            <New
              link="https://lucide.dev/icons/calendar"
              srcImg="/structure/bgQuilombola.webp"
              title="Nova Lei Beneficia Quilombolas"
              date="04 de abril de 2025"
              resume="Aprovada lei que garante novos direitos às comunidades quilombolas em todo o país."
            />
            <New
              link="https://lucide.dev/icons/calendar"
              srcImg="/structure/bgQuilombola.webp"
              title="Nova Lei Beneficia Quilombolas"
              date="04 de abril de 2025"
              resume="Aprovada lei que garante novos direitos às comunidades quilombolas em todo o país."
            />
            <New
              link="https://lucide.dev/icons/calendar"
              srcImg="/structure/bgQuilombola.webp"
              title="Nova Lei Beneficia Quilombolas"
              date="04 de abril de 2025"
              resume="Aprovada lei que garante novos direitos às comunidades quilombolas em todo o país."
            />
          </div>
        </section>
        <section
          id="events"
          className="flex flex-col items-center justify-center space-y-10 py-12 px-2 md:px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56"
        >
          <div className="flex flex-col w-full items-center md:items-start">
            <Title>Próximos Eventos</Title>
            {/* <Link
              href="/eventos"
              className="flex items-center gap-2 self-end text-terciary-1 hover:text-terciary-2 md:text-lg"
            >
              Ver mais <FaArrowRight className="text-base" />
            </Link> */}
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 gap-4  md:gap-3 w-full">
            <Event
              link="https://lucide.dev/icons/calendar"
              srcImg="/structure/bgQuilombola.webp"
              title="Workshop de Práticas Sustentáveis"
              date="04 de abril de 2025"
              hours="09:00"
              location="Associação dos Agricultores do Sítio Lagoa Funda"
            />
            <Event
              link="https://lucide.dev/icons/calendar"
              srcImg="/structure/bgQuilombola.webp"
              title="Workshop de Práticas Sustentáveis"
              date="04 de abril de 2025"
              hours="09:00"
              location="Associação dos Agricultores do Sítio Lagoa Funda"
            />
          </div>
        </section>
      </main>
    </>
  );
}
