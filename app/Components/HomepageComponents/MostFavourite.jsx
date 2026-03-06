'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsBag } from "react-icons/bs"
import CartAddLoader from "../Naviagation/CartAddLoader"
import Loading from "../Naviagation/Loading"

const Items = [
{
image:"https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",
name:"cef t-shirt men white",
price:"3000"
},
{
image:"https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
name:"green t-shirt",
price:"3000"
},
{
image:"https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",
name:"cef",
price:"3000"
},
{
image:"https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",
name:"cef",
price:"3000"
},
{
image:"https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",
name:"cef",
price:"3000"
},
{
image:"https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
name:"green t-shirt",
price:"3000"
},,
{
image:"https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
name:"green t-shirt",
price:"3000"
},,
{
image:"https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",
name:"green t-shirt",
price:"3000"
},
]

export default function LandingProducts() {

const [addedIndex,setAddedIndex] = useState(null)

const handleAddToCart = (index,e)=>{
e.stopPropagation()

setAddedIndex(index)

setTimeout(()=>{
setAddedIndex(null)
},1200)
}

return (

<div className="mx-auto px-4 md:px-7">

<motion.h1
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="font-lufga-regular text-3xl md:text-6xl py-5 text-center"
>
Most <span className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">favrouite</span>
</motion.h1>

<motion.p
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="font-gilroy-light text-xl md:text-xl mb-10 text-center"
>
Unlock your potential with our quality products from <span className="font-lufga-medium bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">Arrowfly</span>
</motion.p>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

{Items.map((item,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.5, delay:index*0.1}}
whileHover={{scale:1.03}}
className="group p-3 border border-gray-300 rounded-md overflow-hidden bg-white"
>

<div className="relative overflow-hidden">

<motion.img
src={item.image}
alt={item.name}
className="h-96 w-full object-cover rounded-md"
whileHover={{scale:1.1}}
transition={{duration:0.4}}
/>

<div className="p-2 font-gilroy-medium absolute top-2 right-3 text-sm rounded-sm bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
<p className="text-xs text-white font-gilroy-light">limited stock</p>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">

<div className="rotate-[-40deg] text-9xl font-gilroy-light bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">
→
</div>

</div>

<AnimatePresence>

{addedIndex === index && (

<motion.div
initial={{scale:0.8, opacity:0}}
animate={{scale:1, opacity:1}}
exit={{scale:0.8, opacity:0}}
transition={{duration:0.3}}
className="absolute inset-0 flex items-center justify-center bg-white backdrop-blur-sm"
>

<motion.div
initial={{y:40}}
animate={{y:0}}
exit={{y:40}}
className="text-white text-lg font-gilroy-medium flex flex-col items-center gap-3"
>

<div className="flex items-center gap-2 bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent font-gilroy-regular">
<BsBag className="text-2xl text-black animate-bounce"/>

Added to Cart
</div>



</motion.div>

</motion.div>

)}

</AnimatePresence>

</div>


<div className="flex items-center justify-between pt-3">

<div>

<h1 className="text-black font-gilroy-regular text-xl max-w-md">
{item.name}
</h1>

<h2 className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent font-lufga-regular">
Price : ₹{item.price}
</h2>

</div>


<div className="flex gap-3 text-3xl text-black items-center">

<motion.div
whileHover={{ scale: 1.25, rotate: -10 }}
whileTap={{ scale: 0.9 }}
transition={{ type: "spring", stiffness: 300 }}
className="cursor-pointer"
onClick={(e)=>handleAddToCart(index,e)}
>
<BsBag/>
</motion.div>

<motion.div
whileHover={{ x: 10, scale: 1.2 }}
transition={{ type: "spring", stiffness: 300 }}
className="cursor-pointer rotate-[-40deg] font-gilroy-light bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent"
>
→
</motion.div>

</div>

</div>

</motion.div>

))}

</div>

</div>

)
}