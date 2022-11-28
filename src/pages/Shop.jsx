import React from 'react'
import Products from '../components/Products';
import { mockProducts } from '../products';

const Shop = () => {
    return (
        <div className="shop">
            <Products text={"Take a tour of bites"} products={mockProducts} number={mockProducts.length} />
        </div>
    )
}

export default Shop
