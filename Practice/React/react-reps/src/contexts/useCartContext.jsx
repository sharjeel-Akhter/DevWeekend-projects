import { createContext, useContext, useState} from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const CartContext = createContext();

export default function CartProvider( {children} ){
    const [cartItems, setCartItems] = useLocalStorage("cart", [])
    
    const addToCart = (product) => {
        setCartItems((prev) => [...prev, product])
    }

    const delFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id))
    }

    return(
        <CartContext.Provider value={ {cartItems, addToCart, delFromCart} }>
            {children}
        </CartContext.Provider>
    )
}


export function useCartContext(){
    return useContext(CartContext)
}