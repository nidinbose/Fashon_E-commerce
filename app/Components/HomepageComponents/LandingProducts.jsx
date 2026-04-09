'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsBag, BsHeart, BsHeartFill } from "react-icons/bs"
import Link from "next/link"

const Items = [
  {
    image: "https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",
    name: "cef t-shirt men white",
    price: "3000",
    id: "1"
  },
  {
    image: "https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
    name: "green t-shirt",
    price: "3000",
    id: "2"
  },
  {
    image: "https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",
    name: "cef",
    price: "3000",
    id: "3"
  },
  {
    image: "https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",
    name: "cef",
    price: "3000",
    id: "4"
  },
    {
    image: "https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
    name: "green t-shirt",
    price: "3000",
    id: "2"
  },
    {
    image: "https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
    name: "green t-shirt",
    price: "3000",
    id: "2"
  },
    {
    image: "https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
    name: "green t-shirt",
    price: "3000",
    id: "2"
  },
    {
    image: "https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
    name: "green t-shirt",
    price: "3000",
    id: "2"
  },
]

export default function LandingProducts() {

  const [addedIndex, setAddedIndex] = useState(null)
  const [favorites, setFavorites] = useState([])

  const handleAddToCart = (index, e) => {
    e.stopPropagation()
    e.preventDefault()

    setAddedIndex(index)

    setTimeout(() => {
      setAddedIndex(null)
    }, 1200)
  }

  const toggleFavorite = (index, e) => {
    e.stopPropagation()
    e.preventDefault()

    setFavorites((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="mx-auto px-6 xl:px-0 h-full max-w-7xl">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-gilroy-regular text-3xl text-center md:text-6xl py-5"
      >
        New <span className="text-[#FF5F2D]">Arrivals</span>
      </motion.h1>
      <motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className=" text-sm font-gilroy-regular md:text-base text-center mb-10 "
>
Unlock your potential with our quality products from <span className="text-[#FF5F2D]">Granest</span>
</motion.p>
      {/* GRID → 2 COLS ON MOBILE */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">

        {Items.map((item, index) => (

          <Link
            key={index}
            href={`/Product/Viewdeatiles/${item?.id}`}
            className="block"
          >

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              className="relative group  md:p-3 md:border border-gray-300 rounded-3xl overflow-hidden bg-white"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="h-50 sm:h-96 xl:h-80 w-full object-cover rounded-3xl"
                />

                {/* ❤️ FAVORITE ICON */}
                <div className="absolute top-3 right-3 z-20">
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.15 }}
                    onClick={(e) => toggleFavorite(index, e)}
                    className="bg-blur-xl bg-black/20  p-2 rounded-full shadow-lg cursor-pointer"
                  >
                    {favorites.includes(index) ? (
                      <BsHeartFill className="text-[#FF5F2D] text-sm" />
                    ) : (
                      <BsHeart className="text-white text-sm" />
                    )}
                  </motion.div>
                </div>

                {/* ARROW */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                  <div className="rotate-[-40deg] text-7xl md:text-6xl font-gilroy-light text-[#FF5F2D]">
                    →
                  </div>
                </div>

              </div>

              {/* CONTENT */}
              <div className="flex items-center justify-between pt-3">

                <div>
                  <h1 className="text-black font-gilroy-regular text-xs md:text-[17px]">
                    {item.name}
                  </h1>

                  <h2 className=" text-[#FF5F2D] px-1 font-lufga-regular text-sm">
                    ₹{item.price}
                  </h2>
                </div>

                <div className="flex gap-3 text-lg md:text-3xl text-black items-center">

                  {/* 🛍️ BAG */}
                  <motion.div
                    whileHover={{ scale: 1.25, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer z-20"
                    onClick={(e) => handleAddToCart(index, e)}
                  >
                    <BsBag />
                  </motion.div>

                  {/* ARROW ICON */}
                  <motion.div
                    whileHover={{ x: 10, scale: 1.2 }}
                    className="cursor-pointer rotate-[-40deg] font-gilroy-light text-[#FF5F2D]"
                  >
                    →
                  </motion.div>

                </div>

              </div>

              {/* ADD TO CART */}
              <AnimatePresence>
                {addedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-[#FF5F2D] z-30"
                  >
                    <div className="text-white flex items-center gap-2 font-gilroy-regular text-sm md:text-base">
                      <BsBag className="animate-bounce" />
                      Added to Cart
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

          </Link>
        ))}

      </div>
    </div>
  )
}