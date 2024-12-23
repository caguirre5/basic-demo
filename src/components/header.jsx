import React from 'react';
import Logo from '../assets/LoomLogo.png';
import { motion } from 'framer-motion';

const Header = ({ setActiveSection, activeSection }) => {
  const menuItems = [
    { name: 'Home', section: 'home' },
    { name: 'Autonomy', section: 'autonomy' },
    { name: 'Mastery', section: 'mastery' },
    { name: 'Purpose', section: 'purpose' },
    { name: 'Contact', section: 'contact' },
  ];

  return (
    <header className="flex justify-between items-center bg-[#575f3D] h-16 px-4">
      <div className="flex items-center justify-start flex-1 h-full">
        <img src={Logo} alt="Logo" className="h-6 ml-2" />
      </div>
      
      <div className="flex-1 flex justify-evenly items-center">
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li key={item.section} className="relative cursor-pointer" onClick={() => setActiveSection(item.section)}>
              <span className={`text-white ${activeSection === item.section ? 'font-bold' : ''}`}>
                {item.name}
              </span>
              {activeSection === item.section && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-white"
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex-1"></div>
    </header>
  );
};

export default Header;
