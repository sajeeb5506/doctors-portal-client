import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
            <InfoCard cardTitle="Opening Hours" cardDes='Lorem Ipsum is simply dummy text of the pri' bdColor="bg-gradient-to-r from-primary to-secondary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" cardDes='Brooklyn, NY 10036, United States' bdColor="bg-accent"  img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" cardDes='+000 123 456789' bdColor="bg-gradient-to-r from-primary to-secondary"  img={phone}></InfoCard>
        </div>
    );
};

export default Info;