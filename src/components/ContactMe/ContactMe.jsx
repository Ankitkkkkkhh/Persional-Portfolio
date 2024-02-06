import React from "react";
import "./ContactMe.css"
import ContactinfoCard from "../ContactinfoCard/ContactinfoCard";
import ContactForm from "../ContactForm/ContactForm";

const ContactMe= () =>{
    return(
       <section className=" contact-container">
        <h5> Contact Me</h5>
            <div className="contact-content">
                <div style={{flex:1}}>
                    <ContactinfoCard
                        iconUrl= "src\components\Navbar\image\maillas-icon.png"
                        text="rkpandey9923@gmail.com"/>
                    
                    <ContactinfoCard
                        iconUrl= "src\components\Navbar\image\githun.png"
                        text="https://github.com/Ankitkkkkkhh"/>

                    {/* <ContactinfoCard
                        iconUrl= "src\components\Navbar\image\img1.png/"
                        text="rkpandey9923@gmail.com"/> */}
                    
                </div>
                <div style={{flex:1}}>
                    <ContactForm/>
                </div>

            </div>
       </section>
    )
}

export default ContactMe