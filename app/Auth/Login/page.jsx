'use client'

import { FcGoogle } from "react-icons/fc"
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Login(){
  return (
    <div className="relative min-h-full grid xl:grid-cols-2 px-6  xl:px-0 max-w-7xl mx-auto py-10 bg-white mt-9 md:mt-14">
      <div className="flex flex-col justify-between">

        <div>

          <h1 className="text-black font-gilroy-medium
          text-4xl sm:text-5xl md:text-6xl lg:text-[50px] leading-[1.1]">
            Unlock seamless
          </h1>

          <h2 className="font-gilroy-medium
          text-4xl sm:text-5xl md:text-6xl lg:text-[50px] leading-[1.1]
          text-[#FF5F2D]">
            integratiobn today
          </h2>

          <p className="text-gray-600 mt-6 md:mt-8 font-lufga-light max-w-md
          text-md md:text-base lg:text-lg">
            Transform your workflow and boost productivity with our advanced solutions.
          </p>

        </div>

        <div className="flex items-center gap-10 xl:gap-12 mt-10">

          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600 mb-2">App Store</p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=appstore"
              className="w-20 lg:w-24"
            />
          </div>

          <div className="flex flex-col items-center">
            <p className="text-sm text-gray-600 mb-2">Google Play</p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=googleplay"
              className="w-20 lg:w-24"
            />
          </div>

        </div>

      </div>

      <div className="flex items-center justify-center mt-16 lg:mt-0">

        <div className="w-full max-w-md lg:max-w-lg
        backdrop-blur-xl md:border border-black/20
        rounded-xl p-6 md:p-8 text-black">

          <h3 className="text-xl md:text-2xl font-semibold mb-6 font-lufga-regular">
            Login to your account
          </h3>

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg
            bg-black/10 border border-black/20
            outline-none focus:border-[#FF5F2D]
            font-gilroy-regular text-sm md:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mt-4 px-4 py-3 rounded-lg
            bg-black/10 border border-black/20
            outline-none focus:border-[#FF5F2D]
            font-gilroy-regular text-sm md:text-base"
          />
          <div className="flex justify-end mt-4 text-sm">
            <button className="text-gray-600 hover:text-black font-gilroy-regular">
              Forgot Password?
            </button>
          </div>
          <button className="w-full py-3 mt-6 rounded-lg
          bg-[#FF5F2D]
          text-white font-gilroy-regular
          hover:opacity-90 transition">
            Login
          </button>
          <button className="w-full flex items-center justify-center gap-3
          bg-white 
          text-black py-3 rounded-lg
          mt-4 font-gilroy-regular">
            <FcGoogle size={20}/>
            Continue with Google
          </button>
          <p className="text-center text-gray-900 text-sm mt-6 font-gilroy-regular">
            Don't have an account?
         <Link href="/Auth/Register">
            <span className="ml-2  text-[#FF5F2D] cursor-pointer">
              Create account
            </span>
         </Link>
          </p>

        </div>

      </div>
     

    </div>
  )
}