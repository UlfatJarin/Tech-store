import React from 'react'

const IconText = ({children ,title,details}) => {
  return (
    <div className='flex gap-4'>
        <div>
            {children}
        </div>
        <div>
            <h5>{title}</h5>
            <p> {details} </p>
        </div>
    </div>
  )
}

export default IconText