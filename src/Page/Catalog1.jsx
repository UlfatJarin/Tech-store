import React from 'react'
import Banner2 from '../Component/Banner2'
import Container from '../layer/Container'
import Cart from '../layer/Cart'
import Button from '../layer/Button'
import Adata from '../../public/Asset/company/Adata.png'
import hp from '../../public/Asset/company/hp.png'
import GB from '../../public/Asset/company/GB.png'
import Roccat from '../../public/Asset/company/Roccat.png'
import msi from '../../public/Asset/company/msi.png'
import razer from '../../public/Asset/company/razer.png'
import TM from '../../public/Asset/company/TM.png'
import Image from '../layer/Image'


const Catalog1 = () => {
    return (
        <div>
            <Banner2 />
            <Container>
                <h2 className='title !text-[32px]'>MSI PS Series (20)</h2>
                <div>

                </div>
                <div className='grid grid-cols-6'>
                    <div className='col-span-1 bg-bg-secondary p-6 flex flex-col  '>
                        <div >
                            <h4 className='h4 text-center mb-4'>Filters</h4>
                            <Button className='w-full' btntext='Clear Filter' />
                        </div>

                        <div className='py-6'>
                            <h4 className='title !text-[14px]'>Category</h4>
                            <p className='p4'>CUSTOM PCS</p>
                            <p className='p4'>MSI ALL-IN-ONE PCS</p>
                            <p className='p4'>HP/COMPAQ PCS</p>
                        </div>
                        <div className='py-6'>
                            <h4 className='title !text-[14px]'>Price</h4>
                            <div className='flex justify-between'>
                                <p className='p4'>$0.00 - $1,000.00</p>
                                <p className='p4'>19</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='p4'>$1,000.00 - $2,000.00</p>
                                <p className='p4'>21</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='p4'>$2,000.00 - $3,000.00</p>
                                <p className='p4'>9</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='p4'>$3,000.00 - $4,000.00</p>
                                <p className='p4'>6</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='p4'>$4,000.00 - $5,000.00</p>
                                <p className='p4'>3</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='p4'>$5,000.00 - $6,000.00</p>
                                <p className='p4'>1</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='p4'>$6,000.00 - $7,000.00</p>
                                <p className='p4'>1</p>
                            </div>
                            <div className='flex justify-between'>
                                <p className='p4'>$7,000.00 And Above</p>
                                <p className='p4'>1</p>
                            </div>

                        </div>
                        <div className='py-4'>
                            <h4 className='title !text-[14px]'>Color</h4>
                            <div className='flex gap-4'>
                                <div className='w-[23px] h-[23px] rounded-full bg-blackc'></div>
                                <div className='w-[23px] h-[23px] rounded-full bg-red-600'></div>
                            </div>

                        </div>
                        <div>
                            <h4 className='title !text-[14px]'>Filter Name</h4>
                            <Button btntext='Apply Filters (2)' />

                        </div>
                        <div>
                            <h4 className='title !text-[14px]'>Brands</h4>
                            <Button btntext='All Brands)' />
                            <div className='grid grid-cols-2'>
                                <Image className='w-[200px]' to='/' src={Roccat} />
                                <Image className='w-[200px]' to='/' src={msi} />
                                <Image className='w-[200px]' to='/' src={TM} />
                                <Image className='w-[200px]' to='/' src={Adata} />
                                <Image className='w-[200px]' to='/' src={hp} />
                                <Image className='w-[200px]' to='/' src={GB} />
                            </div>
                        </div>

                    </div>
                    <div className='col-span-5'>
                        <div className='grid grid-cols-5'>
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                            <Cart />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Catalog1