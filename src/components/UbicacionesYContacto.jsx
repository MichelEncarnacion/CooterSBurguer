import React from 'react';
import { MapPin, Phone } from 'lucide-react'; // npm install lucide-react

const sucursales = [
  {
    nombre: "Angelópolis",
    direccion: "Av. Osa Mayor 2902",
    telefono: "22 24 38 05 56",
    maps: "https://maps.google.com/?q=Av.+Osa+Mayor+2902",
    imagen: "/burguer/angelopolis.jpg", // Cambia el nombre según tu foto real
  },
  {
    nombre: "Independencia",
    direccion: "Prolongación Guerrero Priv. F",
    telefono: "22 28 62 32 55",
    maps: "https://maps.google.com/?q=Prolongación+Guerrero+Priv.+F",
    imagen: "/burguer/independencia.jpg",
  },
  {
    nombre: "Centro",
    direccion: "3 Ote. 213, interior 207",
    telefono: "22 27 78 18 10",
    maps: "https://maps.google.com/?q=3+Ote.+213,+interior+207",
    imagen: "/burguer/centro.jpg",
  },
];

export function UbicacionesYContacto() {
  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 px-4">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 drop-shadow">
          Sucursales
        </h3>
        <p className="text-cyan-100 text-lg">
          ¡Encuentra la sucursal más cercana y visítanos hoy mismo!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {sucursales.map((suc, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur rounded-2xl shadow-lg p-0 flex flex-col items-center transition-transform hover:scale-105 overflow-hidden"
          >
            <img
              src={suc.imagen}
              alt={`Sucursal ${suc.nombre}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-6 flex flex-col items-center w-full">
              <h4 className="text-pink-500 text-2xl font-extrabold mb-3">{suc.nombre}</h4>
              <div className="flex items-center gap-2 text-cyan-300 mb-2">
                <MapPin className="w-5 h-5" />
                <span>{suc.direccion}</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-300 mb-2">
                <Phone className="w-5 h-5" />
                <a href={`tel:${suc.telefono.replace(/ /g, '')}`} className="hover:underline">
                  {suc.telefono}
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={suc.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-xl font-semibold shadow transition"
                >
                  Ver en Maps
                </a>
                <a
                  href={`tel:${suc.telefono.replace(/ /g, '')}`}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-xl font-semibold shadow transition"
                >
                  Llamar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
