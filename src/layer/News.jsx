import React from 'react'
import Image from './Image'
 

const News = ({to ,src ,text, date }) => {
  return (
    <div>
        <Image className='w-[225px] ' to={to} src={src}/>
        <p className='p3 !text-blackc text-center py-2.5 px-6'>{text}</p>
        <p className='font-Poppins text-[10px] text-color-secondary text-center mb-2.5'>{date}</p>
    </div>
  )
}

export default News