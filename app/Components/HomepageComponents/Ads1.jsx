'use client'

import { useEffect, useState } from "react"

export default function Countdown(){

const TEN_DAYS = 10 * 24 * 60 * 60 * 1000

const [time,setTime] = useState(TEN_DAYS)

useEffect(()=>{

const interval = setInterval(()=>{

setTime(prev=>{
if(prev <= 1000){
return TEN_DAYS
}
return prev - 1000
})

},1000)

return ()=>clearInterval(interval)

},[])

const days = Math.floor(time / (1000*60*60*24))
const hours = Math.floor((time / (1000*60*60)) % 24)
const mins = Math.floor((time / (1000*60)) % 60)
const secs = Math.floor((time / 1000) % 60)

return(

<div className="w-full flex justify-center px-4 py-10 sm:py-12 font-gilroy-regular">

<div className="relative w-full max-w-7xl h-[320px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden">
<video
autoPlay
loop
muted
playsInline
className="absolute w-full h-full object-cover"
>
<source src="https://www.pexels.com/download/video/4266800/" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/40"/>

<div className="absolute inset-0 flex items-center justify-center px-4">

<div className="bg-white backdrop-blur-md rounded-2xl px-6 sm:px-10 py-8 text-center w-full max-w-sm sm:max-w-md md:max-w-xl shadow-xl">

<h2 className="text-2xl sm:text-3xl bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent md:text-4xl font-semibold text-gray-900">
One-Time Only
</h2>

<p className="text-gray-500 text-xs sm:text-sm mt-2">
Explore our latest considered collection for the new season.
</p>

<div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-6 text-gray-900">

<div className="text-center">
<p className="text-xl sm:text-2xl md:text-3xl font-semibold">{days}</p>
<span className="text-[10px] sm:text-xs text-gray-500">days</span>
</div>

<div className="text-lg sm:text-xl">:</div>

<div className="text-center">
<p className="text-xl sm:text-2xl md:text-3xl font-semibold">{hours}</p>
<span className="text-[10px] sm:text-xs text-gray-500">hour</span>
</div>

<div className="text-lg sm:text-xl">:</div>

<div className="text-center">
<p className="text-xl sm:text-2xl md:text-3xl font-semibold">{mins}</p>
<span className="text-[10px] sm:text-xs text-gray-500">mins</span>
</div>

<div className="text-lg sm:text-xl">:</div>

<div className="text-center">
<p className="text-xl sm:text-2xl md:text-3xl font-semibold">{secs}</p>
<span className="text-[10px] sm:text-xs text-gray-500">secs</span>
</div>

</div>

<button className="mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] text-white rounded-lg font-gilroy-medium hover:scale-105 transition">
Shop Sale
</button>

</div>

</div>

</div>

</div>

)

}