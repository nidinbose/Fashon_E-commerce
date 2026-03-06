'use client'

import { FaStar } from "react-icons/fa"
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const reviews = [
{
name:"Susan Gibson.",
text:"Great to be able to order everything I needed from the comfort of my home and the delivery was extremely quick. The support is also great.... 🥰",
product:"Blue Shirt with Floral Leaf Print",
price:"$150.00",
image:"https://images.unsplash.com/photo-1520975916090-3105956dac38"
},
{
name:"Christopher",
text:"These are so pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Highly recommended...😍",
product:"Blue Traditional Patterned Dress",
price:"$150.00",
oldPrice:"$195.00",
image:"https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
},
{
name:"Marie-Gosée H.",
text:"Great to be able to order everything I needed from the comfort of my home and the delivery was extremely quick. The support is also great.... 🥰",
product:"Black Floral Print Ethnic Costume",
price:"$150.00",
oldPrice:"$195.00",
image:"https://images.unsplash.com/photo-1520975661595-6453be3f7070"
}
]

export default function Ratings(){

const containerRef = useRef(null)
const [width,setWidth] = useState(0)

useEffect(()=>{
if(containerRef.current){
setWidth(containerRef.current.scrollWidth / 2)
}
},[])

return(

<section className="w-full py-20 overflow-hidden font-gilroy-regular">

<div className="mx-auto px-6">

{/* HEADER */}

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
className="text-center mb-14"
>

<h2 className="text-3xl md:text-4xl text-gray-900">
Customer <span className="bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent">Say!</span>
</h2>

<p className="text-gray-500 mt-3 text-lg">
Customers love our products and we always strive to please them all.
</p>

</motion.div>


{/* SCROLL */}

<div className="overflow-hidden">

<motion.div
ref={containerRef}
className="flex gap-6"
animate={{ x: [-width, 0] }}
transition={{
ease:"linear",
duration:25,
repeat:Infinity
}}
>

{[...reviews,...reviews].map((item,index)=>(

<div
key={index}
className="
flex-shrink-0
w-full
md:w-1/2
lg:w-1/3
bg-white
rounded-xl
border
border-gray-200
p-8
space-y-6
hover:shadow-lg
transition
"
>

{/* STARS */}

<div className="flex text-orange-400">
{[...Array(5)].map((_,i)=>(
<FaStar key={i}/>
))}
</div>


{/* USER */}

<div className="flex items-center gap-2">

<h4 className="font-semibold text-gray-900">
{item.name}
</h4>

<span className="bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent text-sm">
✓ Verified Buyer
</span>

</div>


{/* REVIEW */}

<p className="text-gray-500 text-lg leading-relaxed border-b pb-6">
{item.text}
</p>


{/* PRODUCT */}

<div className="flex items-center gap-4">

<img
src={item.image}
className="w-14 h-14 rounded-full object-cover"
/>

<div>

<p className="font-medium text-gray-900">
{item.product}
</p>

<div className="flex items-center gap-2 text-sm">

<span className="bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent font-semibold">
{item.price}
</span>

{item.oldPrice && (
<span className="line-through text-gray-400">
{item.oldPrice}
</span>
)}

</div>

</div>

</div>

</div>

))}

</motion.div>

</div>

</div>

</section>

)
}