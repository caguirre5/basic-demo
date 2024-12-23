import React from 'react'
import { useNavigate } from 'react-router-dom';

import M1_Background from '../assets/Purpose/1.png'

import M3_logo from '../assets/Logos/LoomLogoOficial10.png'
import M7_logo from '../assets/Logos/LoomLogoOficial_8.png'

import M4_bg from '../assets/Purpose/2.png'

import M5_band from '../assets/Purpose/4.png'
import M5_Background from '../assets/Purpose/7.png'

import M6_Background from '../assets/Purpose/5.png'

import M7_Background from '../assets/Purpose/MAIA.jpg'

import Band_Vector_1 from '../assets/Home/10.png'
import Band_Vector_2 from '../assets/Home/11.png'

import MAIA_Logo from '../assets/Logos/MAIA LOGOS US High Res-05.png'
import TreesFL_Logo from '../assets/Logos/Treesforlifeuk.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; // Regular icon
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Brand icon

const Purpose = () => {
  const navigate = useNavigate();
  const goTo = (path) => {
    navigate(path); // Navega directamente a la ruta especificada
  };

  return (
    <div>
      <main className="relative w-full h-[calc(100vh-4rem)] bg-cover bg-center flex flex-col items-end justify-center text-center pr-[15%]" style={{ backgroundImage: `url(${M1_Background})` }}>
        {/* Texto principal */}
        <h1 className="text-5xl font-lustria text-white mb-4">
            It's always<br/>about changing<br/>the world.
        </h1>
      </main>

      <main className="relative overflow-hidden w-full p-4 h-[40vh] text-center flex flex-col items-center justify-center bg-[#dedbd6]">
        <p className="mt-4 w-[25%] text-2xl text-[#575f3d]">
            Let us tell you about
        </p>
        <p className="text-5xl text-[#a76734] font-bold">Hunbatz <span className='text-[#575f3d]'>&</span> Hunchouen</p>
        <img src={Band_Vector_1} alt="Loom Coffeehouse Logo" className="absolute top-0 right-0" />
        <img src={Band_Vector_2} alt="Loom Coffeehouse Logo" className="absolute top-0 left-0" />
      </main>

      <main className='relative h-screen flex flex-col justify-center items-center bg-[#a76734]'>
          <div className=' w-[60%] flex flex-col'>
            <h2 className='mb-12 text-start text-6xl '>Hunbatz &<br/>Hunchouen</h2>
            <div className='flex'>
              <div className='mr-5 text-right w-[30%]'>
                <p>
                  According to the sixteenth-century Popol Vuh creation myth, two brothers, Hunbatz and Hunchouen, were once talented dancers and artists.

                  <br/><br/>By nature, these two sons were wise, and their wisdom was great.
                </p>
              </div>
              <div className='ml-5 w-[60%]'>
                <p>
                All the arts were taught to Hunbatz and Hunchouen, the sons of Hun-Hunahpú. They were flautists, singers, shooters with blowguns, painters, sculptors, jewellers and silversmiths.

                <br/><br/>The story goes that they climbed a tree; it grew up so tall that Hunbatz and Hunchouen could not get down. As they struggled in the branches, their loincloths came loose and turned into tails; they both became monkeys, one a spider monkey, the other a <br/>howler monkey.

                <br/><br/>Among the Mayans, the howler monkey god was a primary deity of art and music and a patron of the artisans, especially the scribes and sculptors.  
                </p>            
              </div>
            </div>
            <div className='w-full flex items-end justify-end mt-12 px-20'> 
              <img src={M3_logo} alt="Weaving Loom" className=" w-20 mt-4 object-cover" />
            </div>
          
          </div>
          <img src={M4_bg} alt="Loom Coffeehouse Logo" className="absolute  h-screen bottom-0 left-0 top-0 right-0" />
      </main>

      <main class="flex flex-row bg-gray-100 min-h-screen p-20" style={{ backgroundImage: `url(${M5_Background})` }}>
        <section class="relative w-[35%]  mr-5 bg-[#8292a7] text-white flex flex-col justify-evenly pb-20" >
          <h1 class="mx-[20%] text-5xl font-lustria mb-4">Coffee that <br/>sows life.</h1>
          <h2 class="mx-[20%] text-5xl font-lustria">Coffee <br/>empowers.</h2>
          <img src={M5_band} alt="Loom Coffeehouse Logo" className="w-full absolute bottom-0" />
        </section>

        <section class="w-[65%] bg-gray-50 ml-5 p-28 flex flex-col items-center justify-center">
          <div class="mb-12">
            <h3 class="text-4xl font-serif text-[#575f3d] mb-4">Hunbatz</h3>
            <p class="text-[#8292a7]">
              A collection of small coffee producers in the northwestern highlands of Guatemala, specifically in the Culico region of Huehuetenango, form the backbone of Hunbatz. 
              <strong>For each 30 kg bag of Hunbatz coffee we sell, we plant a tree on behalf of the coffee roaster who purchased it.</strong>
            </p>
          </div>
          <div>
            <h3 class="text-4xl font-serif text-[#575f3d] mb-4">Hunchouen</h3>
            <p class="text-[#8292a7]">
              Hunchouen is conformed by small producers in the Tajumuco region of Huehuetenango. The collective was formed in 1970 and it is made by 550 small producers. 
               every 30 kg bag of Hunchouen coffee sold, we contribute to our educational initiative, El Colegis a social project of Caribbean Goods dedicated to educating the children of the coffee pickers, providing them with literacy skills and basic English language instruction.
            </p>
          </div>
        </section>
      </main>

      <main className="relative overflow-hidden w-full p-4 h-[40vh] text-center flex flex-col items-center justify-center bg-[#dedbd6]">
        <p className="my-4 text-2xl text-[#575f3d]">
            By purchasing these coffees you contribute to
        </p>
        <div className='flex justify-center items-center'>
          <img src={TreesFL_Logo} alt="Weaving Loom" className="h-12 object-cover" />
          <p className="text-4xl text-[#a76734] mx-6 font-bold">&</p>
          <img src={MAIA_Logo} alt="Weaving Loom" className="h-12 object-cover" />
        </div>
        <img src={Band_Vector_1} alt="Loom Coffeehouse Logo" className="absolute top-0 right-0" />
        <img src={Band_Vector_2} alt="Loom Coffeehouse Logo" className="absolute top-0 left-0" />
      </main>

      <main className="w-full h-screen"
      >
        <div 
            className=' h-[50%]'
            style={{ backgroundImage: `url(${M6_Background})` }}
        />
        <div 
            className='h-[50%] bg-[#575f3d] flex justify-center items-center '
        >
          <div className='flex flex-col justify-center'>
            <img src={TreesFL_Logo} alt="Weaving Loom" className="h-28 object-cover" />
            <button className="mx-auto font-semibold py-2 px-4 border border-[#8292a7] rounded-full shadow text-[#d0ac95] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                LEARN MORE
            </button>
          </div>
          <div className='bg-[#8292a7] h-[60%] w-1 mx-20'/>
          <div className='flex flex-col justify-center'>
            <h2 className='text-white text-[10rem]'>262</h2>
            <p className='text-white text-xl -mt-10 ml-5'>Trees in this grove</p>
          </div>
        </div>
      </main>

      <main className="w-full h-screen"
      >
        <div 
            className=' h-[50%]'
            style={{ backgroundImage: `url(${M7_Background})`,backgroundPosition:'top' }}
        />
        <div 
            className='h-[50%] bg-[#dedbd6] flex justify-center items-center '
        >
          <div className='flex flex-col justify-center'>
            <img src={MAIA_Logo} alt="Weaving Loom" className="h-28 object-cover" />
            <button className="mx-auto font-semibold py-2 px-4 border border-[#a76734] rounded-full shadow text-[#575f3d] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                LEARN MORE
            </button>
          </div>
          <div className='bg-[#8292a7] h-[60%] w-1 mx-20'/>
          <div className='flex flex-col justify-center'>
            <h2 className='text-[#575f3d] text-[6rem]'>$1000 <span className='text-[5rem] font-thin'>USD</span></h2>
            <p className='text-[#8292a7] text-xl -mt-5 ml-5'>Donated so far</p>
          </div>
        </div>
      </main>

      <main class="flex flex-row  min-h-screen p-20" style={{ backgroundImage: `url(${M5_Background})` }}>
        <div className='w-full flex justify-between'>
          <h2 className='text-5xl'>Visit us<br/>and make a<br/>difference</h2>
          <div className='flex flex-col items-end'>
            <img src={M7_logo} alt="Weaving Loom" className=" h-10 mt-4 object-cover" />
            <div className="flex space-x-4 mt-2">
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

export default Purpose