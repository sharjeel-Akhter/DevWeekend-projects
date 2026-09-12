import { BrowserRouter, Routes, Route } from 'react-router'
import { Home, Register, Login, Profile, ProtectedRoute } from './components'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios.get('http://localhost:8000/users/auth/me', {withCredentials: true})
    .then((res)=>{setUser(res.data.user); console.log(res.data.user)})
    .catch((err)=> setUser(null))
    .finally(()=>setLoading(false))
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route element={<ProtectedRoute user={user} loading={loading} />}>
          <Route path="/profile" element={<Profile user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
