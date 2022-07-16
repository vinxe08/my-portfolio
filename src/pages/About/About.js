import React, { useEffect, useState } from 'react'
import './About.css'
import me from '../../images/to-do-list.png'
import { motion } from 'framer-motion'
import cv from '../../assets/Curriculum_Vitae.pdf'

const cardVariants = {
  offscreen: {
    scale: 0,
  },
  onscreen: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.5
    }
  },
};

function About() {

  return (
      <div className="About" id="About">
        <motion.div 
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 1 }}
          className="about__container">
          <motion.div 
            variants={cardVariants}
            className="icon__container">
            <img 
              src={me} 
              className="icon__image" 
              alt="logo" />
          </motion.div>
          <motion.div 
            variants={cardVariants}
            className="about__row">
            <div className="about__section">
              <h1 className="about__me">About Me</h1>
            </div>
            <div className="detail__container">
              <h1 className="about__greetings">Hi, I'm <span className="about__name">Vince</span> </h1>
              <p className="about__text">Looking for a job opportunity for a ReactJS Developer position to start my career in Web Development. My passion is focused on developing applications with the use of Modern Javascript Library and Frameworks, the React.js and Node.js. Have a Degree of Bachelor of Science in Information Technology from Colegio de Dagupan.</p>
            </div>
            <a href={cv} download className='download__cv'>Download CV</a>
          </motion.div>      
        </motion.div>
      </div>
  )
}

export default About

