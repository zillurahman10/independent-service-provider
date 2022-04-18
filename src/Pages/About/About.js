import React from 'react';
import profile from '../../images/real.png'

const About = () => {
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            <div className='w-50'>
                <img style={{ width: '400px' }} className="mx-auto d-flex justify-content-center" src={profile} alt="" />
                <h2 className='mt-3'>Name : Md. Zillur Rahman</h2>
                <p>My goal is I want to be full stack web developer. I use full a day to achieve my goal. I love to read the docs of react's website. Reding docs is a important skill that every developer should have so i read docs every to achieve my goal</p>
            </div>
        </div>
    );
};

export default About;