import React from 'react';
import Home from './views/home';
import Autonomy from './views/autonomy';
import Mastery from './views/mastery';
import Purpose from './views/purpose';
import Contact from './views/contact';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autonomy" element={<Autonomy />} />
        <Route path="/mastery" element={<Mastery />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
