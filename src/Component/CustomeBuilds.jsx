import React from 'react'
import Catalog from '../layer/Catalog'
import customeB from '../../public/Asset/Catalogs/CustomeBuilds.jpg'
import Container from '../layer/Container'
import Cart from '../layer/Cart'

const CustomeBuilds = () => {
    return (
        
            <Container className='flex py-6 items-center'>
                <Catalog  to='/' src={customeB} title='Custome Builds'/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
            </Container>
        
    )
}

export default CustomeBuilds