import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { PersonOutlineOutlined } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link'
import { NavbarList } from './NavbarList'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { sidebar, navButton, navbar, variants, container, item, letterContainer2 } from './NavbarAnimation'
import { useMediaQuery } from '@mui/material';
import TextAnimation from './TextAnimation';
import logo from '../../images/logo512.png'
import useCustomScroll, { name } from '../../util/Navbar';

function Navbar() {
  const [nav, setNav] = useState(false)
  const mobileView = useMediaQuery('(max-width:800px)');
  const { bg, home, project, about, skills, contact } = useCustomScroll()

  const open = () => {setNav(nav => !nav)}

  const [showNavLogo, setShowNavLogo] = useState(false)
  const [myName, setMyName] = useState(name)

  const textAnimation = () => {
    setTimeout(() => {
      setMyName(myName.filter(nm => nm.type.match("stay")))
      setShowNavLogo(true)
    },3000)
  }

  useEffect(() => {
    textAnimation();
  },[])

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

    // {/* FOR WEB-VIEW */}
  :  <motion.div 
      className="navbar__container"
      animate={{ backgroundColor: bg ? "#282c34" : "transparent" }}
      >
        <HashLink smooth to="#Home" className="navbar__icon">
          <motion.div 
            initial={{ x: 40 }} 
            animate={{ x:showNavLogo ? 20 : 0 }} 
            transition={{ type: "spring", stiffness: 100, damping: 5 }}>
            <PersonOutlineOutlined fontSize='large'  />
          </motion.div>
          <motion.div 
            className='nav__logoAnimation' 
            variants={letterContainer2}
            initial="hidden"
            animate="visible">

            <LayoutGroup>
              <AnimatePresence>
              {myName?.map((n, i) => (
                <TextAnimation name={n} iD={n.letter} i={i} />
              ))}
              </AnimatePresence>
            </LayoutGroup>

            { showNavLogo ? 
              <motion.div 
                initial={{ scale: 0 , y: 0, x:0 }} 
                animate={{ scale: 1, y: -13, x: 14 }} 
                transition={{ duration: 1.1 }}>
                <motion.img
                  animate={{ rotate: 360 }}
                  transition= {{ 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "linear"
                  }}
                  src={logo} 
                  className="nav__reactlogo" 
                  alt="logo" />
              </motion.div>
              : null }

          </motion.div>
        </HashLink>

        <motion.div 
          className="web__menu"
          variants={container}
          initial="hidden"
          animate="visible" >
            
          <motion.div variants={item}>
            <NavbarList location="#Projects" name="Projects" Cname={project ? "nav__location onTrack" :"nav__location"} />
          </motion.div>
          <motion.div variants={item}>
            <NavbarList location="#About" name="About" Cname={about ? "nav__location onTrack" :"nav__location"}  />
          </motion.div>
          <motion.div variants={item}>
            <NavbarList location="#Skills" name="Skills" Cname={skills ? "nav__location onTrack" :"nav__location"}  />
          </motion.div>
          <motion.div variants={item}>
            <NavbarList location="#Contact" name="Contact" Cname={contact ? "nav__location onTrack custom__nav" :"nav__location custom__nav"}  />
          </motion.div>
        </motion.div>
      </motion.div>
    }
    </>
  )
}

export default Navbar
