
import { BrowserRouter} from 'react-router'
import  AllRoutes  from './routes/Allroutes'
import { CartProvider } from './contexts/useCartContext'

function App() {
  

  return (
    <BrowserRouter>
    <CartProvider>
      <AllRoutes/>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
