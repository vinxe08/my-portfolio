import React, { useState } from 'react'
import './Projects.css'
import { ArrowCircleUp, ArrowDropDownCircle } from '@mui/icons-material';
import { motion } from 'framer-motion'
import { SliderData } from './ProjectData'

const cardVariantsLeft = {
  offscreen: {
    x: -180,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  },
};


const cardVariantsRight = {
  offscreen: {
    x: 180,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  },
};

function Projects() {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div className="Projects" id="Projects">
      <div className="projects__container"> 
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 1 }}
          className="projects__title"> 
          <motion.h3 
            className="featured__project"
            variants={cardVariantsLeft}
              >Featured Projects</motion.h3>
          <motion.div 
            className="title__section"
            variants={cardVariantsRight}
          >          
            <motion.h1 
              variants={cardVariantsRight}className="title__animation">Project</motion.h1>
          </motion.div>
        </motion.div>
        <div className="project__contents">
          { SliderData.filter((data, index) => index === current).map(slides => 
            <motion.div 
              key={slides.id}
              className="project__row"
              initial={{ x: 100, y: 100, scale: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1}}
              transition={{ type: "spring", stiffness: 110 }} 
            >
              <img src={slides.mainImg} className="project__photo" alt="logo" />
              <div className='image__details'>
                {slides.secondaryImg.map(slide => 
                  <div 
                    key={slide.sId}
                    className="small__container">
                    <img src={slide.img} className="small__Icon" alt="logo"/>
                    <h1 className="small__text">{slide.name}</h1>
                  </div>  
                )}
              </div>  
              <div className='lower__button'>
                <a target='_blank' href={slides.url} className='image__title'>
                  <h1 className='text_icon'>Visit Page</h1>
                    <ArrowCircleUp fontSize='large' className='projects__icon' />
                </a>
              </div>
            </motion.div>
          )}
          <div className="direction__buttonContainer">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              onClick={prevSlide}>
              <ArrowDropDownCircle
                fontSize='large' 
                className='prev__button' />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }} 
              onClick={nextSlide}>
              <ArrowDropDownCircle
                fontSize='large' 
                className='next__button' />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
