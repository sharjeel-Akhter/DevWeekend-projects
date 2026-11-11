
import { useState } from "react";
import img1 from "../assets/1001.png";
import img2 from "../assets/1002.png";
import img3 from "../assets/1003.png";
import img4 from "../assets/1004.png";
import img5 from "../assets/1005.png";
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: "Headphone z ", price: 250, image: img1 },
  { id: 2, name: "Apple Headphones", price: 100, image: img2 },
  { id: 3, name: "HP Ulra Headphones", price: 80, image: img3 },
  { id: 4, name: "Headphone Audionic", price: 700, image: img4 },
  { id: 15, name: "Asus Array ", price: 800, image: img5 },
  { id: 6, name: "Notes B2 Mp3", price: 900, image: img1 },
];

const Day12CartContext = () => {
  // const [cartOpen, setCartOpen] = useState(false)
  return (
    <>
    {/* <button  className='mt-1 mb-0 cursor-pointer group hover:text-gray-400'>See Cart <span className='inline-block group-hover:translate-x-1 duration-200 transition-transformtransform'>→</span></button> */}
      <div className="grid grid-cols-2 gap-5 p-4">
        {
          products.map((product) => <ProductCard product={product} key={product.id} />)
        }
      </div>


    </>
  )
}

export default Day12CartContext
