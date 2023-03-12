"use client";
import Wrapper from "./Wrapper"
import { motion , AnimatePresence, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const Content4 = () => {
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
            <div className=" flex flex-col md:flex-row items-center">
                {/* Left Side */}
                <motion.div ref={ref}
          initial={animateFromLeft}
          animate={controls}
          transition={{ duration: 0.5 }} className="   object-contain object-center ">
                 <Image src="/outcome.png" alt="Final Picture" width={1700} height={1700}  />
                </motion.div>
                {/* Right Side */}
                <div className=" text-center" >
                    <h4 className=" text-4xl md:text-5xl font-bold">The Outcome for Participants of the <span className=" text-red-800"> Program</span></h4>
                    <p className=" text-lg mt-4 text-slate-800">As a graduate of this program you will own valuable products such
                         as Full-Stack App Templates, AR and VR Experiences, and APIs that 
                         are marketed globally by the Panaverse DAO. You will also have the
                          opportunity to offer your services at a rate of $50 per hour,
                           providing a path to financial stability 
                        while contributing to the growth of Pakistan  software exports.</p>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Content4