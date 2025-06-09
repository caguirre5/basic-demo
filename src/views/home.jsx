import React, { useRef } from 'react' 
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const goTo = (path) => {
        navigate(path); // Navega directamente a la ruta especificada
      };


    return (
        <div>


            <div>
                <main className="relative w-full h-[calc(100vh-4rem)]">
                    {/* Imagen de fondo */}
                    <img src={M1_backgroundImage} alt="Coffee Beans Background" className="w-full h-full object-cover" />

                    {/* Contenedor para el logo con estilo de superposición */}
                    <div className="absolute top-0 left-0 right-0 flex justify-center items-center">
                        <div className="w-[70%] lg:w-1/5 bg-white p-6">
                            <img src={M1_logoImage} alt="Loom Coffeehouse Logo" className="w-full h-auto" />
                        </div>
                    </div>
                </main>

                {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                <main className=" w-full sm:min-h-screen lg:h-screen flex lg:flex-row flex-col">
                    {/* Imagen de fondo */}
                    <img src={M2_backgroundImage} alt="Weaving Loom" className="order-2 lg:order-1 lg:w-[40%] lg:h-full h-[300px] object-top lg:object-cover" />

                    {/* Contenedor de texto */}
                    <div className="order-1 lg:order-2 bg-[#A76734] p-8 lg:w-[60%] h-[70%] lg:h-full flex justify-center">
                        <div className='lg:w-[50%] py-10 lg:p-0 h-full flex flex-col text-center items-center justify-center'>
                            <h2 className="text-3xl lg:text-5xl font-lustria font-bold mb-8">Did you know?</h2>
                            <p className="text-lg lg:text-2xl">
                                In Guatemala, women still make their dresses with a handloom. 
                            </p>
                            <p className="text-sm lg:text-lg mt-2 lg:mt-4">
                                We are going to weave people with moments, people with memories. <br/><br/> 
                                Every line of the loom represents a day, but that day forms a little bit of the great loom that we are
                                weaving with Loom. <br/><br/> 
                                In Guatemala, women still make their dresses with a handloom, and we want to honor them. 
                            </p>
                            <p className="text-lg lg:text-2xl mt-2 lg:mt-4">
                                That’s why we are Loom Coffeehouse.
                            </p>
                            <img src={M2_logo} alt="Weaving Loom" className="w-20 mt-10 object-cover" />
                        </div>
                    </div>
                </main>

                {/* --------------------------------------------------------------------------------------------------------------------------------------- */}
                
                <main className="relative w-full py-20 lg:py-0 lg:h-screen flex flex-col lg:flex-row items-center justify-center bg-[#DEDBD6]">
                    {/* Imagen de fondo */}
                    <img src={M3_staffpicture} alt="Weaving Loom" className="w-[60%] pb-16 lg:w-[20%] lg:mr-20 object-cover" />

                    {/* Contenedor de texto */}
                        <div className='w-[80%] lg:w-[35%] h-full flex flex-col lg:ml-20 text-center items-center justify-center'>
                            <h2 className="text-3xl lg:text-5xl font-lustria mb-8 text-[#575F3D]">Every time you give a sip of coffee from Loom,</h2>
                            <p className="text-lg lg:text-2xl  lg:mt-4 text-[#8292A7]">
                                you're, not only changing the life of the people who harvested it, but also, the lives of the people closest to us.
                            </p>
                            <button onClick={() => servicesRef.current.scrollIntoView({ behavior: 'smooth' })} className="mt-10 text-[#A76734] lg:text-xl font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#A76734] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                                MAKE A DIFFERENCE
                            </button>
                        </div>
                </main>

                {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                <div className="relative overflow-hidden w-full p-4 h-[30vh] lg:h-[40vh] text-center flex flex-col items-center justify-center bg-[#575F3D]">
                    <p className="text-xl lg:text-3xl font-lustria ">We are a safe place to grow <br/> and develop what you believe in.</p>
                    <p className="mt-4 text-sm lg:text-lg w-[90%] lg:w-[25%]">
                        We let your know that with your purchase you achieve a real impact
                        on someone else's life.
                    </p>
                    <img src={Band_Vector_1} alt="Loom Coffeehouse Logo" className="absolute h-full lg:h-screen top-0 right-0" />
                    <img src={Band_Vector_2} alt="Loom Coffeehouse Logo" className="absolute h-full lg:h-screen top-0 left-0" />
                </div>

                {/* --------------------------------------------------------------------------------------------------------------------------------------- */}

                <main ref={servicesRef} className="min-h-screen px-4 py-8 bg-[#DEDBD6] flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl lg:text-3xl font-avenir-book mt-4 lg:mb-6 text-[#A76734]">OUR SERVICES</h2>
                    <div className="flex justify-center items-center flex-col lg:flex-row lg:space-x-16 w-full">
                        {/* Autonomy Section */}
                        <div className="lg:w-[16%] py-10 flex flex-col justify-center items-center">
                            <img src={M4_autonomyImage} alt="Autonomy" className=" h-[50vh]" />
                            <h3 className="text-2xl font-lustria mt-4 text-[#215A81]">Coffee Roasting</h3>
                            <div className='bg-[#A76734] mx-auto h-1 rounded-full w-28 my-2'/>
                            <p className="lg:text-lg text-[#8292A7] mb-2">We roast green coffee beans into rich, flavorful profiles. Our roasting services are tailored to meet your business needs and taste preferences.</p>
                            {/* <button className="mx-auto mt-2 lg:mt-10 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#A76734] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                                OUR COFFEE
                            </button> */}
                        </div>

                        {/* Mastery Section */}
                        <div className="lg:w-[16%] py-10 flex flex-col justify-center items-center">
                            <img src={M4_masteryImage} alt="Mastery" className="h-[50vh]" />
                            <h3 className="text-2xl font-lustria mt-4 text-[#215A81]">Packaging & Delivery</h3>
                            <div className='bg-[#A76734] mx-auto h-1 rounded-full w-28 my-2'/>
                            <p className="lg:text-lg text-[#8292A7] mb-2">We provide professional packaging and reliable delivery to ensure your coffee arrives fresh, aromatic, and beautifully presented.</p>
                            {/* <button className="mx-auto mt-2 lg:mt-10 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#A76734] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                                GET TO KNOW US
                            </button> */}
                        </div>

                        {/* Purpose Section */}
                        <div className="lg:w-[16%] w-full py-10 flex flex-col justify-center items-center">
                            <img src={M4_purposeImage} alt="Purpose" className=" h-[50vh]" />
                            <h3 className="text-2xl font-lustria mt-4 text-[#215A81]">Quality Control & Cupping</h3>
                            <div className='bg-[#A76734] mx-auto h-1 rounded-full w-28 my-2'/>
                            <p className="lg:text-lg text-[#8292A7] mb-2">From sourcing to final brew, we perform expert cupping sessions and quality assessments to guarantee excellence in every cup.</p>
                            {/* <button className="mx-auto mt-2 lg:mt-10 text-[#A76734] font-semibold py-2 px-4 border border-[#A76734] rounded-full shadow hover:bg-[#a76834d5] hover:text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                                MAKE AN IMPACT
                            </button> */}
                        </div>
                    </div>
                </main>
                <main className="w-full h-[20vh] lg:h-screen"
                >
                    <div 
                        className=' h-[70%] hidden lg:block'
                        style={{ backgroundImage: `url(${M5_1_bg})`, backgroundPosition:'center' }}
                    >
                        <div className='flex justify-between items-center px-20 h-full font-lustria'>
                            <h2 className='text-5xl text-left'>Learn <br/>about</h2>
                            <h2 className='text-5xl text-right'>the lives <br/> you're <br/> changing</h2>
                        </div>
                    </div>
                    <div 
                        className='h-full lg:h-[30%] flex justify-center items-center'
                        style={{ backgroundImage: `url(${M5_2_bg})` }}
                    >
                        <button onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} className="mx-auto text-xl font-semibold py-2 px-4 border border-[#a76834c2] rounded-full shadow bg-[#A76734] text-[#DED8D6] focus:outline-none focus:ring-2 focus:ring-[#FFD8CC] focus:ring-opacity-50">
                            CONTACT US 
                        </button>
                    </div>
                </main>


                <main ref={contactRef} className="w-full flex h-screen flex-col lg:flex-row">
                    <img src={M6_bg} alt="Weaving Loom" className="lg:w-[50%] h-full lg:h-full object-top lg:object-cover" />
                    <div  className="relative lg:w-[50%] text-left flex items-center justify-center bg-[#575f3d]">
                        <div  className="lg:w-[60%] my-[4rem] text-left font-avenir-book flex flex-col items-left justify-center ">
                            <h1 className="text-4xl font-lustria mb-6 lg:mb-12">Let's create <br/> impact together</h1>
                            <div className='lg:my-4'>
                                <p className="text-md text-[#DEDBD6] mb-2">Email Address</p>
                                <p className="text-sm text-[#DEDBD6] mb-2">relax@loomcofeehouse.com</p>
                            </div>
                            <div className='lg:my-4 mt-4 lg:mt-0'>
                                <p className="text-md text-[#DEDBD6] mb-2">Loom CoffeeHouse</p>
                                <p className="text-sm text-[#DEDBD6] mb-2">128 Maryhill Road Glasgow. G20 7QS</p>
                            </div>
                            <img src={Band_Vector_1} alt="Loom Coffeehouse Logo" className="hidden lg:block absolute h-full right-0" />
                            <img src={Band_Vector_1} alt="Loom Coffeehouse Logo" className="absolute h-full lg:hidden lg:h-screen top-0 right-0" />
                            <img src={Band_Vector_2} alt="Loom Coffeehouse Logo" className="absolute h-full lg:hidden lg:h-screen top-0 left-0" />
                        </div>
                    </div>
                </main>
            </div>
        </div>
      );
}

export default Home