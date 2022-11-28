import React from 'react'
import { useCartContext } from '../context/CartContext'
import { mockProducts } from '../products'
import cookie from "../assets/cookie.jpg"

const CheckOutItems = ({ id, quantity }) => {
    const item = mockProducts.find((item) => item.id === id)
    if (item === null) return null
    return (
        <div className="flex flex-col justify-between w-full items-center md:flex-row">
            <img src={cookie} alt="" className='w-[5rem]' />
            <div className="flex justify-between items-center gap-10 ">
                <h2 className="text-secondary text-md">{item.name}</h2>
                <p className="text-secondary text-md">${item.price * quantity}</p>
                <p className="text-secondary text-md">{quantity}</p>
            </div>
        </div>
    )
}

const CheckOut = () => {
    const { cartItems } = useCartContext()

    return (
        <section className="ptop w-[96%] mx-auto pt-4 px-3 py-4 md:w-[30rem] bg-gray-300 ">
            <div className="flex flex-col justify-between mt-5 items-start space-y-6">
                {cartItems.length > 0 ? cartItems.map((item) => (
                    <CheckOutItems id={item.id} quantity={item.quantity} key={item.id} />
                )) : <p>You have Items in cart!</p>
                }

            </div>

        </section>
    )
}

export default CheckOut
