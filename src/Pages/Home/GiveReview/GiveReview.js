import {  Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import '../OurBlog/OurBlog.css'

import {
    FacebookShareButton,
    
    WhatsappShareButton,
  
  } from 'react-share';

  import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
     LinkedinIcon,

    ViberIcon,

    EmailIcon,
  } from 'react-share';
import useAuth from '../../../hooks/useAuth';



const GiveReview = ({open , handleClose ,name , blogs ,id}) => {

    const [valueRating, setValueRating] = React.useState(1);
    const [feedback, setFeedback] = React.useState('');
     const {user} = useAuth()


    const handleChangeText = (event) => {
        setFeedback(event.target.value);
    };
    
    console.log(user)
    let today = new Date().toLocaleDateString()
   
    const addReview = ()=>{
        const review = {feedBack:feedback, rating:valueRating , today , name:user.displayName , pic:user.photoURL};
        console.log(review)
        fetch('https://floating-cliffs-15059.herokuapp.com/reviews/add' , {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('success')
               
               
            }
        })
    }

    
    const text = name; 
    
    return (
        <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='s ' style={{backgroundColor:"white"}} >
        <div>
             <Box>
         <div>
        
           <Rating
       name="size-medium"
        value={valueRating}
        onChange={(event, newValue) => {
            setValueRating(newValue);
        }}
      />
         </div>
           <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={feedback}
          
          onChange={handleChangeText}
        />
        <Button onClick={addReview}>Add Your Feed Back</Button>
           </Box>
        </div>
        </Box>
      </Modal>
        </div>
    );
};

export default GiveReview;