'use client'

import { useState } from "react"
import { FiX } from "react-icons/fi"
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { ResponsiveContainer, LineChart, Line } from "recharts";
import { IoCartOutline } from "react-icons/io5";
import {PieChart, Pie, Cell, } from "recharts";
import { GoContainer } from "react-icons/go";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import {
XAxis,
YAxis,
CartesianGrid,
Tooltip
} from "recharts";
const data = [
  { name: "Active Customers", value: 41, fill: "#FF6A3D" },
  { name: "Recent Customers", value: 32, fill: "#2A9D8F" },
  { name: "Re-engaged Users", value: 27, fill: "#E5E5E5" }
];

const chartData = [
{ month: "Jan", sales: 4000 },
{ month: "Feb", sales: 3000 },
{ month: "Mar", sales: 5000 },
{ month: "Apr", sales: 4200 },
{ month: "May", sales: 6100 },
{ month: "Jun", sales: 5400 },
];



const salesData = [
  { value: 120 },
  { value: 200 },
  { value: 150 },
  { value: 280 },
  { value: 240 },
  { value: 320 },
  { value: 300 },
];

const ordersalesData = [
  { value: 120 },
  { value: 200 },
  { value: 150 },
  { value: 280 },
  { value: 240 },
  { value: 320 },
  { value: 700 },
];

const stocksalesData = [
  { value: 720 },
  { value: 600 },
  { value: 550 },
  { value: 180 },
  { value: 340 },
  { value: 220 },
  { value: 200 },
];

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

<div className="min-h-full  bg-black relative overflow-y-auto">
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
<div className="flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE]"onClick={()=>setOpen(false)}>
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

<div className="">
    {/* Main Content */}
   <div>
     <div className="flex justify-between items-center px-7 p-4">
       <div className="flex items-center justify-start gap-3">
          <button onClick={()=>{setOpen(true)}} className=" bg-gray-500/10 p-4 rounded-2xl">
          <HiOutlineMenuAlt2  className=" w-7 h-7 text-white"/>
          </button>
          <div className="hidden md:inline">
            <input type="search" placeholder="Search ......" className="text-white bg-gray-500/10 p-4 w-50 rounded-xl font-lufga-regular" />
          </div>
       </div>

       <div className="text-white flex gap-2 text-lg md:text-xl bg-gray-500/10 p-4 rounded-xl font-lufga-regular">
        <h1>Welcome : </h1>
          <h2 className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">User</h2>
       </div>
     </div>
  

   </div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 h-full w-full p-5 md:p-7">

{/* Total Sales */}
<div className="bg-gray-500/10 rounded-4xl p-6 text-white space-y-4">
  <div className="">
    <div className="">
    <div className="flex justify-between items-center py-2">
          <h2 className="text-lg lg:text-2xl font-lufga-regular">Total Sales</h2>
          <FiPackage className="w-12 h-12 bg-gray-100/10 p-2 rounded-full"/>
    </div>
      <p className="text-3xl font-gilroy-bold bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">₹ 24,560</p>
      <p className="text-sm text-white mt-1 font-gilroy-light">+12% this month</p>
       <div className="w-60 lg:w-82 h-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={salesData}>
               <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF902F" />
              <stop offset="50%" stopColor="#723CEB" />
              <stop offset="100%" stopColor="#4C11CE" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="value"
                 stroke="url(#salesGradient)"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  </div>
</div>

{/* Orders */}
<div className="bg-gray-500/10 rounded-4xl p-6 text-white space-y-4">
  <div className="">
    <div className="">
    <div className="flex justify-between items-center py-2">
          <h2 className="text-lg lg:text-2xl font-lufga-regular">Total Orders</h2>
          <IoCartOutline className="w-12 h-12 bg-gray-100/10 p-2 rounded-full"/>
    </div>
      <p className="text-3xl font-gilroy-bold bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">12K+</p>
      <p className="text-sm text-white mt-1 font-gilroy-light">+11% this month</p>
       <div className="w-60 lg:w-82 h-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={ordersalesData}>
               <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF902F" />
              <stop offset="50%" stopColor="#723CEB" />
              <stop offset="100%" stopColor="#4C11CE" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="value"
                 stroke="url(#salesGradient)"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  </div>
</div>

{/* Customers */}
<div className="bg-gray-500/10 relative rounded-4xl p-6 text-white flex flex-col font-lufga-regular md:flex-row items-center justify-between gap-6">
   <h1 className="text-2xl absolute top-3 left-4">Coustmers</h1>
{/* LEFT SIDE CHART */}

<div className="relative w-48 h-48 mt-2">

<ResponsiveContainer width="100%" height="100%">
   
<PieChart>

<Pie
data={data}
dataKey="value"
cx="50%"
cy="50%"
innerRadius={60}
outerRadius={80}
paddingAngle={5}
>

