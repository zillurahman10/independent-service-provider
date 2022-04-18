import React from 'react';
import tutorPic from '../../../images/tutorPic.jpg'

const DeatilsOfTutor = () => {
    return (
        <div className='d-flex justify-content-center m-5 w-50 mx-auto p-5 rounded-3' style={{ backgroundColor: "lightgray" }}>
            <img style={{ borderRadius: '10px' }} src={tutorPic} alt="" />
            <h5 className='d-flex align-items-center ms-5'>My name is Jason Statemen.
                <br />
                I studies at Oxford university .
                <br />
                I teach math, physics, chemistry.</h5>
        </div>
    )
};

export default DeatilsOfTutor;