'use client'

import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BsBag } from "react-icons/bs";

const Items=[
{image:"https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",name:"cef t-shirt men white",price:"3000"},
{image:"https://img.freepik.com/premium-photo/green-shirt-with-word-t-shirt-front_1288657-158557.jpg",name:"cef",price:"3000"},
{image:"https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",name:"cef",price:"3000"},
{image:"https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",name:"cef",price:"3000"},
{image:"https://uspoloassn.in/cdn/shop/files/1_1addd816-ce66-494e-8184-11223b7ebc6f_500x.jpg?v=1769097060",name:"cef",price:"3000"}
]

export default function LandingProducts() {

  return (
  <div className="container mx-auto px-4 md:px-7">

    <motion.h1
      initial={{opacity:0,y:20}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.6}}
      className="font-gilroy-medium text-6xl  bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#723CEB] 
      bg-clip-text text-transparent py-10"
    >
      New Arrivals
    </motion.h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

      {Items.map((item,index)=>(
        <motion.div
          key={index}
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.5, delay:index*0.1}}
          whileHover={{scale:1.04}}
          className="group  p-3 bg-gradient-to-r from-[#FF69B4]/20 via-[#4C11CE]/90 to-[#723CEB]/40 rounded-sm overflow-hidden"
        >


          <div className="overflow-hidden">
            <motion.img
              src={item.image}
              alt=""
              className="h-96 w-full rounded-md bg-cover"
              whileHover={{scale:1.1}}
              transition={{duration:0.4}}
            />
          </div>

          <div className="flex items-center justify-between pt-3">

            <div>
              <h1 className="text-white font-gilroy-regular text-xl max-w-md">
                {item.name}
              </h1>

              <h2 className="text-gray-300 font-gilroy-regular">
                Price : {item.price}
              </h2>
            </div>

            <div className="flex gap-2 text-3xl text-white">

              <motion.div
                whileHover={{rotate:-15, scale:1.2}}
                transition={{type:"spring", stiffness:300}}
              >
                <BsBag />
              </motion.div>

              <motion.div
                whileHover={{x:6}}
                transition={{type:"spring", stiffness:300}}
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