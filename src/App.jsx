// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MenuSection } from './components/MenuSection';
import { SobreNosotros } from './components/SobreNosotros';
import { Testimonios } from './components/Testimonios';
import { CallToAction } from './components/CallToAction';
import { UbicacionesYContacto } from './components/UbicacionesYContacto';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <SobreNosotros />
      <Testimonios />
      <CallToAction />
      <UbicacionesYContacto />
      <Footer />
    </div>
  );
}

export default App;
