import React from 'react'
import { useNavigate } from 'react-router-dom';

import Band_Vector_1 from '../assets/Home/10.png'
import Band_Vector_2 from '../assets/Home/11.png'
import Band_Vector_3 from '../assets/Home/12.png'

import M1_Image from '../assets/Autonomy/1.png'
import M1_logoImage from '../assets/Autonomy/2.png'

import M2_Image from '../assets/Autonomy/3.png'

import M3_Image from '../assets/Autonomy/4.png'

import M4_logo from '../assets/Logos/LoomLogoOficial10.png'
import M4_Image from '../assets/Autonomy/5.png'

import M5_Image from '../assets/Autonomy/7.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; // Regular icon
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icon

const Autonomy = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path); // Navega directamente a la ruta especificada
  };
  

  return (
    <div className=''>
      <main className="w-full flex flex-col lg:flex-row h-[calc(100vh-4rem)] font-avenir-book">
        <div
          className='lg:w-[50%] h-1/2 lg:h-full relative'
          style={{ backgroundImage: `url(${M1_Image})`, backgroundSize:'cover'}}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
            <div className="w-[40%] bg-white p-6">
                <img src={M1_logoImage} alt="Loom Coffeehouse Logo" className="w-full h-auto" />
            </div>
          </div>
        </div>
        <div  className="relative lg:w-[50%] h-1/2 lg:h-full text-center flex items-center justify-center bg-[#A76734]">
            <h1 className="text-2xl lg:text-4xl lg:mb-12 font-lustria">We tell the<br/>world about<br/>all the good that<br/>is being done.</h1>
        </div>
      </main>

      <main className="w-full flex flex-col lg:flex-row lg:h-[calc(100vh-4rem)]">
        <div
          className='lg:w-[50%] lg:h-full h-[50vh] relative'
        >
          <div className="absolute overflow-hidden top-0 bottom-0 left-0  right-0 flex justify-center items-center">
            <div className="w-full bg-[#dedbd6] p-6">
                <img src={M2_Image} alt="Loom Coffeehouse Logo" className=" lg:w-full h-auto" />
            </div>
          </div>
        </div>
        <div  className="relative lg:w-[50%] text-left px-10 lg:px-20 flex flex-col items-left justify-center bg-[#dedbd6]  py-12">
            {/* Primer bloque */}
            <div className='my-6'>
                <p className="text-lg lg:text-3xl text-[#8292A7]">We plant trees because we want to <br/>continue sowing life.</p>
                <button className="text-sm mx-auto mt-4 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#a76834d5] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                    LEARN ABOUT HUNBATZ
                </button>
            </div>

            {/* Segundo bloque */}
            <div className='my-6'>
                <p className="text-lg lg:text-3xl text-[#8292A7]">We deliver light by making donations<br/>to change the lives of indigenous<br/>women in Atitlán.</p>
                <button className="text-sm mx-auto mt-4 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#a76834d5] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                    LEARN ABOUT HUNCHOUEN
                </button>
            </div>

            {/* Tercer bloque */}
            <div className='my-6'>
                <p className="text-lg lg:text-3xl text-[#8292A7]">We work hard to transform the lives of<br/>all the people who are part of Loom.</p>
                <button className="text-sm mx-auto mt-4 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#a76834d5] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                    LEARN ABOUT US
                </button>
            </div>
            <img src={Band_Vector_1} alt="Loom Coffeehouse Logo" className="absolute hidden lg:block h-full right-0" />
        </div>
      </main>

      <div className="relative w-full h-[50vh] lg:h-screen bg-cover bg-center flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${M3_Image})` }}>
        {/* Texto principal */}
        <h1 className="text-4xl md:text-6xl font-lustria text-white mb-4">
            Loom allows us <br /> to continue<br />transforming lives
        </h1>

        {/* Texto secundario */}
        <p className="text-lg md:text-xl text-white lg:mb-8">
            Ready to make a difference?
        </p>

        {/* Icono de FontAwesome */}
        <div>
            <i className="fas fa-chevron-down text-white text-3xl animate-bounce"></i>
        </div>
      </div>

      <main className=" w-full lg:h-screen flex flex-col lg:flex-row">
          <div className="  bg-[#575f3d] p-8 w-full lg:w-[50%] flex justify-center">
              <div className='lg:w-[50%] py-10 lg:py-0 h-full flex flex-col text-center items-center justify-center'>
                  <h2 className="text-2xl lg:text-4xl font-lustria  mb-8">The story behind <br/>our coffee</h2>
                  <img src={M4_logo} alt="Weaving Loom" className="w-20 lg:mt-4 object-cover" />

                  <p className="lg:text-xl mt-4 text-center">
                      We work with local farmers and small-scale
                      coffee producers from Guatemala who believe
                      that every coffee bean must have the best
                      quality possible. They evaluate their quality,
                      fragrance, aroma, flavour, balance and
                      sweetness so they can offer an exceptional
                      experience to your palate.
                  </p>

                  <p className="lg:text-xl mt-4">
                      Loom's a dream come true for every person that's part of the process.
                  </p>
              </div>
          </div>
          {/* Imagen de fondo */}
          <img src={M4_Image} alt="Weaving Loom" className="w-full lg:w-[50%] h-[40vh] lg:h-full object-cover" />
          
          {/* Contenedor de texto */}
          
      </main>

      <main className="relative w-full lg:h-screen flex flex-col lg:flex-row bg-[#dedbd6]">
        {/* Lado izquierdo */}
        <div className="relative lg:w-[50%] flex flex-col justify-start lg:ml-28 mt-28 items-start px-12">
          <h1 className="text-5xl lg:text-[5rem] font-lustria text-[#215a81] mb-4">
            We’ve got<br /> more stories<br /> to tell
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
          
        </div>

        {/* Lado derecho */}
        <div className="lg:w-[50%] w-full flex flex-col px-12 lg:px-0 lg:justify-end lg:items-end lg:mr-28 mb-28 lg:space-y-8">
          <p className="text-[0.8rem] lg:text-md text-[#575f3d]">
            If you want to learn more about the impact you’re<br/>making in the world with
            us and the people<br/>nurturing this experience for you, you can visit any<br/>of
            the links below:
          </p>
          <hr className="border-t-1 border-[#8292A7] w-1/3 my-4"/>
          <div className="flex flex-col items-end justify-endspace-y-4">
            <button className="text-sm mt-4 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#a76834d5] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                MEET LOOM'S TEAM
            </button>
            <button className="text-sm  mt-4 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#a76834d5] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                LEARN ABOUT YOUR IMPACT
            </button>
          </div>
        </div>
        <img
            src={Band_Vector_3}
            alt="Decorative Pattern"
            className="absolute h-auto left-0"
          />
      </main>

      <main className="w-full h-screen"
      >
          <div 
              className='h-auto  lg:h-[70%]'
              style={{ backgroundImage: `url(${M5_Image})` }}
          >
            <img src={M5_Image} alt="Weaving Loom" className="lg:hidden w-full lg:w-[50%] h-[60vh] lg:h-full object-cover" />
          </div>
          <div className="h-[40vh] lg:h-[30%] bg-[#A76734] flex  justify-center items-center">
          <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-start text-white px-8 py-4">
            {/* Sección izquierda */}
            <div>
              <h3 className="text-2xl font-bold mb-3">Find us here</h3>
              <p className="text-base font-light">relax@loomcofeehouse.com</p>
            </div>

            {/* Sección central */}
            <div className="lg:text-right">
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

      </main>
    </div>
  )
}

export default Autonomy