import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Doctor from '../Doctor/Doctor';
import useDoctors from '../../../hooks/useDoctors';

const Doctors = () => {
 
   const {doctors} = useDoctors()
    return (
        <div>
            <h2>Our Doctors: {doctors?.length}</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        doctors?.map(doctor => <Doctor
                            
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Doctors;