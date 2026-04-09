'use client'

import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"
import Image from "next/image"
import { memo } from "react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const ITEMS = [
  { title: "Shoes", img: "/Images/SH2.jpg" },
  { title: "Pants", img: "/Images/S3.jpg" },
  { title: "Sale", img: "/Images/SH6.jpg" },
  { title: "Ladies top", img: "/Images/S4.jpg" }
]

// ✅ FIXED (removed : any)
const Card = memo(function Card({ item, index }) {
  return (
    <motion.div
      variants={card}
      whileHover={{ scale: 1.03 }}
      className={`group relative rounded-2xl overflow-hidden transform-gpu will-change-transform  ${
        index % 2 === 0 ? "row-span-2" : ""
      }`}
    >

      <Image
        src={item.img}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={index === 0}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-[#FF5F2D]/40 group-hover:to-[#FF5F2D]/70 transition-all duration-500" />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="absolute bottom-6 left-6 text-white text-3xl font-serif"
      >
        {item.title}
      </motion.div>

      <motion.div
        whileHover={{ rotate: 45, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 260 }}
        className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-[#FF5F2D] text-white shadow-lg"
      >
        <FiArrowUpRight />
      </motion.div>

    </motion.div>
  )
})

export default function Shop() {
  return (
    <section className="py-10 ">

      <div className="px-6 xl:px-0 max-w-7xl mx-auto">

        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={card}
          className="font-gilroy-regular text-3xl md:text-6xl py-5 text-center"
        >
          Explore latest <span className="text-[#FF5F2D]">collection</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={card}
          className="text-sm font-gilroy-regular md:text-base mb-10 text-center"
        >
          Unlock your potential with our quality products from
          <span className="text-[#FF5F2D]"> Granest</span>
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] md:auto-rows-[300px]"
        >

          {ITEMS.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}

        </motion.div>

      </div>

    </section>
  )
}