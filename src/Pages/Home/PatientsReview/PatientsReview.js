
import { Avatar, CardHeader, IconButton } from '@mui/material';
import * as React from 'react';

import './PatientsReview.css'
import person from '../../../images/people-2.png'

const PatientsReview = ({title , desc}) => {
    console.log(title)
    return (
        <div>
            <div className="cardReviews" style={{ padding:'20px'}}>
            <div className="card-content">
                <div className="card-body"> 
                    
                    
                    <div className="card-subtitle">
                        <p> <small className="textD">{desc}</small> </p>
                    </div>
              <div style={{marginTop:'50px'}}>
              <CardHeader
        avatar={
          <Avatar alt="doctors" src={person} />
        }
        
        title="Doctor Caudi"
        subheader="September 14, 2016"
      />
              </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default PatientsReview;