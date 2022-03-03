
import { Avatar, CardHeader, IconButton, Rating, Typography } from '@mui/material';
import * as React from 'react';

import './PatientsReview.css'
import person from '../../../images/people-2.png'

const PatientsReview = ({ feedBack , name , pic , date , rate}) => {
   console.log(feedBack)
    return (
        <div>
            <div className="cardReviews" style={{ padding:'20px'}}>
            <div className="card-content">
                <div className="card-body"> 
               
                    
                    <div className="card-subtitle">
                        <p> <small className="textD">{feedBack}</small> </p>
                    </div>
                    <Typography variant="h5" component="div">
        <Rating name="read-only" value={rate} readOnly sx={{color:'gold'}}/>
        </Typography>
              <div style={{marginTop:'50px'}}>
              <CardHeader
        avatar={
          <Avatar alt="doctors" src={pic} />
        }
        
        title={name}
        subheader={date}
      />
              </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default PatientsReview;