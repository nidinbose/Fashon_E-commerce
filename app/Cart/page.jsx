import React from 'react'

const page = () => {
  return (
    <div>

    <div className="py-1 px-4 sm:px-10">

      {/* Header */}
      <div className="flex gap-2 border-b border-gray-300 pb-4">
        <h2 className="text-xl font-semibold text-slate-900 flex-1">
          Shopping Cart
        </h2>
        <h4 className="text-base text-slate-900 font-medium">4 Items</h4>
      </div>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2 bg-white divide-y divide-gray-300">

          {/* Item */}
          <div className="flex sm:items-center max-sm:flex-col gap-6 py-6">
            <div className="w-32 shrink-0">
              <img
                src="https://readymadeui.com/images/black-sweaters-1.webp"
                className="w-full aspect-square object-contain"
                alt="product"
              />
            </div>

            <div className="flex items-start gap-4 w-full">

              <div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Sweater
                </h3>

                <div className="space-y-2">
                  <h6 className="text-sm text-slate-900">
                    Size: <span className="ml-2 font-medium">MD</span>
                  </h6>
                  <h6 className="text-sm text-slate-900">
                    Color: <span className="ml-2 font-medium">Black</span>
                  </h6>
                </div>

                <div className="mt-4 flex flex-wrap gap-4">

                  <button className="font-medium text-red-500 text-sm flex items-center gap-2 cursor-pointer">
                    Remove
                  </button>

                  <button className="font-medium text-pink-500 text-sm flex items-center gap-2 cursor-pointer">
                    Move to wish list
                  </button>

                </div>
              </div>

              {/* Quantity + Price */}
              <div className="ml-auto text-right">

                <div className="flex gap-2 items-center border border-gray-300 px-3 py-2 w-max rounded-full">

                  <button className="cursor-pointer">-</button>

                  <span className="text-slate-900 text-sm font-semibold px-2">
                    1
                  </span>

                  <button className="cursor-pointer">+</button>

                </div>

                <div className="mt-6">
                  <h4 className="text-base font-semibold text-slate-900">
                    ₹18.50
                  </h4>

                  <h4 className="text-base text-slate-500 mt-1">
                    <strike className="font-medium">₹22.50</strike>
                  </h4>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Order Summary */}
        <div className="border-l border-gray-300 p-6 lg:sticky lg:top-0 h-full">

          <h3 className="text-lg font-semibold text-slate-900 border-b border-gray-300 pb-4">
            Order Summary
          </h3>

          <ul className="text-slate-500 font-medium divide-y divide-gray-300 mt-4">

            <li className="flex text-sm py-3">
              Subtotal
              <span className="ml-auto font-semibold text-slate-900">
                ₹56.00
              </span>
            </li>

            <li className="flex text-sm py-3">
              Shipping
              <span className="ml-auto font-semibold text-slate-900">
                ₹4.00
              </span>
            </li>

            <li className="flex text-sm py-3">
              Tax
              <span className="ml-auto font-semibold text-slate-900">
                ₹4.00
              </span>
            </li>

            <li className="flex text-sm py-3 font-semibold text-slate-900">
              Total
              <span className="ml-auto">₹64.00</span>
            </li>

          </ul>

          <button className="mt-4 text-sm font-medium px-4 py-2.5 w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white">
            Proceed to Checkout
          </button>

          {/* Promo Code */}
          <div className="mt-8">

            <h4 className="text-base font-semibold text-slate-900 mb-3">
              Apply promo code
            </h4>

            <div className="flex border border-blue-600 overflow-hidden rounded-md">

              <input
                type="text"
                placeholder="Promo code"
                className="w-full outline-none bg-white text-slate-900 text-sm px-4 py-2.5"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-5 text-sm font-medium text-white">
                Apply
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  

    </div>
  )
}

export default page