import { BrowserRouter, Routes, Route } from 'react-router'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

function App() {




  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1 className='text-red-700'>Home</h1>}/>
      <Route path='/create' element={<CreatePost/>}/>
      <Route path='/feed' element= {<Feed/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
