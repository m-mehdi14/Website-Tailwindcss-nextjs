"use client";
import Wrapper from "./Wrapper"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const Content3 = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const animateFromRight = {
    x: 100,
    opacity: 0,
  };

  const animateToLeft = {
    x: 0,
    opacity: 1,
  };

  useEffect(() => {
    if (inView) {
      controls.start(animateToLeft);
    } else {
      controls.start(animateFromRight);
    }
  }, );
  // [controls, inView]
  return (
    <section>
        <Wrapper>
            <div className="flex flex-col md:flex-row items-center mt-16">
                {/* Left Side */}
                <div className=" text-center">
                    <h3 className=" text-4xl md:text-5xl font-bold">Live Classes From AnyWhere via <span className=" text-red-800">ZOOM</span> </h3>
                    <p className=" mt-4 text-lg text-slate-800">Helping employees gain skills and providing career development often take
                         a back seat to business priorities but workplace. It employs a hybrid teaching
                          format, with core onsite
                         classes complemented by online Zoom laboratories and
                          recorded videos.</p>
                        <a href="https://zoom.us/"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Learn More</button></a>  
                </div>
                {/* Right Side  */}
                <motion.div ref={ref}
          initial={animateFromRight}
          animate={controls}
          transition={{ duration: 0.5 }}>
                    <Image src="/zoom.png" alt="Zoom Online Classes" width={2000} height={2000} />
                </motion.div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Content3