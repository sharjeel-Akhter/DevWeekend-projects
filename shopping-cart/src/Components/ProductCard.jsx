import useCartContext from '../contexts/useCartContext';
import { useState } from 'react';

export const ProductCard = ({product}) => {
  const {name, price, image, id} = product;
  
  const {cartItems, AddToCart} = useCartContext();

  const isAdded = cartItems.some((item) => item.id == product.id);



  return (
    
    <div className="w-96 bg-white shadow-md rounded-lg p-4 m-4 flex flex-col justify-between">
      <img src={image} alt={name} />
      <p className="text-lg text-center">{name}</p>
      <div className="text-center text-xl">
        <p className="text-gray-700">${price}</p>
     {
      isAdded ? <button className='px-5 py-2  rounded-lg mt-2 bg-red-800 text-white hover:bg-red-900'>Added to Cart</button>
      :
      <button onClick={()=>  AddToCart(product)} className="px-5 py-3  rounded-lg mt-2 bg-blue-600 text-white hover:bg-blue-500 duration-200">Add To Cart</button>
     }
     
      </div>
      
    </div>
  

    
  )
}