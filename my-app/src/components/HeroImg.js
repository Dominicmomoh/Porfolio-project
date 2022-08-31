import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="into-img" 
        src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>Hello, my Name is Dominic Momoh II</p>
            <h1>I'm an aspiring Software Engineer</h1>
            <div> 
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg