import React from 'react'
import Container from '../layer/Container'
import Image from '../layer/Image'
import banner1 from '../../public/Asset/Banner/banner1.jpg'
import Slider from 'react-slick'
import { FaCircleChevronRight } from 'react-icons/fa6'
import { FaChevronCircleLeft } from 'react-icons/fa'


function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={ className}
      style={{ ...style, display: "block",  position:"absolute", top:"50%", right:"10px", background:"white", color:"black", fontSize:"30px",   zIndex:"100", borderRadius:"50%"}}
      onClick={onClick}
      
      ><FaCircleChevronRight /></div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={ className}
      style={{ ...style, display: "block",  position:"absolute", top:"50%", left:"30px", background:"white", color:"black", fontSize:"30px",   zIndex:"100", borderRadius:"50%" }}
      onClick={onClick}
    > <FaChevronCircleLeft /></div>
  );
}

const Banner = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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