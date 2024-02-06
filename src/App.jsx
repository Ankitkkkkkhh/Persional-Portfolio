import React, { useEffect } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";

const App = () => {
  useEffect(() => {
    const loader = document.querySelector(".preloader");
    setTimeout(() => {
      loader.classList.add("hidden"); // Add hidden class after timeout
    }, 21000);
  }, []);
  // 21000

  return (
    <>
      <div className="preloader">
        <video autoPlay loop muted playsInline>
          <source src="src/components/Navbar/image/final.mp4" type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        {/* <WorkExperience/> */}
        <ContactMe />
      </div>
    </>
  );
};

export default App;
