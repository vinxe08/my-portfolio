import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { PersonOutlineOutlined } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link'
import { NavbarList } from './NavbarList'
import { motion } from 'framer-motion'
import { sidebar, navButton, navbar, variants } from './NavbarAnimation'
import { useMediaQuery } from '@mui/material';

function Navbar() {
  const [nav, setNav] = useState(false)
  const mobileView = useMediaQuery('(max-width:800px)');

  const open = () => {setNav(nav => !nav)}
  
  const [home, setHome] = useState(true)
  const [project, setProject] = useState()
  const [about, setAbout] = useState()
  const [skills, setSkills] = useState()
  const [contact, setContact] = useState()

  // For Navbar Animation When in Mobile View
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;

      const homeScrolled = yPos > -100 && yPos < 500;
      const projectScrolled = yPos > 500 && yPos < 1210;
      const aboutScrolled = yPos > 1210 && yPos < 1800;
      const skillsScrolled = yPos > 1800 && yPos < 2200;
      const contactScrolled = yPos > 2200
      
      setHome(homeScrolled)
      setProject(projectScrolled)
      setAbout(aboutScrolled)
      setSkills(skillsScrolled)
      setContact(contactScrolled)
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  })

  return (
  <>{ mobileView ?
    <motion.nav 
      onClick={open}
      initial='close'
      animate={nav ? "open" : "close"}
      exit="exit"
      variants={sidebar}
      className="Navbar">
        <div className="hamburger__menu" >
          <motion.div 
            initial="topClose"
            animate={nav ? 'topOpen' : 'topClose'}
            variants={navButton}
            className="navbar__buttonTop"></motion.div>
          <motion.div 
            initial="midClose"
            animate={nav ? 'midOpen' : 'midClose'}
            variants={navButton}
            className="navbar__buttonMid"></motion.div>
          <motion.div 
            initial="botClose"
            animate={nav ? 'botOpen' : 'botClose'}
            variants={navButton}
            className="navbar__buttonBottom"></motion.div>
        </div>
        <motion.div
          initial="closed"
          animate={nav ? "open" : "closed"}
          variants={navbar}>
            <motion.div
              className='sidebar__newButton'
              variants={variants} >
                <NavbarList location="#Home" name="Home" Cname={home ? "nav__locationNew active" :"nav__locationNew"} onClick={open} />
            
                <NavbarList location="#Projects" name="Projects"  Cname={project ? "nav__locationNew active" :"nav__locationNew"} onClick={open} />
           
                <NavbarList location="#About" name="About" Cname={about ? "nav__locationNew active" :"nav__locationNew"} onClick={open} />
            
                <NavbarList location="#Skills" name="Skills" Cname={skills ? "nav__locationNew active" :"nav__locationNew"}  onClick={open} />
            
                <NavbarList location="#Contact" name="Contact" Cname={contact ? "nav__locationNew active" :"nav__locationNew"}  onClick={open} />
            </motion.div>
        </motion.div>
    </motion.nav>
  : <nav className='Navbar'> 
    {/* FOR WEBVIEW */}
      <div className="navbar__container">
        <HashLink smooth to="#Home" className="navbar__icon">
          <PersonOutlineOutlined fontSize='large'  />
          <h1>Portfolio</h1>
        </HashLink>
        <div className="web__menu">
          <NavbarList location="#Home" name="Home" Cname={home ? "nav__location onTrack" :"nav__location"} />
          <NavbarList location="#Projects" name="Projects" Cname={project ? "nav__location onTrack" :"nav__location"} />
          <NavbarList location="#About" name="About" Cname={about ? "nav__location onTrack" :"nav__location"}  />
          <NavbarList location="#Skills" name="Skills" Cname={skills ? "nav__location onTrack" :"nav__location"}  />
          <NavbarList location="#Contact" name="Contact" Cname={contact ? "nav__location onTrack" :"nav__location"}  />
        </div>
      </div>
    </nav>
    }
    </>
  )
}

export default Navbar
