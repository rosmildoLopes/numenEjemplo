"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Definimos la interfaz para el tipo de datos de las preguntas y respuestas
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué tipo de resultados puedo esperar?",
    answer:
      "Nuestro objetivo principal es potenciar tu presencia online, generar un flujo constante de leads cualificados y, en última instancia, impulsar un crecimiento sostenible en tus ventas.",
  },
  {
    question: "¿Cuánto tiempo se tarda en ver los resultados?",
    answer:
      "El tiempo varía según la estrategia. Servicios como Google Ads pueden mostrar resultados iniciales en cuestión de semanas. Sin embargo, para un impacto duradero y un posicionamiento sólido, como con el SEO, implementamos un enfoque a largo plazo con optimizaciones continuas.",
  },
  {
    question: "¿Sus servicios son personalizados para cada negocio?",
    answer:
      "Absolutamente. Creemos firmemente que cada empresa es única. Por eso, nos dedicamos a comprender tus objetivos específicos y a diseñar estrategias de marketing digital completamente personalizadas que se alineen con tu marca y tu público.",
  },
  {
    question: "¿Ofrecen alguna garantía de satisfacción?",
    answer:
      "Nuestro compromiso es con tu éxito. Trabajamos con total transparencia y mantenemos una comunicación constante, proporcionándote informes detallados para que siempre estés al tanto del progreso y los resultados que estamos logrando juntos.",
  },
];

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100/80 to-gray-100" id="faq">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent text-sm font-medium mb-4">
            Aclaramos tus Dudas
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aquí resolvemos las consultas más comunes que recibimos sobre nuestros servicios y el proceso de trabajo.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <Card
              key={index}
              className="hover-lift border-0 shadow-md bg-white/90 backdrop-blur-sm transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg text-foreground hover:text-main transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  {item.question}
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`px-6 pb-6 text-muted-foreground transition-all duration-500 ease-in-out ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}