import React from 'react'
import { motion, usePresence } from 'framer-motion'

function TextAnimation({iD, name, i}) {
  const [isPresent, safeToRemove] = usePresence()
  const letterAnimation = {
    layout: true,
    layoutId:{iD},
    initial: "out",
    animate: isPresent ? "in" : "out",
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { duration: 0.3, ease: "easeInOut" },
    variants : {
      in: { 
        x: 0, 
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: i * 0.2
        } },
      out: { 
        x: 20,
        opacity: 0,
        transition: {
          duration: 0.3,
          delay: i * 0.2
        }
      },
    },
  }

  return (
        <motion.h1 {...letterAnimation} key={name.letter}>{name.letter}</motion.h1>
  )
}

export default TextAnimation