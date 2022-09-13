import React from 'react'
import { usePresence, motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function SkillsCard({name, image, iD, onPage}) {
  const [isPresent, safeToRemove] = usePresence()
  
  const animation = {
    layout: true,
    layoutId:{iD},
    initial: "out",
    animate: isPresent && onPage ? "in" : "out",
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition: { duration: 0.3, ease: "easeInOut" },
    variants : {
      in: { scale: 1, transition:{duration: 0.3 }},
      out: { scale: 0, transition:{duration: 0.3 }}
    },
  }

  return (
    <motion.div 
      {...animation}
      className="skills__card">
        <LazyLoadImage 
          src={image} 
          className='skills__logo' 
          alt="Logo"
          effect='blur'
        />
        <h1 className='logo__name'>{name}</h1>
    </motion.div>
  )
}

export default React.memo(SkillsCard)