
import React from "react";
import { FiShoppingCart, FiStar, FiHeart } from "react-icons/fi";
import image from "../assets/img.webp";
import { Link } from "react-router";

const Card = ({ product }) => {
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg">

      <div className="relative h-64 overflow-hidden bg-gray-50 p-4">
        <Link to={`/product/${product._id}` } >
          <img className=" rounded-xl h-full w-full object-contain transition duration-300 group-hover:scale-105" src={product.images[0].url} alt="Apple Watch Series 7" />
        </Link>
        <span className="absolute left-2 top-1 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">New</span>

        <button aria-label="Add to wishlist" className="absolute right-2 top-1 rounded-full bg-blue-500 text-white p-2 shadow-sm transition hover:text-red-500"><FiHeart size={18} /></button>
      </div>

      {/* Product details */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-1 text-sm">
          <FiStar className="fill-amber-400 text-amber-400" />
          <span className="font-semibold text-gray-800">{product.ratings}</span>
          <span className="text-gray-400">reviews({product.numOfReviews})</span>
        </div>

        <h3 className="mb-2 line-clamp-2 min-h-12 text-base font-semibold text-gray-900">
          {product.description}
        </h3>

        <div className="mb-4 flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          <span className="text-sm text-gray-400 line-through"> ${product.price + 1000} </span>
        </div>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
          <FiShoppingCart size={18} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;