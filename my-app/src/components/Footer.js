import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaPhone, FaMailBulk, FaLinkedin,} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container"> 
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} /> 
                    <div>
                        <p>Charlotte,</p>
                        <p>North Carolina</p>
                    </div>
                    </div>
                    <div className="phone">
                        <h4> <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    310-924-1421 </h4>
                    </div>
                    <div className="email">
                        <h4>  <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
                        
                    dominicmomoh.dm@gmail.com</h4>
                    
                    </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>I am new to the tech field but my passion for learning coding drives me everyday to be successful.</p>
                      <div className="social">
                      {/* <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
                      <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} /> */}
                     <a href="www.linkedin.com/in/dominic-momoh"> <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} /> </a>

                      </div>
            </div>
        </div>
    </div>
  )
}

export default Footer