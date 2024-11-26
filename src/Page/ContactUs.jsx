import React from 'react'
import Input from '../layer/Input'
import Container from '../layer/Container'
import IconText from '../layer/IconText'
import { MdOutlineLocationOn } from 'react-icons/md'
import { LuClock3 } from 'react-icons/lu'
import Button from '../layer/Button'


const ContactUs = () => {
    return (
        <div className=''>
            <Container>
                <div>
                    <h2 className='title2 mb-4'>Contact Us</h2>
                    <p className='p5 !text-base'>We love hearing from you, our Shop customers.<br />Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
                </div>
                <div className='grid grid-cols-3 gap-16 mt-5'>
                    <div className='col-span-2 grid grid-cols-2 gap-7'>
                        <Input className='max-w-[449px]' labeltext='Your Name' id='name' type='text' placeholder='Your Name' />
                        <Input className='max-w-[449px]' labeltext='Your Email ' id='email' type='email' placeholder='Your Email' />
                        <Input className='max-w-[449px]' labeltext='Your Phone Number' id='number' type='number' placeholder='Your Phone' />
                        <div className='col-span-2'>
                            <Input className='max-w-[925px]' className1='h-[236px] ' labeltext='What’s on your mind? ' id='comment' type='text' placeholder='Jot us a note and we’ll get back to you as quickly as possible' />
                        </div>
                        <Button btntext='Submit' />
                    </div>
                    <div className=''>
                        <div className='bg-bg-secondary pt-7 px-8 pb-[74px]  flex flex-col gap-4'>
                            <IconText title='Address:' details='1234 Street Adress City Address, 1234'><MdOutlineLocationOn className='text-2xl' /></IconText>
                            <IconText title='Phone:' details='(00)1234 5678'><LuClock3 className='text-2xl' /></IconText>
                            <IconText title='We are open:' details='Monday - Thursday: 9:00 AM - 5:30 PM'><LuClock3 className='text-2xl' /></IconText>
                            <IconText title='E-mail:' details='shop@email.com'><MdOutlineLocationOn className='text-2xl' /></IconText>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactUs