import React from 'react'
import Container from '../layer/Container'
import Slider from 'react-slick';
import Cart from '../layer/Cart';

const NewProduct = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
    };


    return (
        <Container>
            <h2 className='title mt-8 mb-4'>New Products</h2>
            <div>
                <Slider {...settings}>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    <div>
                        <Cart/>
                    </div>
                    
                </Slider>


            </div>
        </Container>
    )
}

export default NewProduct