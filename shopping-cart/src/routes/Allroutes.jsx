import { Routes, Route } from "react-router"
import Home from "../Pages/Home"
import Cart from "../Pages/Cart"
import RootLayout from "../layout/Rootlayout"
import PageNotFound from "../Pages/PageNotFound"

 const AllRoutes = () => {
    return (
        
        <Routes>
            <Route path="/" element= {<RootLayout/>}>
                <Route index element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<PageNotFound/>} />
            </Route>
          
        </Routes>
    )
}

export default AllRoutes