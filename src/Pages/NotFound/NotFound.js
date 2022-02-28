import { Button, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../images/dribbble_1.gif'




const NotFound = () => {
    return (
        <Container >
          <div>
             <img src={bg} alt="" srcset="" />
          </div>
             <div style={{marginTop:'-100px'}}>
             <Link style={{textDecoration:'none'}} to='/'><Button style={{color:'white' , backgroundColor:'#5CE7ED'}}>Back To Home</Button></Link>
             </div>
           
        </Container>
    );
};

export default NotFound;