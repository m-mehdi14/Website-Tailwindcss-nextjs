import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <section>
        <Wrapper>
            
                {/* Courses Heading */}
                <div>
                    <h3 className=' text-5xl shadow-2xl text-center font-bold text-red-700'>Courses Panaverse Offers</h3>
                </div>
                {/* Container */}
                <div className=' flex flex-wrap mt-5 justify-evenly gap-x-2 gap-y-4' >
                {/* Courses Details */}
                <div className=' border-1 w-80 h-80 bg-slate-200 px-4 rounded-xl ml-4 hover:scale-95 duration-300 shadow-xl '>
                    {/* image  */}
                    <div className=' flex justify-center'>
                        <Image className=' object-cover w-20 h-20 rounded-xl' src="/Metaverse.jpg" alt="Metaverse" height={100} width={100} />   
                    </div>
                    {/* description */}
                    <div className=' flex justify-center flex-wrap mt-2 text-center'>
                        <h4 className=' text-2xl font-semibold'>Web 3.0 & Metaverse</h4>
                        <p className=' mt-2'>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</p>
                       <a href="/web3.0"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-1 text-white hover:scale-105 ">Learn More</button></a> 
                    </div>
                </div>
                {/* 2nd */}
                <div className=' border-1 w-80 h-80 bg-slate-200 px-4 rounded-xl ml-4 hover:scale-95 duration-300 shadow-xl '>
                    {/* image  */}
                    <div className=' flex justify-center relative'>
                        <Image className=' object-cover w-20 h-20 rounded-xl' src="/Ai.jpeg" alt="Metaverse" height={100} width={100} />   
                    </div>
                    {/* description */}
                    <div className=' flex justify-center flex-wrap mt-2 text-center'>
                    <h4 className=' text-2xl font-semibold'>AI And Deep Learning</h4>
                        <p>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</p>
                      <a href="/ai"> <button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-1 text-white hover:scale-105 ">Learn More</button></a> 
                    </div>
                </div>
                {/* 3rd */}
                <div className=' border-1 w-80 h-80 bg-slate-200 px-4 rounded-xl ml-4 hover:scale-95 duration-300 shadow-xl'>
                    {/* image  */}
                    <div className=' flex justify-center'>
                        <Image className=' object-cover w-20 h-20 rounded-xl' src="/cloud-native.jpeg" alt="Metaverse" height={100} width={100} />   
                    </div>
                    {/* description */}
                    <div className=' flex justify-center flex-wrap mt-2 text-center'>
                    <h4 className=' text-2xl font-semibold'>Cloud Native And Computing</h4>
                        <p>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</p>
                     <a href="/cloud-native"> <button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-1 text-white hover:scale-105 ">Learn More</button></a>  
                    </div>
                </div>
                {/* 4th */}
                <div className=' border-1 w-80 h-80 bg-slate-200 px-4 rounded-xl ml-4 hover:scale-95 duration-300 shadow-xl'>
                    {/* image  */}
                    <div className=' flex justify-center'>
                        <Image className=' object-cover w-20 h-20 rounded-xl' src="/IOT.jpeg" alt="Metaverse" height={100} width={100} />   
                    </div>
                    {/* description */}
                    <div className=' flex justify-center flex-wrap mt-2 text-center'>
                    <h4 className=' text-2xl font-semibold'>Ambient Computing And IOT</h4>
                        <p>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</p>
                      <a href="/iot"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-1 text-white hover:scale-105 ">Learn More</button></a>  
                    </div>
                </div>
                {/* 5th */}
                <div className=' border-1 w-80 h-80 bg-slate-200 px-4 rounded-xl ml-4 hover:scale-95 duration-300 shadow-xl'>
                    {/* image  */}
                    <div className=' flex justify-center'>
                        <Image className=' object-cover w-20 h-20 rounded-xl' src="/geonomics.jpeg" alt="Metaverse" height={100} width={100} />   
                    </div>
                    {/* description */}
                    <div className=' flex justify-center flex-wrap mt-2 text-center'>
                    <h4 className=' text-2xl font-semibold'>Geonomics And Bioinformatics</h4>
                        <p>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</p>
                     <a href="/geonomics"> <button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-1 text-white hover:scale-105 ">Learn More</button></a>  
                    </div>
                </div>
                {/* 6th */}
                <div className=' border-1 w-80 h-80 bg-slate-200 px-4 rounded-xl ml-4 hover:scale-95 duration-300 shadow-xl'>
                    {/* image  */}
                    <div className=' flex justify-center'>
                        <Image className=' object-cover w-20 h-20 rounded-xl' src="/network.jpg" alt="Metaverse" height={100} width={100} />   
                    </div>
                    {/* description */}
                    <div className=' flex justify-center flex-wrap mt-2 text-center'>
                    <h4 className=' text-2xl font-semibold'>Network Programmability And Automation</h4>
                        <p>This Web 3.0 specialization focuses on developing full-stack Web 3.0 experiences for the next generation of the internet.</p>
                     <a href="/net-automation"> <button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-1 text-white hover:scale-105 ">Learn More</button></a>  
                    </div>
                </div>
                </div>
        </Wrapper>
    </section>
    </>
  )
}

export default page