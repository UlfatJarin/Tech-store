import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Component from './Component/Component'

const RootLayOut = () => {
  return (
    <div className='h-screen flex flex-col justify-betweeny-'>
        <Header/>
        <Outlet/>
        <Component/>
        <Footer/> 
    </div>
  )
}

export default RootLayOut