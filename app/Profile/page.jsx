'use client'

import { motion } from "framer-motion"
import { FiUser, FiShoppingBag, FiHeart, FiSettings } from "react-icons/fi"

export default function Profile(){

  const stats = [
    {label:"Orders", value:24, icon:<FiShoppingBag/>},
    {label:"Wishlist", value:12, icon:<FiHeart/>},
    {label:"Account", value:"Active", icon:<FiUser/>}
  ]

  return (

<div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

<motion.div
initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{duration:0.6}}
className="bg-white w-full max-w-4xl rounded-2xl shadow-xl p-8"
>

{/* Header */}

<div className="flex items-center gap-6">

{/* Avatar without image */}
<motion.div
whileHover={{scale:1.1}}
className="w-24 h-24 rounded-full flex items-center justify-center 
bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] text-white text-4xl"
>
<FiUser/>
</motion.div>

<div>
<h1 className="text-2xl font-semibold">John Doe</h1>
<p className="text-gray-500">john@email.com</p>
</div>

</div>


{/* Stats */}

<div className="grid grid-cols-3 gap-6 mt-10">

{stats.map((item,index)=>(

<motion.div
key={index}
whileHover={{y:-6}}
transition={{type:"spring"}}
className="bg-gray-50 rounded-xl p-6 text-center shadow-sm"
>

<div className="text-2xl mb-2 text-purple-600 flex justify-center">
{item.icon}
</div>

<h2 className="text-xl font-semibold">{item.value}</h2>
<p className="text-gray-500 text-sm">{item.label}</p>

</motion.div>

))}

</div>


{/* Buttons */}

<div className="flex gap-4 mt-10">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="px-6 py-3 bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] text-white rounded-lg shadow"
>
Edit Profile
</motion.button>

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
className="px-6 py-3 border border-gray-300 rounded-lg flex items-center gap-2"
>
<FiSettings/>
Settings
</motion.button>

</div>

</motion.div>

</div>

  )
}