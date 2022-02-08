import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from '../../Shared/Calendar/Calendar';
import bg from '../../../images/bg.png'

const appointmentBanner = {
    background: `url(${bg})`,
   marginTop:'100px'
    
}
const AppointmentHeader = ({ date, setDate }) => {

    return (
        <div style={appointmentBanner}>
            <Container >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <h1 style={{textAlign:'left'}}>Appointment</h1>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
        </div>
    );
};

export default AppointmentHeader;