"use client";
import ProcesoSection from "@/components/ProcesoSection";
import Servicios from "@/components/Servicios";
import Hero from "@/components/HeroDifuminado";
import Resultados from "@/components/Resultados";
import { FAQSection } from "@/components/FAQSection";
import { Mission } from "@/components/Mission";
import { Valores } from "@/components/Valores";
import  {Stats}  from "@/components/Stats";

export default function HomePage() {
  return (
    <div className="font-sans text-texto ">
      <main className="flex flex-col gap-44 ">
        <Hero />
        <Resultados />
        <Servicios />
        <Mission />
        <Valores />
        <Stats />
        <ProcesoSection />
        <FAQSection />
      </main>

    </div>
  );
}
