import React from 'react'
import { useNavigate } from 'react-router-dom';

import M1_Image from '../assets/Mastery/1.png'
import M1_Logo from '../assets/Logos/LoomLogoOficial_3.png'

import M2_Image from '../assets/Mastery/2.png'

import M3_Image3 from '../assets/Mastery/3.png';  // Asegúrate de cambiar estas rutas
import M3_Image6 from '../assets/Mastery/6.png';
import M3_Image7 from '../assets/Mastery/7.png';

import M4_Image from '../assets/Mastery/4.png'

import M5_Image from '../assets/Mastery/5.png'

import Band_Vector_1 from '../assets/Home/12.png'
import Band_Vector_2 from '../assets/Home/11.png'

const Mastery = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path); // Navega directamente a la ruta especificada
  };

  return (
    <div>
      {/* -------------------------------- */}
      <main className="flex flex-col lg:flex-row justify-between items-center bg-[#dedbd6] h-[calc(100vh-4rem)]">
        <div className="w-[30%] flex justify-center items-center pt-8 ">
          <img src={M1_Logo} alt="Persona sonriendo" className="w-20 lg:w-40 object-cover" />
        </div>
        <div className="flex justify-center">
          <img src={M1_Image} alt="Logo Loom" className="w-[50vw] lg:w-auto lg:h-[calc(100vh-4rem)]" />
        </div>
        <div className="lg:flex-1 text-center lg:text-right flex justify-center items-center pb-8 ">
          <p className="hidden lg:block text-3xl lg:text-5xl font-lustria text-[#215a81]">We seek<br/> perfection <br/>in our art</p>
          <p className="block lg:hidden text-2xl lg:text-5xl font-lustria text-[#215a81]">We seek perfection <br/>in our art</p>
        </div>
      </main>
      
      {/* -------------------------------- */}
      <main className='h-[80vh] lg:h-screen w-full flex flex-col'>
        <div className='flex flex-col w-full justify-evenly py-10 h-[40%] bg-[#8292a7] text-center'>
          <h2 className='text-2xl lg:text-4xl font-lustria'>Mastery is not a function <br/>of genious or talent</h2>
          <p className='text-sm lg:text-lg'>it is a function of time and intense focus <br/>applied to a particular field of knowledge</p>
          <p className='text-lg lg:text-2xl font-lustria'>ROBERT GREENE</p>
        </div>
        <img src={M2_Image} alt="Weaving Loom" className="w-full h-[60%] object-cover" />
      </main>

      <main className="bg-[#dedbd6]  py-12 px-4 relative">
        <div 
                    className='w-full top-0 right-0 left-0 h-28 absolute'
                    style={{ backgroundImage: `url(${Band_Vector_1})` }}
                />
        {/* <img
          src={Band_Vector_1}
          alt="Decorative Pattern"
          className="absolute top-0 left-0 h-40 " */}
        {/* /> */}
        <div className="text-center mt-20 ">
          <h1 className="text-2xl text-[#d0ac95] font-avenir-roman font-bold">Meet Our Team</h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center text-[#215a81]">
          <div className="text-center w-[80%] lg:w-[20%] h-screen flex flex-col justify-center items-center">
            <img src={M3_Image3} alt="Javier" className="inline-block" />
            <h2 className="text-xl mt-4 font-lustria">Javier</h2>
            <hr className="border-t-4 border-[#a76734] w-1/2 my-4"/>
            <p className="text-[#8292a7] mt-2 px-8">Aquí podemos hablar un poco acerca de lo que nos inspira de nuestro hacer y lo que queremos dejar al mundo.</p>
          </div>
          <div className="text-center w-[80%] lg:w-[20%] h-screen flex flex-col justify-center items-center">
            <img src={M3_Image6} alt="Cristian" className="inline-block" />
            <h2 className="text-xl mt-4 font-lustria">Cristian</h2>
            <hr className="border-t-4 border-[#a76734] w-1/2 my-4"/>
            <p className="text-[#8292a7] mt-2 px-8">Aquí podemos hablar un poco acerca de lo que nos inspira de nuestro hacer y lo que queremos dejar al mundo.</p>
          </div>
          <div className="text-center w-[80%] lg:w-[20%] h-screen flex flex-col justify-center items-center">
            <img src={M3_Image7} alt="Sofi" className="inline-block" />
            <h2 className="text-xl mt-4 font-lustria">Sofi</h2>
            <hr className="border-t-4 border-[#a76734] w-1/2 my-4"/>
            <p className="text-[#8292a7] mt-2 px-8">Aquí podemos hablar un poco acerca de lo que nos inspira de nuestro hacer y lo que queremos dejar al mundo.</p>
          </div>
        </div>
      </main>

      <main className="relative w-full h-[60vh] bg-cover bg-center flex flex-col items-center lg:items-end justify-center lg:justify-end text-center lg:pr-[10%] lg:pb-[5%]" 
      style={{ backgroundImage: `url(${M4_Image})` }}>
        {/* Texto principal */}
        <h1 className="flex  items-center justify-center bg-black lg:bg-transparent bg-opacity-50 h-full lg:h-auto lg:w-auto w-full text-3xl font-lustria text-white mb-4">
            We have the desire<br/>to get better and<br/>better at something<br/>that matters.
        </h1>
      </main>

      <main className="w-full flex flex-col lg:flex-row h-screen ">
                <div  className="relative lg:w-[50%] text-left flex items-center justify-center bg-[#575f3d]">
                    <div  className="lg:w-[60%] py-10 text-left flex flex-col items-left justify-center ">
                        <h1 className="text-3xl font-lustria lg:mb-12">Let's grow <br/>together</h1>
                        <div className='my-4'>
                            <p className="text-md text-[#DEDBD6] mb-2">Email Address</p>
                            <p className="text-sm text-[#DEDBD6] mb-2">relax@loomcofeehouse.com</p>
                        </div>
                        <div className='lg:my-4'>
                            <p className="text-md text-[#DEDBD6] mb-2">Loom CoffeeHouse</p>
                            <p className="text-sm text-[#DEDBD6] mb-2">128 Maryhill Road Glasgow. G20 7QS</p>
                        </div>
                        <img src={Band_Vector_2} alt="Loom Coffeehouse Logo" className="absolute h-full left-0" />
                    </div>
                </div>
                <img src={M5_Image} alt="Weaving Loom" className="lg:w-[50%] h-full object-cover" />
            </main>
    </div>
  )
}

export default Mastery
