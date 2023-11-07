import { useCart } from '../hooks/useCart.js'
import corazon from '../assets/corazon.svg'
import ButtonOne from './ButtonOne.jsx'
import ButtonTwo from './ButtonTwo.jsx'

export default function Products ({ products }) {
    const { addToCart, cart, removerFromCart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return (
        <>
            <main className=' lg:pl-[250px] p-8 pt-72 lg:pt-20'>
                <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                    {products.map(product => { 
                        const isProductInCart = checkProductInCart(product)
                        
                        return (
                            <li key={product.id} className='flex flex-col gap-1'>
                                <div className=' flex items-center justify-center h-56'>
                                    <img className=' h-full object-cover' src={product.image} alt={product.title} />
                                </div>
                                <div>
                                    <strong className='line-clamp-1'>{product.title}</strong> - ${product.price}
                                    
                                </div>
                                <div>
                                    <p className='line-clamp-2'>{product.description}</p>
                                </div>
                                <div className='flex flex-row'>
                                    <button className=' text-sm inline-block p-1 bg-[#D61E1E] text-white'>Descuento <span className='font-bold'>$MXN400.99</span></button>
                                    <img src={corazon} alt="" />
                                </div>
                                <div>
                                    <button className='  h-10 rounded-lg  items-center text-black justify-center' onClick={() => isProductInCart ? removerFromCart(product) : addToCart(product)}>
                                        {
                                            isProductInCart
                                            ? <ButtonTwo prices="Eliminar"/> : <ButtonOne prices={product.price}/>
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