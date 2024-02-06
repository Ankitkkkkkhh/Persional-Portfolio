import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
      
    
    <section className="hero-container">
   
      <div className="hero-content">
        <h2>Building Digital Expreince The Inspire </h2>
        <p>
          Passionate Frontend Devloper| Transforming Ideas into seamless and
          visually stunning web solution
        </p>

        
        
      
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="src\components\Navbar\image\img1.png" alt="" />
          </div>
          <img style={{borderRadius: '5rem'}} src="src\components\Navbar\image\saske.jpg" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="src\components\Navbar\image\img2.png" alt="" />
          </div>

          <div className="tech-icon">
            <img src="src\components\Navbar\image\img3.png" alt="" />
          </div>

          <div className="tech-icon">
            <img src="src\components\Navbar\image\img4.png" alt="" />
          </div>


        </div>
      </div>
    </section>
  );
};
export default Hero;
