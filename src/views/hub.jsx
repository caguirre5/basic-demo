import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Loader from '../components/loader'; // Importar el Loader
import { motion } from 'framer-motion';

// Importar los componentes
import Home from './home';
import Autonomy from './autonomy';
import Mastery from './mastery';
import Purpose from './purpose';
import Contact from './contact';

// Importar las imágenes necesarias
import M1_backgroundImage from '../assets/Home/1.png';
import M1_logoImage from '../assets/Home/2.png';
import M2_backgroundImage from '../assets/Home/3.png';

const Hub = () => {
  // Estado para manejar la sección activa
  const [activeSection, setActiveSection] = useState('home');

  // Estado para manejar la carga
  const [isLoading, setIsLoading] = useState(true);

  // Transición animada entre secciones
  const pageTransition = {
    initial: { x: "100%", opacity: 0 }, // Entra desde la derecha
    animate: { x: 0, opacity: 1 },      // Se centra
    exit: { x: "-100%", opacity: 0 },   // Sale hacia la izquierda
    transition: { duration: 0.5 },      // Velocidad
  };

  // Precargar las imágenes antes de mostrar el contenido
  useEffect(() => {
    const images = [
      M1_backgroundImage,
      M1_logoImage,
      M2_backgroundImage,
    ];

    // Pre-carga de imágenes
    const loadImages = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve; // Marca la imagen como cargada
      });
    });

    // Cuando todas las imágenes estén cargadas, ocultamos el loader
    Promise.all(loadImages).then(() => setIsLoading(false));
  }, []);

  // Función para renderizar el componente según la sección activa
  const renderSection = () => {
    switch (activeSection) {
      case 'autonomy':
        return <Autonomy />;
      case 'mastery':
        return <Mastery />;
      case 'purpose':
        return <Purpose />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Mostrar el loader mientras se carga */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header setActiveSection={setActiveSection} activeSection={activeSection} />

          {/* Contenedor animado */}
          <motion.div
            key={activeSection} // Cambia la animación en base a la sección activa
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
            className="w-full h-screen"
          >
            {renderSection()}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Hub;
