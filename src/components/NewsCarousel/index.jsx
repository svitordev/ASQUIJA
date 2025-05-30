'use client';
import { Carousel } from "@material-tailwind/react";
import { News } from "./news";
export const CarouselNews = () => {
    const noticias = [
  {
    title: "Quilombo Forte inicia atividades culturais",
    srcImg: "/structure/bgQuilombola.webp",
    link: "https://example.com/noticia1"
  },
  {
    title: "Crianças quilombolas participam de oficinas de dança",
    srcImg: "/structure/bgQuilombola.webp",
    link: "https://example.com/noticia2"
  },
  {
    title: "Educação e identidade: reforço escolar no Quilombo",
    srcImg: "/structure/bgQuilombola.webp",
    link: "https://example.com/noticia3"
  }
];

  return (
    <Carousel transition={{ duration: 1 }} autoplay={true} autoplayDelay={5000} loop={true} className="rounded-xl w-full md:w-[90%] h-72 md:h-64 lg:h-80 xl:h-96 3xl:h-[450px]">
      {noticias.map((noticia, index) => (
        <News key={index} link={noticia.link} srcImg={noticia.srcImg} title={noticia.title}/>
      ))}
    </Carousel>
  );
};
