import React from 'react'
import Container from '../layer/Container'
import Image from '../layer/Image'
import logo from'../../public/Asset/Logo.png'
import Li from '../layer/Li'
import Button from '../layer/Button'
import { FiSearch } from 'react-icons/fi'
import { LiaShoppingCartSolid } from 'react-icons/lia'

const Navber = () => {
  return (
    <div className='py-7 border-b border-[#CACDD8]'>
        <Container>
            <div className='flex justify-between items-center'>
                <Image to='/' src={logo}/>
            
            <ul className='flex gap-6 items-center'>
                <Li to='/laptops' className='' liitem='Laptops'/>
                <Li to='/' className='' liitem='Desktop PCs'/>
                <Li to='/' className='' liitem='Networking Devices'/>
                <Li to='/' className='' liitem='Printers & Scanners'/>
                <Li to='/' className='' liitem='PC Parts'/>
                <Li to='/about' className='' liitem='All Other Products'/>
                <Li to='/checkout' className='' liitem='Repairs'/>  

                <Button to='/login' className='py-2 px-6' btntext='Our Deals'/>              
            </ul>
            <div className='flex gap-6 items-center '>
                <FiSearch className='text-xl font-bold'/>
                <LiaShoppingCartSolid className='text-xl font-bold' />
                <div className='w-[36px] h-[36px] rounded-full bg-slate-600'></div>

            </div>
            </div>
        </Container>
    </div>
  )
}

export default Navber