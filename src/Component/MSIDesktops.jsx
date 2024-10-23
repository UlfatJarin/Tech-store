import React from 'react'
import Container from '../layer/Container'
import desktop from '../../public/Asset/Catalogs/Desktop.jpg'
import Catalog from '../layer/Catalog'
import Cart from '../layer/Cart'

const MSIDesktops = () => {
  return (
   
        <Container className='flex py-6 items-center'>
            <Catalog to='/' src={desktop} title='Desktops' />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </Container>
   
  )
}

export default MSIDesktops