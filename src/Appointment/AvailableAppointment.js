import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from '../../src/Appointment/Services';
import BookingModal from './BookingModal';


const AvailableAppointment = ({date}) => {
    const [services ,setServices] = useState([]);
    const [treatment ,setTreatment] =useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data));

        
    },[])
    return (
        <div>
           <h3 className='text-center font-bold text-secondary'>Available Appointment {format(date, 'PP')}.</h3> 

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {
                 services.map(service=><Service
                 key={service._id}
                 service={service}
                 setTreatment={setTreatment}
                 ></Service>)
              }
           </div>
           {treatment && <BookingModal 
           treatment={treatment} 
           date={date}
           setTreatment={setTreatment}
           ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;