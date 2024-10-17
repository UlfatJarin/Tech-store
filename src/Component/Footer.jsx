import React from 'react'
import Container from '../layer/Container'
import Button from '../layer/Button'
import { FaFacebookSquare } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import Image from '../layer/Image'
import paypal from '../../public/Asset/pay/paypal.png'
import visa from '../../public/Asset/pay/visa.png'
import maestro from '../../public/Asset/pay/maestro.png'
import discover from '../../public/Asset/pay/discover.png'
import american from '../../public/Asset/pay/american-express.png'

const Footer = () => {
  return (
    <div className='bg-blackc'>
        <Container >
            <div  className='flex justify-between items-baseline mt-12'>
            <div>
                <h1 className='font-Poppins text-[38px] text-whitec leading-[132.5%]'>Sign Up To Our Newsletter.</h1>
                <p className='font-Poppins font-light text-whitec'>Be the first to hear about the latest offers.</p>
            </div>
            <div className='flex gap-6'>
              <input className='w-[391px] bg-transparent border-2 border-whitec p-2 text-whitec' type="email" placeholder='Your Email'  />
              <Button className='bg-color-3rd text-whitec' btntext='Subscribe'/>
            </div>
            </div>
            <div className='grid grid-cols-5 py-10'>
              <div>
                <h5 className='h5 mb-5'>Information</h5>
                <p className='p3'>About Us</p>
                <p className='p3'>About Zip</p>
                <p className='p3'>Privacy Policy</p>
                <p className='p3'>Search</p>
                <p className='p3'>Terms</p>
                <p className='p3'>Orders and Returns</p>
                <p className='p3'>Contact Us</p>
                <p className='p3'>Advanced Search</p>
                <p className='p3'>Newsletter Subscription</p>
              </div>
              <div>
                <h5 className='h5 mb-5'>PC Parts</h5>
                <p className='p3'>CPUS</p>
                <p className='p3'>Add On Cards</p>
                <p className='p3'>Hard Drives (Internal)</p>
                <p className='p3'>Graphic Cards</p>
                <p className='p3'>Keyboards / Mice</p>
                <p className='p3'>Cases / Power Supplies / Cooling</p>
                <p className='p3'>RAM (Memory)</p>
                <p className='p3'>Software</p>
                <p className='p3'>Speakers / Headsets</p>
                <p className='p3'>Motherboards</p>
              </div>
              <div>
                <h5 className='h5 mb-5'>Desktop PCs</h5>
                <p className='p3'>Custom PCs</p>
                <p className='p3'>Servers</p>
                <p className='p3'>MSI All-In-One PCs</p>
                <p className='p3'>HP/Compaq PCs</p>
                <p className='p3'>ASUS PCs</p>
                <p className='p3'>Tecs PCs</p>
              </div>
              <div>
                <h5 className='h5 mb-5'>Laptops</h5>
                <p className='p3'>Evryday Use Notebooks</p>
                <p className='p3'>MSI Workstation Series</p>
                <p className='p3'>MSI Prestige Series</p>
                <p className='p3'>Tablets and Pads</p>
                <p className='p3'>Netbooks</p>
                <p className='p3'>Infinity Gaming Notebooks</p>
              </div>
              <div>
                <h5 className='h5 mb-5'>Address</h5>
                <p className='p3'>Address: 1234 Street Adress City Address, 1234</p>
                <p className='p3'>Phones: (00) 1234 5678</p>
                <p className='p3'>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</p>
                <p className='p3'>Friday: 9:00 AM - 6:00 PM</p>
                <p className='p3'>Saturday: 11:00 AM - 5:00 PM</p>
                <p className='p3'>E-mail: shop@email.com</p>
              </div>
            </div>
        </Container>
            <div className='py-4 border-t border-color-secondary'>
              <Container className='flex justify-between '>
              <div className='flex gap-3 '>
              <FaFacebookSquare className='text-color-secondary' />
              <RiInstagramFill className='text-color-secondary' />
              </div>
              <div className='flex gap-2.5'>
                <Image to='/' src={paypal}/>
                <Image to='/' src={visa}/>
                <Image to='/' src={maestro}/>
                <Image to='/' src={discover}/>
                <Image to='/' src={american}/>

              </div>
              <p className='p2'>Copyright © 2020 Shop Pty. Ltd.</p>
              </Container>
            </div>
    </div>
  )
}

export default Footer