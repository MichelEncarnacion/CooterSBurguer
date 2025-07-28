import React from 'react';
import { Facebook, Instagram } from 'lucide-react'; 
export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white border-t border-gray-700 py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} <span className="font-bold">Cooter´s</span>. Todos los derechos reservados.
        </p>
        <div className="flex gap-6 items-center">
          <a
            href="https://www.facebook.com/Cootersburger?locale=es_LA" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/cootersburger/?hl=es" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
