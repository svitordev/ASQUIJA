'use client';
import { Carousel } from "@material-tailwind/react";
import { News } from "./news";
import { news } from "@/data/news";
export const CarouselNews = () => {
    

  return (
    <Carousel transition={{ duration: 1 }} autoplay={true} autoplayDelay={5000} loop={true} className="rounded-xl w-full md:w-[90%] h-72 md:h-64 lg:h-80 xl:h-96 3xl:h-[450px] shadow-lg shadow-primary-2/50 font-sans">
      {news.map((noticia, index) => (
        <News key={index} link={noticia.link} srcImg={noticia.srcImg} title={noticia.title}/>
      ))}
    </Carousel>
  );
};
