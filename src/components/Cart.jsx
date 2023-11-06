import React, { useId } from "react";
import { ClearCartIcon, CartIcon, RemoveFromCartIcon } from "./Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import { useState } from "react";
import CartItem from "./CartItem.jsx";

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
  const [active, setActive] = useState(false)
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  const toggleMenu = () => {
    setActive(!active)
  }

  return (
    <>
      <label onClick={toggleMenu} className="flex bg-blue-500 w-10 h-10 items-center justify-center text-white rounded-full" htmlFor="cart">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className={`fixed gap-2 border-2 border-red-500 flex flex-col bg-blue-400 overflow-y-scroll top-0 h-screen ${active ? "right-0" : "-right-full"} w-80 transition-all duration-200 ease-in-out rounded-lg overflow-hidden`}>
        <div>
          <ul>
          {cart.map(product => ( 
            <CartItem key={product.id} addToCart={() => addToCart(product)} {...product} />
          ))}
        </ul>
        
        <button className="fixed top-0 bg-blue-200 flex w-24 h-10 rounded-lg items-center justify-center" onClick={clearCart}>
          <ClearCartIcon />
        </button>
        </div>
      </aside>
    </>
  );
}

export default Cart;
