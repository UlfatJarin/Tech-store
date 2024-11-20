import React from 'react'
import Li from '../layer/Li'
import Button from '../layer/Button'
import Image from '../layer/Image'
import about from '../../public/Asset/about.png'
import AboutCompetittion from '../Component/AboutCompetittion'
import AboutFeatues from '../Component/AboutFeatues'

const About = () => {
    return (
        <div>
            <div className=' border-b border-[#CACDD8]'>
                <nav className='Ccontainer topcenter justify-between py-7'>
                    <ul className='topcenter gap-[30px]'>
                        <Li to='/' liitem='About Product' />
                        <Li to='/' liitem='Details' />
                        <Li to='/' liitem='Specs' />
                    </ul>
                    <div className='topcenter gap-3'>
                        <Button btntext='Add to Cart' />
                        <Button btntext='PayPal' />
                    </div>
                </nav>
            </div>
            <div className='Ccontainer '>
                <div className=' w-full grid grid-cols-3'>
                    <div className='col-span-2 bg-slate-300'>
                        osfosdfoksdof
                    </div>
                    <div className='bg-slate-500'>
                        <Image to='/' src={about}/>
                    </div>
                </div>
            </div>

            <AboutCompetittion/>
            <AboutFeatues/>
        </div>
    )
}

export default About