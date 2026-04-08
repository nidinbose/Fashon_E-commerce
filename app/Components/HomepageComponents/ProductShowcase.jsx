'use client'

import { motion } from "framer-motion"
import { useState } from "react"

const products = [
  { id: 1, name: "Oversized Jacket", price: "$120", image: "/Images/PP5.jpg" },
  { id: 2, name: "Trouser`s", price: "$60", image: "/Images/S2.jpg" },
  { id: 3, name: "Womens suite`s", price: "$90", image: "/Images/PP4.jpg" },
  { id: 4, name: "Street Denim", price: "$110", image: "/Images/S1.jpg" }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function ProductShowcase() {

  const [active, setActive] = useState(0)

  return (
    <section className="w-full py-6 xl:py-20 px-6 bg-white h-full">

      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-lufga-regular text-black">
            Discover Our{" "}
            <span className="text-[#FF5F2D]">
              Latest Collection
            </span>
          </h2>

          <p className="text-gray-500 mt-4 text-sm font-gilroy-regular md:text-base max-w-xl mx-auto">
            Explore timeless fashion pieces designed with precision, minimalism,
            and modern elegance.
          </p>
        </motion.div>
        <div
          className="grid grid-cols-1 gap-4 sm:flex sm:h-[400px]"
          onMouseLeave={() => setActive(0)}
        >

          {products.map((product, i) => {

            const isActive = active === i

            return (
              <motion.div
                key={product.id}
                layout
                onMouseEnter={() => setActive(i)}
                className={`
                  relative cursor-pointer overflow-hidden rounded-xl
                  w-full h-[260px] md:h-full
                  ${isActive ? "md:flex-[2]" : "md:flex-[1]"}
                `}
                transition={{ type: "spring", stiffness: 90, damping: 20 }}
              >
                <motion.img
                  src={product.image}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-[#FF5F2D]/40  group-hover:to-[#FF5F2D]/70 transition-all duration-500" />

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-6 left-6 text-white"
                >
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                 
                </motion.div>

              </motion.div>
            )
          })}

        </div>

      </div>

    </section>
  )
}