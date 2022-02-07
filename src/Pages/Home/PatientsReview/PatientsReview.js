
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



const PatientsReview = ({title , desc}) => {
    console.log(title)
    return (
        <div>
            <div className="cards" style={{boxShadow:'10px 20px 40px 10px rgba(0, 0, 0, .2)' , padding:'20px'}}>
            <div className="card-content">
                <div className="card-body"> 
                    <div className="shadow"></div>
                    <div className="card-title">{title}</div>
                    <div className="card-subtitle">
                        <p> <small className="textD">{desc}</small> </p>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default PatientsReview;