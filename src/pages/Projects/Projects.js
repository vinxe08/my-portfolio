import React, { useState, useEffect } from 'react'
import './Projects.css'
import spotifyLogo from '../../images/Spotify-clone-banner.png'
import AirbnbLogo from '../../images/Airbnb-clone-banner.png'
import { ArrowCircleUp } from '@mui/icons-material';
import { motion } from 'framer-motion'

function Projects() {
  const [title, setTitle] = useState(false)
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [backgroundText, setBackgroundText] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;

      const titleScrolled = yPos > 300;
      const firstScrolled = yPos > 480;
      const secondScrolled = yPos > 1120;
      const thirdScrolled = yPos > 1610;
      const bgText = yPos > 300 && yPos < 1800

      setTitle(titleScrolled)
      setFirst(firstScrolled)
      setSecond(secondScrolled)
      setThird(thirdScrolled)
      setFourth(fourthScrolled)
      setBackgroundText(bgText)
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }

  })

  return (
    <div className="Projects" id="Projects">
      <div className="projects__container"> 
        <div className="projects__title"> 
          <motion.h3 
            className="featured__project"
            animate={{ x: title ? 0 : -180, opacity: title ? 1 : 0 }}
            transition={{ ease: "easeOut", duration: 1 }} 
              >Featured Projects</motion.h3>
          <motion.div className="title__section"
          animate={{ x: title ? 0 : 180, opacity: title ? 1 : 0 }}
          transition={{ ease: "easeOut", duration: 1 }} >          
            <h1 className="title__animation">Project</h1>
          </motion.div>
        </div>
        <div className="project__contents">
          {/* 1st */}
          <motion.div 
            className="project__row"
            animate={{ x: first ? 0 : -250, scale: first ? 1 : 0, opacity: first ? 1 : 0  }}
            transition={{ type: "spring", stiffness: 110 }} >
            <img src={AirbnbLogo} className="project__photo" alt="logo" />
            <div className='image__overlay'>
              <a target='_blank' href='https://airbnb-yt-iota.vercel.app/' className='image__title'>
                <h1 className='text_icon'>Visit Page</h1>
                <ArrowCircleUp fontSize='large' className='projects__icon' />
              </a>
              <p className='image__description'>Made of ReactJS with NextJS, Tailwind CSS, Calendar Picker and Mapbox </p>
            </div>
          </motion.div>
          {/* 2nd */}
          <motion.div 
            className="project__row"
            animate={{ 
              y: second ? 0 : -350,
              x: second ? 0 : 150,  
              scale: second ? 1 : 0, 
              opacity: second ? 1 : 0  }}
            transition={{ type: "spring", stiffness: 110 }} >
              <img src={spotifyLogo} className="project__photo" alt="logo" />
              <div className='image__overlay'>
                <a target='_blank' href='https://spotify-clone-yt-8nrk7pdhw-vinxe08.vercel.app/' className='image__title'>
                  <h1 className='text_icon'>Visit Page</h1>
                  <ArrowCircleUp fontSize='large' className='projects__icon' />
                </a>
                <p className='image__description'>Made of ReactJS with NextJS, Tailwind CSS, Spotify API, NexthAuth and Recoil</p>
              </div>
          </motion.div>
          {/* 3rd */}
          <motion.div 
            className="project__row"
            animate={{ scale: third ? 1 : 0, opacity: third ? 1 : 0  }}
            transition={{ type: "spring", stiffness: 110 }} >
              <img src={spotifyLogo} className="project__photo" alt="logo" />
              <div className='image__overlay'>
                <a target='_blank' href='' className='image__title'>
                  <h1 className='text_icon'>Visit Page</h1>
                  <ArrowCircleUp fontSize='large' className='projects__icon' />
                </a>
                <p className='image__description'>Made of ReactJS with NextJS, Tailwind CSS, Calendar Picker and Mapbox </p>
              </div>
          </motion.div>
        </div>
      </div>
      <div className="background__text">
          <motion.h1
            animate={{  opacity: backgroundText ? 1 : 0  }}
            transition={{ ease: "easeOut", duration: 2.5 }}
          >Works</motion.h1>
      </div>
    </div>
  )
}

export default Projects
