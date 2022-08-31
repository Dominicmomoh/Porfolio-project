import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/react1.jpeg"
import React2 from "../assets/react2.webp"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Hello, I am Dominic Momoh</h1>
            <p>I am a dedicated and passionate coding Apprentice,
                     who is currently going through a rigorous 6-month 
                     coding boot camp aiming at specializing in both 
                     front-end and back-end development. I utilize my passion 
                     for coding on a daily basis when creating web applications. 
                     Seeking to utilize both my technical and functional skills to
                      thrive as an entry-level software engineer</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
.
        <div className="right">
           <div className="img-container"> 
           <div className="img-stack top"> 
           <img src={React1} className="img" alt="true"/>
           </div>
           <div className="img-stack bottom"> 
           <img src={React2} className="img" alt="true"/>
           </div>
           </div> 
        </div>
    </div>
  )
}

export default AboutContent