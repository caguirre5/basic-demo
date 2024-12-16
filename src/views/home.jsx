import React from 'react'
import Header from '../components/header'

import M1_backgroundImage from '../assets/Home/1.png'
import M1_logoImage from '../assets/Home/2.png'

import M2_backgroundImage from '../assets/Home/3.png'
import M2_logo from '../assets/Logos/LoomLogoOficial10.png'

import M3_staffpicture from '../assets/Home/4.png'

import M4_autonomyImage from '../assets/Home/8.png'
import M4_masteryImage from '../assets/Home/9.png'
import M4_purposeImage from '../assets/Home/5.png'

import M5_1_bg from '../assets/Home/6_1.png'
import M5_2_bg from '../assets/Home/6_2.png'

import M6_bg from '../assets/Home/7.png'

import Band_Vector_1 from '../assets/Home/10.png'
import Band_Vector_2 from '../assets/Home/11.png'

const Home = () => {
    return (
        <div>
            <Header />


            <main className="relative w-full h-[calc(100vh-4rem)]">
                {/* Imagen de fondo */}
                <img src={M1_backgroundImage} alt="Coffee Beans Background" className="w-full h-full object-cover" />

                {/* Contenedor para el logo con estilo de superposición */}
                <div className="absolute top-0 left-0 right-0 flex justify-center items-center">
                    <div className="w-1/5 bg-white p-6">
                        <img src={M1_logoImage} alt="Loom Coffeehouse Logo" className="w-full h-auto" />
                    </div>
                </div>
            </main>

            {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

            <main className=" w-full h-screen flex">
                {/* Imagen de fondo */}
                <img src={M2_backgroundImage} alt="Weaving Loom" className="w-[40%] h-full object-cover" />

                {/* Contenedor de texto */}
                <div className="  bg-[#A76734] p-8 w-[60%] flex justify-center">
                    <div className='w-[50%] h-full flex flex-col text-center items-center justify-center'>
                        <h2 className="text-5xl font-lustria font-bold mb-8">Did you know?</h2>
                        <p className="text-xl">
                            In Guatemala, women still make their dresses with a handloom. 
                        </p>
                        <p className="text-md mt-4">
                            We are going to weave people with moments, people with memories. <br/><br/> 
                            Every line of the loom represents a day, but that day forms a little bit of the great loom that we are
                            weaving with Loom. <br/><br/> 
                            In Guatemala, women still make their dresses with a handloom, and we want to honor them. 
                        </p>
                        <p className="text-xl mt-4">
                            That’s why we are Loom Coffeehouse.
                        </p>
                        <img src={M2_logo} alt="Weaving Loom" className="w-20 mt-10 object-cover" />
                    </div>
                </div>
            </main>

            {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
            
            <main className="relative w-full h-screen flex items-center justify-center bg-[#DEDBD6]">
                {/* Imagen de fondo */}
                <img src={M3_staffpicture} alt="Weaving Loom" className="w-[20%] mr-20 object-cover" />

                {/* Contenedor de texto */}
                    <div className='w-[35%] h-full flex flex-col ml-20 text-center items-center justify-center'>
                        <h2 className="text-5xl font-lustria mb-8 text-[#575F3D]">Every time you give <br/>a sip of coffee <br/>from Loom,</h2>
                        <p className="text-2xl mt-4 text-[#8292A7]">
                            you're, not only changing the life of<br/> the people who harvested it, but also, the lives of the people closest to us.
                        </p>
                        <button className="mt-10 text-[#A76734] text-xl font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#A76734] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                            MAKE A DIFFERENCE
                        </button>
                    </div>
            </main>

            {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

            <div className="relative overflow-hidden w-full p-4 h-[40vh] text-center flex flex-col items-center justify-center bg-[#575F3D]">
                <p className="text-3xl font-lustria ">We are a safe place to grow <br/> and develop what you believe in.</p>
                <p className="mt-4 w-[25%]">
                    We let your know that with your purchase you achieve a real impact
                    on someone else's life.
                </p>
                <img src={Band_Vector_1} alt="Loom Coffeehouse Logo" className="absolute top-0 right-0" />
                <img src={Band_Vector_2} alt="Loom Coffeehouse Logo" className="absolute top-0 left-0" />
            </div>

            {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

            <main className="min-h-screen px-4 py-8 bg-[#DEDBD6] flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-avenir-book mb-10 text-[#A76734]">WHAT BE BELIEVE IN</h2>
                <div className="flex justify-center space-x-4 w-full">
                    {/* Autonomy Section */}
                    <div className="w-[16%] flex flex-col justify-center">
                        <img src={M4_autonomyImage} alt="Autonomy" className=" h-[50vh]" />
                        <h3 className="text-2xl font-lustria mt-4 text-[#215A81]">Autonomy</h3>
                        <div className='bg-[#A76734] mx-auto h-1 rounded-full w-28 my-2'/>
                        <p className="text-lg text-[#8292A7] mb-2">Everyone works and<br/>acts at their own pace.</p>
                        <button className="mx-auto mt-10 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#A76734] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                            OUR COFFEE
                        </button>
                    </div>

                    {/* Mastery Section */}
                    <div className="w-[16%] flex flex-col justify-center items">
                        <img src={M4_masteryImage} alt="Mastery" className=" h-[50vh]" />
                        <h3 className="text-2xl font-lustria mt-4 text-[#215A81]">Mastery</h3>
                        <div className='bg-[#A76734] mx-auto h-1 rounded-full w-28 my-2'/>
                        <p className="text-lg text-[#8292A7] mb-2">We will all seek<br/>perfection in our art.</p>
                        <button className="mx-auto mt-10 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#A76734] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                            GET TO KNOW US
                        </button>
                    </div>

                    {/* Purpose Section */}
                    <div className="w-[16%] flex flex-col justify-center">
                        <img src={M4_purposeImage} alt="Purpose" className=" h-[50vh]" />
                        <h3 className="text-2xl font-lustria mt-4 text-[#215A81]">Purpose</h3>
                        <div className='bg-[#A76734] mx-auto h-1 rounded-full w-28 my-2'/>
                        <p className="text-lg text-[#8292A7] mb-2">It’s the glue that<br/>holds us together.</p>
                        <button className="mx-auto mt-10 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#a76834d5] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                            MAKE AN IMPACT
                        </button>
                    </div>
                </div>
            </main>
            <main className="w-full h-screen"
            >
                <div 
                    className=' h-[70%]'
                    style={{ backgroundImage: `url(${M5_1_bg})`, backgroundPosition:'center' }}
                >
                    <div className='flex justify-between items-center px-20 h-full font-lustria'>
                        <h2 className='text-5xl text-left'>Learn <br/>about</h2>
                        <h2 className='text-5xl text-right'>the lives <br/> you're <br/> changing</h2>
                    </div>
                </div>
                <div 
                    className='h-[30%] flex justify-center items-center '
                    style={{ backgroundImage: `url(${M5_2_bg})` }}
                >
                    <button className="mx-auto text-xl font-semibold py-2 px-4 border border-[#a76834c2] rounded-full shadow bg-[#A76734] text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                        ABOUT LOOM
                    </button>
                </div>
            </main>
            <main className="w-full flex h-screen ">
                <img src={M6_bg} alt="Weaving Loom" className="w-[50%] h-full object-cover" />
                <div  className="relative w-[50%] text-left flex items-center justify-center bg-[#575f3d]">
                    <div  className="w-[60%] text-left font-avenir-book flex flex-col items-left justify-center ">
                        <h1 className="text-4xl font-lustria mb-12">Let's create <br/> impact together</h1>
                        <div className='my-4'>
                            <p className="text-md text-[#DEDBD6] mb-2">Email Address</p>
                            <p className="text-sm text-[#DEDBD6] mb-2">relax@loomcofeehouse.com</p>
                        </div>
                        <div className='my-4'>
                            <p className="text-md text-[#DEDBD6] mb-2">Loom CoffeeHouse</p>
                            <p className="text-sm text-[#DEDBD6] mb-2">128 Maryhill Road Glasgow. G20 7QS</p>
                        </div>
                        <img src={Band_Vector_1} alt="Loom Coffeehouse Logo" className="absolute h-full right-0" />
                    </div>
                </div>
            </main>
        </div>
      );
}

export default Home