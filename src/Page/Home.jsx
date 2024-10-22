import React from 'react'
import Banner from '../Component/Banner'
import NewProduct from '../Component/NewProduct'
import Zip from '../layer/Zip'
import CustomeBuilds from '../Component/CustomeBuilds'
import MSILaptop from '../Component/MSILaptop'
import GammingMonitor from '../Component/GammingMonitor'
import INews from '../Component/INews'
import CompanyNames from '../layer/CompanyNames'
import Review from '../Component/Review'

const Home = () => {
  return (
    <div>
       <Banner/>
       <NewProduct/>
       <Zip/>
       <CustomeBuilds/>
       <MSILaptop/>
       <GammingMonitor/>
       <CompanyNames/> 
       <INews/>
       <Review/>
    </div>
  )
}

export default Home