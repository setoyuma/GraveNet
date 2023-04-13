import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Showcase from '../Showcase';
import './lf.css'
import images from './images';

const LFSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className='app'>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{right:0, left: -width }} className='inner-carousel'>
          {images.map((image) => {
            return (
              <motion.div key={image} className='item'>
                <img src={image} alt=""/>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  )
};

export default LFSlider;