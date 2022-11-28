import React from 'react'
import { Button } from './Button';
import Card from './Card';
import productImg from "../assets/cookie.jpg";
import { useCartContext } from '../context/CartContext';


const Product = ({ product }) => {
    const { getCartQuantity, addToCart, increaseItemQuantity, decreaseItemQuantity, removeCartItem } = useCartContext()

    const quantity = getCartQuantity(product.id)

    return (
        <Card>
            <img src={productImg} alt="" className='w-full ' />
            <div className='flex justify-between items-center w-full mt-2'>
                <h2 className='text-xl'>{product.name}</h2>
                <p className='text-md text-orange'>{product.price}</p>
            </div>
            {quantity !== 0 ? (
                <div className="flex flex-col justify-between">
                    <div className=" flex flex-row justify-between items-center">
                        <Button text={"+"} handleClick={(id) => increaseItemQuantity(product.id)} />
                        <p className="text-2xl">{quantity}</p>
                        <Button text={"-"} handleClick={(id) => decreaseItemQuantity(product.id)} />
                    </div>
                    <Button text={"Remove item"} handleClick={(id) => removeCartItem(product.id)} />

                </div>
            ) : <Button text={"shop now"} id={product.id} handleClick={(id) => addToCart(product.id)} />
            }
        </Card>

    )
}

export default Product
