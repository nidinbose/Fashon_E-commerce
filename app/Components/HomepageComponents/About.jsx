'use client'

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className=" text-white py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <h2 className="text-center text-4xl text-black md:text-5xl font-gilroy-regular mb-16">
          Arrowfly <span className="bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent">About</span>
        </h2>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-3 gap-8 items-start">

          {/* LARGE IMAGE */}
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              className="w-full h-[350px] md:h-[420px] object-cover"
            />
          </div>

          {/* TEXT + SMALL IMAGE */}
          <div className="flex flex-col gap-8">

            <p className="text-gray-700 text-sm leading-relaxed font-lufga-light">
              This series explores presence through form, stillness,
              and repetition. The image is not built around action,
              but around pause — where the body becomes structure and
              movement dissolves into breath.
              <br /><br />
              Light and shadow define the rhythm, creating a visual
              tension between clarity and disappearance.
              Fashion is treated as a sculptural element —
              not decoration, but a quiet extension of the form.
            </p>

            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
              className="w-full h-[200px] object-cover"
            />

          </div>

        </div>


        {/* SERVICES SECTION */}
        <div className="grid md:grid-cols-2 gap-16 mt-24">

          {/* LEFT TEXT */}
          <div>

            <h3 className="text-4xl md:text-5xl font-gilroy-regular text-black leading-tight">
              We Provide <span className="bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent">Various Services</span>
            </h3>

            <p className="text-gray-700 mt-6 text-sm font-lufga-light leading-relaxed max-w-md">
              We create visual work guided by restraint, clarity,
              and atmosphere. Each project is shaped through form,
              light, and intention — where fashion becomes structure
              and images speak quietly, yet precisely.
            </p>

          </div>


          {/* SERVICE LIST */}
          <div className="space-y-8 text-black font-gilroy-regular">

            {[
              "Art Direction",
              "Fashion Photography",
              "Visual Storytelling",
              "Creative Concept",
              "Editorial Styling"
            ].map((service, i) => (

              <div key={i} className="border-b border-gray-700 pb-6 flex justify-between items-center">

                <span className="text-lg tracking-wide ">
                <span className="bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent">  {String(i + 1).padStart(2, "0")}</span> {service}
                </span>

                <span className="text-gray-400 text-xl bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent">
                  ↗
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}