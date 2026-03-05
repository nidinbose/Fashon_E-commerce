'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoIosSearch } from "react-icons/io";
import { BsBag } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import Link from "next/link";


export default function Navbar(){

  const [open,setOpen]=useState(false)

  const bubble={
    hidden:{
      scale:0,
      borderRadius:"100%"
    },
    visible:{
      scale:30,
      transition:{
        duration:0.6,
        ease:[0.76,0,0.24,1]
      }
    },
    exit:{
      scale:0,
      transition:{
        duration:0.5
      }
    }
  }

  const menu={
    hidden:{opacity:0,y:40},
    visible:{
      opacity:1,
      y:0,
      transition:{
        delay:0.35,
        staggerChildren:0.1
      }
    }
  }

  const item={
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0}
  }

  return (
    <nav className="w-full fixed top-0 left-0 z-50">

      <div className=" mx-auto flex items-center justify-between px-6 py-4 bg-black/30">

        {/* LOGO */}
        <h1 className="text-2xl 
        bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB]
        bg-clip-text text-transparent font-lufga-regular">
          Arrowfly
        </h1>

     <div className="flex items-center hidden md:flex gap-7 font-gilroy-regular text-white">
           <a>Home</a>
          <a>Products</a>
          <a>Pricing</a>
          <a>Contact</a>
      </div>
        {/* DESKTOP MENU */}
        <div className=" gap-8 text-gray-700 font-medium">

      <div className="flex gap-3">
        <IoIosSearch className="w-8 h-6 text-white"/>
        <FiUser className="w-8 h-6 text-white"/>
        <BsBag className="w-8 h-6 text-white"/>
      </div>

        </div>


        {/* HAMBURGER */}
        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden z-50 flex flex-col gap-1.5"
        >

          <span className={`h-[2px] w-6 bg-white transition
          ${open && "rotate-45 translate-y-[6px]"}`}></span>

          <span className={`h-[2px] w-6 bg-white transition
          ${open && "opacity-0"}`}></span>

          <span className={`h-[2px] w-6 bg-white transition
          ${open && "-rotate-45 -translate-y-[6px]"}`}></span>

        </button>

      </div>



      {/* BUBBLE MENU */}
      <AnimatePresence>

        {open && (

          <div className="fixed inset-0 z-40 overflow-hidden">

            {/* expanding bubble */}
            <motion.div
              variants={bubble}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-4 right-6 w-12 h-12
              bg-white"
            />

            {/* menu */}
            <motion.div
              variants={menu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 flex flex-col
              items-start justify-start mt-6 p-6 gap-10
              text-black text-3xl font-semibold font-gilroy-regular"
            >

              {["Home","Products","Pricing","Contact"].map((itemText)=>(
                <motion.a key={itemText} variants={item}>
                  {itemText}
                </motion.a>
              ))}

            <Link href='/Auth/Login'>
              <motion.button
              variants={item}
              className="px-8 py-3 rounded-lg bg-white text-black text-lg">

                Login

              </motion.button>
            </Link>

            </motion.div>

          </div>

        )}

      </AnimatePresence>

    </nav>
  )
}