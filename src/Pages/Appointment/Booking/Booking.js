import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';
import useCounts from '../../../hooks/useCounts'

const Booking = ({ booking, date, setBookingSuccess ,handleAddToCart  }) => {
    const { name, time, space, price } = booking;
    const {todayAppointments} = useCounts()
 
    const [result , setResult] = useState(space)
    // const [pactice , setPractice] = useState(space)

    useEffect(()=>{
       
        const result = todayAppointments?.filter(s=> s.serviceName === name)
        // console.log(result)
        
        const getV = result?.length
       
        const total = space - getV
        setResult(total )

    },[todayAppointments , name,result ,space])


    






    const [openBooking, setBookingOpen] = React.useState(false);
  
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
  


    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography style={{color:'#5CE7ED'}} sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Price ${price}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {result} SPACES AVAILABLE
                    </Typography>
                    {result>0?<Button style={{backgroundColor:'#5CE7ED'}} onClick={handleBookingOpen} variant="contained">BOOK APPOINTMENT</Button>:''}
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;