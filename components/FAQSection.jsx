// src/components/FAQSection.jsx (o .tsx)
"use client"; // Marca este componente como un Client Component si usa useState

import React, { useState } from "react";
// Si usas motion de framer-motion para animaciones, impórtalo:
// import { motion } from "framer-motion";

const FAQSection = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      question: "¿Qué tipo de resultados puedo esperar?",
      answer:
        "Nuestro objetivo es aumentar tu visibilidad online, generar más leads cualificados y, en última instancia, incrementar tus ventas.",
    },
    {
      question: "¿Cuánto tiempo tardan en verse los resultados?",
      answer:
        "Algunos servicios, como Google Ads, pueden mostrar resultados en semanas. Otros, como SEO, requieren un enfoque a largo plazo.",
    },
    {
      question: "¿Sus servicios son personalizados?",
      answer:
        "Absolutamente. Cada negocio es único. Diseñamos estrategias de marketing digital a medida.",
    },
    {
      question: "¿Ofrecen garantía de satisfacción?",
      answer:
        "Nos comprometemos con tu éxito. Trabajamos con transparencia y comunicación constante para lograr los objetivos acordados.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-6xl font-black mb-16">
          Preguntas{" "}
          <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-1 after:bg-gray-300 after:rounded-md after:-z-10">
            Frecuentes
          </span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6">
              <button
                className="w-full text-left flex justify-between items-center font-bold text-texto text-lg"
                onClick={() =>
                  setActiveFAQ(activeFAQ === index ? null : index)
                }
              >
                {item.question}
                <span
                  className={`transition-transform duration-300 text-xl ${
                    activeFAQ === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {/* Puedes envolver este div con <motion.div> si usas framer-motion */}
              <div
                className={`mt-4 text-foreground transition-all duration-500 overflow-hidden ${
                  activeFAQ === index
                    ? "max-h-40 opacity-100" // Ajusta max-h si el contenido es más largo
                    : "max-h-0 opacity-0"
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;