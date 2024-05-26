import React from 'react'
import "../css/footer.css"   
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <br />
        <br />
        <h3>Universidad Tecnologica Nacional - TPU  - Profesor Politi Raul</h3>
        <br />
        <h4>Contacto</h4>
       
       <a href="https://www.instagram.com/santi.rivadeneira/">
        <FaInstagram  style={{ width: "25px", height: "25px" }} />   
       </a>
       
       <a href="https://web.whatsapp.com/">
       <FaWhatsapp style={{ width: "35px", height: "25px" }} />
       </a>

       <a href="https://www.facebook.com/">
       <LuFacebook style={{width:"25px", height: "25px"}} />
       </a>
        
        <a href="https://github.com/">
        <FaGithub style={{width:"25px", height: "25px"}} />
        </a>
        
        <br />
        <br />
    </div>
  )
}

export default Footer