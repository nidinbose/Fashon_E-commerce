'use client'

import { motion } from "framer-motion"
import { BsBag } from "react-icons/bs"

export default function CartAddLoader(){

return(

<div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">

<div className="flex flex-col items-center gap-8">

<motion.div
initial={{x:-80, y:0, scale:1}}
animate={{x:80, y:-40, scale:0.6, opacity:[1,1,0]}}
transition={{
duration:1.2,
repeat:Infinity,
ease:"easeInOut"
}}
className="w-10 h-10 rounded-md bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]"
/>


<motion.div
animate={{scale:[1,1.2,1]}}
transition={{
duration:0.8,
repeat:Infinity
}}
className="text-5xl bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent"
>
<BsBag/>
</motion.div>


<motion.p
animate={{opacity:[0.3,1,0.3]}}
transition={{
duration:1.2,
repeat:Infinity
}}
className="text-sm font-medium text-gray-700"
>
Adding to cart...
</motion.p>

</div>

</div>

)
}