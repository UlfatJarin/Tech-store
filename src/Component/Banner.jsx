import React from 'react'
import Container from '../layer/Container'
import Image from '../layer/Image'
import banner1 from '../../public/Asset/Banner/banner1.jpg'
import Slider from 'react-slick'

const Banner = () => {

    return (
       
  <div>
    <Image className='w-full' to='/' src={banner1} />
  </div>
      
    )
}

export default Banner