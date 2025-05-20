import { Event } from "@/components/Events";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import React from "react";

export default function Events() {
  return (
    <>
      <Header />
      <section
        id="events"
        className="flex flex-col items-center justify-center space-y-10 py-12 px-2"
      >
        <Title>Próximos Eventos</Title>
        <div className="flex flex-col md:grid md:grid-cols-2 mx-4 lg:mx-20 gap-4 md:gap-3">
          <Event
            link="https://lucide.dev/icons/calendar"
            srcImg="https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg"
            title="Workshop de Práticas Sustentáveis"
            date="04 de abril de 2025"
            hours="09:00"
            location="Associação dos Agricultores do Sítio Lagoa Funda"
          />
          <Event
            link="https://lucide.dev/icons/calendar"
            srcImg="https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg"
            title="Workshop de Práticas Sustentáveis"
            date="04 de abril de 2025"
            hours="09:00"
            location="Associação dos Agricultores do Sítio Lagoa Funda"
          />
          <Event
            link="https://lucide.dev/icons/calendar"
            srcImg="https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg"
            title="Workshop de Práticas Sustentáveis"
            date="04 de abril de 2025"
            hours="09:00"
            location="Associação dos Agricultores do Sítio Lagoa Funda"
          />
          <Event
            link="https://lucide.dev/icons/calendar"
            srcImg="https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg"
            title="Workshop de Práticas Sustentáveis"
            date="04 de abril de 2025"
            hours="09:00"
            location="Associação dos Agricultores do Sítio Lagoa Funda"
          />
        </div>
      </section>
    </>
  );
}
