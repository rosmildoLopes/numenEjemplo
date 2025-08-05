import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-right" 
        style={{
          backgroundImage: `url('/hero3.jpg')`,
          maskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 30%, black 100%)',

        }}
      ></div>

      {/* texto */}
      <div className="relative z-10 flex items-center h-full px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl text-left"> 
          <h1 className="text-4xl md:text-6xl font-black text-gray-700 leading-tight mb-6">
            La transformación digital <br /> no es tecnológica, <br /> <span className="md:text-7xl block text-transparent bg-clip-text bg-gradient-to-r from-main to-accent">es cultural</span>
          </h1>
          <p className="text-lg md:text-xl text-black mb-8">
            Somos un equipo de profesionales apasionados por la publicidad digital que te acompañamos en el proceso de
            transformación que tu empresa requiere.
          </p>
          <div className="flex space-x-4">
            <Button variant='gradient' size='lg' className="">
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;