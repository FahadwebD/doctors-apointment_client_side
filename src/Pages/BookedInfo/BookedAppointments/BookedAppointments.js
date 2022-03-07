import React from 'react';
import useBooked from '../../../hooks/useBooked';
import BookedAppointment from '../BookedAppointment/BookedAppointment';

const BookedAppointments = () => {
    const {booked} = useBooked()
    console.log(booked)
    return (
        <div>
            {
                booked?.map(booking => <BookedAppointment
                key={booking._id}
                booking={booking}></BookedAppointment>)
            }
        </div>
    );
};

export default BookedAppointments;