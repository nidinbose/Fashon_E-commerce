'use client'

import { motion } from "framer-motion"

export default function Loading(){

const arrows = [1,2,3,4,5]

return(

<div className="h-screen w-full flex items-center justify-center bg-white">

<div className="flex flex-col items-center gap-6">

<div className="flex gap-2">

{arrows.map((_,i)=>(
<motion.div
key={i}
initial={{opacity:0, x:-20}}
animate={{opacity:[0,1,0], x:[-20,20,40]}}
transition={{
duration:1.4,
delay:i*0.2,
repeat:Infinity,
ease:"easeInOut"
}}
className="text-5xl md:text-5xl font-gilroy-light bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent"
>
➜
</motion.div>
))}

</div>

{/* Text */}

<motion.p
initial={{opacity:0}}
animate={{opacity:[0.4,1,0.4]}}
transition={{duration:2, repeat:Infinity}}
className="text-lg md:text-xl font-gilroy-regular bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent"
>
Loading Arrowfly
</motion.p>

</div>

</div>

)
}