import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
   const [cartItems, setCartItems] = useState([])
   const [productCount, setProductCount] = useState(0)
   const [Productprice, setProductPrice] = useState(0);

    let AddToCart = (item) => {}
    let RemoveItem = (id) => {}

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, productCount, setProductCount, AddToCart, RemoveItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
} 