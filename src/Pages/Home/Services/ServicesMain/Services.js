import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='d-flex justify-content-center'>Services</h1>
            <div className='d-flex'>
                {
                    services.map(service => <ServicesCard
                        key={service.id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;