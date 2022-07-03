import React, { useEffect, useState } from 'react'
import './About.css'
import me from '../../images/to-do-list.png'
import { motion } from 'framer-motion'

function About() {
  const [image, setImage] = useState(false)
  const [text, setText] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
    const yPos = window.scrollY;

    const setImagePosition = yPos > 2170
    const setTextPosition = yPos > 2190

    setImage(setImagePosition)
    setText(setTextPosition)

    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    }
  })

  return (
      <div className="About" id="About">
        <div className="about__container">
          <div className="icon__container">
            <motion.img 
              animate={{height: image ? 300 : 0}}
              src={me} 
              className="icon__image" 
              alt="logo" />
          </div>
          <motion.div 
            animate={{scale: text ? 1 : 0}}
            className="about__row">
            <div className="about__section">
              <h1 className="about__me">About Me</h1>
            </div>
            <div className="detail__container">
              <h1 className="about__greetings">Hi, I'm <span className="about__name">Vince</span> </h1>
              <p className="about__text">Looking for a job opportunity for a ReactJS Developer position to start my career in Web Development. My passion is focused on developing applications with the use of Modern Javascript Library and Frameworks, the React.js and Node.js. Have a Degree of Bachelor of Science in Information Technology from Colegio de Dagupan.</p>
            </div>
          </motion.div>      
        </div>
      </div>
  )
}

export default About

