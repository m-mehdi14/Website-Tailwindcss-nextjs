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
                        <h5 className=' md:text-4xl text-3xl font-bold text-red-700 md:ml-72 ml-2 mt-3'>Genomics and Bioinformatics - Specialized Tracks</h5>
                        <p className=' text-lg text-center mt-2'>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing
                         complex bioinformatics analysis using the most essential Python libraries and applications.</p>
                             <ol className='list-disc list-outside md:ml-72 ml-2'>
                                <li className=' text-lg mt-3'>
                                    <h4 className='text-2xl font-bold text-red-700'>Quarter IV:</h4>
                                    Bio-351: Python for Biologists
                                </li>
                                <li className=' text-lg mt-3'>
                                    <h4 className='text-2xl font-bold text-red-700'>Quarter V:</h4>
                                    Bio-361: Bioinformatics with Python
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