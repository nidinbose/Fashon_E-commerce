'use client'

import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsBag } from "react-icons/bs";

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
}
]

export default function LandingProducts() {

return (

<div className="container mx-auto px-4 md:px-7">

{/* Title */}
<motion.h1
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{duration:0.6}}
className="font-gilroy-medium text-3xl md:text-6xl py-10 "
>
New <span className=" bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">arrivals</span>
</motion.h1>


{/* Grid */}
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

{/* Image */}
<div className="relative overflow-hidden">

<motion.img
src={item.image}
alt={item.name}
className="h-96 w-full object-cover rounded-md"
whileHover={{scale:1.1}}
transition={{duration:0.4}}
/>

{/* Overlay Arrow */}
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">

<div className="rotate-[-40deg] text-9xl font-gilroy-light bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">
→
</div>

</div>

</div>


{/* Product Info */}
<div className="flex items-center justify-between pt-3">

<div>
<h1 className="text-black font-gilroy-regular text-xl max-w-md">
{item.name}
</h1>

<h2 className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent font-lufga-regular">
Price : {item.price}
</h2>
</div>


{/* Icons */}
<div className="flex gap-3 text-3xl text-black items-center">

<motion.div
whileHover={{ scale: 1.25, rotate: -10 }}
whileTap={{ scale: 0.9 }}
transition={{ type: "spring", stiffness: 300 }}
className="cursor-pointer"
>
<BsBag />
</motion.div>

<motion.div
whileHover={{ x: 10, scale: 1.2 }}
transition={{ type: "spring", stiffness: 300 }}
className="cursor-pointer"
>
<IoIosArrowRoundForward />
</motion.div>

</div>

</div>

</motion.div>

))}

</div>

</div>

)
}