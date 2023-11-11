// Products.jsx
import { useCart } from '../hooks/useCart.js';
import corazon from '../assets/corazon.svg';
import ButtonOne from './atoms/ButtonOne.jsx';
import ButtonTwo from './atoms/ButtonTwo.jsx';

export default function Products({ products, onImageClick }) {
  const { addToCart, cart, removerFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  }

  return (
    <>
      <main className='lg:pl-[250px] p-1 pt-[90px] lg:pt-[95px] bg-gray-100'>
        <ul className='mt-6 grid grid-cols-1 gap-x-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => {
            const isProductInCart = checkProductInCart(product);

            return (
              <li key={product.id} className='flex px-4 overflow-hidden bg-white rounded-lg flex-col group relative'>
                <div className='w-full h-80 mx-auto flex items-center justify-center'>
                  <img
                    onClick={() => onImageClick(product.image)} // Cambia onImageClick a onClick
                    className='rounded-lg max-w-full max-h-full cursor-pointer'
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div>
                  <strong className='line-clamp-1'>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <p className='line-clamp-2'>{product.description}</p>
                </div>
                <div className='flex flex-row items-center justify-between'>
                  <button className='text-sm inline-block p-1 bg-[#D61E1E] text-white'>
                    Descuento <span className='font-bold'>$MXN400.99</span>
                  </button>
                  <img src={corazon} alt='' />
                </div>
                <div>
                  <p>{product.color}</p>
                </div>
                <div>
                  <button
                    className='h-10 rounded-lg items-center text-black justify-center'
                    onClick={() => (isProductInCart ? removerFromCart(product) : addToCart(product))}
                  >
                    {
                      isProductInCart
                      ? <ButtonTwo prices='Eliminar' /> : <ButtonOne prices={product.price}
                    />
                  }   
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
