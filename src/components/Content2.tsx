"use client";
import Wrapper from "./Wrapper"
import { motion , AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const Content2 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const animateFromLeft = {
    x: -100,
    opacity: 0,
  };

  const animateToRight = {
    x: 0,
    opacity: 1,
  };

  useEffect(() => {
    if (inView) {
      controls.start(animateToRight);
    } else {
      controls.start(animateFromLeft);
    }
  }, );
// [controls, inView]


 

  return (
    <section>
        <Wrapper>
            <div className=" flex flex-col md:flex-row">
        {/* Image Section Left Side */}
        <motion.div ref={ref}
          initial={animateFromLeft}
          animate={controls}
          transition={{ duration: 0.5 }} className=" mt-40">
            <Image src="/Social strategy-pana.png" alt="Achieve-Goals"  height={5000} width={5000} />
        </motion.div>

        {/* Content Section Right Side */}
        <div  className=" mt-60 flex-col items-center">
            <h2 className=" text-4xl md:text-5xl font-bold text-center">Achieve Your <span className=" text-red-800">Goals</span> </h2>
            <p className=" mt-7 text-lg text-slate-800 text-center">This curriculum is intended for beginners who want to learn software development
                 from the ground up. The first two quarters are shared by all specialties and are 
                 dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. 
                 It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes
                  and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by 
                  educating students to produce projects. To accommodate everyone, courses will be held primarily 
                  on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
                 format, with core onsite classes complemented by online Zoom laboratories and recorded videos.</p>
        </div>
        </div>
        </Wrapper>
    </section>
  )
}

export default Content2