import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Service.css'
const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
             <div className="cards" >
            <div className="card-content">
                <div className="card-body"> <img style={{height:100}}  className="img img-fluid" src={img} alt=''/>
                    <div className="shadow"></div>
                    <div className="card-title">{name}</div>
                    <div className="card-subtitle">
                        <p> <small className="textD">{description}</small> </p>
                    </div>
                    
                </div>
            </div>
        </div>
        </Grid>
    );
};

export default Service;