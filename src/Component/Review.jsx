import React from 'react'
import Image from '../layer/Image'
import Button from '../layer/Button'
import semicolon from '../../public/Asset/semicolon.png'
import Container from '../layer/Container'
import Slider from 'react-slick'

const Review = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container className=' !max-w-[1160px] px-28 py-12 bg-[#F5F7FF]'>
      <div className='max-w-[922px] '>
        <div className='flex justify-evenly gap-7 '>
          <Image className='w-12' src={semicolon} />
          
          <p className='p3 max-w-[850px] !text-blackc !text-[18px] ' >My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
        </div>
        <Slider {...settings}>
            <div>
              <h3 className='p3 max-w-[850px] !text-blackc !text-[18px] '>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</h3>
            </div>
            <div>
              <h3 className='p3 max-w-[850px] !text-blackc !text-[18px] '>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</h3>
            </div>
            <div>
              <h3 className='p3 max-w-[850px] !text-blackc !text-[18px] '>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</h3>
            </div>
            
          </Slider>
        <p className='p3 !text-blackc flex justify-end'>- Tama Brown</p>
        <Button className='mt-16' btntext='Leave Us A Review' />

      </div>
    </Container>
  )
}

export default Review