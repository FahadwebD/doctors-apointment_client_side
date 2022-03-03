import { Box, Modal, Typography } from '@mui/material';
import React from 'react';

import {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    RedditShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    EmailShareButton,
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



const ShareSocial = ({open , handleClose ,name , img , blogs ,id}) => {


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
       url={`http://localhost:3000/blogDetails/${id}`} 
       hashtag='#React'
       quote = {text}
        
        >
        <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <FacebookShareButton
       url={`http://localhost:3000/blogDetails/${id}`} 
        hashtag='#React'
        quote = {blogs}
        
        ><FacebookIcon size={40} round={true} /></FacebookShareButton>
        <TwitterIcon size={40} round={true} />
        <TelegramIcon size={40} round={true} />
        <LinkedinIcon size={40} round={true} />
       
        <ViberIcon size={40} round={true} />
        <EmailIcon size={40} round={true} />
        </div>
        </Box>
      </Modal>
        </div>
    );
};

export default ShareSocial;