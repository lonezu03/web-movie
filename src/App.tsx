import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import From from './component/from.tsx'
import TrangChu from './component/trangchinh.tsx'
import Phim from'./component/phim.tsx'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './component/home.tsx' 
import Xemphim from './component/xemphim.tsx'

function App() {


 return <div>

    <Routes>
    <Route path='/xemphim' element={<Xemphim/>}/>

    <Route path='/trangchu' element={<TrangChu/>}/>
    <Route path='/dk' element={<From/>}/>
    <Route path='/' element={<Home/>}/>
    
</Routes> 

 </div>
}

export default App
