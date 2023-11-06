import React from 'react'

export default function CartItem({  image, price, title, quantity, addToCart, }) {
  return (
    <>
         <li className="border-2 border-red-300 flex flex-col gap-2 ">
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
          </li>
    </>
  )
}
