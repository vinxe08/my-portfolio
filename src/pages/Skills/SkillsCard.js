import React from 'react'
import { usePresence, motion } from 'framer-motion'

function SkillsCard({name, image, iD, }) {
  const [isPresent, safeToRemove] = usePresence()

  const animation = {
    layout: true,
    layoutId:{iD},
    initial:"out",
    animate: isPresent ? "in" : "out",
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { duration: 0.3, ease: "easeInOut" },
    // exit: { transition: {duration: 2}},
    variants : {
      in: { scale: 1, transition:{duration: 0.3 }},
      out: { scale: 0, transition:{duration: 0.3 }}
    },
  }

  return (
    <motion.div 
      {...animation}
      className="skills__card">
        <img src={image} className='skills__logo' alt="Logo"/>
        <h1 className='logo__name'>{name}</h1>
    </motion.div>
  )
}

export default SkillsCard