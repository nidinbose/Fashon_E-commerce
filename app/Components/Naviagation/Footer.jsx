'use client'

import { motion } from "framer-motion"
import { FiInstagram, FiTwitter, FiLinkedin, FiArrowUpRight } from "react-icons/fi"
import Image from "next/image"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

export default function Footer() {
  return (
    <footer className="bg-white text-black px-6 pt-24 pb-10 overflow-hidden border-t border-gray-200">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* BRAND WITH LOGO */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">

            <div className="flex items-center gap-3">

              <Image
                src="/Images/Lg1.png" // 👉 replace with your logo path
                alt="Granest Logo"
                width={42}
                height={42}
                className="object-contain"
              />

              <h2 className="text-2xl md:text-3xl font-lufga-regular tracking-wide">
                Granest
              </h2>

            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Timeless fashion crafted with intention. Discover pieces that define your everyday style.
            </p>

          </motion.div>

          {/* SHOP */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-4 text-sm tracking-widest uppercase text-gray-400">
              Shop
            </h3>
            <ul className="space-y-3 text-sm">
              {["New Arrivals", "Men", "Women", "Accessories"].map((item, i) => (
                <li key={i} className="hover:text-[#FF5F2D] transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COMPANY */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-4 text-sm tracking-widest uppercase text-gray-400">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {["About", "Journal", "Careers", "Contact"].map((item, i) => (
                <li key={i} className="hover:text-[#FF5F2D] transition cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div variants={fadeUp}>
            <h3 className="mb-4 text-sm tracking-widest uppercase text-gray-400">
              Follow
            </h3>

            <div className="flex gap-4">

              {[FiInstagram, FiTwitter, FiLinkedin].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 cursor-pointer hover:border-transparent hover:bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] hover:text-white transition"
                >
                  <Icon size={18} />
                </motion.div>
              ))}

            </div>

            <p className="text-gray-500 text-sm mt-6">
              support@granest.com
            </p>
          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-gray-200 my-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-xs tracking-wide">
            © {new Date().getFullYear()} Granest. All rights reserved.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm group"
          >
            Back to top
            <span className="group-hover:rotate-45 transition">
              <FiArrowUpRight />
            </span>
          </motion.button>

        </div>

      </motion.div>

    </footer>
  )
}