import React from 'react'
import Li from '../layer/Li'
import Button from '../layer/Button'
import Image from '../layer/Image'
import about from '../../public/Asset/about.png'
import AboutCompetittion from '../Component/AboutCompetittion'
import AboutFeatues from '../Component/AboutFeatues'
import AboutInfo from '../Component/AboutInfo'
import { Link } from 'react-router-dom'
import { IoHeartCircleOutline } from "react-icons/io5";

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
                    <div className='col-span-2  bg-bg-secondary  p-[118px]'>
                        <h2 className='h2'>MSI MPG Trident 3</h2>
                        <Link><p className='p3 mt-3 mb-6 !text-color-3rd'>Be the first to review this product</p></Link>
                        <div>
                            <p className='p5 w-[567px]'>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p>
                            <div className='flex gap-4 mt-11'>
                                <div className='w-[39px] h-[39px] rounded-full border-2 border-color-3rd'>
                                    <div className='w-[35px] h-[35px] rounded-full bg-[#4B4D4F] border-2 border-whitec '></div>
                                </div>
                                <div className='w-[39px] h-[39px] rounded-full border-2 border-transparent'>
                                    <div className='w-[35px] h-[35px] rounded-full bg-[#F2E9DC] border-2 border-whitec '></div>
                                </div>
                                <div className='w-[39px] h-[39px] rounded-full border-2 border-transparent'>
                                    <div className='w-[35px] h-[35px] rounded-full bg-[#EAE8EB] border-2 border-whitec '></div>
                                </div>
                            </div>
                            <div className='flex justify-between mt-7'>
                                <p className='p2 !text-blackc'>Have a Question?  <Link><span className='text-color-3rd !font-normal'><u>Contact Us</u></span></Link></p>
                                <p className='p5 !text-[12px]'>SKU D5515AI</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-whitec'>
                        <Image to='/' src={about} />
                        <IoHeartCircleOutline />
                    </div>
                </div>
            </div>

            <AboutCompetittion />
            <AboutInfo />
            <AboutFeatues />
        </div>
    )
}

export default About