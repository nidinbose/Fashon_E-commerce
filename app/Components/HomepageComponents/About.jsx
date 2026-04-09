'use client'

import { motion } from "framer-motion"

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

const imageAnim = {
  hidden: { scale: 1.1, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1 }
  }
}

export default function About() {
  return (
    <section className="text-white py-20 px-6 px-6 xl:px-0 max-w-7xl mx-auto overflow-hidden">

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="mx-auto"
      >

        {/* HEADING */}
        <motion.h1
          variants={fadeUp}
          className="font-gilroy-regular text-3xl md:text-6xl py-5 text-center text-black"
        >
          About{" "}
          <span className="text-[#FF5F2D]">
            Granest
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          variants={fadeUp}
          className="text-sm font-gilroy-regular md:text-base text-black mb-10 text-center"
        >
          Unlock your potential with our quality products from{" "}
          <span className="text-[#FF5F2D] ">Granest</span>
        </motion.p>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* LARGE IMAGE */}
          <motion.div
            variants={imageAnim}
            className="md:col-span-2 overflow-hidden rounded-xl"
          >
            <motion.img
              src="/Images/G1.png"
              className="w-full h-[350px] md:h-[420px] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* TEXT + SMALL IMAGE */}
          <div className="flex flex-col gap-8">

            <motion.p
              variants={fadeUp}
              className="text-gray-700 text-sm leading-relaxed font-lufga-light"
            >
              This series explores presence through form, stillness,
              and repetition. The image is not built around action,
              but around pause — where the body becomes structure and
              movement dissolves into breath.
              <br /><br />
              Light and shadow define the rhythm, creating a visual
              tension between clarity and disappearance.
              Fashion is treated as a sculptural element —
              not decoration, but a quiet extension of the form.
            </motion.p>

            <motion.div
              variants={imageAnim}
              className="overflow-hidden rounded-xl"
            >
              <motion.img
                src="/Images/G2.png"
                className="w-full h-[200px] object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>

          </div>

        </div>

        {/* SERVICES SECTION */}
        <div className="grid md:grid-cols-2 gap-16 mt-24">

          {/* LEFT TEXT */}
          <motion.div variants={fadeUp}>
            <h3 className="text-4xl md:text-5xl font-gilroy-regular text-black leading-tight">
              We Have{" "}
              <span className="text-[#FF5F2D]">
              Brands
              </span>
            </h3>

            <p className="text-gray-700 mt-6 text-sm font-lufga-light leading-relaxed max-w-md">
              We create visual work guided by restraint, clarity,
              and atmosphere. Each project is shaped through form,
              light, and intention — where fashion becomes structure
              and images speak quietly, yet precisely.
            </p>
          </motion.div>

          {/* SERVICE LIST */}
          <div className="space-y-6 text-black font-gilroy-regular">

            {[
              "Puma",
              "Nike",
              "CalvinKlen",
              "LouisPhilippe",
              "Sara"
            ].map((service, i) => (

              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ x: 10 }}
                className="border-b border-gray-300 pb-6 flex justify-between items-center cursor-pointer group"
              >

                <span className="text-lg tracking-wide flex items-center gap-3">

                  <span className=" text-[#FF5F2D]">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="group-hover:text-[#FF5F2D] transition duration-300">
                    {service}
                  </span>

                </span>

                <motion.span
                  className="text-xl  text-[#FF5F2D]"
                  whileHover={{ rotate: 45 }}
                >
                  ↗
                </motion.span>

              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </section>
  )
}