import {BrowserRouter, Routes, Route} from 'react-router'
import {Home, Register, Profile} from './components'
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Register/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
