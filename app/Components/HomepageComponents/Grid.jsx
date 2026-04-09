'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const items = [
  {
    title: "Trending collections",
    image: "/Images/G2.jpg",
    span: "col-span-2 row-span-2",
  },
  {
    title: "ONE-PIECES",
    image: "/Images/G3.jpg",
  },
  {
    title: "DRESSES",
    image: "/Images/G4.jpg",
  },
  {
    title: "ROMPERS & JUMPSUITS",
    image: "/Images/G6.jpg",
  },
  {
    title: "LADIES-WEAR",
    image: "/Images/G5.jpg",
  },

]

export default function Grid() {
  return (
    <section className=" px-6 xl:px-0 max-w-7xl mx-auto py-10 bg-white">

      <h2 className="text-center font-gilroy-regular text-2xl md:text-6xl  tracking-wide mb-8">
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
         

            {/* Label */}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white text-sm md:text-base font-medium font-gilroy-regular tracking-wide">
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