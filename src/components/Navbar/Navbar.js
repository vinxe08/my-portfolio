import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { PersonOutlineOutlined } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link'
import { NavbarList } from './NavbarList'
import { motion } from 'framer-motion'
import { sidebar, navButton, navbar, variants } from './NavbarAnimation'
import { navData } from './NavbarData'
import { useMediaQuery } from '@mui/material';


function Navbar() {
  const [nav, setNav] = useState(false)
  const mobileView = useMediaQuery('(max-width:800px)');

  const open = () => {setNav(nav => !nav)}

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
          variants={navbar}
          className="sidebar__newButton">
            { navData.map((data, index) => 
              <motion.div
                key={index}
                variants={variants}
                >
                  <NavbarList location={data.location} name={data.name} Cname="nav__locationNew" onClick={open} />
              </motion.div>
            )}
        </motion.div>
    </motion.nav>
  : <nav className='Navbar'>
      <div className="navbar__container">
        <HashLink smooth to="#Home" className="navbar__icon">
          <PersonOutlineOutlined fontSize='large'  />
          <h1>Portfolio</h1>
        </HashLink>
        <div className="web__menu">
          <NavbarList location="#Home" name="Home" Cname="nav__location" />
          <NavbarList location="#Projects" name="Projects" Cname="nav__location" />
          <NavbarList location="#About" name="About" Cname="nav__location"  />
          <NavbarList location="#Skills" name="Skills" Cname="nav__location"  />
          <NavbarList location="#Contact" name="Contact" Cname="nav__location"  />
        </div>
      </div>
    </nav>
    }
    </>
  )
}

export default Navbar
