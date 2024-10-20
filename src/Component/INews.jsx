import React from 'react'
import Container from '../layer/Container'
import News from '../layer/News'
import IN1 from '../../public/Asset/IN/IN1.jpg'
import IN2 from '../../public/Asset/IN/IN2.jpg'
import IN3 from '../../public/Asset/IN/IN3.jpg'
import IN4 from '../../public/Asset/IN/IN4.jpg'
import IN5 from '../../public/Asset/IN/IN5.jpg'
import IN6 from '../../public/Asset/IN/IN6.jpg'
import IN7 from '../../public/Asset/IN/IN7.jpg'
import IN8 from '../../public/Asset/IN/IN8.jpg'
import IN9 from '../../public/Asset/IN/IN9.jpg'

const INews = () => {
  return (
    <Container className='py-10'>
        <h2 className='title'> Follow us on Instagram for News, Offers & More</h2>
        <div className='grid grid-cols-6 gap-x-1 gap-y-5 mt-5'>
            <News to='/' src={IN1} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020' />
            <News to='/' src={IN2} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020'  />
            <News to='/' src={IN3} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020'  />
            <News to='/' src={IN4} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020'  />
            <News to='/' src={IN5} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020'  />
            <News to='/' src={IN6} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020'  />
            <News to='/' src={IN7} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020'  />
            <News to='/' src={IN8} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020'  />
            <News to='/' src={IN9} text='If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...' date='01.09.2020'  />

        </div>
        

    </Container>
  )
}

export default INews