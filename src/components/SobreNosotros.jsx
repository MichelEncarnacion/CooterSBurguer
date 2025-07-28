import React from 'react';

export function SobreNosotros() {
  return (
    <section
      id="sobre-nosotros"
      className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-cyan-300 py-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold mb-2 drop-shadow-cyan">
          Sobre Nosotros
        </h3>
        <p className="text-lg md:text-xl text-cyan-200 mb-6 italic">
          "No vendemos solo hamburguesas, creamos experiencias."
        </p>
        <div className="bg-white/5 rounded-2xl p-8 shadow-lg backdrop-blur mb-4">
          <p className="text-white text-base md:text-lg leading-relaxed mb-4">
            <span className="font-bold text-cyan-400">Somos un restaurante local,</span> nacido del amor por las hamburguesas auténticas y la buena comida. Creemos en el poder de los ingredientes frescos, el pan artesanal hecho cada mañana y la carne de calidad premium.
          </p>
          <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
            Nuestro equipo está comprometido con cada detalle, desde la cocina hasta tu mesa. Más que un menú, ofrecemos un ambiente acogedor y la promesa de que cada visita será única. ¡Gracias por elegirnos y ser parte de nuestra historia!
          </p>
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center text-cyan-200 text-base">
          <div className="flex-1">
            <span className="font-semibold text-cyan-400">✔ Ingredientes frescos</span>
          </div>
          <div className="flex-1">
            <span className="font-semibold text-cyan-400">✔ Pan artesanal diario</span>
          </div>
          <div className="flex-1">
            <span className="font-semibold text-cyan-400">✔ Atención personalizada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
