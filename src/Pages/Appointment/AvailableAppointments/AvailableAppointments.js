import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useCounts from '../../../hooks/useCounts';

import useServices from '../../../hooks/useServices';
import useSpace from '../../../hooks/useSpace';
import Booking from '../Booking/Booking';



const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const {services} = useServices()
    // const {arr , result} = useSpace()
//    const {todayAppointments} = useCounts()

  




//    useEffect(()=>{
//        if(todayAppointments?.length && services?.length){
//            const arr =[]
//         for (const t of services){
//             // console.log(t.serviceName)
//             const result = todayAppointments?.filter(s => s.serviceName == t.name)
//             console.log(result?.length)
//             arr.push(result)
//             console.log(arr)
//         }
//        }
//    },[todayAppointments , services])




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