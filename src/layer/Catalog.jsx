import React from 'react'
import Image from './Image'

const Catalog = ({to, src ,title}) => {
  return (
    <div className='bg-black w-[233px] h-[350px] relative'> 
        <Image className='w-[233px] h-[350px]' to={to} src={src} />
        <h3 className='h3 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{title}</h3>
        <u><p className='p3 absolute bottom-8 left-1/2 -translate-x-1/2 '>See All Products</p></u>
    </div>
  )
}

export default Catalog