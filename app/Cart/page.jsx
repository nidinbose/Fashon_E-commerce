"use client";

import { MdDeleteSweep } from "react-icons/md";
import Link from "next/link";

export default function CartPage() {

  const cartItems = [
    {
      productId: 1,
      name: "Nike Running Shoes",
      price: 2999,
      quantity: 1,
      imageLink:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      productId: 2,
      name: "Apple AirPods Pro",
      price: 19999,
      quantity: 1,
      imageLink:
        "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434"
    },
    {
      productId: 3,
      name: "Smart Watch",
      price: 5999,
      quantity: 2,
      imageLink:
        "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    }
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-gilroy-medium mb-10 bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* CART ITEMS */}

        <div className="lg:col-span-2 space-y-6">

          {cartItems.map((item) => (

            <div
              key={item.productId}
              className="flex flex-col sm:flex-row gap-6 p-5 rounded-xl border border-gray-200 hover:shadow-lg transition duration-300"
            >

              {/* Product Image */}

              <div className="w-full sm:w-40 flex-shrink-0">
                <img
                  src={item.imageLink}
                  alt={item.name}
                  className="rounded-lg object-cover w-full h-40"
                />
              </div>

              {/* Product Info */}

              <div className="flex flex-col justify-between flex-1">

                <div>

                  <h3 className="text-lg md:text-xl font-gilroy-medium bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-600 font-gilroy-light mt-1">
                    Tax included • Free delivery
                  </p>

                </div>

                <div className="flex items-center justify-between mt-5">

                  {/* Quantity Control */}

                  <div className="flex items-center gap-3">

                    <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
                      -
                    </button>

                    <span className="font-medium text-lg font-gilroy-medium">
                      {item.quantity}
                    </span>

                    <button className="w-8 h-8 flex items-center justify-center rounded-full border hover:bg-gray-100">
                      +
                    </button>

                  </div>

                  {/* Price */}

                  <div className="flex items-center gap-4">

                    <p className="text-lg font-gilroy-medium bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">
                      ₹ {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button className="text-gray-400 hover:text-red-500 transition">
                      <MdDeleteSweep size={24} />
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* ORDER SUMMARY */}

        <div className="lg:sticky lg:top-24 h-fit">

          <div className="p-6 border rounded-xl shadow-sm">

            <h2 className="text-xl font-gilroy-medium mb-6 font-gilroy-medium bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">
              Order Summary
            </h2>

            <div className="space-y-4 text-gray-700 font-gilroy-medium">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes</span>
                <span>Included</span>
              </div>

              <div className="flex justify-between">
                <span>GST</span>
                <span>10%</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Free</span>
              </div>

            </div>

            <hr className="my-6" />

            <div className="flex justify-between text-lg font-gilroy-medium mb-6">

              <span>Total</span>

              <span className="bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] bg-clip-text text-transparent">
                ₹ {total.toFixed(2)}
              </span>

            </div>

            <Link href="/checkout">

              <button className="w-full py-3 font-gilroy-medium rounded-lg font-medium text-white bg-gradient-to-r from-[#FF902F] via-[#723CEB] to-[#4C11CE] hover:opacity-90 transition">
                Continue to Checkout
              </button>

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}