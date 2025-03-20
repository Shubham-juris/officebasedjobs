import React from 'react'

import './App.css'
import Navbar from './Componets/Navbar/Navbar'

import Footer from './Componets/Footer/footer'
import AppRoutes from './router/Approute'
function App() {
  return (
    <>
      <Navbar />
    
     <AppRoutes/>
     <Footer/> 
    </>
  )
}

export default App
