import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import ContactIcon from '../components/ContactIcon/ContactIcon';

function Layout({scrollValue}) {

  return (
    <Router>   
      <Navbar />
      <ContactIcon scrollValue={scrollValue}/>
      <Switch>
        <Route path="/">
          <Home />
          <Projects />
          <About />
          <Skills />
          <Contact />
        </Route>
      </Switch>           
    </Router>
  )
}

export default Layout