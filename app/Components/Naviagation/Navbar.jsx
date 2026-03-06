'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoIosSearch } from "react-icons/io"
import { BsBag } from "react-icons/bs"
import { FiUser } from "react-icons/fi"
import Link from "next/link"

export default function Navbar(){

  const [open,setOpen] = useState(false)
  const [scrolled,setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 20){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll",handleScroll)
    return ()=> window.removeEventListener("scroll",handleScroll)

  },[])

  useEffect(()=>{
    document.body.style.overflow = open ? "hidden" : "auto"
  },[open])


  const bubble = {
    hidden:{ scale:0, borderRadius:"100%" },
    visible:{
      scale:90,
      transition:{ duration:0.6, ease:[0.76,0,0.24,1] }
    },
    exit:{ scale:0, transition:{duration:0.4} }
  }

  const menu = {
    hidden:{opacity:0,y:40},
    visible:{
      opacity:1,
      y:0,
      transition:{ delay:0.35, staggerChildren:0.1 }
    }
  }

  const item = {
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0}
  }

  const closeMenu = ()=> setOpen(false)

  return (

    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
      ${scrolled ? "backdrop-blur-lg bg-white/70 shadow-sm" : "bg-transparent"}`}
    >

      <div className="flex items-center justify-between px-4 md:px-6 py-4">

        {/* LOGO WITH ANIMATION */}

        <Link href="/">

          <motion.div
            className="relative cursor-pointer perspective-1000"
            whileHover={{ rotateX: 12 }}
            transition={{ duration:0.4 }}
          >

            {/* TEXT */}

            <h1 className="text-3xl font-lufga-regular bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent relative">

              Arrowfly

              {/* ARROW CUT ANIMATION */}

              <motion.span
                initial={{ x:"-120%" }}
                whileHover={{ x:"120%" }}
                transition={{ duration:0.8, ease:"easeInOut" }}
                className="absolute top-1/2 left-0 w-full h-[2px]
                bg-gradient-to-r from-transparent via-white to-transparent"
              />

            </h1>

          </motion.div>

        </Link>


        {/* DESKTOP MENU */}

        <div className="hidden md:flex gap-7 font-gilroy-regular text-black text-xl">
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Contact</Link>
        </div>


        {/* DESKTOP ICONS */}

        <div className="hidden md:flex gap-5 items-center">

          <IoIosSearch className="w-6 h-6 text-black cursor-pointer"/>
          <FiUser className="w-6 h-6 text-black cursor-pointer"/>

          <Link href="/Cart">
            <BsBag className="w-6 h-6 text-black cursor-pointer"/>
          </Link>

        </div>


        {/* MOBILE ICONS */}

        <div className="flex items-center gap-4 md:hidden">

          <IoIosSearch className="w-6 h-6 text-black cursor-pointer"/>

          <FiUser className="w-6 h-6 text-black cursor-pointer"/>

          <Link href="/Cart">
            <BsBag className="w-6 h-6 text-black cursor-pointer"/>
          </Link>

          {/* HAMBURGER */}

          <button
            onClick={()=>setOpen(!open)}
            className="z-[70] flex flex-col gap-1.5"
          >

            <span className={`h-[2px] w-6 bg-black transition
            ${open && "rotate-45 translate-y-[6px]"}`}></span>

            <span className={`h-[2px] w-6 bg-black transition
            ${open && "opacity-0"}`}></span>

            <span className={`h-[2px] w-6 bg-black transition
            ${open && "-rotate-45 -translate-y-[6px]"}`}></span>

          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      <AnimatePresence>

        {open && (

          <div className="fixed inset-0 z-[60]">

            <motion.div
              variants={bubble}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-5 right-5 w-12 h-12
              bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]"
            />

            <motion.div
              variants={menu}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="absolute inset-0 flex flex-col
              items-start justify-start pt-32 px-8 gap-10
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