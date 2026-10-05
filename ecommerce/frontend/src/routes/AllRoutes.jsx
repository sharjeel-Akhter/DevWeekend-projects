import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import App from '../App'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path='/product/:id' element={<ProductDetail/>}/>
        </Route>
    </Routes>
  )
}

export default AllRoutes
