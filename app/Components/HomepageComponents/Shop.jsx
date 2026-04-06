'use client'

import { motion } from "framer-motion"
import { FiArrowUpRight } from "react-icons/fi"

const container = {
hidden:{opacity:0},
show:{
opacity:1,
transition:{
staggerChildren:0.12
}
}
}

const card = {
hidden:{opacity:0,y:40},
show:{
opacity:1,
y:0,
transition:{
duration:0.5,
ease:"easeOut"
}
}
}

export default function Shop(){

return(

<section className="py-10">

<div className="mx-auto px-6">

{/* Heading */}

<motion.h1
initial="hidden"
whileInView="show"
viewport={{once:true}}
variants={card}
className="font-lufga-regular text-3xl md:text-6xl py-5 text-center"
>
Explore latest <span className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">collection</span>
</motion.h1>

<motion.p
initial="hidden"
whileInView="show"
viewport={{once:true}}
variants={card}
className="font-gilroy-light text-xl mb-10 text-center"
>
Unlock your potential with our quality products from
<span className="font-lufga-medium bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">
 Arrowfly
</span>
</motion.p>


{/* GRID */}

<motion.div
variants={container}
initial="hidden"
whileInView="show"
viewport={{once:true,margin:"-100px"}}
className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px] md:auto-rows-[300px]"
>

{/* CARD */}

{[
{title:"Shoes",img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200"},
{title:"Bags",img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200"},
{title:"Sunglasses",img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200"},
{title:"Pants",img:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200"}
].map((item,index)=>(

<motion.div
key={index}
variants={card}
whileHover={{scale:1.03}}
className={`group relative rounded-2xl overflow-hidden transform-gpu will-change-transform ${index % 2 === 0 ? "row-span-2":""}`}
>

<img
src={item.img}
loading="lazy"
className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
/>

{/* overlay */}

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition"/>

{/* title */}

<motion.div
initial={{y:20,opacity:0}}
whileInView={{y:0,opacity:1}}
viewport={{once:true}}
transition={{delay:0.1}}
className="absolute bottom-6 left-6 text-white text-3xl font-serif"
>
{item.title}
</motion.div>

{/* arrow */}

<motion.div
whileHover={{rotate:45,scale:1.1}}
transition={{type:"spring",stiffness:260}}
className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black shadow-lg"
>
<FiArrowUpRight/>
</motion.div>

</motion.div>

))}

</motion.div>

</div>

</section>

)
}


