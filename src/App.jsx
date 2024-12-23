import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Hub from './views/hub';
// import Autonomy from './views/autonomy';
// import Mastery from './views/mastery';
// import Purpose from './views/purpose';
// import Contact from './views/contact';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Hub />} />
        {/* <Route path="/autonomy" element={<Autonomy />} />
        <Route path="/mastery" element={<Mastery />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default App; // Exportación por defecto
