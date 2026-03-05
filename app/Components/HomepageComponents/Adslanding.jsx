'use client'

import { motion } from "framer-motion"

const categories = [
  {
    title: "Sneakers",
    count: 16,
    image: "https://cdn.shopify.com/s/files/1/0265/3448/6517/files/shoe1.png"
  },
  {
    title: "Ankle Boots",
    count: 8,
    image: "https://cdn.shopify.com/s/files/1/0265/3448/6517/files/shoe2.png"
  },
  {
    title: "Moccasins",
    count: 12,
    image: "https://cdn.shopify.com/s/files/1/0265/3448/6517/files/shoe3.png"
  },
  {
    title: "Boots",
    count: 23,
    image: "https://cdn.shopify.com/s/files/1/0265/3448/6517/files/shoe4.png"
  }
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function ShopByCategory() {
  return (
    <section className="container mx-auto px-6 py-20">


      <div className="mb-10">
        <p className="text-gray-500 font-lufga-light">Shop By</p>

        <h2 className="text-6xl font-gilroy-regular inline bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent -mt-3">
          Category
        </h2>
      </div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >

        {categories.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            className="group cursor-pointer"
          >

            {/* Card */}
            <div className="bg-gray-100 h-[220px] flex items-center justify-center overflow-hidden">

              <motion.img
                src={item.image}
                alt={item.title}
                className="h-[120px] object-contain"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />

            </div>

            {/* Text */}
            <div className="mt-3 flex items-center gap-2 text-sm">

              <h3 className="font-medium">
                {item.title}
              </h3>

              <span className="text-gray-400">
                [{item.count}]
              </span>

            </div>

          </motion.div>
        ))}

      </motion.div>

    </section>
  )
}