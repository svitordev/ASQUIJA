import { Tag } from "@/components/Tag";
import { Title } from "@/components/Title";
import React from "react";
import { FiTarget } from "react-icons/fi";
import { Events } from "./groupEvent";
import Image from "next/image";

export const SectionEvent = ({imagens, title}) => {
  const isVideo = (src) => {
    return /\.(mp4|webm|ogg)$/i.test(src);
  };
  return (
    <section
      id="eventos"
      className="flex flex-col  space-y-10 py-12 px-4 lg:px-12 xl:px-24 2xl:px-32 3xl:px-56"
    >
      <div className="space-y-2 w-full">
        <Title center={true}>Eventos</Title>
        <Tag>
          <FiTarget /> Eventos
        </Tag>
      </div>
      <div className="space-y-4">
        <Events title={title}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="grid gap-2.5">
              {imagens.first?.map((media, index) => (
                <div key={index}>
                  {isVideo(media) ? (
                    <video
                      controls
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    >
                      <source src={media} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  ) : (
                    <Image
                      src={media}
                      alt={imagens.alt || ""}
                      width={1000}
                      height={100}
                      quality={100}
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="grid gap-8">
              {imagens.second?.map((media, index) => (
                <div key={index}>
                  {isVideo(media) ? (
                    <video
                      controls
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    >
                      <source src={media} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  ) : (
                    <Image
                      src={media}
                      alt={imagens.alt || ""}
                      width={1000}
                      height={100}
                      quality={100}
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="grid gap-6">
              {imagens.third?.map((media, index) => (
                <div key={index}>
                  {isVideo(media) ? (
                    <video
                      controls
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    >
                      <source src={media} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  ) : (
                    <Image
                      src={media}
                      alt={imagens.alt || ""}
                      width={1000}
                      height={100}
                      quality={100}
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="grid gap-12">
              {imagens.fourth?.map((media, index) => (
                <div key={index}>
                  {isVideo(media) ? (
                    <video
                      controls
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    >
                      <source src={media} type="video/mp4" />
                      Seu navegador não suporta o elemento de vídeo.
                    </video>
                  ) : (
                    <Image
                      src={media}
                      alt={imagens.alt || ""}
                      width={1000}
                      height={100}
                      quality={100}
                      className="h-auto max-w-full rounded-lg object-cover object-center"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Events>
      </div>
    </section>
  );
};
