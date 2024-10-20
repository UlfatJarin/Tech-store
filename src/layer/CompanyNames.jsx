import React from 'react'
import Image from './Image'
import Adata from '../../public/Asset/company/Adata.png'
import hp from '../../public/Asset/company/hp.png'
import GB from '../../public/Asset/company/GB.png'
import Roccat from '../../public/Asset/company/Roccat.png'
import msi from '../../public/Asset/company/msi.png'
import razer from '../../public/Asset/company/razer.png'
import TM from '../../public/Asset/company/TM.png'
import Container from './Container'

const CompanyNames = () => {
    return (

        <Container className='grid grid-cols-7'>
            <Image className='w-[200px]' to='/' src={Roccat} />
            <Image className='w-[200px]' to='/' src={msi} />
            <Image className='w-[200px]' to='/' src={razer} />
            <Image className='w-[200px]' to='/' src={TM} />
            <Image className='w-[200px]' to='/' src={Adata} />
            <Image className='w-[200px]' to='/' src={hp} />
            <Image className='w-[200px]' to='/' src={GB} />
        </Container>


    )
}

export default CompanyNames