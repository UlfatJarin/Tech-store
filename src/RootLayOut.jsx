import React from 'react'
import Home from './Page/Home'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'

const RootLayOut = () => {
  return (
    <div className='h-screen '>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default RootLayOut