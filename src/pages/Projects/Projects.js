import React, { useState } from 'react'
import './Projects.css'
import { ArrowCircleUp, ArrowDropDownCircle } from '@mui/icons-material';
import { motion } from 'framer-motion'
import { SliderData } from './ProjectData'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Projects({ scrollValue }) {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="Projects" id="Projects">
      <div className="projects__container"> 
        <div
          className="projects__title"> 
          <h3 className={scrollValue ? "featured__project animation__fromLeft": "featured__project"} >
            Featured Projects
          </h3>
          <div className="title__section" >          
            <h1 className={scrollValue ? "title__animation animation__fromRight": "title__animation"}>
              Project
            </h1>
          </div>
        </div>
        <div className="project__contents">
          { SliderData.filter((data, index) => index === current).map(slides => 
            <motion.div 
              key={slides.id}
              className="project__row"
              initial={{ x: 100, y: 100, scale: 0, opacity: 0 }}
              animate={{ x: 0, y: 0, scale: 1, opacity: 1}}
              transition={{ type: "spring", stiffness: 110 }} 
            >
              <LazyLoadImage 
                src={slides.mainImg} 
                className="project__photo" 
                alt="logo" 
                effect='blur'
                placeholderSrc={slides.mainImg}
                />
              <div className='image__details'>
                {slides.secondaryImg.map(slide => 
                  <div 
                    key={slide.sId}
                    className="small__container">
                    <LazyLoadImage 
                      src={slide.img} 
                      className="small__Icon" 
                      alt="logo"
                      effect='blur'
                      />
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

export default React.memo(Projects)
