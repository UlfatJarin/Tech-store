import React from 'react'
import AboutFeaturePart from '../layer/AboutFeaturePart'
import intel from '../../public/Asset/intel.png'
import SSD from '../../public/Asset/SSD.png'
import DDR from '../../public/Asset/DDR.png'
import RTX from '../../public/Asset/RTX.png'
import aboutFbg from '../../public/Asset/aboutFbg.png'
import Image from '../layer/Image'

const AboutFeatues = () => {
  return (
    <div className=' relative  '>
      <Image src={aboutFbg}/>
      <div className='absolute top-0 left-1/2 -translate-x-1/2 '>
        <div className='Ccontainer flex justify-center '>
          <div className="text-center max-w-[410px] mt-[74px] mb-[60px]">
            <h2 className='h3 !text-[38px] !font-medium mb-7 '> Featues</h2>
            <p className=' p3 !text-lg !font-light'>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization. </p>
          </div>
        </div>
        <div className='Ccontainer grid grid-cols-4 gap-[47px] pb-[95px]'>
          <AboutFeaturePart src={intel} text='Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.' />
          <AboutFeaturePart src={RTX} text='The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.' />
          <AboutFeaturePart src={SSD} text='Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.' />
          <AboutFeaturePart src={DDR} text='Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience..' />

        </div>
      </div>


    </div>
  )
}

export default AboutFeatues