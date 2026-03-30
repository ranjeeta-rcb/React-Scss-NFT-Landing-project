import React from 'react'
import Card from './Components/Card'
import ScrollToTop from './Components/ScrollToTop'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Free from './Components/Free'
import Clients from './Components/Clients'
import SuperRare from './Components/SuperRare'
import Release from './Components/Release'
import Like from './Components/Like'
import Signup from './Components/Signup'
import Footer from './Components/Footer'

import "./scss/index.scss";

export default function App() {
  return (
    <div className='app-container'> 

    <Card/>
    <ScrollToTop/>
    <Navbar/>
    <Home/>
    <Free/>
    <Clients/>
    <SuperRare/>
    <Release/>
    <Like/>
    <Signup/>
    <Footer/>
    </div>
  )
}
