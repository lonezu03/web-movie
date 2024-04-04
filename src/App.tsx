import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import From from './component/from.tsx'
import TrangChu from './component/trangchinh.tsx'
import Phim from'./component/phim.tsx'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './component/home.tsx' 

function App() {


 return <div>
<Link to="/dk">Đăng nhập</Link>
    <Routes>
    <Route path='/trangchu' element={<TrangChu/>}/>
    <Route path='/dk' element={<From/>}/>
    <Route path='/' element={<Home/>}/>
    
</Routes> 

 </div>
}

export default App
