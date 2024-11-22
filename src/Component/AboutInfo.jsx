import React from 'react'
import Image from '../layer/Image'
import  aboutinfo from '../../public/Asset/aboutinfo.png'
import Input from '../layer/Input'

const AboutInfo = () => {
  return (
    <div className='Ccontainer'>
        <div className='flex justify-center'>
        <Image className='' src={aboutinfo}/>
        </div>
        <Input id='skfjflkdsf' type='text' placeholder='snkjfdn' labeltext='skflksdlkdf'  />
    </div>
  )
}

export default AboutInfo