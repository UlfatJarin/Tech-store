import React from 'react'
import Image from '../layer/Image'
import Button from '../layer/Button'
import semicolon from '../../public/Asset/semicolon.png'
import Container from '../layer/Container'

const Review = () => {
  return (
    <Container className='max-w-[1160px]'>
        <div className='px-28 py-10 bg-[#F5F7FF]'>
        <div className='flex justify-between gap-6'>
        <Image src={semicolon}/>
        <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
        </div>
        <Button className='mt-16' btntext='Leave Us A Review'/>

    </div>
    </Container>
  )
}

export default Review