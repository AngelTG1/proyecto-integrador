import { createContext, useState } from "react";
// import Products from "../components/Products";

export const CartContext = createContext()



export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        // checar si ya hay algo en carrito
        const productInCartIndex = cart.findIndex(item => item.id  === product.id)
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        
        // producto no esta en el carrito 
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removerFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
        

    }

    const decreaseQuantity = (product) => {
        const productInCartIndex = cart.findIndex((item) => item.id === product.id);
        if (productInCartIndex >= 0) {
          const newCart = [...cart];
          if (newCart[productInCartIndex].quantity > 1) {
            newCart[productInCartIndex].quantity -= 1;
          }
          setCart(newCart);
        }
      };

    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removerFromCart,
            decreaseQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}