'use client'

import { motion } from "framer-motion"
import { FiBox, FiCheckCircle, FiMessageCircle } from "react-icons/fi"

export default function Policies() {

  const policies = [
    {
      icon: <FiBox size={48} />,
      title: "Free Shipping",
      desc: "Enjoy free worldwide shipping and returns, with customs and duties taxes included."
    },
    {
      icon: <FiCheckCircle size={48} />,
      title: "Free Returns",
      desc: "Free returns within 15 days, please make sure the items are in undamaged condition."
    },
    {
      icon: <FiMessageCircle size={48} />,
      title: "Support Online",
      desc: "We support customers 24/7, send questions we will solve for you immediately."
    }
  ]

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const card = {
    hidden: {
      opacity: 0,
      y: 40
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-16 overflow-hidden">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className=" mx-auto px-6"
      >

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {policies.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center max-w-md mx-auto group cursor-pointer"
            >

              {/* Icon */}
              <motion.div
                className="text-gray-800 mb-4"
                whileHover={{
                  scale: 1.15,
                  rotate: 5
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-lg bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent font-gilroy-regular mb-2"
                whileHover={{ scale: 1.05 }}
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-600 font-lufga-light text-sm leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
              >
                {item.desc}
              </motion.p>

            </motion.div>
          ))}

        </div>

      </motion.div>

    </section>
  )
}