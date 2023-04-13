import React from 'react';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Showcase from '../Showcase';
import './lf.css';
import LifeformEntry from '../LifeformEntry';

const life_form_arr = ["scene","scene","scene","scene"]

const LFSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // console.log(carousel.current.scrollWidth, carousel.current.offsetWidth)
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className='app'>
      <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
          {life_form_arr.map((life_form) => {
            return (
              <motion.div key={life_form} className='item'>
                <LifeformEntry life_form_name={life_form} model_path={`${life_form}.glb`} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LFSlider;