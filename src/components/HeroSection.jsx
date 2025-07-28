import React from 'react';
import burgerImage from '../assets/burger.png';

export function HeroSection() {
    return (
        <section className="relative w-screen min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col md:flex-row items-center justify-center overflow-hidden">
            {/* Texto principal */}
            <div className="z-20 w-full md:w-1/2 flex flex-col items-center justify-center text-center md:text-left px-8 py-12 md:py-0">
                <div className="bg-black/70 rounded-3xl px-8 py-12 shadow-2xl backdrop-blur-lg">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-400 mb-4 leading-tight drop-shadow">
                        ¡La hamburguesa <br /> que estabas esperando!
                    </h2>
                    <p className="text-lg sm:text-2xl text-gray-100 mb-8 font-medium drop-shadow">
                        Artesanal, jugosa y llena de sabor.<br /> Vive la experiencia <span className="text-pink-500 font-bold">Cooter´s</span>.
                    </p>
                    <button className="inline-flex items-center bg-pink-600 hover:bg-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 focus:ring-4 focus:ring-pink-300 text-xl">
                        Reservar Ahora
                        <span className="ml-2 text-2xl animate-bounce">→</span>
                    </button>
                </div>
            </div>
            {/* Imagen de hamburguesa animación */}
            <div className="relative w-full md:w-1/2 flex items-center justify-center h-96 md:h-[80vh]">
                {/* SVG de rayitos */}
                <svg
                    className="absolute z-10 w-[340px] h-[340px] md:w-[420px] md:h-[420px] animate-spin-slow"
                    style={{ filter: 'blur(0.5px)' }}
                    viewBox="0 0 420 420"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g>
                        {/* Rayos principales */}
                        <path d="M210 20 L210 70" stroke="#FFD600" strokeWidth="10" strokeLinecap="round" />
                        <path d="M210 350 L210 400" stroke="#FFD600" strokeWidth="10" strokeLinecap="round" />
                        <path d="M400 210 L350 210" stroke="#FFD600" strokeWidth="10" strokeLinecap="round" />
                        <path d="M20 210 L70 210" stroke="#FFD600" strokeWidth="10" strokeLinecap="round" />
                        {/* Rayos diagonales */}
                        <path d="M320 80 L285 115" stroke="#FFD600" strokeWidth="8" strokeLinecap="round" />
                        <path d="M100 320 L135 285" stroke="#FFD600" strokeWidth="8" strokeLinecap="round" />
                        <path d="M320 320 L285 285" stroke="#FFD600" strokeWidth="8" strokeLinecap="round" />
                        <path d="M100 100 L135 135" stroke="#FFD600" strokeWidth="8" strokeLinecap="round" />
                    </g>
                </svg>
                {/* Imagen con animación bounce */}
                <img
                    src={burgerImage}
                    alt="Hamburguesa"
                    className="relative z-20 w-[280px] h-[280px] md:w-[360px] md:h-[360px] object-contain drop-shadow-2xl pointer-events-none select-none animate-bounce-custom"
                    style={{ maxHeight: '400px' }}
                />
            </div>
            
            
        </section>
    );
}
