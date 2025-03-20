import React from 'react'

import './App.css'
import Navbar from './Componets/Navbar/Navbar'
import Hero from './Componets/Hero/Hero'
import Maincontent from './Componets/Maincontent/Maincontent'
import Main from './Componets/Main/Main'
import ContactUs from './Componets/ContactUs/ContactUs'
import Footer from './Componets/Footer/footer'
import Sitemaintenance from './Componets/Page/page'

function App() {
  return (
    <>
     <Navbar />
     <Hero/>
     <Maincontent/>
     <Main/>
     <ContactUs/>
     <Footer/>
     {/* <Sitemaintenance/> */}
    </>
  )
}

export default App
