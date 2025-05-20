import { Header } from "@/components/Header";
import { New } from "@/components/New";
import { Title } from "@/components/Title";
import React from "react";

export default function News() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center space-y-10 py-12 px-2">
        <Title>Últimas Notícias</Title>
        <div className="flex flex-col md:grid md:grid-cols-3 mx-4 lg:mx-20 gap-4 md:gap-3">
          <New
            link="https://lucide.dev/icons/calendar"
            srcImg="https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg"
            title="Nova Lei Beneficia Quilombolas"
            date="04 de abril de 2025"
            resume="Aprovada lei que garante novos direitos às comunidades quilombolas em todo o país."
          />
          <New
            link="https://lucide.dev/icons/calendar"
            srcImg="https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg"
            title="Nova Lei Beneficia Quilombolas"
            date="04 de abril de 2025"
            resume="Aprovada lei que garante novos direitos às comunidades quilombolas em todo o país."
          />
          <New
            link="https://lucide.dev/icons/calendar"
            srcImg="https://static.vecteezy.com/ti/fotos-gratis/t2/36324708-ai-gerado-cenario-do-uma-tigre-caminhando-dentro-a-floresta-foto.jpg"
            title="Nova Lei Beneficia Quilombolas"
            date="04 de abril de 2025"
            resume="Aprovada lei que garante novos direitos às comunidades quilombolas em todo o país."
          />
        </div>
      </section>
    </>
  );
}