<Cell fill="#FF902F" />
<Cell fill="#723CEB" />
<Cell fill="#4C11CE" />

</Pie>

</PieChart>
</ResponsiveContainer>

{/* CENTER TEXT */}

<div className="absolute inset-0 flex flex-col items-center justify-center">
<h1 className="text-2xl font-gilroy-regular">230+</h1>
<p className="text-xs text-gray-300">Total Customers</p>
</div>

</div>


{/* RIGHT SIDE LEGEND */}

<div className="space-y-4 text-xs ">

<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF6A3D]" />
<p>Active Customers</p>
</div>
<span className="font-gilroy-bold">41%</span>
</div>

<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-[#2A9D8F]" />
<p>Recent Customers</p>
</div>
<span className="font-gilroy-bold">32%</span>
</div>

<div className="flex items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gray-300" />
<p>Re-Engaged Users</p>
</div>
<span className="font-gilroy-bold">27%</span>
</div>

</div>

</div>

{/* Revenue */}
<div className="bg-gray-500/10 rounded-4xl p-6 text-white space-y-4">
  <div className="">
    <div className="">
    <div className="flex justify-between items-center py-2">
          <h2 className="text-lg lg:text-2xl font-lufga-regular">Total Stock value</h2>
          <GoContainer className="w-12 h-12 bg-gray-100/10 p-2 rounded-full"/>
    </div>
      <p className="text-3xl font-gilroy-bold bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">₹ 300000000</p>
      <p className="text-sm text-white mt-1 font-gilroy-light">Sufficient stock</p>
       <div className="w-60 lg:w-82 h-16">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={stocksalesData}>
               <defs>
            <linearGradient id="salesGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF902F" />
              <stop offset="50%" stopColor="#723CEB" />
              <stop offset="100%" stopColor="#4C11CE" />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="value"
                 stroke="url(#salesGradient)"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  </div>
</div>
<div className="bg-gray-500/10 rounded-4xl p-6 text-white md:col-span-2 xl:col-span-2 space-y-4">
<h2 className="text-3xl font-lufga-regular">Monthly Sales</h2>
<div className="h-60">
<ResponsiveContainer width="100%" height="100%">
<LineChart data={chartData}>
<defs>
<linearGradient id="salesLineGradient" x1="0" y1="0" x2="1" y2="0">
<stop offset="0%" stopColor="#FF902F"/>
<stop offset="50%" stopColor="#723CEB"/>
<stop offset="100%" stopColor="#4C11CE"/>
</linearGradient>
</defs>

<CartesianGrid strokeDasharray="3 3" stroke="#444" />

<XAxis dataKey="month" stroke="#aaa" />

<YAxis stroke="#aaa" />

<Tooltip
contentStyle={{
backgroundColor: "#111",
border: "none"
}}
/>

<Line
type="monotone"
dataKey="sales"
stroke="url(#salesLineGradient)"
strokeWidth={4}
dot={false}
/>

</LineChart>

</ResponsiveContainer>

</div>

</div>




{/* Recent Orders */}
<div className="bg-gray-500/10 rounded-4xl p-6 text-white md:col-span-2 xl:col-span-2 space-y-4 text-lufga-regular">

<h2 className="text-lg  md:text-2xl font-lufga-regular font-gilroy-bold bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">Recent Orders</h2>

<div className="space-y-3 text-sm">

<div className="flex justify-between">
<span>#ORD-1021</span>
<span className="font-gilroy-bold bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent ">$320</span>
</div>

<div className="flex justify-between">
<span>#ORD-1022</span>
<span className="font-gilroy-bold bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">$190</span>
</div>

<div className="flex justify-between">
<span>#ORD-1023</span>
<span className="font-gilroy-bold bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">$80</span>
</div>

<div className="flex justify-between">
<span>#ORD-1024</span>
<span className="font-gilroy-bold bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">$450</span>
</div>

</div>

</div>


{/* Top Products */}
<div className="bg-gray-500/10 rounded-4xl p-6 text-white font-lufga-regular space-y-4">
<h2 className="text-xl md:text-2xl font-lufga-regular bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">Top Products</h2>

<div className="space-y-3">

<div className="flex justify-between text-base">
<span>Wireless Headphones</span>
<span className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent font-gilroy-bold">$120</span>
</div>

<div className="flex justify-between text-base">
<span>Running Shoes</span>
<span className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent font-gilroy-bold">$90</span>
</div>

<div className="flex justify-between text-base">
<span>Gaming Mouse</span>
<span className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent font-gilroy-bold">$60</span>
</div>

<div className="flex justify-between text-base">
<span>Smart Watch</span>
<span className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent font-gilroy-bold">$210</span>
</div>

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