
import * as React from 'react';

import './PatientsReview.css'


const PatientsReview = ({title , desc}) => {
    console.log(title)
    return (
        <div>
            <div className="cardReviews" style={{ padding:'20px'}}>
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