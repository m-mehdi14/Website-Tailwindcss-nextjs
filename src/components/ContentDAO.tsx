"use client";
import Wrapper from "./Wrapper"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";

const ContentDAO = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();
  
    const animateFromTop = {
      y: -100,
      opacity: 0,
    };
  
    const animateToBottom = {
      y: 0,
      opacity: 1,
    };
  
    useEffect(() => {
      if (inView) {
        controls.start(animateToBottom);
      } else {
        controls.start(animateFromTop);
      }
    }, );
//   [controls, inView]

  return (
    <section>
        <Wrapper>
            {/* Heading Part */}
            <motion.div  ref={ref}
          initial={animateFromTop}
          animate={controls}
          transition={{ duration: 0.5 }} className=" mt-40 text-center">
                <h2 className=" text-4xl  md:text-5xl font-bold text-red-800 ">Panaverse</h2>
                <h3 className=" text-3xl font-bold">Decentralized Autonomous Organization(DAO)</h3>
            </motion.div>
                {/* Boxes Section */}
                <motion.div  className="flex flex-col items-center md:flex-row justify-center  mt-9 gap-x-3 gap-y-5">
                <div className=" border-2 shadow-lg px-4 py-4 border-black flex justify-between w-80 ">
                    <div className=" flex-col">
                    <h3 className=" text-lg font-semibold">Members</h3>
                    <h4 className=" text-lg font-semibold">3500+</h4>
                    </div>
                   <Image src="/member.png" alt="members" height={10} width={25} />
                </div>

                <div className="border-2 shadow-lg px-4 py-4 border-black flex justify-between w-80">
                    <div className=" flex-col">
                    <h3 className=" text-lg font-semibold">Programs</h3>
                    <h4 className=" text-lg font-semibold">5+</h4>
                    </div>
                   <Image src="/student.png" alt="members" height={10} width={35} />
                </div>

                <div className=" border-2 shadow-lg px-4 py-4 border-black flex justify-between w-80">
                    <div className=" flex-col">
                    <h3 className=" text-lg font-semibold">Cities</h3>
                    <h4 className=" text-lg font-semibold">4+</h4>
                    </div>
                   <Image src="/location.png" alt="members" height={10} width={35} />
                </div>
                </motion.div>
                {/* Boxes section End */}


                {/* Program in a nutshell Heading */}
                <div className=" text-center mt-40">
                    <h2 className=" text-4xl md:text-5xl font-bold text-red-800 ">Programs in a Nutshell</h2>
                    <h3 className=" mt-2 text-3xl text-red-700 font-bold ">Earn While You Learn</h3>
                    <p className=" mt-7 text-lg text-gray-800 text-center">In this brand-new type of curriculum students will learn how to make money
                         and boost exports in the classroom and will begin doing so within six months 
                         of the program  beginning. 
                        It resembles a cross between a corporate venture and an educational project.</p>
                        <button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">View Courses</button>
                </div>
        </Wrapper>
    </section>
  )
}

export default ContentDAO