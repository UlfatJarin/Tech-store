import React from 'react'
import Image from '../layer/Image'
import { FaCheckCircle, FaStar } from 'react-icons/fa'

const Cart = () => {
  return (
    <div className='max-w-[234px] max-h-[346px] px-6 '>
        <div className='py-2 flex gap-2 items-center'>
            <FaCheckCircle  className='text-[#78A962] text-[10px]'/>
            <p className='text-[#78A962] text-[10px]'>in stock</p>
        </div>
        <div className='w-[150px] h-[150px] object-cover bg-slate-400 mx-4'>
            <Image/>
        </div>
        <div className='flex gap-2.5 py-2 items-center'>
        <div className='flex gap-0.5'>
        <FaStar className='text-[#E9A426] text-[13px]' />
        <FaStar className='text-[#E9A426] text-[13px]' />
        <FaStar className='text-[#E9A426] text-[13px]' />
        <FaStar className='text-[#E9A426] text-[13px]' />
        <FaStar className='text-[#E9A426] text-[13px]' />
        </div>
        <p className='p2 !font-normal !text-xs'>Reviews (4)</p>
        </div>
        <div>
            <p className='font-Poppins text-xs text-blackc max-w-[185px] '>EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
        </div>
        <div>
            <p className='p2'>$499.00</p>
            <p className='p !text-lg !text-blackc'>$499.00</p>
        </div>
    </div>
  )
}

export default Cart