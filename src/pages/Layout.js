import React, { useEffect, useState } from 'react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import ContactIcon from '../components/ContactIcon/ContactIcon';

function Layout() {
  const [project, setProject] = useState()
  const [about, setAbout] = useState()
  const [skills, setSkills] = useState()
  const [iconColor, setIconColor] = useState()
  const [iconFadeIn, setIconFadeIn] = useState()

  // For scrolling & Animation
  useEffect(() => {
    const handleScroll = () => {
      const yPos = window.scrollY;

      const titleScrolled = yPos > 200;
      const firstScrolled = yPos > 480;
      const secondScrolled = yPos > 1190;
      const thirdScrolled = yPos > 1848;
      const fourthScrolled = yPos > 300 && yPos > 2000;

      setIconColor(titleScrolled)
      setProject(firstScrolled)
      setAbout(secondScrolled)
      setSkills(thirdScrolled)
      setIconFadeIn(fourthScrolled)
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }
  })

  return (
    <Router>   
      <Navbar />
      <ContactIcon iconColor={iconColor} iconFadeIn={iconFadeIn}/>
      <Switch>
        <Route path="/">
          <Home />
          <Projects scrollValue={project}/>
          <About scrollValue={about}/>
          <Skills scrollValue={skills}/>
          <Contact />
        </Route>
      </Switch>           
    </Router>
  )
}

export default React.memo(Layout)