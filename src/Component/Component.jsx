import React from 'react'
import Container from '../layer/Container'
import ComponentParts from '../layer/ComponentParts'
import support from '../../public/Asset/Support.png'
import Account from '../../public/Asset/Account.png'
import Saving from '../../public/Asset/Saving.png'

const Component = () => {
  return (
    <div className='bg-whitec pt-14 pb-11'>
        <Container className='flex justify-evenly'>
            <ComponentParts src={support} title='Product Support' text='Up to 3 years on-site warranty available for your peace of mind.'/>
            <ComponentParts src={Account} title='Personal Account' text='With big discounts, free delivery and a dedicated support specialist.'/>
            <ComponentParts src={Saving} title='Amazing Savings' text='Up to 70% off new Products, you can be sure of the best price.'/>
        </Container>
    </div>
  )
}

export default Component