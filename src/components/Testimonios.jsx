import React, { useState, useEffect, useRef } from 'react';

// Componente estrellas
function Estrellas({ valor }) {
  return (
    <div className="flex items-center justify-center mb-3">
      {[1, 2, 3, 4, 5].map(i => (
        <svg
          key={i}
          className={`w-5 h-5 ${i <= valor ? 'text-yellow-400' : 'text-gray-400'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.149c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.943c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.943a1 1 0 00-.364-1.118L2.074 9.37c-.783-.57-.38-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.287-3.943z"/>
        </svg>
      ))}
    </div>
  );
}

const testimonios = [
  {
    nombre: "Ana Pérez",
    texto: "¡Las mejores hamburguesas que he probado! Ingredientes frescos y el pan es increíble.",
    avatar: "/burguer/img/avatar-ana.jpg",
    calificacion: 5,
  },
  {
    nombre: "Carlos Ruiz",
    texto: "El ambiente es súper agradable y la atención siempre es de 10.",
    avatar: "/burguer/img/avatar-carlos.jpg",
    calificacion: 4,
  },
  {
    nombre: "Sofía Morales",
    texto: "¡Recomiendo la Mexican Power! Se nota la calidad en cada bocado.",
    avatar: "/burguer/img/avatar-sofia.jpg",
    calificacion: 5,
  },
  {
    nombre: "Luis Sánchez",
    texto: "Buena relación calidad-precio y excelente servicio.",
    avatar: "",
    calificacion: 4,
  },
  {
    nombre: "Mariana Díaz",
    texto: "TODO el menú  es delicioso y variado. ¡Me encanta!",
    avatar: "",
    calificacion: 5,
  },
];

const getCardsPerView = () => {
  if (window.innerWidth >= 1024) return 3; // Desktop
  if (window.innerWidth >= 640) return 2; // Tablet
  return 1; // Mobile
};

export function Testimonios() {
  const [start, setStart] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const intervalRef = useRef(null);
  const total = testimonios.length;

  useEffect(() => {
    // Ajusta el número de cards al tamaño de pantalla
    const handleResize = () => setCardsPerView(getCardsPerView());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para mostrar el siguiente set de cards
  const siguiente = () =>
    setStart(prev => (prev + cardsPerView) % total);

  const anterior = () =>
    setStart(prev =>
      (prev - cardsPerView + total) % total
    );

  // Slider automático
  useEffect(() => {
    intervalRef.current = setInterval(siguiente, 4000);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [cardsPerView]);

  // Manual: reinicia slider
  const handleManual = (fn) => {
    clearInterval(intervalRef.current);
    fn();
    intervalRef.current = setInterval(siguiente, 4000);
  };

  // Cards a mostrar según pantalla
  const cardsToShow = [];
  for (let i = 0; i < cardsPerView; i++) {
    const idx = (start + i) % total;
    cardsToShow.push(testimonios[idx]);
  }

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-pink-400 py-20 px-4">
      <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center drop-shadow">
        Testimonios
      </h3>
      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => handleManual(anterior)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl font-medium shadow transition"
          aria-label="Anterior"
        >
          &#8592;
        </button>
        <button
          onClick={() => handleManual(siguiente)}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl font-medium shadow transition"
          aria-label="Siguiente"
        >
          &#8594;
        </button>
      </div>
      <div className={`max-w-5xl mx-auto grid gap-8 ${cardsPerView === 1 ? "grid-cols-1" : cardsPerView === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {cardsToShow.map((testimonio, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <img
              src={
                testimonio.avatar
                  ? testimonio.avatar
                  : `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(
                      testimonio.nombre
                    )}`
              }
              alt={testimonio.nombre}
              className="w-20 h-20 rounded-full border-4 border-pink-400 mb-4 object-cover shadow"
            />
            <Estrellas valor={testimonio.calificacion} />
            <p className="text-pink-100 italic mb-4">&quot;{testimonio.texto}&quot;</p>
            <span className="text-white font-semibold">{testimonio.nombre}</span>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-pink-300 text-sm">
        Mostrando {cardsToShow.length} de {total} testimonios
      </div>
    </section>
  );
}
