import React from 'react'
import { products as initialProducts } from '../mocks/products.json'
import { CartProvider } from '../context/cart'
import { useFilters } from '../hooks/useFilters'
// import Cart from '../components/Cart'
import Header from '../components/Header'
import Products from '../components/Products'

function Home() {
    const { filterProducts } = useFilters()

    const filteredProducts = filterProducts(initialProducts)
  return (
    <>
        <Header />
        <Products products={filteredProducts} />
    </>
  )
}

export default Home