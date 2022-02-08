import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    // const [doctors, setDoctors] = useState([]);

    const doctors = [
        {
            name: 'Alex',
            image : 'https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Clipart.png',
            
        },
        {
            name: 'Fahad',
            image : 'https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Clipart.png',
            
        },
        {
            name: 'Nipen',
            image : 'https://www.pngall.com/wp-content/uploads/2018/05/Doctor-PNG-Clipart.png',
            
        }
    ]

    return (
        <div>
            <h2>Our Doctors: {doctors.length}</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors.map(doctor => <Doctor
                            
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;