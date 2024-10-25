import React from 'react'
import Image from '../layer/Image'
import Button from '../layer/Button'
import semicolon from '../../public/Asset/semicolon.png'
import Container from '../layer/Container'
import Slider from 'react-slick'

const Review = () => {

  var settings = {
    dots:true,
    arrows :false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div 
        style={{
          position:"absolute",
          padding: "10px",
          bottom :"-70px",
          right:"0",

        }}
      >
        <ul className='flex gap-2.5' style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className=' bg-[#CACDD8] '
        style={{
          width: "12px",
          height:"12px",
          color: "blue",
          borderRadius: "100%",  
        }}
      >
        { }
      </div>
    )
    
  };

  return (
    <Container className=' !max-w-[1160px] px-28 py-12 bg-[#F5F7FF]'>
      <div>
      <div className='max-w-[922px] flex  gap-7 relative'>        
          <Image className='w-12' src={semicolon} />              
         <Slider className=' max-w-[850px]' {...settings}>
            <div>
              <h3 className='p3 max-w-[850px] !text-blackc !text-[18px] '>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</h3>
              <p className='p3 !text-blackc flex justify-end'>- Tama Brown</p>
            </div>
            <div>
              <h3 className='p3 max-w-[850px] !text-blackc !text-[18px] '>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</h3>
              <p className='p3 !text-blackc flex justify-end'>-  Brown Tama</p>
            </div>
            <div>
              <h3 className='p3 max-w-[850px] !text-blackc !text-[18px] '>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</h3>
              <p className='p3 !text-blackc flex justify-end'>- Tama Brownnnn</p>
            </div>
           
          </Slider>     </div>
        <Button className='mt-16' btntext='Leave Us A Review' />
      </div>
    </Container>
  )
}

export default Review