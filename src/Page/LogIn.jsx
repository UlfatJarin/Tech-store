import React from 'react'
import Container from '../layer/Container'
import Input from '../layer/Input'
import Button from '../layer/Button'
import { Link } from 'react-router-dom'



const LogIn = () => {
  return (
    <div>
      <Container>
        <h2 className='title2'>Customer Login</h2>
        <div className='max-w-[1162px] mx-auto mt-5 grid grid-cols-2  gap-8'>
          <div className='bg-bg-secondary pt-9 px-14 pb-10  '>
            <h5 className='p5 !font-semibold  '>Registered Customers</h5>
            <p className='p5 !text-sm my-3'>If you have an account, sign in with your email address.</p>
            <Input className='!max-w-[449px]' placeholder=' Your Email' labeltext='Email' />
            <Input className='!max-w-[449px] mt-3' placeholder=' Your Password' labeltext='Password' />
            <div className='flex items-center  gap-6'>
              <Button className='mt-5' btntext='Sign In' />
              <Link to='/'><p className='active'>Forgot Your Password?</p></Link>
            </div>
          </div>
          <div className='bg-bg-secondary pt-9 px-14 pb-10'>
            <h5 className='p5 !font-semibold'>New Customer?</h5>
            <p className='p5 !text-sm my-3'>Creating an account has many benefits:</p>

            <div className='flex flex-col gap-2' >
              <p className='p5 !text-sm'>•  Check out faster</p>
              <p className='p5 !text-sm'>•  Keep more than one address</p>
              <p className='p5 !text-sm'>•  Track orders and more</p>
            </div>
            <Button className='mt-5' btntext='Create An Account' />


          </div>
        </div>
      </Container>
    </div>
  )
}

export default LogIn