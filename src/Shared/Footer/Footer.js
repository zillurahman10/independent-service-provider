import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div style={{ position: 'absolute', bottom: '0' }}>
            <p className='d-flex justify-content-center'><small>Copyright @ {year}</small></p>
        </div>
    );
};

export default Footer;