import React from 'react'
import Container from '../layer/Container'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='bg-bg-color py-2'>
        <Container className='flex justify-between items-center'>
            
                <div className='flex gap-4'>
                    <p className='text-white'>Mon-Thu:</p>
                    <p className='text-white'>9:00 AM - 5:30 PM</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-white'>Visit our showroom in 1234 Street Adress City Address, 1234 </p>
                    <p className='text-white'> Contact Us</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-white'>Call Us: (00) 1234 5678</p>
                    <div className='flex items-center gap-2'>                        
                    <FaFacebookSquare className='text-white' />
                    <AiFillInstagram className='text-white' />
                    </div>
                </div>
            
        </Container>
    </div>
  )
}

export default Contact