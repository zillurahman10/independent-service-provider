import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-image"
                        src={banner}
                        alt="First slide"
                    />
                    <Carousel.Caption className='mb-5'>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;