// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';  
import Exploratory from './ExploratoryPieces';
import Photography from './Photography';
import Home from './Home';
import Experience from './Experience';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes> {/* Wrap your Routes in a Routes component */}
          <Route path="/gili-cohen" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/exploratory" element={<Exploratory />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
