import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center' style={{ height: '500px' }}>
            <Spinner animation="grow" variant="danger" />
        </div>
    );
};

export default Loading;