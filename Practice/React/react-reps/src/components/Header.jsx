import { useCartContext } from "../contexts/useCartContext";

const Header = ({setIsOpen}) => {
      const { cartItems } = useCartContext()
    
      const productCount = cartItems.length;
  return (
        <header>
          <p>React-Reps</p>
          <div onClick={() => setIsOpen(true)}>Open Modal</div>
          <h3>Cart-Items-Count: {productCount}</h3>
        </header>
  )
}

export default Header
