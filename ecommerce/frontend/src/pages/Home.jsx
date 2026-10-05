import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Loader from '../components/Loader'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        await delay(2000)
        const result = await axios.get('http://localhost:8000/api/v1/product')
        setProducts(result.data.products)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return (

      <Loader />
    )
  }
  return (
    <div className="mt-10 flex-1 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </div>
  )
}

export default Home
