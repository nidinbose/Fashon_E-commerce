'use client'

import { motion } from "framer-motion"

const categories = [
  {
    title: "Sneakers",
    count: 16,
    image: "https://grailify.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM0VRQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--2e77cb319946c7643b69c4a52a1ee1565515f645/image"
  },
  {
    title: "Ankle Boots",
    count: 8,
    image: "https://i.etsystatic.com/37795650/r/il/9bd5ed/5690549897/il_570xN.5690549897_5n79.jpg"
  },
  {
    title: "Moccasins",
    count: 12,
    image: "https://t4.ftcdn.net/jpg/02/47/19/43/360_F_247194310_MeOhnDyH6H92qmayycBHUDY8UvVa6TvJ.jpg"
  },
  {
    title: "Boots",
    count: 23,
    image: "https://media.istockphoto.com/id/1324844508/photo/gorgeous-woman-wearing-beautiful-maxi-dress-posing-against-wall-with-a-wild-grape.jpg?s=612x612&w=0&k=20&c=BJrcuLt0m5Hm6zOhgO-E0TGqIxzWKdecgw1xcOu1aN4="
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
    <section className="mx-auto px-6 py-20">


      <div className="mb-10">
        <p className="text-gray-500 font-lufga-light">Shop By</p>

        <h2 className=" text-4xl md:text-6xl font-gilroy-regular inline bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent -mt-3">
          Category
        </h2>
      </div>
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
            <div className="bg-gray-100 h-[220px] flex items-center justify-center overflow-hidden">

              <motion.img
                src={item.image}
                alt={item.title}
                className="h-[220px] w-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />

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