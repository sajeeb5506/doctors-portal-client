import React from 'react';
import contact from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background:`url(${contact})`,
        }}
              
        className='py-8'>
            <div className="text-center ">
                <h2 className='text-primary font-bold text-xl'>Contact Us</h2>
                <h3 className='text-3xl text-white mt-3'>Stay connected with us</h3>
               
       
               <input type="text" placeholder="Email Address" className="input input-bordered  block mx-auto my-3" />
                <input type="text" placeholder="Subject" className="input input-bordered block mx-auto mb-3" />
                <textarea className="textarea text-center block mx-auto mb-3" placeholder="Your message"></textarea>
                 
                </div>
                <div className="text-center mx-auto ">
                <PrimaryButton >Submit</PrimaryButton>
                </div>
              
            
        </section>
    );
};

export default Contact;