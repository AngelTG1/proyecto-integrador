import React from "react";

export default function CartItem({ image, price, title, quantity, addToCart }) {
  return (
    <>
      {/* <li className="border-2 border-red-300 flex flex-col gap-2 ">
            <img
              src={image}
              alt={title}
            />
            <div>
              <strong className="">{title}</strong> - <span>${price}</span>
            </div>

            <footer className="flex flex-row items-center gap-3">
              <small >qty: {quantity}</small>
              <button className="bg-blue-200 w-8 h-8 rounded-full flex items-center justify-center text-2xl" onClick={addToCart}>+</button>
            </footer>
          </li> */}

      <div class="justify-between  mb-6 rounded-lg  p-7  sm:flex sm:justify-start">
        <img className="  h-64 border-2" src={image} alt={title} />

        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-lg font-bold text-gray-900">{title}</h2>
            <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex items-center border-gray-100">
            <footer className="flex flex-row items-center gap-3">
          <small>qty: {quantity}</small>
          <button
            className="bg-blue-200 w-8 h-8 rounded-full flex items-center justify-center text-2xl"
            onClick={addToCart}
          >
            +
          </button>
        </footer>
            </div>
            <div class="flex items-center space-x-4">
              <p class="text-sm">{price}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              {/* <small>qty: {quantity}</small> */}
            </div>
          </div>
        </div>

      </div>
      <hr class="my-4 w-full" />
    </>
  );
}
