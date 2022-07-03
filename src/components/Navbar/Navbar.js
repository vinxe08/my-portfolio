import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { PersonOutlineOutlined } from '@mui/icons-material';
import { HashLink } from 'react-router-hash-link'
import { NavbarList } from './NavbarData'

function Navbar() {
  const [nav, setNav] = useState(false)
  const[home, setHome] = useState(true)
  const[project, setProject] = useState(false)
  const[about, setAbout] = useState(false)
  const[skills, setSkills] = useState(false)
  const[contact, setContact] = useState(false)
  

  const open = () => {
    setNav(nav => !nav)
  }

  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;

      const HomePage = yPos > -3 && yPos < 300;
      setHome(HomePage)

      const ProjectPage = yPos > 300 && yPos < 2550;
      setProject(ProjectPage)

      const AboutPage = yPos > 2550 && yPos < 3300;
      setAbout(AboutPage)
      
      const SkillsPage = yPos > 3300 && yPos < 4000;
      setSkills(SkillsPage) 

      const ContactPage = yPos > 4000 && yPos < 4500;
      setContact(ContactPage)

    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  })

  return (
    <nav className="Navbar">
      <div className="navbar__container">
        <HashLink smooth to="#Home" className="navbar__icon">
          <PersonOutlineOutlined fontSize='large'  />
          <h1>Portfolio</h1>
        </HashLink>
        <div className="hamburger__menu" onClick={open}>
          <button className="navbar__button"></button>
        </div>
        <div className={!nav ? "navbar__data" : "navbar__data show_nav"}>
          {/* Mobile view */}
          <div className="sidebar__button" >
            <NavbarList click={open} location="#Home" name="Home" Cname={ home ? "nav__location active" : "nav__location"} />
            <NavbarList click={open} location="#Projects" name="Projects" Cname={ project ? "nav__location active" : "nav__location"} />
            <NavbarList click={open} location="#About" name="About" Cname={ about ? "nav__location active" : "nav__location"} />
            <NavbarList click={open} location="#Skills" name="Skills" Cname={ skills ? "nav__location active" : "nav__location"} />
            <NavbarList click={open} location="#Contact" name="Contact" Cname={ contact ? "nav__location active" : "nav__location"} />
          </div>
          <div className="sidebar__divition" onClick={() => setNav(false)}></div>
        </div>
        {/* Web View */}
        <div className="web__menu">
          <NavbarList location="#Home" name="Home" Cname={ home ? "nav__location active" : "nav__location"} />
          <NavbarList location="#Projects" name="Projects" Cname={ project ? "nav__location active" : "nav__location"} />
          <NavbarList location="#About" name="About" Cname={ about ? "nav__location active" : "nav__location"} />
          <NavbarList location="#Skills" name="Skills" Cname={ skills ? "nav__location active" : "nav__location"} />
          <NavbarList location="#Contact" name="Contact" Cname={ contact ? "nav__location active" : "nav__location"} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
