import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Route, Routes} from "react-router"
import About from './About.jsx'
import Contact from './Contact.jsx'
import DashboardLayout from '../src/components/Dashboard/DashboardLayout.jsx';
import UserProfile from '../src/components/Dashboard/UserProfile.jsx';
import Settings from '../src/components/Dashboard/Settings.jsx';






createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path='contact' element={<Contact />} />

      <Route path="/dashboard" element={<DashboardLayout />}> 
        <Route path="userprofile" element={<UserProfile />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>

  </BrowserRouter >
)
