import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useCounts from '../../../hooks/useCounts';

import useServices from '../../../hooks/useServices';
import Booking from '../Booking/Booking';



const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const {services} = useServices()
  
   

   
    return (
        <Container>
            <Typography variant="h4" sx={{ color: '#5CE7ED', mb: 3 }}>Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment Booked successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    services?.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;