'use client'

export default function Landing() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
       

   

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

          <h1 className="font-serif text-black text-[80px] sm:text-[130px] md:text-[150px] lg:text-[200px] leading-none tracking-tight">
            Arrow<span className="italic  bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB]
        bg-clip-text text-transparent">f</span>ly
          </h1>

        </div>



      </div>

    </section>
  )
}