'use client'

export default function Landing() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
       

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 py-10 text-white">

        {/* TOP RIGHT TEXT */}
        <div className="flex justify-end text-right">
          <p className="text-sm md:text-lg font-light leading-relaxed">
            Exclusive & <br /> Trending Collection
          </p>
        </div>

        {/* CENTER BIG TEXT */}
        <div className="absolute bottom-10 right-6 md:right-16">

          <h1 className="font-serif text-[100px] sm:text-[150px] md:text-[250px] lg:text-[300px] leading-none tracking-tight">
            Arrow<span className="italic  bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB]
        bg-clip-text text-transparent">f</span>ly
          </h1>

        </div>


        {/* LEFT CONTENT */}
        <div className="max-w-sm space-y-6">

          <p className="text-sm md:text-base leading-relaxed text-gray-200">
            Explore our curated collection of premium fashion collection,
            crafted to perfection.
          </p>

          <button className="flex items-center gap-3 border border-white px-6 py-3 hover:bg-white hover:text-black transition">
            Explore More →
          </button>

        </div>

      </div>

    </section>
  )
}