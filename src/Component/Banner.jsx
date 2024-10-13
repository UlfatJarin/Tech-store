import React from 'react'
import Container from '../layer/Container'
import Image from '../layer/Image'
import banner1 from '../../public/Asset/Banner/banner1.jpg'
import Slider from 'react-slick'

const Banner = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <div>


      <Slider {...settings}>
        <div>
          <Image className='w-full' to='/' src={banner1} />
        </div>
        <div>
          <Image className='w-full' to='/' src={banner1} />
        </div>
        <div>
          <Image className='w-full' to='/' src={banner1} />
        </div>
      </Slider>

    </div>

  )
}

export default Banner