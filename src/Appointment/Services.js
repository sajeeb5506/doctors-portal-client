import React from 'react';

const Services = ({service,setTreatment}) => {
  
    const {name,slots}=service;
    return (
        <div class="card  bg-base-100 shadow-xl my-5">
        <div class="card-body">
          <h2 class="card-title font-bold text-secondary">{name}</h2>
          <p>
              {
                  slots.length> 0 ? <span>{slots[0]}</span>: <span className='text-red-600'> No Slot Available</span>
              }
          </p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' :'space'}  Available</p>
          <div class="card-actions justify-start">

           
            <label htmlFor="booking-modal" 
            onClick={()=>setTreatment(service)} disabled={slots.length===0}
             class="btn btn-secondary text-white bg-gradient-to-r from-primary to-secondary"
             >Book Appointment
             </label>

          </div>
        </div>
      </div>
    );
};

export default Services;