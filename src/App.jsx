import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Hero />
      <About />
      <Skills />
      
      <Project />
      
      <Footer />
    </div>
  );
};

export default App;
