import { Box, Modal, Typography } from '@mui/material';
import React from 'react';
import './OurBlog.css'

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



const ShareSocial = ({open , handleClose ,name , blogs ,id}) => {


    const text = name; 
    
    return (
        <div>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='s'>
        <div className='gridIcon'>
        <WhatsappShareButton
       url={`https://doctors-apointment.netlify.app/blogDetails/${id}`} 
       hashtag={text}
       quote = {blogs}
        
        >
        <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <FacebookShareButton
        url={`https://doctors-apointment.netlify.app/blogDetails/${id}`} 
        hashtag={text}
        quote = {blogs}
        
        ><FacebookIcon size={40} round={true} /></FacebookShareButton>
       
        </div>
        </Box>
      </Modal>
        </div>
    );
};

export default ShareSocial;