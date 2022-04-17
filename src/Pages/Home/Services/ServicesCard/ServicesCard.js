import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesCard.css'

const ServicesCard = ({ service }) => {
    const { name, img, description, price, teacher, teacherName, ratings } = service
    const navigate = useNavigate()
    const checkOut = () => {
        navigate('/checkout')
    }
    return (
        <div className='service-cards'>
            <div className='single-card border'>
                <div>
                    <img className='card-image mb-2' src={img} alt="" />
                    <img className='teacher' src={teacher} alt="" />
                    <h5 className='d-flex justify-content-center teacher-name'>{teacherName}</h5>
                    <span className='teacher-name d-flex justify-content-center'>Consultant</span>
                    <h3 className='d-flex justify-content-center sub-name'>{name}</h3>
                    <button onClick={checkOut} className=' enroll-btn'>Enroll</button>
                    <p>{description}</p>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <p>Ratings : {ratings}</p>
                        <h4>$ {price}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;