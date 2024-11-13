// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';  
import Exploratory from './projects/ExploratoryPieces';
import Photography from './Photography';
import Home from './homePage/Home';
import ExperienceTimeline from './homePage/ExperienceTimeline';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes> {/* Wrap your Routes in a Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<ExperienceTimeline />} />
          <Route path="/exploratory" element={<Exploratory />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
