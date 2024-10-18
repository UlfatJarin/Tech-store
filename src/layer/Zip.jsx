import React from 'react'
import Container from './Container'
import Image from './Image'
import zip from '../../public/Asset/Zip.png'

const Zip = () => {
  return (
    <div className='py-5'> 
        <Container className='flex gap-3  justify-center py-5 bg-[#F5F7FF]'>
            <Image src={zip} to='/'/>
            <div className='w-[1px] h-[23px] bg-[#00AEB8] '></div>
            <p>own it now, up to 6 months interest free learn more</p>
        </Container>
    </div>
  )
}

export default Zip