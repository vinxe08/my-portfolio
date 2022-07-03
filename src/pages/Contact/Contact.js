import React from 'react'
import './Contact.css'
import {Home, ContactPhone, Email, LinkedIn, FacebookRounded, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="contact__container">
        <div className="contact__title"> 
          <h1>Contact</h1>
        </div>
        <div className="divider"></div>
        <div className="contact__details">
          <div className="contact__row">
            <Home className="contact__icon" />
            <div className="contact__info">
              <h1>Bolinao, Pangasinan</h1>
              <h2>#75 Ba-reg, Arnedo</h2>
            </div>
          </div>
          <div className="contact__row">
            <ContactPhone className="contact__icon" />
            <div className="contact__info">
              <h1>0966 411 3791</h1>
              <h2>Monday - Sunday</h2>
            </div>
          </div>
          <div className="contact__row">
            <Email className="contact__icon" />
            <div className="contact__info">
              <h1>me.vince.garcia@gmail.com</h1>
              <h2>Email me</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="social__accounts">
        <div className="social__title">
          <h1>My Social Network</h1>
        </div>
        <div className="social__media">
          <motion.a 
            animate=""
            transition=""
            href="https://www.linkedin.com/in/vince-paul-garcia-8648a9224/" target="_blank" className="social__row">
              <LinkedIn className="social__icon blue"/>
          </motion.a>
          <motion.a 
            animate=""
            transition=""
            href="https://www.facebook.com/Vinxe08/" target="_blank" className="social__row">
              <FacebookRounded className="social__icon blue"/>
          </motion.a>
          <motion.a 
            animate=""
            transition=""
            href="https://github.com/vinxe08" target="_blank" className="social__row">
              <GitHub className="social__icon black"/>
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Contact
