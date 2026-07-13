import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
   const [cartItems, setCartItems] = useState([])
   const [productCount, setProductCount] = useState(0)
   const [Productprice, setProductPrice] = useState(0);
   const [isAdded, setIsAdded] = useState(false);

  const AddToCart = (item) => {
    setIsAdded(true)
    const cartEntry = { ...item, cartItemId: Date.now() };
    setCartItems((prev) => [...prev, cartEntry]);
    setProductCount((prevCount) => prevCount + 1);
  }
    const RemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.cartItemId !== id);
    setCartItems(updatedCartItems);
    setProductCount((prevCount) => prevCount - 1);
  };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, productCount, setProductCount, AddToCart, RemoveItem, isAdded, setIsAdded }}>
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