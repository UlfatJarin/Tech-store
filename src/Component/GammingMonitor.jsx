import React from 'react'
import Container from '../layer/Container'
import Catalog from '../layer/Catalog'
import Cart from '../layer/Cart'
import GammingM from '../../public/Asset/Catalogs/GammingMonitor.jpg'


const GammingMonitor = () => {
  return (
    <Container className='flex py-6 items-center'>
            <Catalog to='/' src={GammingM} title=' Gaming Monitors' />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
        </Container>
  )
}

export default GammingMonitor