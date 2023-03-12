"use client";
import Button from "./Button"
import Wrapper from "./Wrapper"
import { motion , AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";


const Hero = () => {
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
//  [controls, inView]
  return (
    <section>
        <Wrapper>
            <div  className="flex flex-col md:flex-row  items-center mt-8">
                {/* Left Side */}
                <AnimatePresence>
                <motion.div    ref={ref}
          initial={animateFromLeft}
          animate={controls}
          transition={{ duration: 0.5 }}   className=" flex-1 px-3">
                    <h4 className=" text-red-800 font-bold text-lg mt-5">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                    <h1 className=" text-4xl md:text-5xl font-bold">Become a Certified Developer with <span className=" text-red-800">Panaverse</span> </h1>
                    <p className="mt-6 text-lg text-slate-800 ">A One and Quarter Years Panaverse DAO Earn as you Learn Program
                    Getting Ready for the Next Generation of the Internet Consolidating Web 3.0, 
                    Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT,
                     Network Automation, and Bioinformatics Technologies</p>
                  <a href="https://portal.piaic.org/signup"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Enroll Now</button></a>  
                </motion.div>
                </AnimatePresence>
                {/* Right Side IMAGE SIDE */}
                <motion.div  className=" flex px-8 py-3">
                    <Image src="/meta.jpg" alt="Metaverse Developer" width={500} height={400}  className=" rounded-2xl"  />
                </motion.div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Hero