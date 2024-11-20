import React from 'react'
import Image from '../layer/Image'
import  aboutinfo from '../../public/Asset/aboutinfo.png'

const AboutInfo = () => {
  return (
    <div className='Ccontainer'>
        <div className='flex justify-center'>
        <Image className='' src={aboutinfo}/>
        </div>

    </div>
  )
}

export default AboutInfo