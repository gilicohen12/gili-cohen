// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';  
import Exploratory from './ExploratoryPieces';
import Photography from './Photography';
import Home from './Home';
import Experience from './Experience';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Home />
        <Routes> {/* Wrap your Routes in a Routes component */}
          <Route path="/experience" element={<Experience />} />
          <Route path="/home" element={<Home />} />
          <Route path="/exploratory" element={<Exploratory />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
