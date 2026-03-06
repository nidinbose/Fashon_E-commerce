'use client'

import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"

const container = {
hidden:{opacity:0},
show:{
opacity:1,
transition:{
staggerChildren:0.15
}
}
}

const card = {
hidden:{opacity:0,y:40,scale:0.96},
show:{
opacity:1,
y:0,
scale:1,
transition:{
duration:0.6,
ease:"easeOut"
}
}
}

export default function Shop(){

return(

<section className="py-10">

<div className="mx-auto px-6">

<motion.h1
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="font-lufga-regular text-3xl md:text-6xl py-5 text-center"
>
Explore latest <span className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">collection</span>
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.1}}
className="font-gilroy-light text-xl md:text-xl mb-10 text-center"
>
Unlock your potential with our quality products from <span className="font-lufga-medium bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">Arrowfly</span>
</motion.p>


{/* GRID */}

<motion.div
variants={container}
initial="hidden"
whileInView="show"
viewport={{once:true}}
className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[300px]"
>


{/* SHOES */}

<motion.div
variants={card}
whileHover={{scale:1.04}}
className="group relative row-span-2 md:row-span-2 rounded-2xl overflow-hidden"
>

<motion.img
src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"/>

<div className="absolute bottom-6 left-6 text-white text-3xl font-serif">
Shoes
</div>

<motion.div
whileHover={{rotate:45}}
transition={{type:"spring",stiffness:300}}
className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white text-white backdrop-blur-sm"
>
<FiArrowUpRight/>
</motion.div>

</motion.div>


{/* BAGS */}

<motion.div
variants={card}
whileHover={{scale:1.04}}
className="group relative rounded-2xl overflow-hidden"
>

<img
src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"/>

<div className="absolute bottom-6 left-6 text-white text-3xl font-serif">
Bags
</div>

<motion.div
whileHover={{rotate:45}}
className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
>
<FiArrowUpRight/>
</motion.div>

</motion.div>


{/* SUNGLASSES */}

<motion.div
variants={card}
whileHover={{scale:1.04}}
className="group relative row-span-2 md:row-span-2 rounded-2xl overflow-hidden"
>

<img
src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"/>

<div className="absolute bottom-6 left-6 text-white text-3xl font-serif">
Shoes
</div>

<motion.div
whileHover={{rotate:45}}
className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white text-white backdrop-blur-sm"
>
<FiArrowUpRight/>
</motion.div>

</motion.div>


{/* PANTS */}

<motion.div
variants={card}
whileHover={{scale:1.04}}
className="group relative rounded-2xl overflow-hidden"
>

<img
src="https://images.unsplash.com/photo-1584917865442-de89df76afd3"
className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"/>

<div className="absolute bottom-6 left-6 text-white text-3xl font-serif">
Bags
</div>

<motion.div
whileHover={{rotate:45}}
className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black"
>
<FiArrowUpRight/>
</motion.div>

</motion.div>

</motion.div>

</div>

</section>

)
}