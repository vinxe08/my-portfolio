import React from 'react'
import './ContactIcon.css'
import { LinkedIn, FacebookRounded, GitHub } from '@mui/icons-material/';
import { motion } from 'framer-motion'

function ContactIcon({ iconColor, iconFadeIn }) {

  return (
    <div className="ContactIcon">
      <motion.div 
        className="icon__container"
        animate={{ y: iconFadeIn ? 150 : 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        >
        <motion.a 
          animate={{ scale: iconFadeIn ? 0 : 1 }}
          transition={{ ease: "easeOut", duration: .1 }}
          href="https://www.linkedin.com/in/vince-paul-garcia-8648a9224/" target="_blank" className={ iconColor ? 'icon__row scrolled' : 'icon__row'}>
          <LinkedIn fontSize="large" />
        </motion.a>
        <motion.a 
        animate={{ scale: iconFadeIn ? 0 : 1 }}
        transition={{ ease: "easeOut", duration: .3 }}
        href="https://www.facebook.com/Vinxe08/" target="_blank" className={ iconColor ? 'icon__row scrolled' : 'icon__row'}>
          <FacebookRounded fontSize="large" />
        </motion.a>
        <motion.a 
        animate={{ scale: iconFadeIn ? 0 : 1 }}
        transition={{ ease: "easeOut", duration: .6 }}
        href="https://github.com/vinxe08" target="_blank" className={ iconColor ? 'icon__row scrolled' : 'icon__row'}>
          <GitHub fontSize="large" />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default React.memo(ContactIcon)
