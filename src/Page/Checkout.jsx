import React from 'react'
import Container from '../layer/Container'
import Input from '../layer/Input'

const Checkout = () => {
  return (
    <div>
        <Container>
        <h2 className='title2'>Checkout</h2>
        <div>
            <h3 className='p5 !font-semibold'>Shipping Address</h3>

            <Input className='pb-14 border-b-2 border-[#CACDD8]' labeltext='Email Address '  />
            <Input labeltext='First Name '  />
            <Input labeltext='Last Name'  />
            <Input labeltext='Company '  />
            <Input labeltext='Street Address '  />
            <Input labeltext='City'  />
            <Input labeltext='State/Province'  />
            <Input labeltext='Country'  />
            <Input labeltext='Phone Number '  />
        </div>
        </Container>
    </div>
  )
}

export default Checkout