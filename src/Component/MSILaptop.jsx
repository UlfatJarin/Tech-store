import React from 'react'
import Container from '../layer/Container'
import Cart from '../layer/Cart'
import Catalog from '../layer/Catalog'
import MSIL from '../../public/Asset/Catalogs/MSI_Laptop.jpg'


const MSILaptop = () => {
    return (
        <Container className='flex py-6 items-center'>
            <Catalog to='/' src={MSIL} title='MSI Laptops' />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </Container>
    )
}

export default MSILaptop