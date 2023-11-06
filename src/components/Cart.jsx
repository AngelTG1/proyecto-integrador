import React, { useId } from "react";
import { ClearCartIcon, CartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { useState } from "react";
import CartItem from "./CartItem.jsx";
import { Link } from "react-router-dom";

// function CartItem ({  image, price, title, quantity, addToCart, }) {
//     return (
//         <li className="border-2 border-red-300 flex flex-col gap-2 ">
//             <img
//               src={image}
//               alt={title}
//             />
//             <div>
//               <strong className="">{title}</strong> - <span>${price}</span>
//             </div>

//             <footer className="flex flex-row items-center gap-3">
//               <small >qty: {quantity}</small>
//               <button className="bg-blue-200 w-8 h-8 rounded-full flex items-center justify-center text-2xl" onClick={addToCart}>+</button>
//             </footer>
//           </li>
//     )
// }

export function Cart() {
  const [active, setActive] = useState(false);
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <>
      <Link to="/">
        <label
          onClick={toggleMenu}
          className="flex bg-blue-500 w-10 h-10 items-center justify-center text-white rounded-full"
          htmlFor="cart"
        >
          Home
        </label>
      </Link>

      <input type="checkbox" id={cartCheckboxId} hidden />
      <div>
        
      </div>

      <aside className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div>
          <ul className="rounded-lg ">
          <button className="flex gap-2 bg-blue-200 p-3 rounded-lg text-blue-600 font-semibold" onClick={clearCart}>
          <ClearCartIcon />limpiar carrito
        </button>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))}
          </ul>
        </div>

        <div class="mt-6 h-full rounded-lg bg-[#F9FAFB] p-6  md:mt-0 md:w-96">
          <div class="mb-2 flex justify-between">
            <p class="text-gray-700">Subtotal</p>
            <p class="text-gray-700">$129.99</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-gray-700">Shipping</p>
            <p class="text-gray-700">$4.99</p>
          </div>
          <hr class="my-4" />
          <div class="flex justify-between">
            <p class="text-lg font-bold">Total</p>
            <div class="">
              <p class="mb-1 text-lg font-bold">$134.98 MXM</p>
            </div>
          </div>
          <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-white hover:bg-blue-600">
            Check out
          </button>
        </div>
      </aside>
    </>
  );
}

export default Cart;
