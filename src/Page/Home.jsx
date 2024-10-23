import React from 'react'
import Banner from '../Component/Banner'
import NewProduct from '../Component/NewProduct'
import Zip from '../layer/Zip'
import CustomeBuilds from '../Component/CustomeBuilds'
import Laptops from '../Component/Laptops'
import GammingMonitor from '../Component/GammingMonitor'
import INews from '../Component/INews'
import CompanyNames from '../layer/CompanyNames'
import Review from '../Component/Review'
import Desktops from '../Component/Desktops'

const Home = () => {
  return (
    <div>
       <Banner/>
       <NewProduct/>
       <Zip/>
       <CustomeBuilds/>
       <Laptops/>
       <Desktops/>
       <GammingMonitor/>
       <CompanyNames/> 
       <INews/>
       <Review/>
    </div>
  )
}

export default Home