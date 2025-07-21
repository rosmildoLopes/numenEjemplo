// src/components/ProcesoSection.jsx (o .tsx)
"use client";

import React from "react";
// Si usas un componente Card específico de tu UI (como el de shadcn/ui), impórtalo:
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const steps = [
  {
    title: "Diagnóstico",
    description: "Analizamos tu presencia digital y competencia.",
  },
  {
    title: "Estrategia",
    description: "Creamos un plan personalizado basado en tus objetivos.",
  },
  {
    title: "Implementación",
    description: "Ejecutamos campañas y optimizamos tus canales.",
  },
  {
    title: "Crecimiento",
    description: "Medimos resultados, ajustamos y escalamos.",
  },
];

export default function ProcesoSection() {
  return (
    // Se cambia el fondo para usar un gradiente similar al de Servicios o un color de fondo de tu tema
    <section
      id="proceso"
      className="py-20 bg-gradient-to-b from-secondary/10 to-background/5"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Ajuste de padding/margen */}
        {/* Header - Adaptado al estilo de Servicios */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-main/10 rounded-full text-main text-sm font-medium mb-4">
            Cómo Trabajamos
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-foreground mb-6">
            Nuestro{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-main to-verde">
              Proceso de Éxito
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una metodología clara y efectiva para impulsar tu negocio al
            siguiente nivel.
          </p>
        </div>
        {/* Pasos del Proceso - Adaptados al estilo de Card de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group hover-lift border-0 shadow-md hover:shadow-lg bg-card text-card-foreground backdrop-blur-sm p-6 rounded-2xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-main to-verde rounded-xl flex items-center justify-center font-bold text-lg text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {`0${i + 1}`}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-main transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
