import React from 'react'
import Container from '../layer/Container'
import { FaFacebookSquare } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='bg-bg-primary py-2'>
        <Container className='flex justify-between items-center'>
            
                <div className='flex gap-4'>
                    <p className='p2'>Mon-Thu:</p>
                    <p className='p'>9:00 AM - 5:30 PM</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='p2'>Visit our showroom in 1234 Street Adress City Address, 1234 </p>
                    <p className='p'> <u>Contact Us</u></p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='p'>Call Us: (00) 1234 5678</p>
                    <div className='flex items-center gap-2'>                        
                    <FaFacebookSquare className='text-whitec' />
                    <AiFillInstagram className='text-whitec' />
                    </div>
                </div>
            
        </Container>
    </div>
  )
}

export default Contact