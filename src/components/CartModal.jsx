import React from 'react'
import { mockProducts } from '../products'
import cookie from "../assets/cookie.jpg"

const CartModal = ({ id, quantity }) => {
    const item = mockProducts.find((item) => item.id === id)
    if (item === null) {
        return null
    }

    return (
        <>
            <div className='flex justify-between item-start'>
                <img src={cookie} alt="" className='w-[3rem]' />

                <div className="flex justify-between items-center gap-10 ">
                    <h2 className="text-secondary text-md">{item.name}</h2>
                    <p className="text-secondary text-md">$ {item.price * quantity}</p>
                    <p className="text-secondary text-md">{quantity}</p>
                </div>
            </div>

        </>
    )
}

export default CartModal
