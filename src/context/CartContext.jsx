import { createContext, useState, useContext } from "react";


const CartContext = createContext({
    addToCart: () => { },
    getCartQuantity: () => { },
    increaseItemQuantity: () => { },
    decreaseItemQuantity: () => { },
    removeCartItem: () => { },
    getCartTotalQuantity: () => { },

    cartItems: []
})

export const useCartContext = () => useContext(CartContext)


export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    // Get item quantity
    function getCartQuantity(id) {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    // add to cart
    function addToCart(id) {
        const quantity = getCartQuantity(id)

        if (quantity === 0) {
            setCartItems([...cartItems, { id: id, quantity: 1 }])
        }
    }

    // increase cart item quantity
    function increaseItemQuantity(id) {
        setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    }

    // decrease cart item quantity

    function decreaseItemQuantity(id) {
        setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity !== 0))
    }

    // remove item from cart

    function removeCartItem(id) {
        setCartItems(cartItems.filter((item) => item.id !== id))
    }

    function getCartTotalQuantity() {
        const totalQuantity = cartItems.reduce((accummulator, currentvalue) => accummulator + currentvalue.quantity, 0)
        return totalQuantity
    }

    return (

        <CartContext.Provider value={{
            addToCart,
            getCartQuantity,
            increaseItemQuantity,
            decreaseItemQuantity,
            removeCartItem,
            getCartTotalQuantity,
            cartItems: cartItems
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext

