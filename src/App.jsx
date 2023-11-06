import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import Header from './components/Header';
import { Footer } from './components/Footer';
import { IS_DELEVOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js';
import Cart from './components/Cart.jsx';
import { CartProvider } from './context/cart.jsx';


function App() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={filteredProducts} />
      {/* { IS_DELEVOPMENT && <Footer/> } */}
    </CartProvider> 
  )
}

export default App