'use client'

import { motion } from "framer-motion"
import { LuSparkle } from "react-icons/lu"

export default function Textcarosal() {

  const texts = [
    "Premium Quality Products",
    "Affordable Price",
    "Faster Delivery",
    "Free Returns"
  ]

  const items = [...texts, ...texts,...texts,...texts]

  return (
    <section className="overflow-hidden py-6 border-y border-gray-200 bg-white">

      <div className="flex overflow-hidden">

        <motion.div
          className="flex shrink-0 items-center gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >

          {items.map((text, index) => (
            <div key={index} className="flex items-center gap-6">

           <h1 className="text-4xl  bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent font-gilroy-regular  ">✧</h1>

              <span className="text-xl md:text-xl xl:text-2xl font-gilroy-regular tracking-wide">
                {text}
              </span>

            </div>
          ))}

        </motion.div>

      </div>

    </section>
  )
}