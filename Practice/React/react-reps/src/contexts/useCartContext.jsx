import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export default function CartProvider( {Children} ){
    const [cartItems, setCartItems] = useState([])
    
    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product])
    }

    const delFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id === id))
    }

    return(
        <CartContext.Provider value={ {cartItems, addToCart, delFromCart} }>
            {Children}
        </CartContext.Provider>
    )
}


export function useCartContext(){
    return useContext(CartContext)
}