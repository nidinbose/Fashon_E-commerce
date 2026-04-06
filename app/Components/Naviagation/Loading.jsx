'use client'

import { motion } from "framer-motion"
import Image from "next/image"

export default function Loading() {

  const arrows = [1, 2, 3, 4, 5]

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#FF5F2D] overflow-hidden">

      {/* Background glow */}
      <motion.div
        className="absolute w-[400px] h-[400px]  rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="flex flex-col items-center gap-8 relative z-10">

        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full  blur-2xl opacity-40"
            animate={{ rotate: 360 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <Image
            src={`/Images/LGW.png`}
            width={180}
            height={180}
            alt="Granest"
            className="relative z-10 drop-shadow-2xl"
          />
        </motion.div>

        {/* Arrows Animation */}
        <div className="flex gap-2">
          {arrows.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: [0, 1, 0],
                x: [-30, 0, 30]
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 rounded-full bg-white/80"
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.4, 1, 0.4]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          className="text-lg md:text-xl font-gilroy-regular text-white tracking-wide"
        >
          Loading Granest...
        </motion.p>



      </div>
    </div>
  )
}