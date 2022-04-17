import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div>
                <h1>This page is not available</h1>
                <img className='d-block ms-4' src="https://img-16.ccm2.net/_SqzzXVDSG50FWb_UBrCl3XwV78=/440x/1685e17045e747a899925aa16189c7c6/ccm-encyclopedia/99776312_s.jpg" alt="" />
                <Link to="/" className='btn btn-secondary mt-3' style={{ marginLeft: '150px' }}>Back to home page</Link>
            </div>
        </div>
    );
};

export default NotFound;