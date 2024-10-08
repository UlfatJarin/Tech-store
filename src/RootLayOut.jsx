import React from 'react'
import Home from './Page/Home'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <div className='h-screen '>
        
        <Outlet/>
    </div>
  )
}

export default RootLayOut