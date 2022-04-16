import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.jpg'

const Header = () => {
    // const services = [
    //     {
    //         id: 1,
    //         name: 'Medicine recommendation',
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ullam deleniti quod molestias, nesciunt odio? Vitae aliquid, quaerat animi rem cumque corporis nam incidunt fuga qui explicabo quidem, eos voluptates libero consequuntur nisi, nobis aperiam cupiditate laudantium quae sapiente expedita.',
    //         price: 10,
    //         img: 'https://nglogic.com/wp-content/uploads/2020/12/pexels-visionpic-net-4169384-1.jpg'
    //     },
    //     {
    //         id: 2,
    //         name: 'Heart',
    //         description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur accusantium eligendi error consectetur perferendis nihil aliquid id? Ut cupiditate quisquam consequuntur aliquam est, modi laboriosam cum adipisci eum quia. Soluta enim ullam dolorum itaque beatae iusto saepe quae. Quod.',
    //         price: 7,
    //         img: 'https://media.istockphoto.com/photos/the-man-holding-the-chest-on-the-heart-heart-disease-symptoms-picture-id1317082670?b=1&k=20&m=1317082670&s=170667a&w=0&h=aK3Pei1E1y_VXpK2pTCMpX63V3sHcsw7SUrXpYOTh68='
    //     },
    //     {
    //         id: 3,
    //         name: 'Stomach ache',
    //         description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam nemo consequuntur aut, impedit a beatae? Molestias animi voluptatem nihil praesentium, recusandae rem. Tempore consequuntur amet, ab sapiente magnam cumque impedit facilis ad! Quas numquam nostrum facere maiores inventore odio? Deserunt.',
    //         price: 14,
    //         img: 'https://media.istockphoto.com/photos/the-photo-of-large-intestine-is-on-the-mans-body-against-gray-people-picture-id962782170?b=1&k=20&m=962782170&s=170667a&w=0&h=xAemInL0Z4JZC3oEMrtktvTMy8pZi6xQ8dUXGFoHMwE='
    //     }
    // ]
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <div>
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='my-3'>
                    <Link className='text-decoration-none text-dark login' to="Login">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;