import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div style={{ paddingTop: '200px' }}>
                    <h1 className='d-flex justify-content-center pt-5'>Welcome to DOC-FINE</h1>
                    <p className='w-50 mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, maxime tempora! Molestias eos facilis vel, impedit aliquid provident non temporibus saepe adipisci neque earum! Reprehenderit hic pariatur sit illo ut recusandae sint libero odio enim aliquam voluptate, qui laboriosam temporibus!</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;