import Wrapper from '@/components/Wrapper'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
   <>
   <section>
    <Wrapper>
        
            {/* Faculty Page Heading */}
            <div>
                <h5 className=' mt-4 text-5xl font-bold text-red-700 text-center'> Meet the Visionary Leaders Shaping Pakistan Future</h5>
            </div>
            {/* ----------------------------------------------------- */}
            {/* Container */}
            <div className=' flex flex-wrap justify-evenly'>
            {/* Faculty Details */}
            <div className=' border-1 w-96 h-96 bg-slate-200 text-center rounded-xl ml-4 hover:scale-95 duration-300 mt-5 '>
                {/* First Profile */}
                {/* Image */}
                <div className=' flex justify-center'>
                    <Image className=' rounded-full' src="/zia-khan.jpeg" alt="Zia Khan" height={150} width={150}  />
                </div>
                 {/* Description */}
                 <div>
                    <h3 className=' text-2xl font-semibold'>Zia khan</h3>
                    <p className=' mt-2'>Web 3, DeFi, Cloud and Metaverse Architect | Tokenomist and Metanomist | CEO Panacloud | Volunteer COO Presidential Initiative for AI and Computing</p>
                    {/* Button */}
                    <div>
                      <a href="https://www.facebook.com/ziakhan"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Message</button></a> 
                      <a href="https://www.facebook.com/ziakhan"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Follow</button></a>  
                    </div>
                    
                 </div>
                  </div>
                        {/* ------------------------------------------------------ */}
                        {/* Second Profile */}
                        <div className=' border-1 w-96 h-96 bg-slate-200 text-center rounded-xl ml-4 hover:scale-95 duration-300 mt-5 '>
                {/* First Profile */}
                {/* Image */}
                <div className=' flex justify-center'>
                    <Image className=' rounded-full' src="/danyal-nagori.jpeg" alt="Zia Khan" height={150} width={150}  />
                </div>
                 {/* Description */}
                 <div>
                    <h3 className=' text-2xl font-semibold'>Daniyal Nagori</h3>
                    <p className=' mt-2'>Software Development Lead at Panacloud. Full-stack developer and DevOps Architect. Certified Kubernetes Application Developer AWS Certified Developer</p>
                    {/* Button */}
                    <div>
                      <a href="https://www.facebook.com/daniyalnagori1237"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Message</button></a> 
                      <a href="https://www.facebook.com/daniyalnagori1237"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Follow</button></a>  
                    </div>
                    
                 </div>
                  </div>
                    {/* --------------------------------------------------------------- */}
                    {/* Third Profile */}
                    <div className=' border-1 w-96 h-96 bg-slate-200 text-center rounded-xl ml-4 hover:scale-95 duration-300 mt-5 '>
                {/* First Profile */}
                {/* Image */}
                <div className=' flex justify-center'>
                    <Image className=' rounded-full' src="/zeeshan-hanif.jpeg" alt="Zeeshan Hanif" height={150} width={150}  />
                </div>
                 {/* Description */}
                 <div>
                    <h3 className=' text-2xl font-semibold'>Zeeshan Hanif</h3>
                    <p className=' mt-2'>Web and Mobile apps | Java/J2EE platform, MEAN Stack, HTML5 Hybrid mobile apps and Android Native apps| certifications from IBM, SUN and Microsoft | (CMA) | (CFA) |</p>
                    {/* Button */}
                    <div>
                      <a href="https://www.facebook.com/zeeshanhanif"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Message</button></a> 
                      <a href="https://www.facebook.com/zeeshanhanif"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Follow</button></a>  
                    </div>
                    
                 </div>
                  </div>
                        {/* ------------------------------------------------------- */}
                        {/* Fourth Profile */}
                        <div className=' border-1 w-96 h-96 bg-slate-200 text-center rounded-xl ml-4 hover:scale-95 duration-300 mt-5 '>
                {/* First Profile */}
                {/* Image */}
                <div className=' flex justify-center'>
                    <Image className=' rounded-full' src="/hira-khan.jpeg" alt="Hira Khan" height={150} width={150}  />
                </div>
                 {/* Description */}
                 <div>
                    <h3 className=' text-2xl font-semibold'>Hira Khan</h3>
                    <p className=' mt-2'>Director at the Women Empowerment Div. of the Presidential Initiative for Artificial Intelligence & Computing (PIAIC)</p>
                    {/* Button */}
                    <div>
                      <a href="https://pk.linkedin.com/in/hira-khan-76523540#:~:text=About,this%20the%204th%20industrial%20revolution"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Message</button></a> 
                      <a href="https://pk.linkedin.com/in/hira-khan-76523540#:~:text=About,this%20the%204th%20industrial%20revolution"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Follow</button></a>  
                    </div>
                    
                 </div>
                  </div>
                        {/* ------------------------------------------------------------------------------------- */}
                        {/* Fifth Profile */}
                        <div className=' border-1 w-96 h-96 bg-slate-200 text-center rounded-xl ml-4 hover:scale-95 duration-300 mt-5 '>
                {/* First Profile */}
                {/* Image */}
                <div className=' flex justify-center'>
                    <Image className=' rounded-full' src="/adil-altaf.jpeg" alt="Adil Altaf" height={150} width={150}  />
                </div>
                 {/* Description */}
                 <div>
                    <h3 className=' text-2xl font-semibold'>Hira Khan</h3>
                    <p className=' mt-2'>Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud Developer | Continuous Innovation Leader</p>
                    {/* Button */}
                    <div>
                      <a href="https://www.linkedin.com/in/adilaltaf"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Message</button></a> 
                      <a href="https://www.linkedin.com/in/adilaltaf"><button className=" mt-5 bg-red-700 px-4 py-2 rounded-full text-lg font-semibold ml-4 text-white hover:scale-105 ">Follow</button></a>  
                    </div>
                    
                 </div>
                  </div>









                  
     </div>
    </Wrapper>
   </section>
   </>
  )
}

export default Page