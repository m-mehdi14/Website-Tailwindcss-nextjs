import React from 'react'
import Link from 'next/link'
import { IoIosClose } from "react-icons/io";
const Menuitems = ({showMenu,active
}:{showMenu :any, active : any}
    ) => {
  return (
    <>
     <ul className={active ? ' flex flex-col items-center md:hidden mt-6 font-semibold' : 'hidden'} >
         <IoIosClose onClick={showMenu} className=" cursor-pointer"/>
         <Link href={"/"}> <li>Home</li></Link>
          <Link href={"/Courses"}><li>Courses</li></Link>
          <Link href={"/FACULTY"}><li>Faculty</li>  </Link>
         {/* <Link href={"https://portal.piaic.org/"}><button className=" flex border-2 bg-red-600 px-3 py-2  text-white rounded-md hover:scale-105">Sign In</button></Link> 
         <Link href={"https://portal.piaic.org/signup"}><button className=" flex border-2 bg-red-600 px-3 py-2  text-white rounded-md hover:scale-105">Sign Up</button></Link>  */}
         </ul>
    </>
  )
}

export default Menuitems