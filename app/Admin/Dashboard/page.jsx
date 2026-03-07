'use client'

import { useState } from "react"
import { FiX } from "react-icons/fi"
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";

const dynamic=[
    {icon:<FiPackage/>,name:"Product management"},
    {icon:<FiPackage/>,name:"Order management"},
    {icon:<FiPackage/>,name:"User management"},
    {icon:<FiPackage/>,name:"Discount management"},
    {icon:<FiPackage/>,name:"Accounts management"},
    {icon:<FiPackage/>,name:"Product management"},
    {icon:<FiPackage/>,name:"Order management"},
    {icon:<FiPackage/>,name:"User management"},
    {icon:<FiPackage/>,name:"Discount management"},
    {icon:<FiPackage/>,name:"Accounts management"},
    {icon:<FiPackage/>,name:"Product management"},
    {icon:<FiPackage/>,name:"Order management"},
    {icon:<FiPackage/>,name:"User management"},
    {icon:<FiPackage/>,name:"Discount management"},
    {icon:<FiPackage/>,name:"Accounts management"},
]

export default function Dashboard(){

const [open,setOpen] = useState(false)

return(

<div className="min-h-full flex bg-black relative overflow-y-auto">
{/* aside */}
<aside
className={`fixed top-0 left-0 z-50 h-full w-72 sm:w-80 md:w-96 bg-black text-white shadow-lg transform transition-transform duration-300
${open ? "translate-x-0" : "-translate-x-full"}`}
>
<div className="px-3 sm:px-5 py-2 mt-2">
<div className=" p-4 rounded-xl bg-gray-300/10 w-full">

<div className="flex items-center justify-between gap-4">
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
<div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
<FiX className="text-white text-xl sm:text-2xl" onClick={()=>setOpen(false)}/>
</div>
</div>
</div>
<div className="p-4 rounded-xl bg-gray-300/10 w-full mt-3 space-y-4 max-h-[70vh] overflow-y-auto sidebar-scroll">

{dynamic.map((item,index)=>(
<div className="flex items-center gap-5" key={index}>
<div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gray-200/20">
<div className="text-white text-xl sm:text-2xl">
{item.icon}
</div>
</div>

<div className="font-lufga-regular">
<h1 className="text-sm md:text-[16px]">{item.name}</h1>
</div>
</div>
))}
</div>
<div className=" p-4 rounded-xl mt-3 bg-gray-300/10 w-full">

<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>

</div>
</div>
</aside>


{/* Main Content */}

<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 border border-black h-screen w-full">
{/* c1 */}
<div className="p-3 space-y-3">
 {/* 1 */}
 <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-2">
    <button className="text-center bg-gray-100/10 w-full flex items-center justify-start  gap-5 text-white py-4 rounded-xl font-lufga-regular ">
   <IoSearchOutline  className="w-7 h-7 ml-3"/>
 Search
</button>
<button className="text-center bg-gray-100/10 w-20 py-3 rounded-xl flex items-center justify-center text-white font-lufga-regular ">
    <FiEdit3 className="w-7 h-7 text-center"/>
</button>
   </div>
      <div className="flex justify-between  gap-2">
        <button className="text-center hover:bg-white hover:text-black  w-full py-3 rounded-xl font-lufga-regular bg-gray-100/10 text-white">
    Categories
</button>
    <button className="text-center bg-gray-100/10 w-40 text-white py-4 rounded-xl font-lufga-regular " onClick={()=>{setOpen(true)}}>
    open
</button>
    <button className="text-center bg-gray-100/10 w-40 text-white py-4 rounded-xl font-lufga-regular " onClick={()=>{setOpen(true)}}>
    All
</button>

   </div>
 </div>
 {/* 2 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 3 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 4 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 5 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
 
</div>


{/* c2 */}

<div className="p-3 space-y-3">
 {/* 1 */}
 <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
 {/* 2 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 3 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 4 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 5 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
 
</div>

<div className="p-3 space-y-3">
 {/* 1 */}
 <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
 {/* 2 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 3 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 4 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 5 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
 
</div>

{/* c4 */}
<div className="p-3 space-y-3">
 {/* 1 */}
 <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
 {/* 2 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 3 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 4 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
  {/* 5 */}
  <div className=" w-full bg-gray-300/10 p-7 rounded-xl  space-y-6">
   <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
      <div className="flex justify-between  gap-5">
    <button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
<button className="text-center bg-gradient-to-r w-full py-3 rounded-xl font-lufga-regular from-[#FF902F] via-[#723CEB] to-[#4C11CE]">
    Logout
</button>
   </div>
 </div>
 
</div>

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