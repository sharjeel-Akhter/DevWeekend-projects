import { BrowserRouter } from 'react-router'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {


  return (
    <BrowserRouter>
      <Header />
      <div className="w-full p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
