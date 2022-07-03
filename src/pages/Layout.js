import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'

function Layout() {
  return (
    <>
      <Home />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default Layout