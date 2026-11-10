import { createContext, useState } from "react";


const CartContext = createContext();

export default function CartProvider( {Children} ){
    const [cartItems, setCartItems] = useState([])
}