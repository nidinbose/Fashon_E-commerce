'use client'

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const images = [
"https://sourcingjournal.com/wp-content/uploads/2024/12/GettyImages1735100420.jpg",
"https://sourcingjournal.com/wp-content/uploads/2024/12/GettyImages1735100420.jpg",
"https://sourcingjournal.com/wp-content/uploads/2024/12/GettyImages1735100420.jpg",
"https://sourcingjournal.com/wp-content/uploads/2024/12/GettyImages1735100420.jpg",
]

export default function Landing(){

const [index,setIndex] = useState(0)
const [text,setText] = useState("")
const word = "Arrowfly"

useEffect(()=>{
const interval = setInterval(()=>{
setIndex((prev)=> (prev + 1) % images.length)
},4000)

return ()=>clearInterval(interval)
},[])


/* TYPEWRITER */

useEffect(()=>{
let i = 0

const type = setInterval(()=>{
setText(word.slice(0,i+1))
i++

if(i === word.length){
clearInterval(type)
}

},150)

return ()=>clearInterval(type)
},[])



return(

<section className="relative w-full h-screen overflow-hidden">

{/* IMAGE SLIDER */}

<AnimatePresence>

<motion.img
key={index}
src={images[index]}
initial={{opacity:0, scale:1.1}}
animate={{opacity:1, scale:1}}
exit={{opacity:0}}
transition={{duration:1}}
className="absolute w-full h-full object-cover"
/>

</AnimatePresence>



{/* CONTENT */}

<div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 py-10 text-white">


{/* TOP TEXT */}

<motion.div
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="flex justify-end text-right"
>

<p className="text-sm md:text-lg font-light leading-relaxed">
Exclusive & <br/> Trending Collection
</p>

</motion.div>


{/* HERO TEXT */}

<div className="absolute bottom-20 right-6 md:right-16">

<h1 className="font-serif text-[80px] sm:text-[130px] md:text-[150px] lg:text-[200px] leading-none tracking-tight">

{text.slice(0,5)}

<span className="italic bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB] bg-clip-text text-transparent">
{text[5] || ""}
</span>

{text.slice(6)}

<span className="animate-pulse"></span>

</h1>

</div>


{/* PROGRESS BUBBLES */}

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">

{images.map((_,i)=>(
<div
key={i}
className="w-12 h-1 bg-white/30 rounded overflow-hidden rounded-xl"
>

{i === index && (

<motion.div
key={index}
initial={{width:0}}
animate={{width:"100%"}}
transition={{duration:4, ease:"linear"}}
className="h-full bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]"
/>

)}

</div>
))}

</div>


</div>

</section>

)
}