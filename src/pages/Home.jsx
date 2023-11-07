import React from 'react'
import { products as initialProducts } from '../mocks/products.json'
import { CartProvider } from '../context/cart'
import { useFilters } from '../hooks/useFilters'
// import Cart from '../components/Cart'
import Header from '../components/Header'
import Products from '../components/Products'
import HeaderStore from '../components/HeaderStore'

function Home() {
    const { filterProducts } = useFilters()

    const filteredProducts = filterProducts(initialProducts)
  return (
    <>  
        <HeaderStore/>
        <Header />
        <Products products={filteredProducts} />
    </>
  )
}

export default Home