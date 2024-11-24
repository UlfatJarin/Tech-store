import React from 'react'

const IconText = ({children ,title,details}) => {
  return (
    <div className='flex gap-4'>
        <div>
            {children}
        </div>
        <div>
            <h5 className='p5 !font-semibold mb-1'>{title}</h5>
            <p className='p4'> {details} </p>
        </div>
    </div>
  )
}

export default IconText