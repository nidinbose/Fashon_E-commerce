'use client'

import { useState } from "react"
import { FiX } from "react-icons/fi"
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";

export default function Dashboard(){

const [open,setOpen] = useState(false)

return(

<div className="min-h-screen flex bg-black relative">

{/* Sidebar */}

<aside
className={`fixed top-0 left-0 z-50 h-full w-72 sm:w-80 md:w-96 bg-black text-white shadow-lg transform transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full"}`}
>

{/* Close Button */}

<div className="flex justify-end p-4">
<button onClick={()=>setOpen(false)}>
<FiX size={24}/>
</button>
</div>

<div className="px-3 sm:px-5 py-2">

{/* Card */}

<div className=" p-4 rounded-xl bg-gray-300/10 w-full">

<div className="flex items-center justify-between gap-4">

{/* Left side */}

<div className="flex items-center gap-3">

<img
src="https://www.shutterstock.com/shutterstock/videos/1104036173/thumb/10.jpg?ip=x480"
alt=""
className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl object-cover"
/>

<div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gray-200/20">
<IoIosNotificationsOutline className="text-white text-xl sm:text-2xl"/>
</div>

</div>

{/* Right icon */}

<div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
<FiEdit3 className="text-white text-xl sm:text-2xl"/>
</div>

</div>

</div>
{/* second */}
<div className=" p-4 rounded-xl bg-gray-300/10 w-full mt-3 space-y-4">

 {/* nav */}

<div className="flex items-center gap-5 ">
    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gray-200/20">
    <FiPackage className="text-white text-xl sm:text-2xl"/>
</div>
<div className="font-lufga-regular">
    <h1>Product management</h1>
</div>
</div>

{/* 2 */}
<div className="flex items-center gap-5 ">
    <div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gray-200/20">
    <FiPackage className="text-white text-xl sm:text-2xl"/>
</div>
<div className="font-lufga-regular">
    <h1>Order management</h1>
</div>
</div>

</div>

</div>

</aside>


{/* Main Content */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 border border-black h-screen w-full p-6">

<div className="bg-gray-100 p-4 rounded">Column 1</div>



<div className="bg-gray-100 p-4 rounded">
<button
onClick={()=>setOpen(true)}
className="px-4 py-2 bg-black text-white rounded"
>
Open Sidebar
</button>
</div>

<div className="bg-gray-100 p-4 rounded">Column 4</div>

</div>


{/* Overlay (mobile only) */}

{open && (
<div
onClick={()=>setOpen(false)}
className="fixed inset-0 bg-black/40 md:hidden"
/>
)}

</div>

)
}