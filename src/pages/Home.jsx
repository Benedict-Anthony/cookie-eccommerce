import React from 'react'
import Products from '../components/Products'
import ShowCase from '../components/ShowCase'
import { mockProducts } from '../products'

const Home = () => {
    return (
        <>
            <ShowCase />
            <Products text={"Get the latest cookie for a bite"} products={mockProducts} number={12} />
        </>
    )
}

export default Home
