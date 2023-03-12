import Wrapper from '@/components/Wrapper'
import React from 'react'

const page = () => {
  return (
   <>
   <section>
    <Wrapper>
                {/* Main Div */}
                <div>
                {/* First Heading */}
                <div className=' text-center'>
                    <h3 className=' md:text-5xl text-4xl font-bold text-red-700'>Core Courses (Common in All Specializations)</h3>
                    <p className=' text-lg md:mt-3 mt-3 '>Every participant of the program will start by completing
                         the following three core courses:</p>
                </div>
                {/* Quarter Details */}
                <ol className=' list-disc list-outside md:ml-72 ml-2 md:mt-3'>
                    <li className=' text-lg'>
                        <h4 className=' text-2xl font-bold text-red-700 mt-3'>Quarter I (Core):</h4>
                        CS-101: Object-Oriented Programming using TypeScript
                    </li>
                    <li className=' text-lg md:mt-2 mt-2' >
                        <h4 className='text-2xl font-bold text-red-700'>Quarter II (Core):</h4>
                        W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps
                         and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
                    </li>
                    <li className=' text-lg md:mt-2 mt-2'>
                        <h4 className='text-2xl font-bold text-red-700'>Quarter III (Core):</h4>
                        $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
                    </li>
                </ol>
                    {/* Quarter Details End */}

                    {/* Special Tracks */}
                    <div>
                        {/* heading */}
                        <h5 className=' md:text-4xl text-3xl font-bold text-red-700 md:ml-72 ml-2 mt-3'>Network Programmability and Automation Specialization - Specialized Tracks</h5>
                        <p className=' text-lg text-center mt-2'>More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems 
                        with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</p>
                             <ol className='list-disc list-outside md:ml-72 ml-2'>
                                <li className=' text-lg mt-3'>
                                    <h4 className='text-2xl font-bold text-red-700'>Quarter IV:</h4>
                                    BNPA-351: CCNA 200-301 Certification

                                </li>
                                <li className=' text-lg mt-3'>
                                    <h4 className='text-2xl font-bold text-red-700'>Quarter V:</h4>
                                    NPA-361: Network Programmability and Automation
                                </li>
                             </ol>
                    </div>

















            </div>
    </Wrapper>
   </section>
   </>
  )
}

export default page