import React from 'react';
import Banner from '../Banner/Banner';
import DeatilsOfTutor from '../DeatilsOfTutor/DeatilsOfTutor';
import Services from '../Services/ServicesMain/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DeatilsOfTutor></DeatilsOfTutor>
        </div>
    );
};

export default Home;