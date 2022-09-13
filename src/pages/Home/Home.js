import React from 'react'
import './Home.css'
import { HashLink } from 'react-router-hash-link'

function Home() {

  return (
    <div className="Home" id="Home">
      <div className="home__container">
        <h5>
          I'm <span className="my__name"> Vince </span>
        </h5>
        <h1>A Software Developer</h1>
        <h3>Specialize in <span className="reactJs">ReactJS</span> </h3>
        <div className="home__button">
          <HashLink smooth to="#Projects" className="projects__button">Projects</HashLink>
          <HashLink smooth to="#About" className="about__button">About</HashLink>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home)
