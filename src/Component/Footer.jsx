import React from 'react'
import Container from '../layer/Container'

const Footer = () => {
  return (
    <div>
        <Container>
            <div>
                <h1 className='font-Poppins text-[38px] text-whitec leading-[132.5%]'>Sign Up To Our Newsletter.</h1>
                <p className='font-Poppins font-light text-whitec'>Be the first to hear about the latest offers.</p>
            </div>
            <div>
              <input type="email" placeholder='Your Email'  />
            </div>
        </Container>
    </div>
  )
}

export default Footer