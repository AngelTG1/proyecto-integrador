import Cart from './components/Cart.jsx';
import Home from './pages/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/cart.jsx';


function App() {


  return (

    <>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/carrito' element={<Cart/>}/>
        </Routes>
      </CartProvider>
      
    </>
  )
}

export default App