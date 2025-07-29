// Navbar.jsx
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 w-full fixed top-0 z-50 shadow-xl font-medium">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto mr-3 animate-bounce"
            />
            
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a
              href="#menu"
              className="text-white hover:text-black transition duration-300"
            >
              Menú
            </a>
            <a
              href="#sobre-nosotros"
              className="text-white hover:text-black transition duration-300"
            >
              Sobre Nosotros
            </a>
            <a
              href="#pedido"
              className="bg-black text-yellow-400 px-4 py-2 rounded-full shadow hover:scale-105 hover:bg-white hover:text-black transition-all duration-300"
            >
              Haz tu pedido
            </a>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded bg-black/60 hover:bg-black/80 transition"
            >
              {open ? (
                <XMarkIcon className="h-5 w-5 text-white" />
              ) : (
                <Bars3Icon className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-4 pt-4 pb-6 space-y-4 animate-slide-down text-sm">
          <a href="#menu" className="block hover:text-yellow-400">
            Menú
          </a>
          <a
            href="#sobre-nosotros"
            className="block hover:text-yellow-400"
          >
            Sobre Nosotros
          </a>
          <a
            href="#pedido"
            className="block text-center bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Haz tu pedido
          </a>
        </div>
      )}
    </nav>
  );
}
