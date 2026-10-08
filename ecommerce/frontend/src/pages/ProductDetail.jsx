import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import Loader from '../components/Loader'

const ProductDetail = () => {
  const params = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        console.log(params.id)
        const result = await axios.get(`http://localhost:8000/api/v1/product/${params.id}`)
        setProduct(result.data.product)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [params.id])

  if (loading) {
    return (

      <Loader />
    )
  }
  if(!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Product not found</p>
      </div>
    )
  }

  console.log(product)
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="flex justify-center items-center bg-gray-100 rounded-xl p-8">
          <img src={product.image} alt={product.name} className="w-full max-w-md h-112.5 object-contain" />
        </div>

        <div className="flex flex-col justify-center">

          <p className="text-sm text-gray-500 mb-2">{product.category}</p>

          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center gap-2 mb-5">
            <span className="text-yellow-500 text-xl">
              ★★★★★
            </span>
            <span className="text-gray-500">{product.rating} / 5</span>
          </div>

          <p className="text-3xl font-semibold mb-6">Rs. {product.price}</p>

          <p className="text-gray-600 leading-7 mb-8">{product.description}</p>

          <p className="mb-5"><span className="font-semibold">Stock:</span>{" "}{product.stock} available</p>

          <div className="flex items-center gap-4 mb-6">

            <span className="font-semibold">
              Quantity
            </span>

            <div className="flex items-center border rounded-lg">

              <button
              
                className="px-4 py-2 text-lg"
              >
                -
              </button>

              <span className="px-5 py-2 border-x">
                {product.stock}
              </span>

              <button
    
                className="px-4 py-2 text-lg"
              >
                +
              </button>

            </div>

          </div>

          {/* Add To Cart */}
          <button
            className="w-full md:w-fit px-10 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

        </div>

      </div>

      {/* Product Information */}
      <div className="mt-16 border-t pt-10">

        <h2 className="text-2xl font-bold mb-4">
          Product Information
        </h2>

        <p className="text-gray-600 leading-7">
          This product is suitable for everyday skincare routines.
          Please check the product packaging for detailed usage
          instructions and ingredients.
        </p>

      </div>

    </div>
  )
}

export default ProductDetail
