import React, { useId } from "react";
import { ClearCartIcon, CartIcon, RemoveFromCartIcon } from "./atoms/Icons.jsx";
import { useCart } from "../hooks/useCart.js";
import CartItem from "./CartItem.jsx";
import { Link } from "react-router-dom";
import SeeUser from "./SeeUser.jsx";
import ropa from '../assets/ropa.svg'

export function Cart() {
  // const [active, setActive] = useState(false);
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart,  removerFromCart, decreaseQuantity } = useCart();

  const subtotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  
  const shipping = 4.99; // Puedes ajustar esto según tus necesidades
  const total = subtotal + shipping;

  // const toggleMenu = () => {
  //   setActive(!active);
  // };

  return (
    <>


      <input type="checkbox" id={cartCheckboxId} hidden />
      <Link to="/home" >
        <div className=" border-2 border-[#000] w-[47px] h-[47px] rounded-lg flex justify-center items-center">
          <img src={ropa} alt="" />
        </div>
      </Link>

      <aside className="mx-auto mt-24 max-w-5xl justify-center px-1 md:flex md:space-x-6 xl:px-0">
        <div>
          <ul className="rounded-lg ">
            
            
            <button
              className="flex gap-2 bg-blue-200 p-3 rounded-lg text-blue-600 font-semibold"
              onClick={clearCart}
            >
              <ClearCartIcon />
              limpiar carrito
            </button>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                removerFromCart={() => removerFromCart(product)}
                decreaseQuantity={()=> decreaseQuantity(product)}
                {...product}
              />
            ))}
          </ul>
        </div>

        <div className="mt-6 h-full rounded-lg bg-[#F9FAFB] p-6 md:mt-0 md:w-96">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${subtotal.toFixed(2)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">${shipping.toFixed(2)}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${total.toFixed(2)} MXM</p>
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
