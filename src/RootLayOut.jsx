import React from 'react'
import Home from './Page/Home'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'

const RootLayOut = () => {
  return (
    <div className='h-screen flex flex-col justify-betweeny-'>
        <Header/>
        <Outlet/>
        <Footer/> 
    </div>
  )
}

export default RootLayOut