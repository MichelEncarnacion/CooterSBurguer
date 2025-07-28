import React from 'react';
import { ShoppingCart, MapPin } from 'lucide-react'; // Asegúrate de tener instalado lucide-react

export function CallToAction() {
  return (
    <section
      id="pedido"
      className="bg-gradient-to-r from-black via-gray-900 to-black py-16 px-4 flex flex-col items-center justify-center"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-3 drop-shadow">
        ¡Haz tu pedido o ven a visitarnos!
      </h3>
      <p className="text-cyan-100 mb-8 text-lg max-w-xl">
        Disfruta las mejores hamburguesas de la ciudad. Pide en línea o visítanos y vive la experiencia.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="#"
          className="flex items-center justify-center gap-3 bg-yellow-400 text-black px-8 py-4 text-xl rounded-2xl font-bold shadow-lg hover:bg-yellow-300 transition"
        >
          <ShoppingCart className="w-6 h-6" />
          Haz tu pedido
        </a>
        <a
          href="#"
          className="flex items-center justify-center gap-3 bg-cyan-400 text-black px-8 py-4 text-xl rounded-2xl font-bold shadow-lg hover:bg-cyan-300 transition"
        >
          <MapPin className="w-6 h-6" />
          Visítanos
        </a>
      </div>
    </section>
  );
}
