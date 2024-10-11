import { useState } from 'react'
import { Button } from "@/components/ui/button"
 import Navbar from './components/navbar'
import AboutPage from './components/about'
import ProductsPage from './components/proudct'
import HomePage from './components/home'
 import { BrowserRouter,Route,Routes } from "react-router-dom";
 function App() {
  return (
<>
<Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />  
        <Route path="/about" element={<AboutPage/>} /> 
        <Route path="/services" element={<ProductsPage/>} /> 

      </Routes></>
  )
}

export default App
