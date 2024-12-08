import React, { useState } from 'react';
import Logo from '../assets/LoomLogo.png';  // Asegúrate de ajustar la ruta al lugar donde guardaste tu imagen

import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg-[#575f3D] h-16 px-4">
      {/* Bloque azul para el logo */}
      <div className="flex items-center justify-start flex-1 h-full">
        <img src={Logo} alt="Logo" className="h-6 ml-2" />  {/* Usando img en lugar de svg */}
      </div>
      
      {/* Bloque verde para la navegación */}
      <div className="flex-1 flex justify-evenly items-center">
        <ul className="flex gap-4">
          <li className="text-white"><Link to="/">Home</Link></li>
          <li className="text-white"><Link to="/autonomy">Autonomy</Link></li>
          <li className="text-white"><Link to="/mastery">Mastery</Link></li>
          <li className="text-white"><Link to="/purpose">Purpose</Link></li>
          <li className="text-white"><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      
      {/* Bloque rojo vacío */}
      <div className="flex-1">
      </div>
    </header> 
  );
};

export default Header;
