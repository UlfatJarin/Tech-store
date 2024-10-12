import React from 'react'
import Banner from '../Component/Banner'
import Cart from '../layer/Cart'
import NewProduct from '../Component/NewProduct'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Cart/>
       <NewProduct/>
    </div>
  )
}

export default Home