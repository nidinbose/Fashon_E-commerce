'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoIosSearch } from "react-icons/io"
import { BsBag } from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import Link from "next/link"

export default function Navbar(){

  const [open,setOpen] = useState(false)

  const bubble = {
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
      transition:{ duration:0.5 }
    }
  }

  const menu = {
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

  const item = {
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0}
  }

  const closeMenu = () => setOpen(false)

  return (

    <nav className="w-full fixed top-0 left-0 z-50 ">

      {/* TOP BAR */}
      <div className=" mx-auto flex items-center justify-between px-4 md:px-6 py-4 bg-blur-md">

        {/* LOGO */}
        <Link href="/">
          <h1 className="text-3xl bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent font-lufga-regular cursor-pointer">
            Arrowfly
          </h1>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-7 font-gilroy-regular text-black text-xl">

          <Link href="/" onClick={closeMenu}>Home</Link>
          <Link href="/" onClick={closeMenu}>Products</Link>
          <Link href="/" onClick={closeMenu}>Pricing</Link>
          <Link href="/" onClick={closeMenu}>Contact</Link>

        </div>

        {/* RIGHT ICONS */}
        <div className="hidden md:flex gap-4 text-gray-700">

          <IoIosSearch className="w-6 h-6 text-black cursor-pointer"/>
          <FiUser className="w-6 h-6 text-black cursor-pointer"/>
         <Link href="/Cart"> <BsBag className="w-6 h-6 text-black cursor-pointer"/></Link>

        </div>

        {/* HAMBURGER */}
        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden z-50 flex flex-col gap-1.5"
        >

          <span className={`h-[2px] w-6 bg-black transition
          ${open && "rotate-45 translate-y-[6px]"}`}></span>

          <span className={`h-[2px] w-6 bg-black transition
          ${open && "opacity-0"}`}></span>

          <span className={`h-[2px] w-6 bg-black transition
          ${open && "-rotate-45 -translate-y-[6px]"}`}></span>

        </button>

      </div>

      {/* MOBILE BUBBLE MENU */}
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
              bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]"
            />

            {/* menu */}
            <motion.div
              variants={menu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 flex flex-col
              items-start justify-start mt-6 p-6 gap-10
              text-white text-3xl font-semibold font-gilroy-regular"
            >

              <Link href="/" onClick={closeMenu}>
                <motion.div variants={item}>Home</motion.div>
              </Link>

              <Link href="/" onClick={closeMenu}>
                <motion.div variants={item}>Products</motion.div>
              </Link>

              <Link href="/" onClick={closeMenu}>
                <motion.div variants={item}>Pricing</motion.div>
              </Link>

              <Link href="/" onClick={closeMenu}>
                <motion.div variants={item}>Contact</motion.div>
              </Link>

              <Link href="/Auth/Login" onClick={closeMenu}>
                <motion.button
                  variants={item}
                  className="px-8 py-3 rounded-lg bg-white text-black text-lg"
                >
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