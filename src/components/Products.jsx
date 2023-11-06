import { useCart } from '../hooks/useCart.js'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'

export default function Products ({ products }) {
    const { addToCart, cart, removerFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <>
            <main className='products'>
                <ul>
                    {products.slice(0, 10).map(product => { 
                        const isProductInCart = checkProductInCart(product)
                        
                        return (
                            <li key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                    {/* <p>{product.discountPercentage}</p> */}
                                </div>
                                <div>
                                    <button className='bg-blue-200 flex w-24 h-10 rounded-lg items-center text-black justify-center' onClick={() => isProductInCart ? removerFromCart(product) : addToCart(product)}>
                                        {
                                            isProductInCart
                                            ? <RemoveFromCartIcon/> : <AddToCartIcon/>
                                        }   
                                    </button>
                                </div>
                            </li>
                        )    
                    })}
                </ul>
            </main>
        </>
    )
}