import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cdetail from './pages/Cdetail'
import UserRegister from './pages/UserRegister'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/coin/:name' element={<Cdetail/>} />
        <Route path='/register' element={<UserRegister/>} />
        <Route path='/login' element={<Login/>} />
        

      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App