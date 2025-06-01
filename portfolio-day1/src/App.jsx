import React from "react";
import Navbar from "./navbar_compns/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./navbar_compns/Home/Home";
import About from "./navbar_compns/About/About";
import Skills from "./navbar_compns/Skills/Skills";
import Contact from "./navbar_compns/Contact/Contact";
import Experience from "./navbar_compns/Experience/Experience";
import Projects from "./navbar_compns/Projects/Projects";
import "./App.css";

const App = () => {
  return (
    <div className="nav_bar">
      <Navbar />
      <div className="main_content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
