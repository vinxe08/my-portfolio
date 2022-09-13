import React, { useState } from 'react'
import './Skills.css'
import { skills } from './data'
import SkillsCard from './SkillsCard'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'

const container = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

function Skills({ scrollValue }) {
  const [types, setTypes] = useState("All")
  const [items, setItems] = useState({allSkills: skills.map(item => item)})
  
  const { allSkills } = items
  
  const setTypeSkills = (type) => {
    setTypes(type)

    // Filtering Logic from Front-Back-Others-Frame --> All
    if(type === "All"){
      const list = allSkills
      list.push(...skills.filter(data => !allSkills.some(item => item.type === data.type)))
      setItems({ ...allSkills, allSkills: list })
    } 
    // Filtering Logic from All --> Front-Back-Others-Frame 
    else{ 
      setItems({ allSkills: skills.filter(skill => skill.type.match(type))})
    }
  }

  return (
    <div className='Skills' id="Skills">
      <h1 className='skills__title'>My skills</h1>
      <div className='skills__buttonContainer'>
        <button onClick={() => setTypeSkills("All")} className={types === "All" ? "skills__button skillsActive" : "skills__button"} >All</button>
        <button onClick={() => setTypeSkills("Frontend")} className={types === "Frontend" ? "skills__button skillsActive" : "skills__button"}>Front End</button>
        <button onClick={() => setTypeSkills("Backend")} className={types === "Backend" ? "skills__button skillsActive" : "skills__button"}>Back End</button>
        <button onClick={() => setTypeSkills("Others")} className={types === "Others" ? "skills__button skillsActive" : "skills__button"}>Others</button>
        <button onClick={() => setTypeSkills("Framework")} className={types === "Framework" ? "skills__button skillsActive" : "skills__button"}>Framework</button>
      </div>  
      <motion.div className='skills__container' variants={container} initial="hidden" animate="show" >
      <LayoutGroup>
        <AnimatePresence >
          {scrollValue && allSkills?.sort((a,b) => a.id-b.id).map(item => (
            <SkillsCard 
              name={item.name} 
              image={item.img} 
              key={item.id} 
              iD={item.id}
              onPage={scrollValue}
              />
          )) }
        </AnimatePresence>
      </LayoutGroup>
      </motion.div>
    </div>
  )
}

export default React.memo(Skills)