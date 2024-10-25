import React from 'react'
import Image from './Image'

const ComponentParts = ({src ,title ,text}) => {
  return (
    <div className='max-w-[265px]  text-center px-1 '>
        <Image className='mx-auto' to='/' src={src} />
        <h4 className='h4 mt-6 mb-3'>{title}</h4>
        <p className='p3 text-blackc'>{text}</p>
    </div>
  )
}

export default ComponentParts