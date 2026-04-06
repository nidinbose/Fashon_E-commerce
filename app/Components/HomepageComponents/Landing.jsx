'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loading from "../Naviagation/Loading"
import Image from "next/image"

const MotionImage = motion(Image)

const images = [
  "/Images/G1.webp",
  "/Images/G1.webp",
  "/Images/G1.webp",
  "/Images/G1.webp",
]

export default function Landing() {

  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(true)

  const word = "Granest"

  // 🔥 Fake loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // 🔥 Image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // 🔥 Typing effect
  useEffect(() => {
    let i = 0
    setText("")

    const type = setInterval(() => {
      setText(word.slice(0, i + 1))
      i++

      if (i === word.length) {
        clearInterval(type)
      }
    }, 150)

    return () => clearInterval(type)
  }, [loading])

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">

      {/* ✅ Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-50"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Main Content */}
      {!loading && (
        <>
          {/* 💧 Seamless Drip Image Transition */}
          <div className="absolute inset-0">

            <AnimatePresence>

              {/* Previous Image (stays until covered) */}
              <MotionImage
                key={`prev-${index}`}
                src={images[index]}
                alt="slider image"
                fill
                sizes="100vw"
                priority
                className="object-cover"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />

              {/* Incoming Image (drip reveal) */}
              <MotionImage
                key={`reveal-${index}`}
                src={images[index]}
                alt="slider image"
                fill
                sizes="100vw"
                priority
                className="object-cover"
                initial={{
                  clipPath: "inset(0 100% 0 0)"
                }}
                animate={{
                  clipPath: "inset(0 0% 0 0)"
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.77, 0, 0.175, 1]
                }}
              />

            </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-[#FF5F2D]/40  group-hover:to-[#FF5F2D]/70 transition-all duration-500" />
          </div>

          {/* ✅ Content */}
          <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 py-10 text-white">

            {/* Top Text */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex justify-end text-right"
            >
              <p className="text-sm md:text-lg font-light leading-relaxed">
                Exclusive & <br /> Trending Collection
              </p>
            </motion.div>

            {/* Big Title */}
            <div className="absolute bottom-20 right-6 md:right-16">
              <h1 className="font-serif text-[80px] sm:text-[130px] md:text-[150px] lg:text-[200px] leading-none tracking-tight">

                {text.slice(0, 5)}

                <span className="italic text-[#FF5F2D]">
                  {text[5] || ""}
                </span>

                {text.slice(6)}

                <span className="animate-pulse">|</span>
              </h1>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">

              {images.map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-1 bg-white/30 rounded overflow-hidden"
                >
                  {i === index && (
                    <motion.div
                      key={`progress-${index}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4, ease: "linear" }}
                      className="h-full bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]"
                    />
                  )}
                </div>
              ))}

            </div>

          </div>
        </>
      )}

    </section>
  )
}