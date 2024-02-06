import React, { useState } from "react";
import "./Navbar.css"
import MobileNav from "./MobileNav/MobileNav";

const Navbar=()=>{
    const[openMenu,setOpenMenu]=useState(false);

    const toggleMenu=()=>{
      setOpenMenu(!openMenu);
    };
    return(
        
        <>
        {/* <div className="video-container">
  <video autoPlay loop muted playsInline className="video">
    <source src="src/components/Navbar/image/final.mp4" type="video/mp4" />
  </video>
  Your other content goes here
</div> */}

        <MobileNav isOpen={openMenu}toggleMenu={toggleMenu}/>
    
            <nav className="nav-wrapper">
            <div className="nav-content">
            <img className="logo" src="src/components/Navbar/image/logo.png" alt="" />


            <ul>
                <li>
                    <a className="menu-item">Home</a>
                </li>
 
                <li>
                    <a className="menu-item">Skills</a>
                </li>
     
                {/* <li>
                    <a className="menu-item">work Experience</a>
                </li> */}
           
                <li>
                    <a className="menu-item">Contact Me</a>
                </li>
            

            <button className="contact-btn" onClick={() => {}}>
                Hire Me
            </button>
            </ul>

            <button class="menu-btn" onClick={toggleMenu}>
                <span 
                class={"material-symbols-outlined"}
                style={{fontSize:"1.8rem"}}
                >
                    {openMenu?"close":"menu"}
                 </span>
            </button>

            </div>


            </nav>
        </>
    );
};
export default Navbar;