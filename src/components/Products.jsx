import React from 'react'
import Product from './Product';
const Products = ({ text, products, number }) => {
    return (

        <section className="container mx-auto px-3">
            <h2 className="text-center text-2xl text-secondary capitalize">{text}</h2>
            <main className='flex justify-center items-center flex-col md:flex-row flex-wrap mt-5 space-y-4'>
                {products.slice(0, number).map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </main>
        </section>

    )
}

export default Products