'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const items = [
  {
    title: "BIKINIS",
    image: "/Images/G1.webp",
    span: "col-span-2 row-span-2",
  },
  {
    title: "ONE-PIECES",
    image: "/Images/L2.jpg",
  },
  {
    title: "DRESSES",
    image: "/Images/L2.jpg",
  },
  {
    title: "ROMPERS & JUMPSUITS",
    image: "/Images/L2.jpg",
  },
  {
    title: "COVER-UPS",
    image: "/Images/L2.jpg",
  },

]

export default function Grid() {
  return (
    <section className="w-full px-4 md:px-10 py-10 bg-white">

      <h2 className="text-center font-gilroy-regular text-2xl md:text-4xl font-semibold tracking-wide mb-8">
        YOUR GETAWAY <span className="text-[#FF5F2D]">GRANEST</span>
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">

        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-lg group cursor-pointer ${item.span || ""}`}
          >

            {/* Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300" />

            {/* Label */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm md:text-base font-medium tracking-wide">
                {item.title}
              </p>

              {/* underline */}
              <div className="h-[2px] w-10 bg-white mt-1 group-hover:w-16 transition-all duration-300" />
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}