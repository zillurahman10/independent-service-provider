import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='d-flex justify-content-center'>
            <p><small>Copyright @ {year}</small></p>
        </div>
    );
};

export default Footer;