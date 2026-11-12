import { useState } from "react";
import { useCartContext } from "../contexts/useCartContext";

const ProductCard = ({product}) => {
    const {cartItems, addToCart, delFromCart} = useCartContext()
    const {image, name, price, id} = product;

    const isAdded = cartItems.some((item) => item.id === id)
    return (
        <div className="w-96 bg-white shadow-md rounded-lg p-4 mr-4 flex flex-col justify-between">
            <img src={image} alt={name} />
            <p className="text-lg text-center">{name}</p>
            <div className="text-center text-xl">
                <p className="text-gray-700">${price}</p>
                {
                    isAdded ? <button onClick={() => delFromCart(product.id)} className={`px-5 py-3 rounded-lg mt-2 bg-red-800 cursor-pointer hover:bg-red-900 text-white duration-200`}>Remove From Cart</button>
                    :
                    <button onClick={() => addToCart(product)}  className="px-5 py-3  rounded-lg mt-2 bg-blue-600 cursor-pointer text-white hover:bg-blue-500 duration-200">Add To Cart</button>
                }
            </div>

        </div>
    )
}


export default ProductCard