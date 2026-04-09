'use client'

import { motion } from "framer-motion"

const categories = [
  {
    title: "Sneakers",
    count: 16,
    image: "/Images/C1.jpg"
  },
  {
    title: "T-shirts",
    count: 8,
    image: "/Images/C2.jpg"
  },
  {
    title: "Trousers",
    count: 12,
    image: "/Images/C3.jpg"
  },
  {
    title: "Ladies-tops",
    count: 23,
    image: "/Images/C4.jpg"
  },
    {
    title: "Bags",
    count: 23,
    image: "/Images/C5C.jpg"
  },
      {
    title: "Hoodies",
    count: 23,
    image: "/Images/C6.jpg"
  },
      {
    title: "Shirts",
    count: 23,
    image: "/Images/C7.jpg"
  },
        {
    title: "Aminities",
    count: 23,
    image: "/Images/C8.jpg"
  },

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
    <section className="mx-auto px-6 xl:px-0 max-w-7xl  py-20">


      <div className="mb-10 text-center">
        <p className="text-gray-500 font-lufga-light text-center">Shop By</p>

        <h2 className=" text-center text-4xl md:text-6xl font-gilroy-regular inline text-[#FF5F2D] -mt-3 ">
          Category
        </h2>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false}}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 space-y-3"
      >

        {categories.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            className="group cursor-pointer"
          >
            <div className="bg-gray-100 relative h-[220px] flex items-center justify-center overflow-hidden rounded-3xl">

              <motion.img
                src={item.image}
                alt={item.title}
                className="h-[240px] w-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />
         <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-[#FF5F2D]/40  group-hover:to-[#FF5F2D]/70 transition-all duration-500" />
            </div>

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