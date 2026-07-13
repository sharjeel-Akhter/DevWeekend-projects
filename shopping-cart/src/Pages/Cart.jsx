import { CartCard } from "../Components/CartCard";
import useCartContext from "../contexts/useCartContext";

function Cart() {
    const { cartItems, productCount } = useCartContext();

    const total = cartItems.reduce((sum, item) => sum + item.price , 0);
    return (

        <div className="py-4 px-2 flex flex-col items-center justify-center">
            <h3> Products: {productCount}</h3>
            <h2 className="text-2xl font-bold mb-4">Total Price : {total}</h2>
            {cartItems.map((product, index) =>
                <CartCard key={index} product={product} />
            )} 
        </div>
    );
}

export default Cart;