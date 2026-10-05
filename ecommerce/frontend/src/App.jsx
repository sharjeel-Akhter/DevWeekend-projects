import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'


function App() {


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Outlet/>
      </main>
      <Footer />
    </div>

  )
}

export default App
