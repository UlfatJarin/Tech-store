import React from 'react'
import Image from './Image'

const AboutFeaturePart = ({to,src,text}) => {
  return (
    <div className='max-w-[254px] flex flex-col items-center'>
        <Image className='w-[136px] h-[136px] mb-7 rounded-full' to={to} src={src}/>
        <p className='p3 !font-light text-center'>{text}</p>
    </div>
  )
}

export default AboutFeaturePart