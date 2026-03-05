'use client'

import { FcGoogle } from "react-icons/fc"
import { FaArrowRight } from "react-icons/fa6";

export default function Login(){
  return (
    <div className="relative min-h-screen grid xl:grid-cols-2 px-6 md:px-10 lg:px-16 py-10 bg-white">
      <div className="flex flex-col justify-between">

        <div>

          <h1 className="text-black font-gilroy-medium
          text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.1]">
            Unlock seamless
          </h1>

          <h2 className="font-gilroy-medium
          text-4xl sm:text-5xl md:text-6xl lg:text-[80px] leading-[1.1]
          bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB]
          bg-clip-text text-transparent">
            integration today
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
            outline-none focus:border-purple-400
            font-gilroy-regular text-sm md:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mt-4 px-4 py-3 rounded-lg
            bg-black/10 border border-black/20
            outline-none focus:border-purple-400
            font-gilroy-regular text-sm md:text-base"
          />
          <div className="flex justify-end mt-4 text-sm">
            <button className="text-gray-600 hover:text-black font-gilroy-regular">
              Forgot Password?
            </button>
          </div>
          <button className="w-full py-3 mt-6 rounded-lg
          bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB]
          text-white font-gilroy-regular
          hover:opacity-90 transition">
            Login
          </button>
          <button className="w-full flex items-center justify-center gap-3
          bg-white border border-black/10
          text-black py-3 rounded-lg
          mt-4 font-gilroy-regular">
            <FcGoogle size={20}/>
            Continue with Google
          </button>
          <p className="text-center text-gray-900 text-sm mt-6 font-gilroy-regular">
            Don't have an account?
            <span className="ml-2 bg-gradient-to-r from-[#FF902F] via-[#4C11CE] to-[#723CEB]
            bg-clip-text text-transparent cursor-pointer">
              Create account
            </span>
          </p>

        </div>

      </div>
      <div className="flex absolute bottom-0 right-10
      cursor-pointer hover:scale-110 transition">
        <FaArrowRight className="w-20 h-20 text-black"/>
      </div>

    </div>
  )
}