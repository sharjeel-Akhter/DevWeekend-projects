import { BrowserRouter } from 'react-router'
import Card from './components/Card'
import Header from './components/Header'
function App() {


  return (
    <BrowserRouter>
    <Header/>
    <main className='mt-20'>
      <Card/>
    </main>
    </BrowserRouter>
  )
}

export default App
