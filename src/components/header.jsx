import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/LoomLogo.png';

const Header = ({ setActiveSection, activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    { name: 'Home', section: 'home' },
    { name: 'Autonomy', section: 'autonomy' },
    { name: 'Mastery', section: 'mastery' },
    { name: 'Purpose', section: 'purpose' },
    { name: 'Contact', section: 'contact' },
  ];

  // Toggle body scroll when menu state changes
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
    <header className="z-10 flex justify-between items-center bg-[#575f3D] h-16 px-4 lg:px-8 relative">
      {/* Logo */}
      <div className="flex items-center justify-start flex-1">
        <img src={Logo} alt="Logo" className="h-8 cursor-pointer" />
      </div>

      {/* Desktop Menu */}
      {/* <nav className="hidden lg:flex items-center flex-1 justify-center">
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li
              key={item.section}
              className="relative cursor-pointer"
              onClick={() => setActiveSection(item.section)}
            >
              <span
                className={`text-white ${
                  activeSection === item.section ? 'font-bold' : ''
                }`}
              >
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
      </nav> */}

      {/* Hamburger Icon */}
      <div className="lg:hidden z-50">
        <button
          className={`focus:outline-none ${
            menuOpen ? 'text-[#575f3D]' : 'text-white'
          }`}
          onClick={(event) => {
            event.stopPropagation(); // Evita que el evento cierre el menú
            setMenuOpen((prev) => !prev);
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      <div className="lg:flex-1" />

      {/* Mobile Menu */}
      <motion.div
        ref={menuRef}
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed top-0 right-0 w-4/5 h-full bg-[#dedbd6] shadow-lg flex flex-col items-center justify-center lg:hidden"
      >
        <ul className="flex flex-col items-center gap-6 text-[#575f3D] text-lg">
          {menuItems.map((item) => (
            <li
              key={item.section}
              className="cursor-pointer"
              onClick={() => {
                setActiveSection(item.section);
                setMenuOpen(false);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
