import React from 'react'
import { useNavigate } from 'react-router-dom';

import M1_Image from '../assets/Contact/1.png'
import M1_Vector from '../assets/Contact/2.png'
import M1_Logo from '../assets/Logos/LoomLogoOficial_5.png'

import M2_Image_1 from '../assets/Contact/3.png'
import M2_Image_2 from '../assets/Contact/4.png'
import M2_Image_3 from '../assets/Contact/5.png'
import M2_Image_4 from '../assets/Contact/6.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; // Regular icon
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icon

import MapComponent from '../components/map'

const Contact = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path); // Navega directamente a la ruta especificada
  };

  return (
    <div>
      <main
        className="relative w-full h-[calc(100vh-18rem)] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url(${M1_Image})`, // Reemplaza con la ruta de tu imagen
        }}
      >
        {/* Texto en el lado izquierdo */}
        <div className="absolute left-16 top-1/3 text-white">
          <h1 className="text-4xl md:text-6xl font-lustria leading-tight">
            Come<br />and relax<br />with us
          </h1>
        </div>

        {/* Logo en la esquina inferior derecha */}
        <div className="absolute bottom-20 right-20 text-white text-center">
          <img src={M1_Logo} alt="Loom Coffeehouse Logo" className="w-[8rem] h-auto" />
        </div>
      </main>

      <main className=" w-full h-screen flex">
        <div className="relative bg-[#a76734] w-[35%] pb-40 flex flex-col justify-end items-start text-white">
          {/* Imagen del vector */}
          <img
            src={M1_Vector} // Reemplaza con la ruta de tu imagen PNG
            alt="Plant Decoration"
            className="-ml-20 w-[50%] h-auto opacity-80"
          />

          {/* Contenido textual */}
          <div className="relative flex flex-col px-[20%] w-full">
            <h2 className="text-5xl font-lustria mb-6">Find us at</h2>
            <div className="space-y-2 ">
              <p className="text-md text-[#DEDBD6] mb-2">Loom CoffeeHouse</p>
              <p className="text-sm text-[#DEDBD6] mb-2">128 Maryhill Road Glasgow. G20 7QS</p>
            </div>
          </div>
        </div>

        <MapComponent coordinates={[55.87313264792556, -4.269315528835925]} center={[55.87313264792556, -4.269315528835925]} popupDescription="Caribbean Goods" zoom={15} type="marker" />
        {/* Mapa */}
      </main>

      <main className="flex flex-wrap bg-[#F7F4F0] h-screen px-[10%] py-12">
        {/* Sección izquierda: Imágenes */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 gap-y-0">
          <img
            src={M2_Image_1}
            alt="Coffee cherries"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={M2_Image_2}
            alt="Coffee flower"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={M2_Image_3}
            alt="Coffee grounds"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={M2_Image_4}
            alt="Barista"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Sección derecha: Texto */}
        <div className="px-[10%] w-full md:w-1/2 flex flex-col justify-center items-start">
          <h1 className="text-4xl md:text-5xl font-lustria text-[#204968] mb-6 leading-tight">
            Let’s enjoy<br />
            this journey<br />
            together
          </h1>
          <div className="flex items-center">
            <a href="https://www.facebook.com/share/tCBZRZFuTBMt8Wvq/?mibextid=wwXIfr" target='_blank' aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl mx-1 text-[#8292A7]  hover:text-[#687586]"/>
            </a>
            <a href="https://www.instagram.com/loomcoffeehouse/profilecard/?igsh=djVkMGJpb2NqcmV1" target='_blank' aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-1 text-[#8292A7] hover:text-[#687586]"  />
            </a>
            <span className="text-lg text-[#A76734] ml-2">@LOOMCOFFEEHOUSE</span>
          </div>
          <button className="mt-6 py-2 px-6 border border-[#A76734] rounded-full bg-transparent text-[#A76734] font-semibold shadow hover:bg-[#A76734] hover:text-white transition-colors">
            FOLLOW US
          </button>
        </div>
      </main>

      <div className="h-[20vh] bg-[#A76734] flex justify-center items-center">
          <div className="w-full max-w-6xl flex justify-between items-start text-white px-8 py-4">
            {/* Sección izquierda */}
            <div>
              <h3 className="text-2xl font-lustria mb-3">Find us here</h3>
              <p className="text-base font-light">relax@loomcofeehouse.com</p>
            </div>

            {/* Sección central */}
            <div className="text-right">
              <p className="text-md text-[#DEDBD6] mb-2">Loom CoffeeHouse</p>
              <p className="text-sm text-[#DEDBD6] mb-2">128 Maryhill Road Glasgow. G20 7QS</p>
            </div>

            {/* Sección derecha */}
            <div className="flex space-x-4">
              {/* Ícono de Facebook */}
              <a href="https://www.facebook.com/share/tCBZRZFuTBMt8Wvq/?mibextid=wwXIfr" target='_blank' aria-label="Facebook">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-2xl text-[#ffffff] hover:text-[#FFD8CC] transition-colors"
                />
              </a>
              {/* Ícono de Instagram */}
              <a href="https://www.instagram.com/loomcoffeehouse/profilecard/?igsh=djVkMGJpb2NqcmV1" target='_blank' aria-label="Instagram">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl text-[#ffffff] hover:text-[#FFD8CC] transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact