import React from 'react';
import { format } from 'date-fns';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({date,treatment,setTreatment}) => {
    const {name,slots}=treatment;
    const [user, loading] = useAuthState(auth);
    const handleBooking =event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
       
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
             <div class="modal modal-bottom sm:modal-middle">
             <div class="modal-box">
             <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 class="font-bold text-lg">Booking for : {name}</h3>
              <form  onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>

              <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
              <select name='slot' class="select select-bordered w-full max-w-xs">
             
                {
                    slots.map((slot,index) => <option 
                    key={index}
                    value={slot}>{slot}</option>)
                }
               </select>
              <input type="text" name='name' disabled value={user?.displayName || ''} placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
              <input type="email" name='email' disabled value={user?.email|| ''}  placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
              <input type="number" name='phone' placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
             
              <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" />
              </form>
           
            </div>
            </div>
        </div>
    );
};

export default BookingModal;