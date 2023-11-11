import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Resume } from './views/Resume';
import { Projects } from './views/Projects';
// import { NavBar } from './components/NavBar';
import { Home } from './views/Home';
import { Contact } from './views/Contact';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <NavBar /> */}
      <Projects />
    </BrowserRouter>
  );
}

export default App;
