"use client";
import Image from "next/image"
import Link from "next/link"
import Wrapper from "./Wrapper"
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Menuitems from "./Menuitems";
import {IoIosMenu} from "react-icons/io";
const Navbar = () => {
    const [active,setActive] = useState(false);

    const showMenu =()=>{
      setActive(!active)
    }
  return (
    <Wrapper>
    <header className="flex justify-between sticky top-0 py-4 px-4">
       {/* Logo */}
        <div className="flex items-center">
            <Image src="/piaicLogo.png" alt=" Panaverse Logo" height={60} width={60} />
            <p className=" flex items-center text-xl font-bold">Panaverse</p>
        </div>
        
        {/* Navbar */}
        <div className="absolute right-6 md:hidden top-8 scale-150">
          <IoIosMenu onClick={showMenu} className=" scale-150 cursor-pointer"/>
        </div>
        <ul className=" hidden md:flex px-7 py-5 space-x-3 font-semibold  items-center decoration-transparent " >
         
         <Link href={"/"}> <li className=" hover:bg-red-600 hover:text-white hover:px-2 rounded-md">Home</li></Link>
          <Link href={"/Courses"}><li className=" hover:bg-red-600 hover:text-white hover:px-2 rounded-md" >Courses</li></Link>
          <Link href={"/FACULTY"}><li className=" hover:bg-red-600 hover:text-white hover:px-2 rounded-md">Faculty</li>  </Link>
         {/* <Link href={"https://portal.piaic.org/"}><button className=" flex border-2 bg-red-600 px-3 py-2  text-white rounded-md hover:scale-105">Sign In</button></Link> 
         <Link href={"https://portal.piaic.org/signup"}><button className=" flex border-2 bg-red-600 px-3 py-2  text-white rounded-md hover:scale-105">Sign Up</button></Link>  */}
         </ul>
         <Menuitems showMenu={showMenu} active={active}/>
        
       
        
    </header>
    </Wrapper>
  )
}

export default Navbar